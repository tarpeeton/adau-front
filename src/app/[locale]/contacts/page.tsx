import MainContacts from '@/components/Contacts/Main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacts', 
  description: '',
  keywords: '', 
};

export default function Index() {
  return (
    <div>
      <MainContacts />
    </div>
  );
}