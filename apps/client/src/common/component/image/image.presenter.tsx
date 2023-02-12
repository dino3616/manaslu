import NextImage from 'next/image';
import type { ComponentPropsWithoutRef, FC } from 'react';

export type ImageProps = ComponentPropsWithoutRef<typeof NextImage>;

export const Image: FC<ImageProps> = ({ ...props }) => <NextImage {...props} />;
