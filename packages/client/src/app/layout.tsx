import type { FC, ReactNode } from 'react';
import { fontFamily } from '@/font/family';
import { Footer } from '@/module/root/ui/footer.layout';
import { Header } from '@/module/root/ui/header.layout';
import '@/style/global.css';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html
    lang="ja"
    className="bg-accent-100 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full hover:scrollbar-thumb-gray-500"
  >
    <head />
    <body className={`${fontFamily} relative min-h-screen font-sans`}>
      <Header className="sticky top-0 left-0" />
      <main className="min-h-full">{children}</main>
      <Footer className="absolute bottom-0 left-0 w-full" />
    </body>
  </html>
);

export default RootLayout;
