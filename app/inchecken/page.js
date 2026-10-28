import { Suspense } from 'react';
import CheckIn from './CheckIn';
import './checkin.css';

export const metadata = { title: 'Inchecken · Tabieb2be', robots: { index: false } };

export default function Page() {
  return (
    <Suspense>
      <CheckIn />
    </Suspense>
  );
}
