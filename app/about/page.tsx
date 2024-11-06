import About from '@/components/About/Main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About', 
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