import MainService from '@/components/Services/Main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service', 
  description: '',
  keywords: '', 
};

export default function Index() {
  return (
    <div>
      <MainService />
    </div>
  );
}