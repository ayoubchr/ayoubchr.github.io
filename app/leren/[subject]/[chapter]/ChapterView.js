'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import KIW from '@/lib/kiw-data';
import { formatLearningText as fmt, renderMatrix, html } from '@/lib/format';
import { useSeen } from '@/lib/store';

const focus = KIW.TABIEB_FOCUS;

function FormulaPanel({ c }) {
  const f = focus.chapters[c[0]];
  if (!f) return null;
  const cards = KIW.TABIEB_FORMULA_CARDS[c[0]] || [];
  const facts =
    c[0] === '2.3'
      ? '<b>Constanten op het blad:</b> k = 9 · 10<sup>9</sup> N·m<sup>2</sup>/C<sup>2</sup> &nbsp; · &nbsp; e = 1,60 · 10<sup>−19</sup> C &nbsp; · &nbsp; r in meter, Q en q in coulomb.'
      : c[0] === '1.1'
      ? '<b>Ook op het blad:</b> log<sub>10</sub>(3) ≈ 0,48 en e ≈ 2,72. &nbsp; <b>Zelf kennen:</b> y = kx (recht evenredig), y = k/x (omgekeerd evenredig, x ≠ 0).'
      : '<b>Gebruik de officiële oplosbaarheidstabel:</b> nitraten lossen goed op; AgCl en BaSO<sub>4</sub> zijn slecht oplosbaar. Controleer altijd de uitzonderingen.';
  return (
    <section className="formula-guide" aria-label="Geïllustreerd formularium en basisregels">
      <div className="formula-top">
        <div>
          <span className="eyebrow">BEKIJK HET FORMULARIUM</span>
          <h2>Zie wat de formule betekent</h2>
          <p>{f.guide}</p>
        </div>
        <a href={c[0] === '3.1' ? focus.urls.chemistry : focus.urls.formula} target="_blank" rel="noopener noreferrer">
          Open officiële referentie ↗
        </a>
      </div>
      <div className="formula-visual-grid">
        {cards.map(card => (
          <figure key={card.title} className="formula-visual-card">
            <div className="formula-card-head">
              <span className={`formula-tag ${card.type === 'OP HET BLAD' ? 'given' : 'learn'}`}>{card.type}</span>
              <h3>{card.title}</h3>
            </div>
            <div dangerouslySetInnerHTML={html(card.svg)} />
            <div className="visual-equation" dangerouslySetInnerHTML={html(card.formula)} />
            <figcaption>{card.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="formula-facts" dangerouslySetInnerHTML={html(facts)} />
    </section>
  );
}

function ExamPanel({ c }) {
  const f = focus.chapters[c[0]];
  if (!f) return null;
  return (
    <section className="exam-panel" id="examenvoorbeelden" aria-label="Drie zelfgemaakte meerkeuzeoefeningen">
      <div className="eyebrow">OEFEN ZELF · MEERKEUZE</div>
      <h2>Drie zelfgemaakte vragen</h2>
      <p>Kies eerst zelf A, B, C of D. Open daarna per vraag de uitwerking en het juiste antwoord.</p>
      <div className="exam-grid">
        {f.practice.map((e, i) => (
          <article key={i} className="exam-card">
            <div className="exam-card-top">
              <span>
                VRAAG {i + 1} · {e.topic}
              </span>
              <span>OEFENING</span>
            </div>
            <h3 dangerouslySetInnerHTML={html(fmt(e.question))} />
            {e.matrices && (
              <div
                className="matrix-prompt"
                aria-label="Gegeven matrices"
                dangerouslySetInnerHTML={html(e.matrices.map(([name, rows]) => `<div><b>${name} =</b>${renderMatrix(rows, name)}</div>`).join(''))}
              />
            )}
            <ol className="mcq-options" type="A">
              {e.choices.map((option, j) => (
                <li key={j} dangerouslySetInnerHTML={html(fmt(option))} />
              ))}
            </ol>
            <details className="answer-reveal">
              <summary>
                Toon uitwerking en antwoord <span aria-hidden="true">↓</span>
              </summary>
              <div className="exam-solution">
                <strong>Stap voor stap</strong>
                <ol>
                  {e.steps.map((step, j) => (
                    <li key={j} dangerouslySetInnerHTML={html(fmt(step))} />
                  ))}
                </ol>
                <div className="mcq-answer">
                  <span>JUIST ANTWOORD</span>
                  <strong dangerouslySetInnerHTML={html(`${e.correct}. ${fmt(e.choices[e.correct.charCodeAt(0) - 65])}`)} />
                </div>
              </div>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ChapterView({ subjectId, chapterId }) {
  const s = KIW.KIW.find(x => x.id === subjectId);
  const c = s.chapters.find(x => x[0] === chapterId);
  const [seen, setSeen, storageOk] = useSeen();
  const [selection, setSelection] = useState(0);
  const stepsRef = useRef(null);
  const keyOf = i => `${s.id}:${c[0]}:${c.stations[i].code}`;
  const visited = i => !!seen[keyOf(i)];
  const v = c.stations.filter((_, i) => visited(i)).length;
  const n = Math.min(selection, c.stations.length - 1);
  const p = c.stations[n];

  const select = i => {
    setSelection(i);
    setSeen(prev => ({ ...prev, [keyOf(i)]: true }));
    requestAnimationFrame(() => {
      const active = stepsRef.current?.querySelector(`.step[data-node="${i}"]`);
      active?.focus({ preventScroll: true });
      active?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    });
  };

  return (
    <>
      <Header crumbs={[['/', 'Vakken'], [`/leren/${s.id}`, s.name], [null, `${c[0]} ${c[1]}`]]} active="/" />
      <main className="explore" style={{ '--accent': s.color }}>
        <section className="explore-heading">
          <div>
            <div className="eyebrow">
              {s.name.toUpperCase()} &nbsp; / &nbsp; HOOFDSTUK {c[0]}
            </div>
            <h1>{c[1]}</h1>
            <p>{focus.chapters[c[0]]?.subtitle || c[2]} Tik op een halte om stap voor stap verder te lezen.</p>
          </div>
          <div className="chapter-badge">
            <strong>
              {v} <span>/ {c.stations.length}</span>
            </strong>
            <small>haltes ontdekt</small>
          </div>
        </section>

        <div className="chapter-art">
          <div className="art-copy">
            <span>KIJK EERST EVEN</span>
            <strong>Zo ziet dit idee eruit</strong>
            <p>Gebruik het schema als kapstok terwijl je de haltes doorloopt.</p>
          </div>
          <div className="concept-wrap" dangerouslySetInnerHTML={html(KIW.KIW_DIAGRAM(c[0]))} />
        </div>

        <FormulaPanel c={c} />

        <div className="learn-layout">
          <nav className="route-list" aria-label={`Leerstofpunten in ${c[1]}`}>
            <div className="route-list-head">
              <span>DE HALTES</span>
              <span>{c.stations.length} onderwerpen</span>
            </div>
            <div className="route-steps" ref={stepsRef}>
              {c.stations.map((item, i) => (
                <button
                  key={item.code}
                  className={`step ${i === n ? 'active' : ''} ${visited(i) ? 'visited' : ''}`}
                  data-node={i}
                  aria-current={i === n ? 'step' : 'false'}
                  onClick={() => select(i)}
                >
                  <span className="step-number">{item.code}</span>
                  <span className="step-name">{item.title}</span>
                  <span className="step-check" aria-label={visited(i) ? 'Ontdekt' : 'Nog te ontdekken'}>
                    {visited(i) ? '✓' : '○'}
                  </span>
                </button>
              ))}
            </div>
          </nav>

          <article className={`detail ${s.id === 'biologie' ? 'bio-detail' : ''}`} aria-live="polite">
            <div className="detail-eyebrow">
              <span className="detail-dot" /> HALTE {String(n + 1).padStart(2, '0')} VAN {String(c.stations.length).padStart(2, '0')} · {p.code}
            </div>
            <h2>{p.title}</h2>
            <p className="core-idea" dangerouslySetInnerHTML={html(fmt(p.lead))} />
            <div className="detail-divider" />
            <div className="detail-section">
              <span className="section-symbol">↳</span>
              <div>
                <h3>Hoe werkt het?</h3>
                <p dangerouslySetInnerHTML={html(fmt(p.detail))} />
              </div>
            </div>
            <div className="detail-section example-inside">
              <span className="section-symbol">✦</span>
              <div>
                <h3>Bekijk een voorbeeld</h3>
                <p dangerouslySetInnerHTML={html(fmt(p.example))} />
              </div>
            </div>
            {p.focusMore && (
              <section className="focus-extension" aria-label="Extra begripsuitleg">
                <h3>Begrip in de diepte</h3>
                <p dangerouslySetInnerHTML={html(fmt(p.focusMore))} />
                <h3>Zo pas je het toe</h3>
                <p dangerouslySetInnerHTML={html(fmt(p.focusApplied))} />
              </section>
            )}
            {s.id === 'biologie' && p.bioMore && (
              <section className="bio-extension" aria-label="Biologie in beeld">
                <div className="bio-extension-heading">
                  <span>◌</span>
                  <h3>Kijk wat er gebeurt</h3>
                </div>
                <figure className="bio-figure">
                  <div dangerouslySetInnerHTML={html(KIW.BIO_DIAGRAM(p.code))} />
                  <figcaption>{p.bioCaption}</figcaption>
                </figure>
                <div className="bio-more">
                  <h3>Een stap verder</h3>
                  <p dangerouslySetInnerHTML={html(p.bioMore)} />
                </div>
                <div className="bio-worked">
                  <h3>Uitgewerkt voorbeeld</h3>
                  <p dangerouslySetInnerHTML={html(p.bioWorked)} />
                </div>
              </section>
            )}
            <div className="detail-actions">
              {n < c.stations.length - 1 ? (
                <button className="next" onClick={() => select(n + 1)}>
                  Volgende halte <span aria-hidden="true">→</span>
                </button>
              ) : (
                <a className="next" href="#oefening">
                  Naar de oefening <span aria-hidden="true">↓</span>
                </a>
              )}
              <span className="save-status">
                {v === c.stations.length
                  ? 'Alle haltes ontdekt ✦'
                  : storageOk
                  ? 'Je voortgang wordt op dit toestel bewaard'
                  : 'Je voortgang blijft tijdens dit bezoek zichtbaar'}
              </span>
            </div>
          </article>
        </div>

        <div className="below-grid">
          <aside className="historical">
            <div className="eyebrow">✦ &nbsp; WETENSCHAP IN BEELD</div>
            <h3>{c.person[0]}</h3>
            <p>{c.person[1]}</p>
          </aside>
          <section className="worked-example" id="oefening">
            <div className="eyebrow">PROBEER HET ZELF · {c[0]}</div>
            <h2>Opwarming: een kleine oefening</h2>
            <p dangerouslySetInnerHTML={html(c.exercise[0])} />
            <details>
              <summary>
                Bekijk de uitwerking <span aria-hidden="true">↓</span>
              </summary>
              <div className="solution">
                <strong>Stap voor stap</strong>
                <p dangerouslySetInnerHTML={html(c.exercise[1])} />
                <strong>Antwoord</strong>
                <p dangerouslySetInnerHTML={html(c.exercise[2])} />
              </div>
            </details>
          </section>
        </div>

        <ExamPanel c={c} />

        <section className="practice-strip compact" aria-label="Verder met echte examenvragen">
          <div>
            <div className="eyebrow">VOLGENDE STAP</div>
            <h2>Nu op examenniveau</h2>
            <p>Test wat je net zag met echte vragen uit vorige toelatingsexamens {s.name.toLowerCase()}.</p>
          </div>
          <div className="practice-actions">
            <Link className="next" href={`/oefenen?vak=${s.id}`}>
              Oefen met examenvragen <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <div className="below">
          <p>Deze ontdekroute maakt de leerstof herkenbaar. In de les volgen extra uitleg en oefeningen op examenniveau.</p>
          <Link className="backlink" href={`/leren/${s.id}`}>
            ← Terug naar {s.name}
          </Link>
        </div>
      </main>
    </>
  );
}
