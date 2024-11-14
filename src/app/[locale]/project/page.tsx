import Projects from '@/components/Projects/Main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'projects', 
  description: '',
  keywords: '', 
};

export default function Index() {
  return (
    <div>
      <Projects />
    </div>
  );
}