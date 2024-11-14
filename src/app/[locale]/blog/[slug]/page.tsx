import BlogItemMain from '@/components/Blog/blog-item/Main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog SLUG', 
  description: '',
  keywords: '', 
};

export default function Index() {
  return (
    <div>
      <BlogItemMain />
    </div>
  );
}