import { questions } from '@/lib/exams';
import lessons from '@/data/lessons.json';
import { assignments } from '@/data/lesson-assignments.json';
import Sorter from './Sorter';
import './sorter.css';

export const metadata = { title: 'Vragen sorteren · Tabieb2be' };

export default function Page() {
  const suggested = new Map(assignments.map(a => [a.questionId, a]));
  // Volgorde: eerst de ingedeelde vragen per les, daarna de niet-ingedeelde per vak.
  const order = id => {
    const a = suggested.get(id);
    return a ? lessons.findIndex(l => l.id === a.lessonId) : lessons.length;
  };
  const items = questions
    .map(q => ({
      id: q.id,
      subject: q.subject,
      year: q.year,
      track: q.track,
      number: q.number,
      stem: q.stem,
      options: q.options,
      garbled: q.garbled,
      lessonId: suggested.get(q.id)?.lessonId || null,
      confidence: suggested.get(q.id)?.confidence || null,
    }))
    .sort((a, b) => order(a.id) - order(b.id) || a.subject.localeCompare(b.subject) || b.year - a.year || a.number - b.number);
  return <Sorter items={items} lessons={lessons} />;
}
