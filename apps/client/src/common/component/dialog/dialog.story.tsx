import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { SiStorybook } from 'react-icons/si';
import { Button } from '../button/button.presenter';
import { Card } from '../card/card.presenter';
import { Dialog } from './dialog.presenter';

type Story = ComponentStoryObj<typeof Dialog.Root>;

const meta: ComponentMeta<typeof Dialog.Root> = {
  component: Dialog.Root,
};

export default meta;

export const Default: Story = {
  render: (args) => (
    <Dialog.Root {...args}>
      <Dialog.Trigger asChild>
        <Button className="rounded-full" {...args}>
          <SiStorybook className="text-pink-500" size={120} />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-gray-500/40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-7">
          <Card>
            <Dialog.Title className="text-center text-3xl font-bold">ポラーノの広場</Dialog.Title>
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
            <br />
            またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
          </Card>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};
