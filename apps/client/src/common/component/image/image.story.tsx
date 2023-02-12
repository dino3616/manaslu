import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { Image } from './image.presenter';

type Story = ComponentStoryObj<typeof Image>;

const meta: ComponentMeta<typeof Image> = {
  component: Image,
};

export default meta;

export const Default: Story = {
  args: {
    src: '/favicon.png',
    width: 120,
    height: 120,
    alt: 'avatar',
  },
};
