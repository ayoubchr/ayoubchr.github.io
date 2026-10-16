import Practice from './Practice';

export const metadata = { title: 'Oefenen · Tabieb2be' };

export default async function Page({ searchParams }) {
  const { vak } = await searchParams;
  return <Practice initialSubject={vak} />;
}
