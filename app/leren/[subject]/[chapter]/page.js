import { notFound, redirect } from 'next/navigation';
import KIW from '@/lib/kiw-data';
import ChapterView from './ChapterView';

export const generateStaticParams = () =>
  KIW.KIW.flatMap(s => s.chapters.filter(c => KIW.TABIEB_FOCUS.openIds.has(c[0])).map(c => ({ subject: s.id, chapter: c[0] })));

export async function generateMetadata({ params }) {
  const { subject, chapter } = await params;
  const c = KIW.KIW.find(x => x.id === subject)?.chapters.find(x => x[0] === chapter);
  return { title: c ? `${c[1]} · Tabieb2be` : 'Tabieb2be' };
}

export default async function Page({ params }) {
  const { subject, chapter } = await params;
  const s = KIW.KIW.find(x => x.id === subject);
  const c = s?.chapters.find(x => x[0] === chapter);
  if (!c) notFound();
  if (!KIW.TABIEB_FOCUS.openIds.has(c[0])) redirect(`/leren/${s.id}?gesloten=${c[0]}`);
  return <ChapterView subjectId={s.id} chapterId={c[0]} />;
}
