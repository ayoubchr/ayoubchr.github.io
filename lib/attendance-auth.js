import 'server-only';
import { createHash, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';
import { isDemo } from './attendance-sheet';

// Tijdelijke beveiliging tot er echte logins (Supabase) zijn: één wachtwoord voor de begeleiders.
const COOKIE = 'tabieb2be-aanwezigheden';
const PASSWORD = process.env.ATTENDANCE_PASSWORD;

const token = () => createHash('sha256').update(`tabieb2be:${PASSWORD}`).digest('hex');

export const passwordConfigured = () => !!PASSWORD;

export function checkPassword(input) {
  if (!PASSWORD) return false;
  const a = Buffer.from(String(input));
  const b = Buffer.from(PASSWORD);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function isAuthorized() {
  // Lokaal testen in demo-modus mag zonder wachtwoord; met een echte Sheet nooit.
  if (!PASSWORD) return isDemo && process.env.NODE_ENV !== 'production';
  const value = (await cookies()).get(COOKIE)?.value;
  return value === token();
}

export async function setSession() {
  (await cookies()).set(COOKIE, token(), {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 60,
  });
}

export async function clearSession() {
  (await cookies()).delete(COOKIE);
}
