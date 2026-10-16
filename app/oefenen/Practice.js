'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Quiz from '@/components/Quiz';
import { questions, playable, SUBJECTS, TRACKS } from '@/lib/exams';
import { useAnswers } from '@/lib/store';

const YEARS = [...new Set(questions.map(q => q.year))].sort();
const SIZES = [5, 10, 20, 40];

const shuffle = list => {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export default function Practice({ initialSubject }) {
  const [answers] = useAnswers();
  const [subjects, setSubjects] = useState(initialSubject ? [initialSubject] : SUBJECTS.map(s => s.id));
  const [tracks, setTracks] = useState(TRACKS.map(t => t.id));
  const [from, setFrom] = useState(YEARS[0]);
  const [size, setSize] = useState(10);
  const [onlyNew, setOnlyNew] = useState(false);
  const [mode, setMode] = useState('oefen');
  const [set, setSet] = useState(null);

  const toggle = (list, setList, id) => setList(list.includes(id) ? list.filter(x => x !== id) : [...list, id]);
  const pool = questions.filter(
    q => playable(q) && subjects.includes(q.subject) && tracks.includes(q.track) && q.year >= from && (!onlyNew || !answers[q.id])
  );
  const start = () => setSet(shuffle(pool).slice(0, size));

  return (
    <>
      <Header crumbs={[['/', 'Vakken'], [null, 'Oefenen']]} active="/oefenen" />
      <main className="listing quiz-page">
        <div className="listing-head">
          <div>
            <div className="eyebrow">STEL JE EIGEN REEKS SAMEN</div>
            <h1>Oefenen</h1>
            <p>Kies vakken, richting en periode. Je krijgt willekeurige vragen uit echte toelatingsexamens.</p>
          </div>
          <div className="chapter-total">
            <strong>{pool.length}</strong>
            <small>vragen passen bij je keuze</small>
          </div>
        </div>

        {set ? (
          <Quiz key={set.map(q => q.id).join()} questions={set} mode={mode} backHref="/oefenen" onRestart={start} />
        ) : (
          <section className="builder">
            <fieldset>
              <legend>Vakken</legend>
              <div className="chip-group">
                {SUBJECTS.map(s => (
                  <button
                    key={s.id}
                    className={`chip ${subjects.includes(s.id) ? 'on' : ''}`}
                    style={{ '--accent': s.color }}
                    onClick={() => toggle(subjects, setSubjects, s.id)}
                    aria-pressed={subjects.includes(s.id)}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend>Richting</legend>
              <div className="chip-group">
                {TRACKS.map(t => (
                  <button key={t.id} className={`chip ${tracks.includes(t.id) ? 'on' : ''}`} onClick={() => toggle(tracks, setTracks, t.id)} aria-pressed={tracks.includes(t.id)}>
                    {t.name}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend>Examens vanaf</legend>
              <div className="chip-group">
                {YEARS.map(y => (
                  <button key={y} className={`chip ${from === y ? 'on' : ''}`} onClick={() => setFrom(y)} aria-pressed={from === y}>
                    {y}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend>Aantal vragen</legend>
              <div className="chip-group">
                {SIZES.map(n => (
                  <button key={n} className={`chip ${size === n ? 'on' : ''}`} onClick={() => setSize(n)} aria-pressed={size === n}>
                    {n}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend>Werkwijze</legend>
              <div className="chip-group">
                <button className={`chip ${mode === 'oefen' ? 'on' : ''}`} onClick={() => setMode('oefen')} aria-pressed={mode === 'oefen'}>
                  Meteen feedback
                </button>
                <button className={`chip ${mode === 'examen' ? 'on' : ''}`} onClick={() => setMode('examen')} aria-pressed={mode === 'examen'}>
                  Met timer, score op het einde
                </button>
              </div>
              <label className="check">
                <input type="checkbox" checked={onlyNew} onChange={e => setOnlyNew(e.target.checked)} /> Alleen vragen die ik nog niet maakte
              </label>
            </fieldset>
            <button className="next start" onClick={start} disabled={!pool.length}>
              Start met {Math.min(size, pool.length)} vragen <span aria-hidden="true">→</span>
            </button>
          </section>
        )}
      </main>
    </>
  );
}
