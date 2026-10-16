'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Quiz from '@/components/Quiz';
import { questions, playable, SUBJECTS } from '@/lib/exams';
import { useAnswers } from '@/lib/store';

export default function Mistakes() {
  const [answers, setAnswers] = useAnswers();
  const [running, setRunning] = useState(null);
  const tried = questions.filter(q => playable(q) && answers[q.id]);
  const wrong = tried.filter(q => !answers[q.id].correct).sort((a, b) => answers[b.id].at - answers[a.id].at);

  return (
    <>
      <Header crumbs={[['/', 'Vakken'], [null, 'Mijn fouten']]} active="/fouten" />
      <main className="listing quiz-page">
        <div className="listing-head">
          <div>
            <div className="eyebrow">LEER UIT JE FOUTEN</div>
            <h1>Mijn fouten</h1>
            <p>Vragen waarop je laatste antwoord fout was. Beantwoord je ze juist, dan verdwijnen ze uit deze lijst.</p>
          </div>
          <div className="chapter-total">
            <strong>{wrong.length}</strong>
            <small>te herhalen</small>
          </div>
        </div>

        <section className="stat-grid" aria-label="Voortgang per vak">
          {SUBJECTS.map(s => {
            const t = tried.filter(q => q.subject === s.id);
            const r = t.filter(q => answers[q.id].correct).length;
            const total = questions.filter(q => q.subject === s.id && playable(q)).length;
            return (
              <div key={s.id} className="stat-card" style={{ '--accent': s.color }}>
                <span>{s.name}</span>
                <strong>{t.length ? Math.round((100 * r) / t.length) : 0}%</strong>
                <small>
                  {r} juist van {t.length} gemaakt · {total} in totaal
                </small>
                <span className="stat-bar">
                  <span style={{ width: `${(100 * t.length) / total}%` }} />
                </span>
              </div>
            );
          })}
        </section>

        {running ? (
          <Quiz key={running} questions={wrong.length ? wrong : []} mode="oefen" backHref="/fouten" />
        ) : wrong.length ? (
          <div className="practice-actions">
            <button className="next" onClick={() => setRunning(Date.now())}>
              Herhaal {wrong.length} {wrong.length === 1 ? 'fout' : 'fouten'} <span aria-hidden="true">→</span>
            </button>
            <button
              className="ghost-button"
              onClick={() => {
                if (confirm('Al je antwoorden op examenvragen wissen? Dit kan niet ongedaan worden.')) setAnswers({});
              }}
            >
              Wis mijn voortgang
            </button>
          </div>
        ) : (
          <div className="q-empty">
            <p>{tried.length ? 'Geen fouten om te herhalen. Goed bezig!' : 'Je hebt nog geen examenvragen gemaakt.'}</p>
            <Link className="next" href="/oefenen">
              Ga oefenen <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
