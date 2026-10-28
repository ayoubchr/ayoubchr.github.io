import 'server-only';
import { createHmac, timingSafeEqual } from 'node:crypto';

// Inchecken via QR: de begeleider toont een code die elke 30 s vernieuwt en 2 minuten geldig is.
// Een doorgestuurde foto van de QR-code werkt daardoor buiten het lokaal snel niet meer.
export const ROTATE_SECONDS = 30;
const VALID_SECONDS = 120;

const secret = () =>
  createHmac('sha256', 'tabieb2be-checkin')
    .update(process.env.CHECKIN_SECRET || process.env.ATTENDANCE_PASSWORD || process.env.GOOGLE_PRIVATE_KEY || 'demo')
    .digest();

const sign = payload => createHmac('sha256', secret()).update(payload).digest('base64url').slice(0, 22);

export function createToken(sessionId) {
  const exp = Math.floor(Date.now() / 1000) + VALID_SECONDS;
  const payload = `${Buffer.from(sessionId).toString('base64url')}.${exp.toString(36)}`;
  return { token: `${payload}.${sign(payload)}`, expiresAt: exp * 1000 };
}

// Geeft het sessie-ID terug, of null als de code vervalst of verlopen is.
export function readToken(token) {
  const parts = String(token || '').split('.');
  if (parts.length !== 3) return null;
  const [sid, exp, sig] = parts;
  const expected = Buffer.from(sign(`${sid}.${exp}`));
  const given = Buffer.from(sig);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return null;
  if (parseInt(exp, 36) * 1000 < Date.now()) return { expired: true };
  return { sessionId: Buffer.from(sid, 'base64url').toString() };
}

// Namen vergelijken zonder hoofdletters, accenten, koppeltekens of dubbele spaties.
export const normalizeName = s =>
  String(s || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

// Zoekt een leerling op volledige naam; "achternaam voornaam" mag ook.
export function findStudent(students, input) {
  const wanted = normalizeName(input);
  if (wanted.split(' ').length < 2) return { error: 'Vul je voor- én achternaam in.' };
  const sorted = w => w.split(' ').sort().join(' ');
  const matches = students.filter(s => {
    const n = normalizeName(s.name);
    return n === wanted || sorted(n) === sorted(wanted);
  });
  if (matches.length === 1) return { student: matches[0] };
  if (matches.length > 1) return { error: 'Er zijn meerdere leerlingen met deze naam. Meld je bij je begeleider.' };
  return { error: 'We vinden deze naam niet in de lijst. Controleer de schrijfwijze of meld je bij je begeleider.' };
}
