import * as RadixUiNavigationMenu from '@radix-ui/react-navigation-menu';
import type { ComponentPropsWithoutRef, FC } from 'react';
import { Link as PrimitiveLink } from '@/common/component/link/link.presenter';

type LinkProps = ComponentPropsWithoutRef<typeof PrimitiveLink>;

const Link: FC<LinkProps> = ({ children, ...props }) => (
  <RadixUiNavigationMenu.Link asChild>
    <PrimitiveLink {...props}>{children}</PrimitiveLink>
  </RadixUiNavigationMenu.Link>
);

export const NavigationMenu: Omit<typeof RadixUiNavigationMenu, 'Link'> & { Link: typeof Link } = { ...RadixUiNavigationMenu, Link };
