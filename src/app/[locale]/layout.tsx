import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import '../globals.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import ClientQueryProvider from '@/providers/useReactQuery';
import Script from 'next/script';

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

  return (
    <html lang={locale}>
      <head>
        <meta name="yandex-verification" content="62db76289f18bce8" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Inject Yandex Metrika script with next/script */}
        <Script 
          strategy="afterInteractive" 
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; 
                m[i].l=1*new Date(); 
                for (var j = 0; j < document.scripts.length; j++) {
                  if (document.scripts[j].src === r) { return; }
                } 
                k=e.createElement(t),
                a=e.getElementsByTagName(t)[0],
                k.async=1,
                k.src=r,
                a.parentNode.insertBefore(k,a);
              })
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); 
              ym(99098178, "init", { 
                clickmap:true, 
                trackLinks:true, 
                accurateTrackBounce:true 
              });
            `,
          }}
        />
      </head>
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
