import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const textVariants = cva('text-foreground transition-colors duration-200', {
  variants: {
    size: {
      //   12: 'text-xs',
      //   14: 'text-sm',
      16: 'text-base',
      //   18: 'text-lg',

      //   20: 'text-xl laptop:text-2xl',
      //   24: 'text-2xl laptop:text-3xl',
      30: ' tracking-[-0.9px] text-[30px]/[1.2] laptop:tracking-[-1.65px] desktop:tracking-[-2.1px] laptop:text-[55px] desktop:text-[70px]',
      //   36: 'text-4xl laptop:text-5xl desktop:text-6xl',
      //   48: 'text-5xl laptop:text-6xl desktop:text-7xl',
    },

    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
    font: {
      body: 'font-body',
      heading: 'font-heading',
    },

    color: {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      primary: 'text-primary',
      error: 'text-destructive',
      white: 'text-white',
    },
  },
  defaultVariants: { size: 16, weight: 'normal', color: 'default', font: 'body' },
});

type TextAs = 'p' | 'span' | 'div' | 'label' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TextOwnProps<TAs extends TextAs> = VariantProps<typeof textVariants> & {
  as?: TAs;
  className?: string;
};

export type TextProps<TAs extends TextAs = 'p'> = TextOwnProps<TAs> &
  Omit<React.ComponentPropsWithoutRef<TAs>, keyof TextOwnProps<TAs>>;

interface TextComponent {
  <TAs extends TextAs = 'p'>(
    props: TextProps<TAs> & { ref?: React.ForwardedRef<React.ComponentRef<TAs>> }
  ): React.ReactElement | null;
  displayName?: string;
}

const Text = React.forwardRef<HTMLElement, TextProps<TextAs>>(function TextInner(
  { as, className, size, weight, color, font, ...props }: TextProps<TextAs>,
  ref
) {
  const Component: TextAs = as ?? 'p';

  return React.createElement(Component, {
    ...(props as unknown as Record<string, unknown>),
    ref,
    className: cn(textVariants({ size, weight, color, font, className })),
  });
}) as unknown as TextComponent;

Text.displayName = 'Text';

export default Text;
