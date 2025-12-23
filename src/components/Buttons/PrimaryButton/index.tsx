import SvgInsert from '@Components/SvgInsert';
import Label from '@Components/Typo/Label';
import { FontWeight, TypoColor, TypoTagLabel, TypoTransform } from '@Enums/typo';
import cn from 'classnames';
import type React from 'react';

import s from './styles.module.scss';

interface TPrimaryButton {
  color?: 'dark' | 'white';
  variant?: 'solid' | 'outline';
  weight?: 'light' | 'regular' | 'bold';
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
  text?: string;
  className?: string;
  onClick?: () => void;
}

export default function PrimaryButton({ ...props }: TPrimaryButton): React.JSX.Element {
  const { text = '', className, color = 'dark', onClick } = props;

  const primaryButtonClassNames = cn(s.primaryButton, s[`primaryButton_${color}`], className);

  return (
    <button type="button" className={primaryButtonClassNames} onClick={onClick}>
      <div className={s.primaryButton_text}>
        <Label
          color={TypoColor.black}
          size={22}
          fontWeight={FontWeight.semiBold}
          textTransform={TypoTransform.uppercase}
          as={TypoTagLabel.label}
          className={s.primaryButton_text}
        >
          {text}
        </Label>
      </div>

      <div className={s.primaryButton_icon}>
        <SvgInsert
          src="/icons/arrow-btn.svg"
          width={19}
          height={19}
          className={s.primaryButton_icon_arrow}
        />
      </div>
    </button>
  );
}
