'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const API = '/api/aanwezigheden';
const STATUS = {
  aanwezig: { short: 'A', label: 'Aanwezig', icon: '✓' },
  'te laat': { short: 'L', label: 'Te laat', icon: '◷' },
  afwezig: { short: 'X', label: 'Afwezig', icon: '✗' },
  gewettigd: { short: 'G', label: 'Gewettigd', icon: '✉' },
};
const ORDER = ['aanwezig', 'te laat', 'afwezig', 'gewettigd'];
const SUBJECTS = [
  ['wiskunde', 'Wiskunde'],
  ['fysica', 'Fysica'],
  ['chemie', 'Chemie'],
  ['biologie', 'Biologie'],
  ['', 'Andere'],
];
const TRACKS = ['', 'arts', 'tandarts', 'dierenarts'];
const today = () => new Date().toLocaleDateString('sv-SE');
const fmtDate = d => new Date(`${d}T12:00`).toLocaleDateString('nl-BE', { weekday: 'short', day: 'numeric', month: 'short' });

async function call(body) {
  const res = await fetch(API, body ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } : {});
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw Object.assign(new Error(data.error || 'Er ging iets mis'), { status: res.status });
  return data;
}

function Login({ onDone }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const submit = async e => {
    e.preventDefault();
    setBusy(true);
    setError('');
    const res = await fetch(`${API}/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (res.ok) onDone();
    else setError(data.error || 'Aanmelden lukte niet');
  };
  return (
    <form className="att-login" onSubmit={submit}>
      <h1>Aanwezigheden</h1>
      <p>Deze pagina is alleen voor begeleiders. Vul het wachtwoord in.</p>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Wachtwoord" autoComplete="current-password" autoFocus />
      {error && <p className="att-error">{error}</p>}
      <button className="next" disabled={busy || !password}>
        {busy ? 'Even geduld…' : 'Aanmelden'}
      </button>
    </form>
  );
}

function TakeAttendance({ data, sessionId, setSessionId, onMark, saving }) {
  const session = data.sessions.find(s => s.id === sessionId);
  const students = data.students.filter(s => s.active);
  const marks = data.marks[sessionId] || {};
  const counts = ORDER.map(st => [st, students.filter(s => marks[s.id] === st).length]);
  const open = students.filter(s => !marks[s.id]);

  return (
    <section className="att-take">
      <div className="att-session-bar">
        <label>
          <span>Les</span>
          <select value={sessionId || ''} onChange={e => setSessionId(e.target.value)}>
            {data.sessions.map(s => (
              <option key={s.id} value={s.id}>
                {fmtDate(s.date)} · {s.title}
              </option>
            ))}
          </select>
        </label>
        <div className="att-counts" aria-live="polite">
          {counts.map(([st, n]) => (
            <span key={st} className={`chip-${st.replace(' ', '-')}`}>
              {STATUS[st].icon} {n}
            </span>
          ))}
          <span className="chip-open">○ {open.length}</span>
        </div>
      </div>

      {session && students.length > 0 && (
        <div className="att-bulk">
          <button onClick={() => onMark(Object.fromEntries(open.map(s => [s.id, 'aanwezig'])))} disabled={!open.length}>
            Rest op aanwezig ({open.length})
          </button>
          <span className={`att-save ${saving}`}>{{ idle: '', busy: 'Opslaan…', ok: data.demo ? 'Opgeslagen (demo) ✓' : 'Opgeslagen in Sheet ✓', error: 'Opslaan mislukt' }[saving]}</span>
        </div>
      )}

      {!students.length ? (
        <p className="att-empty">Nog geen leerlingen. Voeg ze toe in het tabblad Leerlingen.</p>
      ) : (
        <ul className="att-list">
          {students.map(s => {
            const current = marks[s.id];
            return (
              <li key={s.id} className={current ? `has-${current.replace(' ', '-')}` : ''}>
                <div className="att-name">
                  <strong>{s.name}</strong>
                  {s.track && <small>{s.track}</small>}
                </div>
                <div className="att-buttons" role="radiogroup" aria-label={`Status van ${s.name}`}>
                  {ORDER.map(st => (
                    <button
                      key={st}
                      role="radio"
                      aria-checked={current === st}
                      className={`st-${st.replace(' ', '-')} ${current === st ? 'on' : ''}`}
                      onClick={() => onMark({ [s.id]: current === st ? '' : st })}
                      title={STATUS[st].label}
                    >
                      <span aria-hidden="true">{STATUS[st].icon}</span>
                      <em>{STATUS[st].label}</em>
                    </button>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

function Students({ data, run }) {
  const [names, setNames] = useState('');
  const [track, setTrack] = useState('');
  const [editing, setEditing] = useState(null);
  const [showInactive, setShowInactive] = useState(false);
  const list = data.students.filter(s => showInactive || s.active).sort((a, b) => a.name.localeCompare(b.name));
  const add = async e => {
    e.preventDefault();
    const rows = names.split(/\n|;/).map(n => n.trim()).filter(Boolean);
    if (!rows.length) return;
    if (await run({ action: 'addStudents', students: rows.map(name => ({ name, track })) })) setNames('');
  };
  return (
    <section className="att-students">
      <form className="att-card" onSubmit={add}>
        <h2>Leerlingen toevoegen</h2>
        <p>Eén naam per regel. Je kunt ook een kolom namen uit Excel of Sheets plakken.</p>
        <textarea value={names} onChange={e => setNames(e.target.value)} rows={4} placeholder={'Voornaam Achternaam\nVoornaam Achternaam'} />
        <div className="att-row">
          <select value={track} onChange={e => setTrack(e.target.value)} aria-label="Richting">
            {TRACKS.map(t => (
              <option key={t} value={t}>
                {t ? t[0].toUpperCase() + t.slice(1) : 'Richting (optioneel)'}
              </option>
            ))}
          </select>
          <button className="next" disabled={!names.trim()}>
            Toevoegen
          </button>
        </div>
      </form>

      <div className="att-card">
        <div className="att-row between">
          <h2>{data.students.filter(s => s.active).length} actieve leerlingen</h2>
          <label className="att-check">
            <input type="checkbox" checked={showInactive} onChange={e => setShowInactive(e.target.checked)} /> Toon gestopte leerlingen
          </label>
        </div>
        <ul className="att-student-list">
          {list.map(s =>
            editing?.id === s.id ? (
              <li key={s.id} className="editing">
                <input value={editing.name} onChange={e => setEditing({ ...editing, name: e.target.value })} aria-label="Naam" />
                <select value={editing.track} onChange={e => setEditing({ ...editing, track: e.target.value })} aria-label="Richting">
                  {TRACKS.map(t => (
                    <option key={t} value={t}>
                      {t || '—'}
                    </option>
                  ))}
                </select>
                <button
                  className="next"
                  onClick={async () => (await run({ action: 'updateStudent', id: s.id, fields: { name: editing.name, track: editing.track } })) && setEditing(null)}
                  disabled={!editing.name.trim()}
                >
                  Bewaar
                </button>
                <button className="ghost-button" onClick={() => setEditing(null)}>
                  Annuleer
                </button>
              </li>
            ) : (
              <li key={s.id} className={s.active ? '' : 'inactive'}>
                <span>
                  <strong>{s.name}</strong>
                  {s.track && <small>{s.track}</small>}
                </span>
                <span className="att-actions">
                  <button className="ghost-button" onClick={() => setEditing({ id: s.id, name: s.name, track: s.track })}>
                    Wijzig
                  </button>
                  <button className="ghost-button" onClick={() => run({ action: 'updateStudent', id: s.id, fields: { active: !s.active } })}>
                    {s.active ? 'Gestopt' : 'Terug actief'}
                  </button>
                </span>
              </li>
            )
          )}
        </ul>
        <p className="att-hint">Gestopte leerlingen verdwijnen uit de aanwezigheidslijst, maar hun geschiedenis blijft in de Sheet.</p>
      </div>
    </section>
  );
}

function Overview({ data, openSession }) {
  const [showAll, setShowAll] = useState(false);
  const past = data.sessions.filter(s => s.date <= today());
  const sessions = showAll ? data.sessions : past;
  const rows = data.students
    .filter(s => s.active)
    .map(s => {
      const c = Object.fromEntries(ORDER.map(st => [st, 0]));
      for (const sess of data.sessions) {
        const st = data.marks[sess.id]?.[s.id];
        if (st) c[st]++;
      }
      const total = ORDER.reduce((n, st) => n + c[st], 0);
      return { ...s, c, total, pct: total ? Math.round((100 * (c.aanwezig + c['te laat'])) / total) : null };
    })
    .sort((a, b) => (a.pct ?? 101) - (b.pct ?? 101) || a.name.localeCompare(b.name));

  return (
    <section className="att-overview">
      <div className="att-summary">
        {rows.map(r => (
          <article key={r.id} className={`att-sum-card ${r.pct !== null && r.pct < 75 ? 'warn' : ''}`}>
            <div>
              <strong>{r.name}</strong>
              <small>
                {r.total} van {past.length} lessen geregistreerd
              </small>
            </div>
            <span className="att-pct">{r.pct === null ? '—' : `${r.pct}%`}</span>
            <div className="att-mini">
              {ORDER.map(st => (
                <span key={st} className={`chip-${st.replace(' ', '-')}`} title={STATUS[st].label}>
                  {STATUS[st].icon} {r.c[st]}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="att-grid-head">
        <h2>Per les</h2>
        <label className="att-check">
          <input type="checkbox" checked={showAll} onChange={e => setShowAll(e.target.checked)} /> Toon ook toekomstige lessen
        </label>
      </div>
      <div className="att-grid-wrap">
        <table className="att-grid">
          <thead>
            <tr>
              <th scope="col">Leerling</th>
              {sessions.map(s => (
                <th key={s.id} scope="col">
                  <button onClick={() => openSession(s.id)} title={`${s.title}: open om in te vullen`}>
                    <span>{fmtDate(s.date)}</span>
                    <small>{s.title}</small>
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id}>
                <th scope="row">{r.name}</th>
                {sessions.map(s => {
                  const st = data.marks[s.id]?.[r.id];
                  return (
                    <td key={s.id} className={st ? `cell-${st.replace(' ', '-')}` : ''} title={st ? STATUS[st].label : 'Niet ingevuld'}>
                      {st ? STATUS[st].short : ''}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="att-hint">A = aanwezig · L = te laat · X = afwezig · G = gewettigd afwezig. Te laat telt mee als aanwezig in het percentage.</p>
    </section>
  );
}

function NewSession({ run, onClose }) {
  const [date, setDate] = useState(today());
  const [subject, setSubject] = useState('wiskunde');
  const [title, setTitle] = useState('');
  const submit = async e => {
    e.preventDefault();
    if (await run({ action: 'addSession', date, subject, title })) onClose(true);
  };
  return (
    <div className="att-modal" onClick={() => onClose(false)}>
      <form className="att-card" onClick={e => e.stopPropagation()} onSubmit={submit}>
        <h2>Nieuwe les</h2>
        <label>
          <span>Datum</span>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
        </label>
        <label>
          <span>Vak</span>
          <select value={subject} onChange={e => setSubject(e.target.value)}>
            {SUBJECTS.map(([id, name]) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Titel</span>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="bv. Inhaalles algebra" required />
        </label>
        <div className="att-row">
          <button className="next" disabled={!title.trim()}>
            Les toevoegen
          </button>
          <button type="button" className="ghost-button" onClick={() => onClose(false)}>
            Annuleer
          </button>
        </div>
      </form>
    </div>
  );
}

export default function Attendance() {
  const [state, setState] = useState('loading');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [tab, setTab] = useState('les');
  const [sessionId, setSessionId] = useState(null);
  const [saving, setSaving] = useState('idle');
  const [newSession, setNewSession] = useState(false);
  const pending = useRef({});
  const timer = useRef(null);

  const load = useCallback(async () => {
    try {
      const d = await call();
      setData(d);
      setState('ready');
      // Standaard: de les van vandaag, anders de laatste voorbije les, anders de eerste.
      setSessionId(prev => {
        if (prev && d.sessions.some(s => s.id === prev)) return prev;
        const past = d.sessions.filter(s => s.date <= today());
        return (d.sessions.find(s => s.date === today()) || past.at(-1) || d.sessions[0])?.id || null;
      });
    } catch (e) {
      if (e.status === 401) setState('login');
      else {
        setError(e.message);
        setState('error');
      }
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  // Algemene actie: stuurt naar de Sheet en neemt de verse stand over.
  const run = async body => {
    setError('');
    try {
      setData(await call(body));
      return true;
    } catch (e) {
      setError(e.message);
      return false;
    }
  };

  // Aanwezigheden: meteen zichtbaar, gebundeld opgeslagen zodat snel tikken één schrijfactie wordt.
  const flush = async sid => {
    const changes = pending.current;
    pending.current = {};
    setSaving('busy');
    try {
      await call({ action: 'setMarks', sessionId: sid, changes });
      setSaving('ok');
    } catch (e) {
      setSaving('error');
      setError(`${e.message}. Vernieuw de pagina en probeer opnieuw.`);
    }
  };
  const onMark = changes => {
    setData(d => {
      const m = { ...(d.marks[sessionId] || {}) };
      for (const [id, st] of Object.entries(changes)) st ? (m[id] = st) : delete m[id];
      return { ...d, marks: { ...d.marks, [sessionId]: m } };
    });
    pending.current = { ...pending.current, ...changes };
    setSaving('busy');
    clearTimeout(timer.current);
    const sid = sessionId;
    timer.current = setTimeout(() => flush(sid), 700);
  };
  const switchSession = id => {
    if (Object.keys(pending.current).length) {
      clearTimeout(timer.current);
      flush(sessionId);
    }
    setSessionId(id);
    setSaving('idle');
  };

  // Niet-opgeslagen wijzigingen nog wegschrijven als de pagina sluit.
  useEffect(() => {
    const warn = e => {
      if (Object.keys(pending.current).length) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, []);

  const logout = async () => {
    await fetch(`${API}/login`, { method: 'DELETE' });
    setState('login');
  };

  const tabs = useMemo(
    () => [
      ['les', 'Aanwezigheid'],
      ['leerlingen', 'Leerlingen'],
      ['overzicht', 'Overzicht'],
    ],
    []
  );

  if (state === 'loading') return <main className="listing att"><p className="att-empty">Laden…</p></main>;
  if (state === 'login')
    return (
      <main className="listing att">
        <Login onDone={load} />
      </main>
    );
  if (state === 'error')
    return (
      <main className="listing att">
        <div className="att-card">
          <h2>Kon de Google Sheet niet lezen</h2>
          <p className="att-error">{error}</p>
          <button className="next" onClick={load}>
            Opnieuw proberen
          </button>
        </div>
      </main>
    );

  return (
    <main className="listing att">
      <div className="att-head">
        <div>
          <div className="eyebrow">BEGELEIDERS</div>
          <h1>Aanwezigheden</h1>
        </div>
        <div className="att-head-actions">
          <button className="ghost-button" onClick={() => setNewSession(true)}>
            + Les
          </button>
          {data.sheetUrl && (
            <a className="ghost-button" href={data.sheetUrl} target="_blank" rel="noopener noreferrer">
              Open Google Sheet ↗
            </a>
          )}
          <button className="ghost-button" onClick={load} title="Haal de laatste stand uit de Sheet">
            ↻
          </button>
          {!data.demo && (
            <button
              className="ghost-button"
              onClick={() => run({ action: 'setup' })}
              title="Maakt ontbrekende tabbladen, koppen, geplande lessen en overzichtsformules aan. Bestaande gegevens blijven staan."
            >
              Sheet inrichten
            </button>
          )}
          {!data.demo && (
            <button className="ghost-button" onClick={logout}>
              Afmelden
            </button>
          )}
        </div>
      </div>

      {data.demo && (
        <p className="att-demo">
          Demo-modus: er is nog geen Google Sheet gekoppeld. Wijzigingen blijven alleen tot de server herstart. Zie{' '}
          <code>AANWEZIGHEDEN.md</code> om de koppeling in te stellen.
        </p>
      )}
      {error && (
        <p className="att-error" role="alert">
          {error}
        </p>
      )}

      <nav className="att-tabs" role="tablist">
        {tabs.map(([id, label]) => (
          <button key={id} role="tab" aria-selected={tab === id} className={tab === id ? 'on' : ''} onClick={() => setTab(id)}>
            {label}
          </button>
        ))}
      </nav>

      {tab === 'les' && <TakeAttendance data={data} sessionId={sessionId} setSessionId={switchSession} onMark={onMark} saving={saving} />}
      {tab === 'leerlingen' && <Students data={data} run={run} />}
      {tab === 'overzicht' && (
        <Overview
          data={data}
          openSession={id => {
            switchSession(id);
            setTab('les');
          }}
        />
      )}
      {newSession && (
        <NewSession
          run={run}
          onClose={added => {
            setNewSession(false);
            if (added) setTab('les');
          }}
        />
      )}
    </main>
  );
}
