'use client';
import { useEffect, useMemo, useRef, useState } from 'react';

const KEY = 'tabieb2be-sorteer-v1';
const SUBJECTS = [
  ['wiskunde', 'Wiskunde', '#5947c9'],
  ['fysica', 'Fysica', '#087eac'],
  ['chemie', 'Chemie', '#c9592a'],
  ['biologie', 'Biologie', '#16916b'],
];
const subjectName = id => SUBJECTS.find(s => s[0] === id)?.[1] || id;
const subjectColor = id => SUBJECTS.find(s => s[0] === id)?.[2] || '#4f49d8';
const TRACK = { arts: 'Arts', tandarts: 'Tandarts', dierenarts: 'Dierenarts' };
// Bijzondere keuzes naast de lessen uit de planning.
const OTHER = 'andere-les';
const UNUSABLE = 'onbruikbaar';
const SWIPE_AT = 110;

const load = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}');
  } catch {
    return {};
  }
};
const save = value => {
  try {
    localStorage.setItem(KEY, JSON.stringify(value));
  } catch {}
};

function buildResult(items, decisions, lessons) {
  const byId = new Map(items.map(q => [q.id, q]));
  const groups = Object.fromEntries(lessons.map(l => [l.id, { les: l.title, vak: subjectName(l.subject), datum: l.date, vragen: [] }]));
  const extra = {
    [OTHER]: { les: 'Hoort bij een andere les (niet in planning)', vragen: [] },
    [UNUSABLE]: { les: 'Onbruikbare vraag', vragen: [] },
  };
  for (const [id, d] of Object.entries(decisions)) {
    const q = byId.get(id);
    if (!q) continue;
    const target = groups[d.lessonId] || extra[d.lessonId];
    if (!target) continue;
    target.vragen.push({
      id,
      vak: subjectName(d.subject || q.subject),
      examen: `${subjectName(q.subject)} ${q.year} ${TRACK[q.track]}`,
      vraag: q.number,
      voorstelKlopte: d.agreed,
    });
  }
  return {
    gemaakt: new Date().toISOString().slice(0, 10),
    beoordeeld: Object.keys(decisions).length,
    lessen: Object.values(groups),
    overig: Object.values(extra),
  };
}

function ChoiceSheet({ q, lessons, onPick, onCancel }) {
  const [subject, setSubject] = useState(q.subject);
  const options = lessons.filter(l => l.subject === subject);
  return (
    <div className="sheet-backdrop" onClick={onCancel}>
      <div className="sheet" role="dialog" aria-modal="true" aria-label="Kies de juiste les" onClick={e => e.stopPropagation()}>
        <div className="sheet-grip" />
        <h2>Waar hoort deze vraag bij?</h2>
        <p className="sheet-step">1. Vak</p>
        <div className="sheet-subjects">
          {SUBJECTS.map(([id, name, color]) => (
            <button key={id} className={subject === id ? 'on' : ''} style={{ '--c': color }} onClick={() => setSubject(id)}>
              {name}
            </button>
          ))}
        </div>
        <p className="sheet-step">2. Hoofdstuk</p>
        <div className="sheet-lessons">
          {options.map(l => (
            <button key={l.id} onClick={() => onPick(l.id, subject)} disabled={l.id === q.lessonId}>
              <strong>{l.title}</strong>
              <small>
                {new Date(l.date).toLocaleDateString('nl-BE', { weekday: 'short', day: 'numeric', month: 'short' })}
                {l.id === q.lessonId ? ' · huidig voorstel' : ''}
              </small>
            </button>
          ))}
          <button className="muted" onClick={() => onPick(OTHER, subject)}>
            <strong>Andere les</strong>
            <small>Onderwerp {subjectName(subject).toLowerCase()} dat niet in de planning staat</small>
          </button>
        </div>
        <button className="sheet-unusable" onClick={() => onPick(UNUSABLE, q.subject)}>
          Vraag is onbruikbaar (onleesbaar, figuur ontbreekt…)
        </button>
        <button className="sheet-cancel" onClick={onCancel}>
          Annuleer
        </button>
      </div>
    </div>
  );
}

function Card({ q, lessons, onSwipe, dragEnabled }) {
  const ref = useRef(null);
  const start = useRef(null);
  const [dx, setDx] = useState(0);
  const [leaving, setLeaving] = useState(0);
  const lesson = lessons.find(l => l.id === q.lessonId);

  useEffect(() => {
    setDx(0);
    setLeaving(0);
  }, [q.id]);

  const down = e => {
    if (!dragEnabled || e.button > 0) return;
    // Scrollen in de tekst blijft mogelijk: we nemen pas over bij horizontale beweging.
    start.current = { x: e.clientX, y: e.clientY, id: e.pointerId, active: false };
  };
  const move = e => {
    const s = start.current;
    if (!s) return;
    const x = e.clientX - s.x;
    const y = e.clientY - s.y;
    if (!s.active) {
      if (Math.abs(x) < 8 || Math.abs(y) > Math.abs(x)) return;
      s.active = true;
      ref.current?.setPointerCapture(s.id);
    }
    setDx(x);
  };
  const up = () => {
    const s = start.current;
    start.current = null;
    if (!s?.active) return;
    if (Math.abs(dx) > SWIPE_AT) fling(dx > 0 ? 1 : -1);
    else setDx(0);
  };
  const fling = dir => {
    setLeaving(dir);
    setTimeout(() => onSwipe(dir), 180);
  };

  // Knoppen en pijltjestoetsen gebruiken dezelfde animatie.
  useEffect(() => {
    if (!dragEnabled) return;
    const key = e => {
      if (e.key === 'ArrowRight') fling(1);
      if (e.key === 'ArrowLeft') fling(-1);
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  });

  const x = leaving ? leaving * 600 : dx;
  const tilt = Math.max(-1, Math.min(1, x / 300));
  return (
    <>
      <article
        ref={ref}
        className={`swipe-card ${start.current?.active ? 'dragging' : ''}`}
        style={{ transform: `translateX(${x}px) rotate(${tilt * 12}deg)`, '--c': subjectColor(q.subject) }}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
      >
        <span className="stamp yes" style={{ opacity: Math.max(0, tilt * 2) }}>KLOPT</span>
        <span className="stamp no" style={{ opacity: Math.max(0, -tilt * 2) }}>KLOPT NIET</span>
        <header className="card-lesson">
          <small>VOORSTEL</small>
          {lesson ? (
            <>
              <strong>{lesson.title}</strong>
              <span>
                {subjectName(lesson.subject)}
                {q.confidence && <em className={`conf ${q.confidence}`}>{{ high: 'zeker', medium: 'twijfel', low: 'gok' }[q.confidence]}</em>}
              </span>
            </>
          ) : (
            <>
              <strong>Geen les uit de planning</strong>
              <span>{subjectName(q.subject)} · rechts = klopt, hoort bij geen van deze lessen</span>
            </>
          )}
        </header>
        <div className="card-body">
          <p className="card-meta">
            {subjectName(q.subject)} {q.year} · {TRACK[q.track]} · vraag {q.number}
          </p>
          {q.garbled && <p className="card-warn">Bevat formules die niet leesbaar zijn omgezet.</p>}
          {q.stem.split(/\n{2,}/).map((p, i) => (
            <p key={i} className="card-stem">
              {p}
            </p>
          ))}
          <ol className="card-options">
            {q.options.map((o, i) => (
              <li key={i}>
                <b>{'ABCD'[i]}</b>
                <span>{o}</span>
              </li>
            ))}
          </ol>
        </div>
      </article>
      <div className="swipe-buttons">
        <button className="btn-no" onClick={() => fling(-1)} aria-label="Klopt niet, kies een andere les">
          ✗
        </button>
        <button className="btn-yes" onClick={() => fling(1)} aria-label="Klopt">
          ✓
        </button>
      </div>
    </>
  );
}

function Result({ items, decisions, lessons, onBack }) {
  const result = useMemo(() => buildResult(items, decisions, lessons), [items, decisions, lessons]);
  const json = JSON.stringify(result, null, 2);
  const [msg, setMsg] = useState('');
  const fileName = `tabieb2be-indeling-${result.gemaakt}.json`;

  const share = async () => {
    const file = new File([json], fileName, { type: 'application/json' });
    try {
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: 'Indeling examenvragen' });
        return;
      }
    } catch (e) {
      if (e.name === 'AbortError') return;
    }
    // Geen bestand delen mogelijk (bv. desktop): WhatsApp met de tekst, als die niet te lang is.
    if (json.length < 6000) {
      window.open(`https://wa.me/?text=${encodeURIComponent(json)}`, '_blank', 'noopener');
    } else {
      download();
      setMsg('Te groot voor een WhatsApp-bericht. Het bestand is gedownload: voeg het als document toe in WhatsApp.');
    }
  };
  const download = () => {
    const url = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
    const a = Object.assign(document.createElement('a'), { href: url, download: fileName });
    a.click();
    URL.revokeObjectURL(url);
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(json);
      setMsg('Gekopieerd.');
    } catch {
      setMsg('Kopiëren lukte niet.');
    }
  };

  return (
    <main className="sorter result">
      <h1>{result.beoordeeld >= items.length ? 'Klaar! 🎉' : 'Tussenstand'}</h1>
      <p>
        Je hebt {result.beoordeeld} vragen beoordeeld. Zo zijn ze verdeeld:
      </p>
      <ul className="result-list">
        {[...result.lessen, ...result.overig].map(g => (
          <li key={g.les}>
            <span>{g.les}</span>
            <b>{g.vragen.length}</b>
          </li>
        ))}
      </ul>
      <div className="result-actions">
        <button className="wa" onClick={share}>
          Deel via WhatsApp
        </button>
        <button onClick={download}>Download JSON</button>
        <button onClick={copy}>Kopieer</button>
      </div>
      {msg && <p className="result-msg">{msg}</p>}
      <details className="result-json">
        <summary>Bekijk JSON</summary>
        <pre>{json}</pre>
      </details>
      <button className="link" onClick={onBack}>
        ← Terug naar sorteren
      </button>
    </main>
  );
}

export default function Sorter({ items, lessons }) {
  const [decisions, setDecisions] = useState({});
  const [ready, setReady] = useState(false);
  const [filter, setFilter] = useState(null);
  const [choosing, setChoosing] = useState(null);
  const [history, setHistory] = useState([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setDecisions(load());
    setReady(true);
  }, []);

  const update = next => {
    setDecisions(next);
    save(next);
  };

  const pool = useMemo(() => (filter ? items.filter(q => filter === 'alle' || q.subject === filter) : []), [items, filter]);
  const todo = pool.filter(q => !decisions[q.id]);
  const current = todo[0];

  const decide = (q, lessonId, subject, agreed) => {
    setHistory(h => [...h, q.id]);
    update({ ...decisions, [q.id]: { lessonId: lessonId ?? 'geen-les', subject, agreed } });
  };

  const onSwipe = dir => {
    if (dir > 0) decide(current, current.lessonId || OTHER, current.subject, true);
    else setChoosing(current);
  };

  const undo = () => {
    const last = history.at(-1);
    if (!last) return;
    const next = { ...decisions };
    delete next[last];
    setHistory(h => h.slice(0, -1));
    update(next);
  };

  if (!ready) return <main className="sorter" />;

  if (showResult || (filter && !current)) {
    return <Result items={items} decisions={decisions} lessons={lessons} onBack={() => (current ? setShowResult(false) : setFilter(null))} />;
  }

  if (!filter) {
    const left = s => items.filter(q => (s === 'alle' || q.subject === s) && !decisions[q.id]).length;
    return (
      <main className="sorter start">
        <h1>Vragen sorteren</h1>
        <p>
          Je ziet telkens een examenvraag met bovenaan de les waar ze volgens ons bij hoort. Swipe naar <b>rechts</b> als dat
          klopt, naar <b>links</b> als het niet klopt. Dan kies je zelf de juiste les.
        </p>
        <div className="start-grid">
          {[['alle', 'Alle vakken', '#30396a'], ...SUBJECTS].map(([id, name, color]) => (
            <button key={id} style={{ '--c': color }} onClick={() => setFilter(id)} disabled={!left(id)}>
              <strong>{name}</strong>
              <small>{left(id) ? `${left(id)} te doen` : 'klaar'}</small>
            </button>
          ))}
        </div>
        <p className="start-progress">
          {Object.keys(decisions).length} van {items.length} vragen beoordeeld. Je voortgang wordt op dit toestel bewaard.
        </p>
        <div className="start-actions">
          {Object.keys(decisions).length > 0 && <button onClick={() => setShowResult(true)}>Bekijk en deel resultaat</button>}
          {Object.keys(decisions).length > 0 && (
            <button
              className="danger"
              onClick={() => confirm('Alle beoordelingen wissen? Dit kan niet ongedaan worden.') && update({})}
            >
              Opnieuw beginnen
            </button>
          )}
        </div>
      </main>
    );
  }

  const done = pool.length - todo.length;
  return (
    <main className="sorter">
      <div className="sorter-top">
        <button className="link" onClick={() => setFilter(null)}>
          ← Menu
        </button>
        <span>
          {done + 1} / {pool.length}
        </span>
        <button className="link" onClick={undo} disabled={!history.length}>
          ↶ Ongedaan
        </button>
      </div>
      <div className="sorter-bar">
        <span style={{ width: `${(100 * done) / pool.length}%` }} />
      </div>
      {/* Nieuwe key bij openen/sluiten van het menu: de weggeswipete kaart komt terug als je annuleert. */}
      <Card key={`${current.id}-${!!choosing}`} q={current} lessons={lessons} onSwipe={onSwipe} dragEnabled={!choosing} />
      <button className="link finish" onClick={() => setShowResult(true)}>
        Stoppen en resultaat delen
      </button>
      {choosing && (
        <ChoiceSheet
          q={choosing}
          lessons={lessons}
          onCancel={() => setChoosing(null)}
          onPick={(lessonId, subject) => {
            decide(choosing, lessonId, subject, false);
            setChoosing(null);
          }}
        />
      )}
    </main>
  );
}
