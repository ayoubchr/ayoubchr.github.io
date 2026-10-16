import ExamList from './ExamList';

export const metadata = { title: 'Examens · Tabieb2be' };

export default async function Page({ searchParams }) {
  const { vak } = await searchParams;
  return <ExamList initialSubject={vak || 'alle'} />;
}
