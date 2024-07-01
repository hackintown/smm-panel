
import { cva } from 'class-variance-authority';

export const navbarRootStyles = cva('flex justify-between items-center p-4 bg-foreground shadow-md', {
  variants: {},
  defaultVariants: {},
});

export const navbarListStyles = cva('hidden md:flex gap-4', {
  variants: {},
  defaultVariants: {},
});

export const navbarItemStyles = cva('text-gray-800 hover:text-primary-color transition duration-300', {
  variants: {},
  defaultVariants: {},
});

export const navbarTriggerStyles = cva('text-gray-800 md:hidden', {
  variants: {},
  defaultVariants: {},
});

export const navbarContentStyles = cva('absolute right-4 top-16 bg-white shadow-md rounded-lg p-4 w-48 hidden md:hidden transition transform duration-300 ease-in-out', {
  variants: {
    open: {
      true: 'block',
      false: 'hidden',
    },
  },
  defaultVariants: {
    open: false,
  },
});
