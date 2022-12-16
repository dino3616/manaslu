import { extendTailwindMerge } from 'tailwind-merge';

export const isGradientName = (classPart: string) => /\w+/.test(classPart);

export const twMerge = extendTailwindMerge({
  classGroups: {
    gradient: [{ gradient: [isGradientName] }],
  },
});
