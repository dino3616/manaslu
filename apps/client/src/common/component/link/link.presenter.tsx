import NextLink from 'next/link';
import type { ComponentPropsWithoutRef, FC } from 'react';

export type LinkProps = ComponentPropsWithoutRef<typeof NextLink>;

export const Link: FC<LinkProps> = ({ children, ...props }) => (
  <NextLink scroll={false} {...props}>
    {children}
  </NextLink>
);
