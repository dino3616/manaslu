import { Inconsolata, Inter, Noto_Sans_JP, Rakkas } from '@next/font/google';

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const notoSansJp = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin', 'japanese'],
  variable: '--font-noto-sans-jp',
});

const sansFamily = [inter, notoSansJp].map((font) => font.variable);

const rakkas = Rakkas({
  weight: ['400'],
  variable: '--font-rakkas',
});

const rakkasFamily = [rakkas].map((font) => font.variable);

const inconsolata = Inconsolata({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inconsolata',
});

const codeFamily = [inconsolata].map((font) => font.variable);

export const fontFamily = [...sansFamily, ...rakkasFamily, ...codeFamily].join(' ');
