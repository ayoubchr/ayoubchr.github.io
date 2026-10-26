import { NextResponse } from 'next/server';
import { checkPassword, setSession, clearSession, passwordConfigured } from '@/lib/attendance-auth';

export async function POST(request) {
  if (!passwordConfigured()) return NextResponse.json({ error: 'Er is nog geen wachtwoord ingesteld (ATTENDANCE_PASSWORD).' }, { status: 503 });
  const { password } = await request.json().catch(() => ({}));
  // Kleine vertraging maakt raden trager.
  await new Promise(r => setTimeout(r, 400));
  if (!checkPassword(password || '')) return NextResponse.json({ error: 'Wachtwoord klopt niet' }, { status: 401 });
  await setSession();
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  await clearSession();
  return NextResponse.json({ ok: true });
}
