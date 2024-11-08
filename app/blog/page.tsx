import BlogConatiner from '@/components/Blog/Main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog', 
  description: '',
  keywords: '', 
};

export default function Index() {
  return (
    <div>
      <BlogConatiner />
    </div>
  );
}