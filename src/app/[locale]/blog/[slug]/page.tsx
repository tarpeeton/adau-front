import BlogItemMain from '@/components/Blog/blog-item/Main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs - Your Source for Insightful Articles',
  description: 'Explore a variety of blogs covering diverse topics such as technology, lifestyle, business, and more. Stay updated with the latest insights and trends.',
  keywords: 'blogs, articles, technology, lifestyle, business, insights, trends, latest updates, informative content',
};


export default function Index() {
  return (
    <div>
      <BlogItemMain />
    </div>
  );
}