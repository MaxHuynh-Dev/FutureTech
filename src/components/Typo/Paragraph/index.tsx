import { TypoTagParagraph } from '@Enums/typo';
import cn from 'classnames';
import type React from 'react';

import { BaseText, type BaseTextProps } from '../Base';
import styles from './styles.module.scss';

type ParagraphProps = React.HTMLAttributes<HTMLDivElement | HTMLParagraphElement> &
  BaseTextProps & {
    size?: 48 | 36 | 30 | 24 | 16 | 18 | 20;
    as?: TypoTagParagraph;
    ref?: React.Ref<HTMLDivElement | HTMLParagraphElement>;
  };

const Paragraph = ({ ...props }: ParagraphProps): React.JSX.Element => {
  const {
    size = 18,
    as = TypoTagParagraph.div,
    fontWeight,
    textTransform,
    className,
    children,
    ...restProps
  } = props;

  const textClassNames = cn(styles.text, styles[`text__${String(size)}`], className);

  return (
    <BaseText
      as={as}
      fontWeight={fontWeight}
      textTransform={textTransform}
      className={textClassNames}
      {...restProps}
    >
      {children}
    </BaseText>
  );
};

export default Paragraph;
