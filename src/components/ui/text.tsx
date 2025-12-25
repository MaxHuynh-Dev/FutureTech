import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const textVariants = cva("text-foreground transition-colors duration-200", {
  variants: {
    size: {
      12: "tracking-[-0.36px] text-[12px]/[1.5] laptop:tracking-[-0.42px] laptop:text-[14px] desktop:tracking-[-0.54px] desktop:text-[18px]",
      14: "text-[14px]/[1.5] laptop:text-[16px] desktop:text-[18px]",
      16: "text-base",
      // 18: 'text-lg',

      //   20: 'text-xl laptop:text-2xl',
      //   24: 'text-2xl laptop:text-3xl',
      30: " tracking-[-0.9px] text-[30px]/[1.2] laptop:tracking-[-1.65px] laptop:text-[55px] desktop:tracking-[-2.1px] desktop:text-[70px]",
      //   36: 'text-4xl laptop:text-5xl desktop:text-6xl',
      //   48: 'text-5xl laptop:text-6xl desktop:text-7xl',
    },

    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
    transform: {
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
    },
    font: {
      body: "font-body",
      heading: "font-heading",
    },

    color: {
      default: "text-foreground",
      dark: "text-dark",
      white: "text-white",

      "yellow-55": "text-yellow-55",
      "yellow-60": "text-yellow-60",
      "yellow-70": "text-yellow-70",
      "yellow-80": "text-yellow-80",
      "yellow-90": "text-yellow-90",
      "yellow-95": "text-yellow-95",
      "yellow-97": "text-yellow-97",
      "yellow-99": "text-yellow-99",

      "dark-08": "text-dark-08",
      "dark-10": "text-dark-10",
      "dark-15": "text-dark-15",
      "dark-20": "text-dark-20",
      "dark-25": "text-dark-25",
      "dark-30": "text-dark-30",
      "dark-35": "text-dark-35",
      "dark-40": "text-dark-40",

      "grey-50": "text-grey-50",
      "grey-60": "text-grey-60",
      "grey-70": "text-grey-70",
      "grey-80": "text-grey-80",
      "grey-90": "text-grey-90",
      "grey-95": "text-grey-95",
      "grey-97": "text-grey-97",
      "grey-99": "text-grey-99",
    },
  },
  defaultVariants: {
    size: 16,
    weight: "normal",
    color: "default",
    font: "body",
  },
});

type TextAs =
  | "p"
  | "span"
  | "div"
  | "label"
  | "a"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

type TextOwnProps<TAs extends TextAs> = VariantProps<typeof textVariants> & {
  as?: TAs;
  className?: string;
};

export type TextProps<TAs extends TextAs = "p"> = TextOwnProps<TAs> &
  Omit<React.ComponentPropsWithoutRef<TAs>, keyof TextOwnProps<TAs>>;

interface TextComponent {
  <TAs extends TextAs = "p">(
    props: TextProps<TAs> & {
      ref?: React.ForwardedRef<React.ComponentRef<TAs>>;
    },
  ): React.ReactElement | null;
  displayName?: string;
}

const Text = React.forwardRef<HTMLElement, TextProps<TextAs>>(
  function TextInner(
    {
      as,
      className,
      size,
      weight,
      color,
      font,
      transform,
      ...props
    }: TextProps<TextAs>,
    ref,
  ) {
    const Component: TextAs = as ?? "p";

    return React.createElement(Component, {
      ...(props as unknown as Record<string, unknown>),
      ref,
      className: cn(
        textVariants({ size, weight, color, font, transform, className }),
      ),
    });
  },
) as unknown as TextComponent;

Text.displayName = "Text";

export default Text;
