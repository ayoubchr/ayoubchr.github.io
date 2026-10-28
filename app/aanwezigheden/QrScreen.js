'use client';
import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';

const fmtDate = d => new Date(`${d}T12:00`).toLocaleDateString('nl-BE', { weekday: 'long', day: 'numeric', month: 'long' });

// Schermvullende QR-code om te projecteren. Vernieuwt de code en telt live mee hoeveel leerlingen er zijn.
export default function QrScreen({ session, total, onClose, onRefresh }) {
  const [svg, setSvg] = useState('');
  const [url, setUrl] = useState('');
  const [left, setLeft] = useState(0);
  const [present, setPresent] = useState(null);
  const [error, setError] = useState('');
  const rotateAt = useRef(0);

  useEffect(() => {
    let alive = true;
    let timer;
    const fetchCode = async () => {
      try {
        const res = await fetch('/api/aanwezigheden', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'checkinToken', sessionId: session.id }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Kon geen code maken');
        if (!alive) return;
        setUrl(data.url);
        setSvg(await QRCode.toString(data.url, { type: 'svg', margin: 1, errorCorrectionLevel: 'M', color: { dark: '#1d2340', light: '#ffffff' } }));
        setError('');
        rotateAt.current = Date.now() + data.rotateSeconds * 1000;
        timer = setTimeout(fetchCode, data.rotateSeconds * 1000);
      } catch (e) {
        if (!alive) return;
        setError(e.message);
        timer = setTimeout(fetchCode, 5000);
      }
    };
    fetchCode();
    const tick = setInterval(() => setLeft(Math.max(0, Math.ceil((rotateAt.current - Date.now()) / 1000))), 250);
    return () => {
      alive = false;
      clearTimeout(timer);
      clearInterval(tick);
    };
  }, [session.id]);

  // Elke 5 s de stand uit de Sheet halen, zodat de teller meeloopt.
  useEffect(() => {
    let alive = true;
    const poll = async () => {
      const data = await onRefresh();
      if (alive && data) {
        const marks = data.marks[session.id] || {};
        setPresent(Object.values(marks).filter(s => s === 'aanwezig' || s === 'te laat').length);
      }
    };
    poll();
    const t = setInterval(poll, 5000);
    return () => {
      alive = false;
      clearInterval(t);
    };
  }, [session.id, onRefresh]);

  useEffect(() => {
    const key = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [onClose]);

  return (
    <div className="qr-screen" role="dialog" aria-modal="true" aria-label="QR-code om in te checken">
      <button className="qr-close" onClick={onClose} aria-label="Sluiten">
        ✕
      </button>
      <div className="qr-info">
        <span className="eyebrow">INCHECKEN</span>
        <h2>{session.title}</h2>
        <p>{fmtDate(session.date)}</p>
        <ol>
          <li>Scan de code met je gsm-camera</li>
          <li>Vul je voor- en achternaam in</li>
          <li>Klaar, je staat op aanwezig</li>
        </ol>
        <div className="qr-count">
          <strong>{present ?? '…'}</strong>
          <span>/ {total} aanwezig</span>
        </div>
      </div>
      <div className="qr-box">
        {svg ? <div className="qr-code" dangerouslySetInnerHTML={{ __html: svg }} /> : <div className="qr-code qr-loading">Code maken…</div>}
        <div className="qr-timer" aria-hidden="true">
          <span style={{ width: `${(left / 30) * 100}%` }} />
        </div>
        <small>{error ? error : `Nieuwe code over ${left} s`}</small>
        {url && (
          <button className="qr-copy" onClick={() => navigator.clipboard?.writeText(url)}>
            Kopieer link (voor wie niet kan scannen)
          </button>
        )}
      </div>
    </div>
  );
}
