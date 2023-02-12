import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator } from '@storybook/react';
import { urqlDecorator } from '@urql/storybook-addon';
import * as NextImage from 'next/image';
import { RouterContext } from 'next/dist/shared/lib/router-context';
// import { fontFamily } from '../src/font/family';
import '../src/style/global.css';
import '../src/style/storybook.css';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

addDecorator(urqlDecorator);

// addDecorator((Story) => (
//   <div className={fontFamily}>
//     <Story />
//   </div>
// ));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      iphone: {
        name: 'iPhone 13',
        styles: {
          width: '390px',
          height: '844px',
        },
      },
    },
  },
};
