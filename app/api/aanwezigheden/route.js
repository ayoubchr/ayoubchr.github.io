import { NextResponse } from 'next/server';
import { readAll, setup, addStudents, updateStudent, addSession, setMarks, STATUSES, isDemo, sheetUrl } from '@/lib/attendance-sheet';
import { isAuthorized } from '@/lib/attendance-auth';
import { createToken, ROTATE_SECONDS } from '@/lib/checkin';

export const dynamic = 'force-dynamic';

const unauthorized = () => NextResponse.json({ error: 'Niet aangemeld' }, { status: 401 });
const fail = (e, status = 500) => NextResponse.json({ error: e.message || String(e) }, { status });

export async function GET() {
  if (!(await isAuthorized())) return unauthorized();
  try {
    return NextResponse.json({ ...(await readAll()), demo: isDemo, sheetUrl, statuses: STATUSES });
  } catch (e) {
    return fail(e);
  }
}

export async function POST(request) {
  if (!(await isAuthorized())) return unauthorized();
  let body;
  try {
    body = await request.json();
  } catch {
    return fail(new Error('Ongeldige aanvraag'), 400);
  }
  try {
    switch (body.action) {
      case 'checkinToken': {
        const { token, expiresAt } = createToken(String(body.sessionId));
        const origin = new URL(request.url).origin;
        return NextResponse.json({ url: `${origin}/inchecken?t=${token}`, expiresAt, rotateSeconds: ROTATE_SECONDS });
      }
      case 'setup':
        await setup();
        break;
      case 'addStudents': {
        const list = Array.isArray(body.students) ? body.students.slice(0, 200) : [];
        await addStudents(list.map(s => ({ name: String(s.name || '').slice(0, 100), track: String(s.track || '').slice(0, 30) })));
        break;
      }
      case 'updateStudent': {
        const fields = {};
        for (const k of ['name', 'track', 'note']) if (k in body.fields) fields[k] = String(body.fields[k]).slice(0, 200);
        if ('active' in body.fields) fields.active = !!body.fields.active;
        await updateStudent(String(body.id), fields);
        break;
      }
      case 'addSession': {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(body.date || '') || !String(body.title || '').trim()) return fail(new Error('Datum en titel zijn verplicht'), 400);
        await addSession({ date: body.date, subject: String(body.subject || ''), title: String(body.title).slice(0, 100) });
        break;
      }
      case 'setMarks': {
        const changes = {};
        for (const [id, status] of Object.entries(body.changes || {})) {
          if (status && !STATUSES.includes(status)) return fail(new Error(`Onbekende status: ${status}`), 400);
          changes[id] = status || '';
        }
        await setMarks(String(body.sessionId), changes);
        break;
      }
      default:
        return fail(new Error('Onbekende actie'), 400);
    }
    return NextResponse.json({ ...(await readAll()), demo: isDemo, sheetUrl, statuses: STATUSES });
  } catch (e) {
    return fail(e);
  }
}
