'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import SubjectGlyph from '@/components/SubjectGlyph';
import KIW from '@/lib/kiw-data';
import { useSeen, useAnswers } from '@/lib/store';
import { questions, playable } from '@/lib/exams';

const unlocked = code => KIW.TABIEB_FOCUS.openIds.has(code);

export default function SubjectView({ id, locked }) {
  const s = KIW.KIW.find(x => x.id === id);
  const [seen] = useSeen();
  const [answers] = useAnswers();
  const count = c => c.stations.filter(st => seen[`${s.id}:${c[0]}:${st.code}`]).length;
  const completed = s.chapters.filter(c => count(c) === c.stations.length).length;
  const points = s.chapters.reduce((sum, c) => sum + c.stations.length, 0);
  const pool = questions.filter(q => q.subject === s.id && playable(q));
  const tried = pool.filter(q => answers[q.id]);

  return (
    <>
      <Header crumbs={[['/', 'Vakken'], [null, s.name]]} active="/" />
      <main className="listing" style={{ '--accent': s.color }}>
        <div className="listing-head">
          <div>
            <div className="eyebrow subject-eyebrow">
              <span className="mini-icon">
                <SubjectGlyph id={s.id} />
              </span>
              {s.name.toUpperCase()}
            </div>
            <h1>Kies een hoofdstuk</h1>
            <p>Drie hoofdstukken zijn geopend. Bij de andere staat een slotje; je kunt ze alvast in het overzicht zien.</p>
            <a className="outline-jump" href="#leerstofoverzicht">
              Bekijk het volledige leerstofoverzicht <span aria-hidden="true">↓</span>
            </a>
            {locked && (
              <p className="locked-notice" role="status">
                🔒 Hoofdstuk {locked} is nog gesloten. Kies een hoofdstuk zonder slotje.
              </p>
            )}
          </div>
          <div className="chapter-total">
            <strong>
              {completed} <span>/ {s.chapters.length}</span>
            </strong>
            <small>hoofdstukken verkend</small>
          </div>
        </div>

        <section className="chapter-list" aria-label="Hoofdstukken">
          {s.chapters.map((c, i) =>
            unlocked(c[0]) ? (
              <Link key={c[0]} className="chapter-row" href={`/leren/${s.id}/${c[0]}`}>
                <span className="chapter-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="chapter-title">
                  <small>HOOFDSTUK {c[0]} · OPEN</small>
                  <strong>{c[1]}</strong>
                  <span>{c[2]}</span>
                </span>
                <span className="chapter-progress">
                  <strong>
                    {count(c)} / {c.stations.length}
                  </strong>
                  <small>haltes ontdekt</small>
                </span>
                <span className="row-arrow" aria-hidden="true">↗</span>
              </Link>
            ) : (
              <div key={c[0]} className="chapter-row chapter-locked" aria-label={`Hoofdstuk ${c[0]} ${c[1]}, vergrendeld`}>
                <span className="chapter-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="chapter-title">
                  <small>HOOFDSTUK {c[0]} · BINNENKORT</small>
                  <strong>{c[1]}</strong>
                  <span>{c[2]}</span>
                </span>
                <span className="chapter-progress">
                  <strong>🔒 Gesloten</strong>
                  <small>nog niet beschikbaar</small>
                </span>
                <span className="lock-icon" aria-hidden="true">🔒</span>
              </div>
            )
          )}
        </section>

        <section className="practice-strip compact" aria-label={`Examenvragen ${s.name}`}>
          <div>
            <div className="eyebrow">ECHTE EXAMENVRAGEN · {s.name.toUpperCase()}</div>
            <h2>{pool.length} vragen uit vorige examens</h2>
            <p>Je hebt er al {tried.length} gemaakt. Oefen alleen {s.name.toLowerCase()} of kies een volledig examen.</p>
          </div>
          <div className="practice-actions">
            <Link className="next" href={`/oefenen?vak=${s.id}`}>
              Oefen {s.name.toLowerCase()} <span aria-hidden="true">→</span>
            </Link>
            <Link className="ghost-button" href={`/examens?vak=${s.id}`}>
              Examens {s.name.toLowerCase()}
            </Link>
          </div>
        </section>

        <section className="syllabus-overview" id="leerstofoverzicht" aria-label={`Leerstofoverzicht ${s.name}`}>
          <div className="syllabus-heading">
            <div>
              <span className="eyebrow">ALLE ONDERWERPEN</span>
              <h2>Leerstofoverzicht {s.name}</h2>
              <p>
                Een beknopt overzicht van de genummerde leerstofpunten. Klik op een hoofdstuk om de onderwerpen te zien.
                Het interactieve leerpad blijft alleen beschikbaar bij hoofdstukken zonder slotje.
              </p>
            </div>
            <span className="syllabus-total">{points} punten</span>
          </div>
          <div className="syllabus-accordion">
            {s.chapters.map(c => (
              <details key={c[0]} className="syllabus-chapter">
                <summary>
                  <span className="syllabus-chapter-code">{c[0]}</span>
                  <strong>{c[1]}</strong>
                  <span className="syllabus-count">{c.stations.length} leerstofpunten</span>
                  <span className="syllabus-toggle" aria-hidden="true">⌄</span>
                </summary>
                <ol className="syllabus-items">
                  {c.stations.map(item => (
                    <li key={item.code}>
                      <span className="syllabus-code">{item.code}</span>
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.lead}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
