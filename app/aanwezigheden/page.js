import Header from '@/components/Header';
import Attendance from './Attendance';
import './attendance.css';

export const metadata = { title: 'Aanwezigheden · Tabieb2be', robots: { index: false } };

export default function Page() {
  return (
    <>
      <Header crumbs={[['/', 'Vakken'], [null, 'Aanwezigheden']]} active="/aanwezigheden" />
      <Attendance />
    </>
  );
}
