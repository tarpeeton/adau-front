import MainReviews from '@/components/Reviews/Main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews', 
  description: '',
  keywords: '', 
};

export default function Index() {
  return (
    <div>
      <MainReviews />
    </div>
  );
}