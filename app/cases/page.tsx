import About from '@/components/About/Main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case', 
  description: '',
  keywords: '', 
};

export default function Index() {
  return (
    <div>
      <About />
    </div>
  );
}