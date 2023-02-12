import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { NavigationMenu } from './navigation-menu.presenter';

type Story = ComponentStoryObj<typeof NavigationMenu.Root>;

const meta: ComponentMeta<typeof NavigationMenu.Root> = {
  component: NavigationMenu.Root,
};

export default meta;

export const Default: Story = {
  render: (args) => (
    <NavigationMenu.Root {...args}>
      <NavigationMenu.List className="flex flex-col items-center justify-center space-y-5 text-2xl font-semibold underline">
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/product">Product</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/blog">Blog</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/about">About</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/skill">Skill</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  ),
};
