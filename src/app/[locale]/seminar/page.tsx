import MainSeminar from '@/components/Seminar/Main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'projects', 
  description: '',
  keywords: '', 
};

export default function Index() {
  return (
    <div>
      <MainSeminar />
    </div>
  );
}