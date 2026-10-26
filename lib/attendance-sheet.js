import 'server-only';
import { JWT } from 'google-auth-library';
import lessons from '@/data/lessons.json';

// Aanwezigheden staan in een Google Sheet met drie tabbladen:
//   Leerlingen     ID | Naam | Richting | Actief | Opmerking
//   Lessen         ID | Datum | Vak | Les
//   Aanwezigheden  ID | Naam | één kolom per les (kop = "datum les") met aanwezig / afwezig / gewettigd / te laat
// plus een tabblad Overzicht met formules, zodat de telling ook in de Sheet zelf zichtbaar is.
// Zonder Google-instellingen draait alles in het geheugen (demo-modus voor lokaal testen).

export const STATUSES = ['aanwezig', 'afwezig', 'gewettigd', 'te laat'];
const TABS = { students: 'Leerlingen', sessions: 'Lessen', marks: 'Aanwezigheden', overview: 'Overzicht' };
const SUBJECT_NAMES = { wiskunde: 'Wiskunde', fysica: 'Fysica', chemie: 'Chemie', biologie: 'Biologie' };

// Aanvaardt zowel het kale ID als een volledige Sheets-link; aanhalingstekens en spaties uit
// het plakken in Vercel worden genegeerd.
const rawSheetId = (process.env.ATTENDANCE_SHEET_ID || '').trim().replace(/^["']|["']$/g, '').trim();
const SHEET_ID = rawSheetId.match(/\/d\/([A-Za-z0-9_-]+)/)?.[1] || rawSheetId || undefined;
export const isDemo = !SHEET_ID || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY;
export const sheetUrl = SHEET_ID ? `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit` : null;

const sessionLabel = s => `${s.date} ${s.title}`;
const newId = prefix => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
const colLetter = n => {
  let s = '';
  for (n += 1; n > 0; n = Math.floor((n - 1) / 26)) s = String.fromCharCode(65 + ((n - 1) % 26)) + s;
  return s;
};
const q = name => `'${name}'`;

// ---------- Google Sheets via REST ----------

let client;
const auth = () =>
  (client ??= new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    // In Vercel staan de regeleindes van de sleutel vaak als letterlijke \n.
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  }));

async function api(path, { method = 'GET', body } = {}) {
  try {
    const res = await auth().request({
      url: `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}${path}`,
      method,
      data: body,
    });
    return res.data;
  } catch (e) {
    const status = e.response?.status;
    if (status === 404)
      throw new Error(
        `Google vindt geen Sheet met ID "${SHEET_ID}". Controleer ATTENDANCE_SHEET_ID (alleen het stuk tussen /d/ en /edit).`
      );
    if (status === 403)
      throw new Error('Geen toegang tot de Sheet. Deel de Sheet als Bewerker met het e-mailadres van het serviceaccount.');
    if (/DECODER|PEM|private key|invalid_grant/i.test(e.message || ''))
      throw new Error('De Google-sleutel klopt niet. Controleer GOOGLE_PRIVATE_KEY en GOOGLE_SERVICE_ACCOUNT_EMAIL.');
    // Google geeft soms een HTML-pagina terug; die tonen we niet als foutmelding.
    const apiMessage = e.response?.data?.error?.message;
    throw new Error(apiMessage || (String(e.message).startsWith('<') ? `Google gaf fout ${status || ''}` : e.message));
  }
}

const getRanges = ranges =>
  api(`/values:batchGet?${ranges.map(r => `ranges=${encodeURIComponent(r)}`).join('&')}&valueRenderOption=FORMATTED_VALUE`).then(
    d => d.valueRanges.map(v => v.values || [])
  );
const writeCells = data => api('/values:batchUpdate', { method: 'POST', body: { valueInputOption: 'USER_ENTERED', data } });
const append = (tab, values) =>
  api(`/values/${encodeURIComponent(`${q(tab)}!A1`)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`, {
    method: 'POST',
    body: { values },
  });

// ---------- Demo-opslag in het geheugen ----------

const demo = (globalThis.__attendanceDemo ??= {
  students: [
    { id: 'L-demo1', name: 'Amina El Idrissi', track: 'arts', active: true, note: '' },
    { id: 'L-demo2', name: 'Bilal Haddouchi', track: 'tandarts', active: true, note: '' },
    { id: 'L-demo3', name: 'Sara Benali', track: 'arts', active: true, note: '' },
  ],
  sessions: lessons.map(l => ({ id: l.id, date: l.date, subject: l.subject, title: l.title })),
  marks: {},
});

// ---------- Publieke functies ----------

export async function readAll() {
  if (isDemo) return structuredClone(demo);
  try {
    return await readSheet();
  } catch (e) {
    // Lege of nieuwe Sheet: tabbladen bestaan nog niet. Eerst inrichten, dan opnieuw lezen.
    if (!/Unable to parse range/i.test(e.message || '')) throw e;
    await setup();
    return readSheet();
  }
}

async function readSheet() {
  const [studentRows, sessionRows, grid] = await getRanges([`${q(TABS.students)}!A2:E`, `${q(TABS.sessions)}!A2:D`, `${q(TABS.marks)}!A1:ZZ`]);
  const students = studentRows
    .filter(r => r[0])
    .map(r => ({ id: r[0], name: r[1] || '', track: r[2] || '', active: (r[3] || 'JA').toUpperCase() !== 'NEE', note: r[4] || '' }));
  const sessions = sessionRows
    .filter(r => r[0])
    .map(r => ({ id: r[0], date: r[1] || '', subject: (r[2] || '').toLowerCase(), title: r[3] || '' }))
    .sort((a, b) => a.date.localeCompare(b.date));
  const header = grid[0] || [];
  const marks = {};
  for (const s of sessions) {
    const col = header.indexOf(sessionLabel(s));
    if (col < 0) continue;
    for (const row of grid.slice(1)) {
      const value = (row[col] || '').trim().toLowerCase();
      if (row[0] && STATUSES.includes(value)) (marks[s.id] ??= {})[row[0]] = value;
    }
  }
  return { students, sessions, marks };
}

// Maakt ontbrekende tabbladen, koppen, de geplande lessen en de overzichtsformules aan.
export async function setup() {
  if (isDemo) return;
  const meta = await api('?fields=sheets.properties.title');
  const existing = new Set(meta.sheets.map(s => s.properties.title));
  const missing = Object.values(TABS).filter(t => !existing.has(t));
  if (missing.length) {
    await api(':batchUpdate', { method: 'POST', body: { requests: missing.map(title => ({ addSheet: { properties: { title } } })) } });
  }
  const [studentHead, sessionRows, gridHead] = await getRanges([`${q(TABS.students)}!A1:E1`, `${q(TABS.sessions)}!A1:D`, `${q(TABS.marks)}!A1:ZZ1`]);
  const data = [];
  if (!studentHead.length) data.push({ range: `${q(TABS.students)}!A1:E1`, values: [['ID', 'Naam', 'Richting', 'Actief', 'Opmerking']] });
  const known = new Set(sessionRows.slice(1).map(r => r[0]));
  const toAdd = lessons.filter(l => !known.has(l.id));
  if (!sessionRows.length) data.push({ range: `${q(TABS.sessions)}!A1:D1`, values: [['ID', 'Datum', 'Vak', 'Les']] });
  const header = gridHead[0] || ['ID', 'Naam'];
  if (!gridHead.length) data.push({ range: `${q(TABS.marks)}!A1:B1`, values: [['ID', 'Naam']] });
  if (toAdd.length) {
    const start = Math.max(sessionRows.length, 1) + 1;
    data.push({
      range: `${q(TABS.sessions)}!A${start}`,
      values: toAdd.map(l => [l.id, l.date, SUBJECT_NAMES[l.subject] || l.subject, l.title]),
    });
    const labels = toAdd.map(l => sessionLabel(l)).filter(label => !header.includes(label));
    if (labels.length) data.push({ range: `${q(TABS.marks)}!${colLetter(header.length)}1`, values: [labels] });
  }
  // Overzicht: telt per leerling over de hele rij, groeit vanzelf mee met nieuwe leerlingen en lessen.
  const rows = `FILTER(${q(TABS.marks)}!C2:ZZ, ${q(TABS.marks)}!A2:A<>"")`;
  const count = status => `=BYROW(${rows}, LAMBDA(r, COUNTIF(r, "${status}")))`;
  data.push({
    range: `${q(TABS.overview)}!A1:G2`,
    values: [
      ['Naam', 'Aanwezig', 'Te laat', 'Afwezig', 'Gewettigd', 'Lessen geregistreerd', '% aanwezig'],
      [
        `=FILTER(${q(TABS.marks)}!B2:B, ${q(TABS.marks)}!A2:A<>"")`,
        count('aanwezig'),
        count('te laat'),
        count('afwezig'),
        count('gewettigd'),
        `=BYROW(${rows}, LAMBDA(r, COUNTA(r)))`,
        `=BYROW(${rows}, LAMBDA(r, IF(COUNTA(r)=0, "", ROUND(100*(COUNTIF(r,"aanwezig")+COUNTIF(r,"te laat"))/COUNTA(r)))))`,
      ],
    ],
  });
  await writeCells(data);
}

export async function addStudents(list) {
  const added = list
    .map(s => ({ id: newId('L'), name: s.name.trim(), track: s.track || '', active: true, note: '' }))
    .filter(s => s.name);
  if (!added.length) return [];
  if (isDemo) {
    demo.students.push(...added);
    return added;
  }
  await append(TABS.students, added.map(s => [s.id, s.name, s.track, 'JA', '']));
  await append(TABS.marks, added.map(s => [s.id, s.name]));
  return added;
}

export async function updateStudent(id, fields) {
  if (isDemo) {
    Object.assign(demo.students.find(s => s.id === id) || {}, fields);
    return;
  }
  const [ids, gridIds] = await getRanges([`${q(TABS.students)}!A:A`, `${q(TABS.marks)}!A:A`]);
  const row = ids.findIndex(r => r[0] === id) + 1;
  if (!row) throw new Error('Leerling niet gevonden in de Sheet');
  const data = [];
  if ('name' in fields) data.push({ range: `${q(TABS.students)}!B${row}`, values: [[fields.name]] });
  if ('track' in fields) data.push({ range: `${q(TABS.students)}!C${row}`, values: [[fields.track]] });
  if ('active' in fields) data.push({ range: `${q(TABS.students)}!D${row}`, values: [[fields.active ? 'JA' : 'NEE']] });
  if ('note' in fields) data.push({ range: `${q(TABS.students)}!E${row}`, values: [[fields.note]] });
  const gridRow = gridIds.findIndex(r => r[0] === id) + 1;
  if ('name' in fields && gridRow) data.push({ range: `${q(TABS.marks)}!B${gridRow}`, values: [[fields.name]] });
  if (data.length) await writeCells(data);
}

export async function addSession({ date, subject, title }) {
  const session = { id: newId('S'), date, subject, title: title.trim() };
  if (isDemo) {
    demo.sessions.push(session);
    return session;
  }
  const [header] = await getRanges([`${q(TABS.marks)}!A1:ZZ1`]);
  const label = sessionLabel(session);
  if ((header[0] || []).includes(label)) throw new Error('Er bestaat al een les met deze datum en titel');
  await append(TABS.sessions, [[session.id, date, SUBJECT_NAMES[subject] || subject, session.title]]);
  await writeCells([{ range: `${q(TABS.marks)}!${colLetter((header[0] || []).length)}1`, values: [[label]] }]);
  return session;
}

// changes: { [studentId]: status | '' }
export async function setMarks(sessionId, changes) {
  if (isDemo) {
    const m = (demo.marks[sessionId] ??= {});
    for (const [id, status] of Object.entries(changes)) status ? (m[id] = status) : delete m[id];
    return;
  }
  const [sessions, grid] = await getRanges([`${q(TABS.sessions)}!A2:D`, `${q(TABS.marks)}!A1:ZZ`]);
  const row = sessions.find(r => r[0] === sessionId);
  if (!row) throw new Error('Les niet gevonden in de Sheet');
  const col = (grid[0] || []).indexOf(sessionLabel({ date: row[1], title: row[3] }));
  if (col < 0) throw new Error(`Kolom "${sessionLabel({ date: row[1], title: row[3] })}" ontbreekt in tabblad ${TABS.marks}`);
  const data = [];
  for (const [id, status] of Object.entries(changes)) {
    const r = grid.findIndex(x => x[0] === id);
    if (r > 0) data.push({ range: `${q(TABS.marks)}!${colLetter(col)}${r + 1}`, values: [[status || '']] });
  }
  if (data.length) await writeCells(data);
}
