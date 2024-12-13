import BlogConatiner from '@/components/Blog/Main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs', 
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