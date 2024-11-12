import MainSeminarItems from '@/components/Seminar/seminar-items/Main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MainSeminarItems', 
  description: '',
  keywords: '', 
};

export default function Index() {
  return (
    <div>
      <MainSeminarItems />
    </div>
  );
}