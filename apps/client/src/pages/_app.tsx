import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { Provider } from 'urql';
import { fontFamily } from '@/font/family';
import { urqlClient } from '@/infra/urql/urql.service';
import '@/style/global.css';

const GlobalHook: FC = () => null;

const App: FC<AppProps> = ({ Component, pageProps, router }) => (
  <RecoilRoot>
    <Provider value={urqlClient}>
      <GlobalHook />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <div key={router.asPath} className={`${fontFamily} flex min-h-screen flex-col font-sans`}>
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </Provider>
  </RecoilRoot>
);

export default App;
