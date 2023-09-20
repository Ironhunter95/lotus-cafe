import '@styles/globals.css';
import { Inter } from 'next/font/google';
import LocaleSwitcher from './components/locale-switcher';
import { Locale, i18n } from '@/i18n.config';
import Providers from '../providers';
const inter = Inter({ subsets: ['latin'] });
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata = {
  title: 'Lotus Cafe',
  description: 'Order all your favourite drinks by a click',
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <Providers>
        <body>
          <LocaleSwitcher /> <div className={inter.className}>{children}</div>
        </body>
      </Providers>
    </html>
  );
}
