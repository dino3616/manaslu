import Link from 'next/link';
import type { ComponentPropsWithoutRef, FC } from 'react';
import { twMerge } from '@/util/tw-merge';

export type HeaderProps = Omit<ComponentPropsWithoutRef<'header'>, 'children'>;

export const Header: FC<HeaderProps> = ({ className, ...props }) => (
  <header className={twMerge('bg-white py-6 shadow-lg', className)} {...props}>
    <ul className="flex items-center justify-center space-x-7">
      <li>
        <Link href="/product" className="transition-colors hover:text-gray-400">
          Product
        </Link>
      </li>
      <li>
        <Link href="/blog" className="transition-colors hover:text-gray-400">
          Blog
        </Link>
      </li>
      <li>
        <Link href="/" className="text-lg font-semibold uppercase tracking-wide">
          manaslu.dev
        </Link>
      </li>
      <li>
        <Link href="/about" className="transition-colors hover:text-gray-400">
          About
        </Link>
      </li>
      <li>
        <Link href="/skill" className="transition-colors hover:text-gray-400">
          Skill
        </Link>
      </li>
    </ul>
  </header>
);
