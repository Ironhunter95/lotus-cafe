'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { i18n } from '@/i18n.config';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const { theme, setTheme } = useTheme();
  const redirectedPathName = (locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <ul className="flex gap-x-3">
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link href={redirectedPathName(locale)} className="rounded-md border dark:invert bg-black px-3 py-2 text-white">
              {locale}
            </Link>
          </li>
        );
      })}
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme}</button>
    </ul>
  );
}
