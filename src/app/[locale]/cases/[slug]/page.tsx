import CaseMain from '@/components/Case/Main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case item', 
  description: '',
  keywords: '', 
};

export default function Index() {
  return (
    <div>
      <CaseMain />
    </div>
  );
}