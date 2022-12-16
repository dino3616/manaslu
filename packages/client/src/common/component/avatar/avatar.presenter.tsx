import Image, { ImageProps } from 'next/image';
import type { FC } from 'react';
import { twMerge } from '@/util/tw-merge';

export type AvatarProps = {
  size: Required<Pick<ImageProps, 'width'>>['width'];
} & Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>;

export const Avatar: FC<AvatarProps> = ({ size, className, ...props }) => (
  <Image src="/favicon.png" alt="avatar" width={size} height={size} className={twMerge('rounded-[2.0rem]', className)} {...props} />
);
