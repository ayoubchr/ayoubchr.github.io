import { notFound } from 'next/navigation';
import { exams, examById, examTitle, questionsForExam, playable } from '@/lib/exams';
import ExamRunner from './ExamRunner';

export const generateStaticParams = () => exams.map(e => ({ id: e.id }));

export async function generateMetadata({ params }) {
  const { id } = await params;
  const e = examById(id);
  return { title: e ? `${examTitle(e)} · Tabieb2be` : 'Tabieb2be' };
}

export default async function Page({ params }) {
  const { id } = await params;
  const exam = examById(id);
  if (!exam) notFound();
  const all = questionsForExam(id);
  return <ExamRunner exam={exam} questions={all.filter(playable)} skipped={all.filter(q => !playable(q)).map(q => q.number)} />;
}
