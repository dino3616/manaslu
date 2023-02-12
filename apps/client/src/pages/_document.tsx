import { Head, Html, Main, NextScript } from 'next/document';
import type { FC } from 'react';

const Document: FC = () => (
  <Html
    lang="ja"
    className="bg-accent-100 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400/70 scrollbar-thumb-rounded-full hover:scrollbar-thumb-gray-500"
  >
    <Head />
    <body className="flex min-h-screen flex-col">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
