import { notFound } from 'next/navigation';
import KIW from '@/lib/kiw-data';
import SubjectView from './SubjectView';

export const generateStaticParams = () => KIW.KIW.map(s => ({ subject: s.id }));

export async function generateMetadata({ params }) {
  const { subject } = await params;
  const s = KIW.KIW.find(x => x.id === subject);
  return { title: s ? `${s.name} · Tabieb2be` : 'Tabieb2be' };
}

export default async function Page({ params, searchParams }) {
  const { subject } = await params;
  const { gesloten } = await searchParams;
  if (!KIW.KIW.some(s => s.id === subject)) notFound();
  return <SubjectView id={subject} locked={gesloten} />;
}
