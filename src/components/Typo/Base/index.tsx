import {
  FontWeight,
  TypoColor,
  TypoFontFamily,
  type TypoTagHeading,
  type TypoTagLabel,
  type TypoTagParagraph,
  TypoTransform,
} from '@Enums/typo';
import cn from 'classnames';
import type React from 'react';

export interface BaseTextProps {
  as: TypoTagHeading | TypoTagParagraph | TypoTagLabel;
  children: React.ReactNode;
  className?: string;
  color?: TypoColor;
  fontWeight?: FontWeight;
  fontFamily?: TypoFontFamily;
  textTransform?: TypoTransform;
  fontSize?: string;
}

export const BaseText: React.FC<BaseTextProps> = ({ ...props }) => {
  const {
    as: Component,
    color = TypoColor.black,
    fontWeight = FontWeight.regular,
    textTransform = TypoTransform.none,
    fontFamily = TypoFontFamily.inter,
    children,
    className,
    ...rest
  } = props;

  const textClassNames = cn(
    `text__${color}`,
    `font-weight__${fontWeight}`,
    `text-transform__${textTransform}`,
    `font__${fontFamily}`,
    className
  );

  return (
    <Component className={textClassNames} {...rest}>
      {children}
    </Component>
  );
};

BaseText.displayName = 'BaseText';
