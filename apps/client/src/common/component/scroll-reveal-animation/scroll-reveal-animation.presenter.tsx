import { motion } from 'framer-motion';
import type { ComponentPropsWithoutRef, FC } from 'react';

export type ScrollRevealAnimationProps = ComponentPropsWithoutRef<typeof motion.div> & {
  once?: boolean;
  duration?: number;
  delay?: number;
  distance?: string;
};

export const ScrollRevealAnimation: FC<ScrollRevealAnimationProps> = (
  { once, duration, delay, distance, children, ...props } = { once: true, duration: 0.8, delay: 0, distance: '40px' },
) => (
  <motion.div
    variants={{
      offscreen: {
        y: distance,
        opacity: 0,
      },
      onscreen: {
        y: 0,
        opacity: 1,
        transition: {
          duration,
          delay,
        },
      },
    }}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once, amount: 0 }}
    {...props}
  >
    {children}
  </motion.div>
);
