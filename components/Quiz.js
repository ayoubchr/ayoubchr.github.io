'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useAnswers, recordAnswer } from '@/lib/store';
import { examById, subjectById, trackName } from '@/lib/exams';

const LETTERS = ['A', 'B', 'C', 'D'];

// Officiële examens: 10 vragen per vak in ongeveer 30 minuten → 3 minuten per vraag.
const SECONDS_PER_QUESTION = 180;

const fmtTime = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

function Stem({ text }) {
  return (
    <div className="q-stem">
      {text.split(/\n{2,}/).map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>
  );
}

function SourceLinks({ q }) {
  const exam = examById(q.exam);
  return (
    <div className="q-sources">
      <a href={exam.pdf} target="_blank" rel="noopener noreferrer">
        Originele vraag (PDF) ↗
      </a>
      {exam.solutionPdf && (
        <a href={exam.solutionPdf} target="_blank" rel="noopener noreferrer">
          Uitgewerkte oplossing (PDF) ↗
        </a>
      )}
    </div>
  );
}

export function QuestionCard({ q, chosen, onChoose, reveal, index, total }) {
  const subject = subjectById(q.subject);
  return (
    <article className="q-card" style={{ '--accent': subject.color }}>
      <div className="q-meta">
        <span>
          VRAAG {index + 1} / {total}
        </span>
        <span>
          {subject.name.toUpperCase()} · {q.year} · {trackName(q.track).toUpperCase()} · VRAAG {q.number}
        </span>
      </div>
      {(q.figure || q.garbled) && (
        <p className="q-warning">
          {q.garbled
            ? 'Deze vraag bevat formules die niet als tekst leesbaar zijn. Open de originele PDF om ze correct te zien.'
            : 'Deze vraag verwijst mogelijk naar een figuur of tabel. Open de originele PDF als je die nodig hebt.'}
        </p>
      )}
      <Stem text={q.stem} />
      <ol className="q-options">
        {q.options.map((opt, i) => {
          const letter = LETTERS[i];
          const state = reveal ? (letter === q.answer ? 'correct' : letter === chosen ? 'wrong' : '') : letter === chosen ? 'chosen' : '';
          return (
            <li key={letter}>
              <button className={`q-option ${state}`} onClick={() => onChoose?.(letter)} disabled={reveal || !onChoose} aria-pressed={letter === chosen}>
                <span className="q-letter">{letter}</span>
                <span className="q-text">{opt}</span>
                {reveal && letter === q.answer && <span className="q-mark">✓</span>}
                {reveal && letter === chosen && letter !== q.answer && <span className="q-mark">✗</span>}
              </button>
            </li>
          );
        })}
      </ol>
      {reveal && (
        <div className={`q-feedback ${chosen === q.answer ? 'good' : 'bad'}`} role="status">
          <strong>{chosen === q.answer ? 'Juist!' : chosen ? `Niet juist. Het juiste antwoord is ${q.answer}.` : `Niet beantwoord. Het juiste antwoord is ${q.answer}.`}</strong>
          <span>Bekijk de uitgewerkte oplossing om te zien hoe je er stap voor stap komt.</span>
        </div>
      )}
      <SourceLinks q={q} />
    </article>
  );
}

/**
 * mode 'oefen': na elke vraag meteen feedback.
 * mode 'examen': timer, feedback pas na het indienen.
 */
export default function Quiz({ questions, mode = 'oefen', title, backHref = '/oefenen', onRestart }) {
  const [, setAnswers] = useAnswers();
  const [i, setI] = useState(0);
  const [picks, setPicks] = useState({});
  const [checked, setChecked] = useState({});
  const [finished, setFinished] = useState(false);
  const limit = questions.length * SECONDS_PER_QUESTION;
  const [left, setLeft] = useState(limit);

  useEffect(() => {
    if (mode !== 'examen' || finished) return;
    const t = setInterval(() => setLeft(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [mode, finished]);

  const finish = () => {
    if (mode === 'examen') questions.forEach(q => picks[q.id] && recordAnswer(setAnswers, q, picks[q.id]));
    setFinished(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (mode === 'examen' && left === 0 && !finished) finish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [left]);

  const score = useMemo(() => questions.filter(q => picks[q.id] === q.answer).length, [picks, questions]);

  if (!questions.length) {
    return (
      <div className="q-empty">
        <p>Geen vragen gevonden voor deze keuze.</p>
        <Link className="next" href={backHref}>
          Terug
        </Link>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((100 * score) / questions.length);
    return (
      <section className="q-results">
        <div className="q-score">
          <div>
            <div className="eyebrow">RESULTAAT{title ? ` · ${title.toUpperCase()}` : ''}</div>
            <h2>
              {score} / {questions.length} juist
            </h2>
            <p>
              {pct >= 70 ? 'Sterk werk. Bekijk de fouten nog even na.' : pct >= 50 ? 'Op de goede weg. Herhaal de fouten en probeer opnieuw.' : 'Elke fout is een les. Lees de uitwerkingen en probeer het nog eens.'}
              {mode === 'examen' && ` Tijd gebruikt: ${fmtTime(limit - left)}.`}
            </p>
          </div>
          <div className="q-score-ring" style={{ '--pct': pct }}>
            <strong>{pct}%</strong>
          </div>
        </div>
        <div className="practice-actions">
          {onRestart && (
            <button className="next" onClick={onRestart}>
              Nieuwe reeks <span aria-hidden="true">↻</span>
            </button>
          )}
          <Link className="ghost-button" href="/fouten">
            Herhaal mijn fouten
          </Link>
          <Link className="ghost-button" href={backHref}>
            Terug
          </Link>
        </div>
        <h3 className="q-review-title">Overzicht per vraag</h3>
        <div className="q-review">
          {questions.map((q, n) => (
            <QuestionCard key={q.id} q={q} chosen={picks[q.id]} reveal index={n} total={questions.length} />
          ))}
        </div>
      </section>
    );
  }

  const q = questions[i];
  const isChecked = mode === 'oefen' && checked[q.id];
  const choose = letter => setPicks(p => ({ ...p, [q.id]: letter }));
  const check = () => {
    recordAnswer(setAnswers, q, picks[q.id]);
    setChecked(c => ({ ...c, [q.id]: true }));
  };
  const answered = Object.keys(picks).length;

  return (
    <section className="q-run">
      <div className="q-toolbar">
        <div className="q-progress" aria-label={`${answered} van ${questions.length} beantwoord`}>
          {questions.map((x, n) => {
            const st = mode === 'oefen' && checked[x.id] ? (picks[x.id] === x.answer ? 'good' : 'bad') : picks[x.id] ? 'done' : '';
            return (
              <button key={x.id} className={`q-dot ${st} ${n === i ? 'current' : ''}`} onClick={() => setI(n)} aria-label={`Ga naar vraag ${n + 1}`}>
                {n + 1}
              </button>
            );
          })}
        </div>
        {mode === 'examen' && (
          <span className={`q-timer ${left < 120 ? 'low' : ''}`} aria-live="off">
            ⏱ {fmtTime(left)}
          </span>
        )}
      </div>

      <QuestionCard q={q} chosen={picks[q.id]} onChoose={isChecked ? null : choose} reveal={isChecked} index={i} total={questions.length} />

      <div className="q-nav">
        <button className="ghost-button" onClick={() => setI(n => n - 1)} disabled={i === 0}>
          ← Vorige
        </button>
        {mode === 'oefen' && !isChecked && (
          <button className="next" onClick={check} disabled={!picks[q.id]}>
            Controleer
          </button>
        )}
        {i < questions.length - 1 ? (
          <button className={mode === 'oefen' && !isChecked ? 'ghost-button' : 'next'} onClick={() => setI(n => n + 1)}>
            Volgende →
          </button>
        ) : (
          <button className="next" onClick={finish}>
            {mode === 'examen' ? `Indienen (${answered}/${questions.length})` : 'Bekijk resultaat'}
          </button>
        )}
      </div>
    </section>
  );
}
