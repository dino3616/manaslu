import type { ComponentPropsWithoutRef, FC } from 'react';
import { Avatar } from '@/common/component/avatar/avatar.presenter';
import { twMerge } from '@/util/tw-merge';

export type FooterProps = Omit<ComponentPropsWithoutRef<'footer'>, 'children'>;

export const Footer: FC<FooterProps> = ({ className, ...props }) => (
  <footer className={twMerge('flex flex-col items-center justify-center space-y-10 bg-accent py-10 text-primary-800', className)} {...props}>
    <div className="flex items-center space-x-5">
      <span className="text-5xl font-semibold">manaslu.dev</span>
      <Avatar size={120} />
    </div>
    <small className="font-semibold">Copyright &copy; manaslu all right reserved.</small>
  </footer>
);
