// Deelt examenvragen voorlopig in per les op basis van trefwoorden.
// Resultaat: data/lesson-assignments.json met status "suggested"; de admin keurt goed of past aan.
// Gebruik: node scripts/classify-lessons.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const root = new URL('../data/', import.meta.url);
const { questions } = JSON.parse(readFileSync(new URL('exams.json', root), 'utf8'));
const lessons = JSON.parse(readFileSync(new URL('lessons.json', root), 'utf8'));

// Per vak: de lessen uit de planning, plus onderwerpen die (nog) geen les hebben.
// Die laatste vangen vragen op die anders verkeerd in een les zouden belanden.
const TOPICS = {
  wiskunde: {
    'wis-algebra': ['veelterm', 'deling', 'rest bij', 'vergelijking', 'stelsel', 'matrix', 'matrices', 'macht', 'logaritme', 'log', 'wortel', 'ongelijkheid', 'evenredig', 'breuk', 'mengsel', 'procent', 'gemiddeld', 'onbekende', 'determinant'],
    'wis-functies': ['functie', 'afgeleide', 'f\'', 'f(x)', 'grafiek', 'extrem', 'maximum', 'minimum', 'stijgend', 'dalend', 'asymptoot', 'raaklijn', 'buigpunt', 'limiet', 'nulpunt', 'exponenti', 'e^', 'ln'],
    'wis-goniometrie': ['sin', 'cos', 'tan', 'hoek', 'radialen', 'driehoek', 'cirkel', 'parabool', 'goniometr', 'periode', 'amplitude', 'rechthoek', 'omtrek', 'straal', 'koorde', 'coördinat', 'rechte', 'vlak', 'vector', 'gelijkvormig'],
    _later: ['integraal', 'oppervlakte onder', 'primitieve', 'kans', 'dobbelsteen', 'trekk', 'combinat', 'permutat', 'standaardafwijking', 'mediaan', 'normaal verdeel', 'variantie'],
  },
  fysica: {
    'fys-elektrostatica': ['lading', 'coulomb', 'elektrisch veld', 'veldsterkte', 'veldlijn', 'potentiaal', 'condensator', 'elektron', 'proton', 'aantrek', 'afstot', 'geladen'],
    'fys-elektrodynamica': ['stroom', 'spanning', 'weerstand', 'ohm', 'ampère', 'volt', 'vermogen', 'schakeling', 'serie', 'parallel', 'lamp', 'batterij', 'joule', 'magnet', 'inductie', 'spoel'],
    'fys-druk-kern': ['druk', 'pascal', 'hydrostat', 'vloeistof', 'archimedes', 'opwaartse', 'zuiger', 'dichtheid', 'radioactie', 'halveringstijd', 'verval', 'isotoop', 'kern', 'alfa', 'bèta', 'beta', 'gamma', 'straling', 'activiteit', 'becquerel', 'nucleon'],
    _later: ['snelheid', 'versnelling', 'kracht', 'newton', 'beweging', 'valt', 'wrijving', 'impuls', 'energie', 'arbeid', 'golf', 'frequentie', 'geluid', 'licht', 'lens', 'breking', 'spiegel', 'temperatuur', 'warmte', 'gas'],
  },
  chemie: {
    'chem-atoom-pse': ['atoom', 'elektronenconfiguratie', 'schil', 'orbitaal', 'isotoop', 'proton', 'neutron', 'elektron', 'periodiek', 'pse', 'groep', 'periode', 'ion', 'massagetal', 'atoomnummer', 'edelgas', 'elektronegativiteit', 'ionisatie'],
    'chem-binding': ['binding', 'covalent', 'ionbinding', 'metaalbinding', 'waterstofbrug', 'polair', 'apolair', 'dipool', 'lewis', 'ruimtelijke structuur', 'vsepr', 'molecuulvorm', 'van der waals', 'kookpunt', 'oplosbaar', 'hybridisatie', 'elektronenpaar'],
    'chem-rekenen-evenwicht': ['mol', 'concentratie', 'massa', 'molaire', 'g/mol', 'stoichiometr', 'overmaat', 'neerslag', 'verdunn', 'oplossing met c', 'evenwicht', 'kc', 'le chatelier', 'verschuift', 'evenwichtsconstante', 'rendement', 'volume'],
    _later: ['zuur', 'base', 'ph', 'buffer', 'redox', 'oxidat', 'reductie', 'halfreactie', 'elektrolyse', 'alkaan', 'alkeen', 'alcohol', 'ester', 'carbonzuur', 'isomer', 'koolstof', 'organisch', 'reactiesnelheid', 'kinetiek', 'katalysator'],
  },
  biologie: {
    'bio-cel': ['cel', 'membraan', 'organel', 'mitochond', 'chloroplast', 'ribosoom', 'kern', 'lysosoom', 'golgi', 'reticulum', 'osmose', 'diffusie', 'transport', 'fotosynthese', 'ademhaling', 'atp', 'glycolyse', 'krebs', 'gisting', 'enzym', 'mitose', 'meiose', 'celcyclus', 'chromosoom', 'deling', 'fagocytose', 'eiwit', 'dna-replicatie'],
    _later: ['gen', 'allel', 'erfelijk', 'kruising', 'fenotype', 'genotype', 'mutatie', 'evolutie', 'selectie', 'ecosysteem', 'voedselketen', 'hormoon', 'zenuw', 'spier', 'bloed', 'hart', 'nier', 'long', 'immuun', 'antistof', 'vertering', 'voortplanting', 'zwanger'],
  },
};

const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

// Korte trefwoorden ("mol", "ion", "sin") alleen als los woord, anders matchen ze "molecuul", "functie", "basis".
const escape = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const matcher = w => {
  const n = norm(w);
  return n.length <= 4 ? new RegExp(`(^|[^a-z])${escape(n)}($|[^a-z])`) : { test: t => t.includes(n) };
};
const compiled = new Map();
const scoreOf = (text, words) =>
  words.reduce((n, w) => {
    if (!compiled.has(w)) compiled.set(w, matcher(w));
    return n + (compiled.get(w).test(text) ? 1 : 0);
  }, 0);

const assignments = [];
const unassigned = [];
for (const q of questions) {
  const topics = TOPICS[q.subject];
  const text = norm(`${q.stem} ${q.options.join(' ')}`);
  const ranked = Object.entries(topics)
    .map(([id, words]) => [id, scoreOf(text, words)])
    .sort((a, b) => b[1] - a[1]);
  const [best, bestScore] = ranked[0];
  if (bestScore === 0 || best === '_later') {
    unassigned.push(q.id);
    continue;
  }
  // Zwakke of gelijke scores markeren we, zodat de admin die eerst nakijkt.
  const runnerUp = ranked[1][1];
  assignments.push({
    questionId: q.id,
    lessonId: best,
    status: 'suggested',
    confidence: bestScore >= 3 && bestScore > runnerUp + 1 ? 'high' : bestScore > runnerUp ? 'medium' : 'low',
  });
}

writeFileSync(new URL('lesson-assignments.json', root), JSON.stringify({ assignments, unassigned }, null, 1));

for (const l of lessons) {
  const a = assignments.filter(x => x.lessonId === l.id);
  const c = k => a.filter(x => x.confidence === k).length;
  console.log(`${l.date}  ${l.title.padEnd(48)} ${String(a.length).padStart(3)} vragen  (hoog ${c('high')}, middel ${c('medium')}, laag ${c('low')})`);
}
console.log(`Niet ingedeeld (onderwerp zonder les of onduidelijk): ${unassigned.length}`);
