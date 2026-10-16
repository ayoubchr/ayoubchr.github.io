'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import SubjectGlyph from '@/components/SubjectGlyph';
import KIW from '@/lib/kiw-data';
import { useSeen, useAnswers } from '@/lib/store';
import { questions, playable, exams } from '@/lib/exams';

const data = KIW.KIW;
const total = data.reduce((n, s) => n + s.chapters.length, 0);

export default function Home() {
  const [seen] = useSeen();
  const [answers] = useAnswers();
  const count = (s, c) => c.stations.filter(st => seen[`${s.id}:${c[0]}:${st.code}`]).length;
  const completed = s => s.chapters.filter(c => count(s, c) === c.stations.length).length;
  const done = data.reduce((n, s) => n + completed(s), 0);
  const pool = questions.filter(playable);
  const tried = pool.filter(q => answers[q.id]);
  const right = tried.filter(q => answers[q.id].correct).length;

  return (
    <>
      <Header active="/" />
      <main className="home">
        <section className="home-intro">
          <div>
            <div className="eyebrow">✦ &nbsp; ONTDEK DE LEERSTOF</div>
            <h1>
              Vier vakken.
              <br />
              <em>Jouw leerpad.</em>
            </h1>
            <p>
              Verken de haltes en kernformules per hoofdstuk, en test jezelf daarna met {pool.length} echte
              vragen uit vorige toelatingsexamens, van 2018 tot 2026.
            </p>
          </div>
          <div className="total-card">
            <strong>
              {done}
              <span> / {total}</span>
            </strong>
            <small>hoofdstukken ontdekt</small>
          </div>
        </section>
        <section className="subject-grid" aria-label="Kies een vak">
          {data.map((s, i) => (
            <Link key={s.id} className="subject-card" style={{ '--accent': s.color, '--delay': `${i * 60}ms` }} href={`/leren/${s.id}`}>
              <span className="subject-top">
                <span className="subject-icon">
                  <SubjectGlyph id={s.id} />
                </span>
                <span className="subject-arrow">↗</span>
              </span>
              <span className="subject-bottom">
                <strong>{s.name}</strong>
                <span>{s.line}</span>
                <small>
                  {s.chapters.length} hoofdstukken · {s.chapters.reduce((n, c) => n + c.stations.length, 0)} haltes ·{' '}
                  {pool.filter(q => q.subject === s.id).length} examenvragen
                </small>
              </span>
              <span className="subject-meter" aria-hidden="true">
                <span style={{ width: `${(100 * completed(s)) / s.chapters.length}%` }} />
              </span>
            </Link>
          ))}
        </section>

        <section className="practice-strip" aria-label="Oefenen met echte examenvragen">
          <div>
            <div className="eyebrow">OEFEN MET ECHTE EXAMENS</div>
            <h2>Klaar voor het echte werk?</h2>
            <p>
              {exams.length} examens van arts, tandarts en dierenarts. Maak een volledig examen onder tijdsdruk, stel
              een eigen oefenreeks samen of herhaal de vragen die je fout had.
            </p>
          </div>
          <div className="practice-stats">
            <div>
              <strong>{tried.length}</strong>
              <small>vragen gemaakt</small>
            </div>
            <div>
              <strong>{tried.length ? Math.round((100 * right) / tried.length) : 0}%</strong>
              <small>juist</small>
            </div>
          </div>
          <div className="practice-actions">
            <Link className="next" href="/oefenen">
              Start een oefenreeks <span aria-hidden="true">→</span>
            </Link>
            <Link className="ghost-button" href="/examens">
              Kies een examen
            </Link>
          </div>
        </section>
        <p className="source-note">
          Gebaseerd op het officiële leerstofoverzicht KIW 2026. Examenvragen uit vorige toelatingsexamens, verzameld
          door Brenda Casteleyn (brendacasteleyn.be).
        </p>
      </main>
    </>
  );
}
