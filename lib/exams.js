import data from '@/data/exams.json';
import KIW from '@/lib/kiw-data';

export const SUBJECTS = KIW.KIW.map(s => ({ id: s.id, name: s.name, color: s.color }));
export const subjectById = id => SUBJECTS.find(s => s.id === id);

export const TRACKS = [
  { id: 'arts', name: 'Arts' },
  { id: 'tandarts', name: 'Tandarts' },
  { id: 'dierenarts', name: 'Dierenarts' },
];
export const trackName = id => TRACKS.find(t => t.id === id)?.name || id;

// Alleen vragen met vier leesbare opties en een gekend antwoord tellen mee in quizzen.
export const playable = q => q.answer && !q.garbled;

export const exams = data.exams.filter(e => e.questionCount > 0);
export const questions = data.questions;
export const references = data.references;

export const examById = id => exams.find(e => e.id === id);
export const questionsForExam = id => questions.filter(q => q.exam === id).sort((a, b) => a.number - b.number);

export const examTitle = e => `${subjectById(e.subject)?.name} ${e.year} · ${trackName(e.track)}`;
