import { TypoTagLabel } from '@Enums/typo';
import cn from 'classnames';
import type React from 'react';

import { BaseText, type BaseTextProps } from '../Base';
import styles from './styles.module.scss';

type LabelProps = React.HTMLAttributes<HTMLLabelElement> &
  BaseTextProps & {
    size?: 200 | 64 | 28 | 22 | 24 | 20 | 18 | 17 | 16 | 14 | 12 | 13 | 60;
    as?: TypoTagLabel;
    ref?: React.Ref<HTMLLabelElement>;
  };

const Label = ({ ...props }: LabelProps): React.JSX.Element => {
  const {
    size = 18,
    as = TypoTagLabel.span,
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

export default Label;
