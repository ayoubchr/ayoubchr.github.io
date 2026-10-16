'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import { exams, questions, playable, SUBJECTS, TRACKS, subjectById, trackName } from '@/lib/exams';
import { useAnswers } from '@/lib/store';

export default function ExamList({ initialSubject }) {
  const [subject, setSubject] = useState(initialSubject);
  const [track, setTrack] = useState('alle');
  const [answers] = useAnswers();
  const list = exams
    .filter(e => (subject === 'alle' || e.subject === subject) && (track === 'alle' || e.track === track))
    .sort((a, b) => b.year - a.year || a.subject.localeCompare(b.subject) || a.track.localeCompare(b.track));
  const years = [...new Set(list.map(e => e.year))];

  return (
    <>
      <Header crumbs={[['/', 'Vakken'], [null, 'Examens']]} active="/examens" />
      <main className="listing">
        <div className="listing-head">
          <div>
            <div className="eyebrow">ECHTE TOELATINGSEXAMENS</div>
            <h1>Kies een examen</h1>
            <p>
              Maak een volledig vakexamen zoals op de echte dag: met een timer en pas na het indienen je score. Je ziet
              daarna per vraag het juiste antwoord, met een link naar de uitgewerkte oplossing.
            </p>
          </div>
          <div className="chapter-total">
            <strong>{exams.length}</strong>
            <small>examens beschikbaar</small>
          </div>
        </div>

        <div className="filter-bar" role="group" aria-label="Filters">
          <div className="chip-group">
            {[['alle', 'Alle vakken'], ...SUBJECTS.map(s => [s.id, s.name])].map(([id, name]) => (
              <button key={id} className={`chip ${subject === id ? 'on' : ''}`} onClick={() => setSubject(id)} aria-pressed={subject === id}>
                {name}
              </button>
            ))}
          </div>
          <div className="chip-group">
            {[['alle', 'Alle richtingen'], ...TRACKS.map(t => [t.id, t.name])].map(([id, name]) => (
              <button key={id} className={`chip ${track === id ? 'on' : ''}`} onClick={() => setTrack(id)} aria-pressed={track === id}>
                {name}
              </button>
            ))}
          </div>
        </div>

        {years.map(year => (
          <section key={year} className="year-block">
            <h2>{year}</h2>
            <div className="exam-tiles">
              {list
                .filter(e => e.year === year)
                .map(e => {
                  const s = subjectById(e.subject);
                  const qs = questions.filter(q => q.exam === e.id && playable(q));
                  const done = qs.filter(q => answers[q.id]);
                  const right = done.filter(q => answers[q.id].correct).length;
                  return (
                    <Link key={e.id} href={`/examens/${e.id}`} className="exam-tile" style={{ '--accent': s.color }}>
                      <span className="exam-tile-subject">{s.name}</span>
                      <strong>{trackName(e.track)}</strong>
                      <small>
                        {qs.length} vragen{qs.length < e.questionCount ? ` (+${e.questionCount - qs.length} enkel als PDF)` : ''}
                      </small>
                      <span className="exam-tile-progress">{done.length ? `${right}/${done.length} juist` : 'Nog niet gemaakt'}</span>
                    </Link>
                  );
                })}
            </div>
          </section>
        ))}
        {!list.length && <p className="q-empty">Geen examens voor deze combinatie.</p>}
      </main>
    </>
  );
}
