import { motion } from 'framer-motion';
import type { ComponentPropsWithoutRef, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonProps = Omit<ComponentPropsWithoutRef<typeof motion.button>, 'type'> & {
  asIcon?: boolean;
  disabledHoverAnimation?: boolean;
  disabledTapAnimation?: boolean;
};

export const Button: FC<ButtonProps> = ({ asIcon, disabledHoverAnimation, disabledTapAnimation, className, children, ...props }) => (
  <motion.button
    whileHover={!disabledHoverAnimation ? { translateY: -3 } : undefined}
    whileTap={!disabledTapAnimation ? { scale: 0.93 } : undefined}
    className={twMerge(
      'flex justify-center items-center gap-2 rounded-xl bg-white p-5 drop-shadow-lg hover:drop-shadow-xl',
      asIcon && 'bg-transparent p-0',
      className,
    )}
    type="button"
    {...props}
  >
    {children}
  </motion.button>
);
