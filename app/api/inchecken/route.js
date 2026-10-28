import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { readAll, setMarks } from '@/lib/attendance-sheet';
import { readToken, findStudent } from '@/lib/checkin';

export const dynamic = 'force-dynamic';

// Publiek: leerlingen hebben geen wachtwoord. Daarom geeft deze route nooit namenlijsten terug
// en werkt ze alleen met een geldige, kortlevende QR-code.
const DEVICE_COOKIE = 'tabieb2be-ingecheckt';
const fail = (error, status = 400) => NextResponse.json({ error }, { status });

async function sessionFrom(token) {
  const t = readToken(token);
  if (!t) return { error: fail('Deze QR-code is ongeldig. Scan de code in het lokaal opnieuw.') };
  if (t.expired) return { error: fail('Deze QR-code is verlopen. Scan de code in het lokaal opnieuw.', 410) };
  const data = await readAll();
  const session = data.sessions.find(s => s.id === t.sessionId);
  if (!session) return { error: fail('Deze les bestaat niet meer.', 404) };
  return { data, session };
}

export async function GET(request) {
  const token = new URL(request.url).searchParams.get('t');
  try {
    const { error, session } = await sessionFrom(token);
    if (error) return error;
    return NextResponse.json({ session: { date: session.date, title: session.title } });
  } catch {
    return fail('De aanwezigheidslijst is even niet bereikbaar. Probeer het zo opnieuw.', 503);
  }
}

export async function POST(request) {
  const { token, name } = await request.json().catch(() => ({}));
  // Kleine vertraging: namen raden wordt traag.
  await new Promise(r => setTimeout(r, 500));
  try {
    const { error, data, session } = await sessionFrom(token);
    if (error) return error;

    // Eén toestel = één leerling per les, zodat niemand vrienden kan inchecken.
    const jar = await cookies();
    const done = JSON.parse(jar.get(DEVICE_COOKIE)?.value || '{}');
    const found = findStudent(
      data.students.filter(s => s.active),
      String(name || '').slice(0, 100)
    );
    if (found.error) return fail(found.error, 404);
    const { student } = found;
    if (done[session.id] && done[session.id] !== student.id)
      return fail('Met dit toestel is al iemand anders ingecheckt voor deze les. Gebruik je eigen gsm.', 409);

    const current = data.marks[session.id]?.[student.id];
    if (!current || current === 'afwezig') await setMarks(session.id, { [student.id]: 'aanwezig' });

    jar.set(DEVICE_COOKIE, JSON.stringify({ ...done, [session.id]: student.id }), {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24,
    });
    return NextResponse.json({
      ok: true,
      firstName: student.name.split(' ')[0],
      already: !!current && current !== 'afwezig',
      session: { date: session.date, title: session.title },
    });
  } catch {
    return fail('Inchecken lukte niet. Probeer het opnieuw of meld je bij je begeleider.', 503);
  }
}
