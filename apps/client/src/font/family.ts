import { Inconsolata, Inter, Noto_Sans_JP, Rakkas } from '@next/font/google';

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const notoSansJp = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

const rakkas = Rakkas({
  weight: ['400'],
  variable: '--font-rakkas',
});

const inconsolata = Inconsolata({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inconsolata',
});

export const fontFamily = [inter, notoSansJp, rakkas, inconsolata].map((font) => font.variable).join(' ');
