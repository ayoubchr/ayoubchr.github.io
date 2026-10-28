'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const NAME_KEY = 'tabieb2be-mijn-naam';
const fmtDate = d => new Date(`${d}T12:00`).toLocaleDateString('nl-BE', { weekday: 'long', day: 'numeric', month: 'long' });

export default function CheckIn() {
  const token = useSearchParams().get('t');
  const [session, setSession] = useState(null);
  const [state, setState] = useState('loading');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    try {
      setName(localStorage.getItem(NAME_KEY) || '');
    } catch {}
    if (!token) {
      setError('Scan de QR-code in het lokaal om in te checken.');
      setState('error');
      return;
    }
    fetch(`/api/inchecken?t=${encodeURIComponent(token)}`)
      .then(async res => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.error || 'Er ging iets mis');
        setSession(data.session);
        setState('form');
      })
      .catch(e => {
        setError(e.message);
        setState('error');
      });
  }, [token]);

  const submit = async e => {
    e.preventDefault();
    setState('sending');
    setError('');
    const res = await fetch('/api/inchecken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, name }),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok) {
      try {
        localStorage.setItem(NAME_KEY, name.trim());
      } catch {}
      setResult(data);
      setState('done');
    } else {
      setError(data.error || 'Inchecken lukte niet');
      // Verlopen of ongeldige code: opnieuw scannen is de enige oplossing.
      setState(res.status === 410 || res.status === 400 ? 'error' : 'form');
    }
  };

  return (
    <main className="ci">
      <div className="ci-brand">
        <span className="ci-mark" aria-hidden="true">
          <img src="/logo.png" alt="" />
        </span>
        <span>
          Tabieb<span className="ci-highlight">2be</span>
        </span>
      </div>

      {state === 'loading' && <p className="ci-muted">Even laden…</p>}

      {state === 'error' && (
        <section className="ci-card">
          <div className="ci-icon bad">!</div>
          <h1>Niet gelukt</h1>
          <p>{error}</p>
        </section>
      )}

      {(state === 'form' || state === 'sending') && session && (
        <form className="ci-card" onSubmit={submit}>
          <span className="ci-eyebrow">AANWEZIG MELDEN</span>
          <h1>{session.title}</h1>
          <p className="ci-muted">{fmtDate(session.date)}</p>
          <label htmlFor="ci-name">Je voor- en achternaam</label>
          <input
            id="ci-name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Voornaam Achternaam"
            autoComplete="name"
            autoCapitalize="words"
            enterKeyHint="send"
            required
          />
          {error && (
            <p className="ci-error" role="alert">
              {error}
            </p>
          )}
          <button disabled={state === 'sending' || name.trim().split(/\s+/).length < 2}>
            {state === 'sending' ? 'Even geduld…' : 'Ik ben aanwezig'}
          </button>
        </form>
      )}

      {state === 'done' && result && (
        <section className="ci-card">
          <div className="ci-icon good">✓</div>
          <h1>{result.already ? `Je stond al op aanwezig, ${result.firstName}` : `Welkom, ${result.firstName}!`}</h1>
          <p>
            Je bent aanwezig gemeld voor <strong>{result.session.title}</strong>.
          </p>
          <p className="ci-muted">Je mag dit venster sluiten.</p>
        </section>
      )}
    </main>
  );
}
