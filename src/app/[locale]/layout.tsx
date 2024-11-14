import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import '../globals.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import ClientQueryProvider from '@/providers/useReactQuery';
export const metadata: Metadata = {
  title: 'ADAU | HOME',
  description: '',
  keywords: '',
  authors: [{ name: 'Rustam Kidiraliyev + RESULT AGENCY', url: 'https://my-works-ten.vercel.app/' }],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // `params` obyektini kutish
  const { locale } = await params;

  // `locale`ni `getMessages`ga uzatish
  const messages = await getMessages();

  // React Query uchun yangi `QueryClient` yaratish
  

  return (
    <html lang={locale}>
      <body>
        <ClientQueryProvider>
          <NextIntlClientProvider messages={messages}>
            <Header locale={locale} />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ClientQueryProvider>
      </body>
    </html>
  );
}
