import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { Link } from './link.presenter';

type Story = ComponentStoryObj<typeof Link>;

const meta: ComponentMeta<typeof Link> = {
  component: Link,
};

export default meta;

export const Default: Story = {
  render: () => <Link href="/">Link</Link>,
};
