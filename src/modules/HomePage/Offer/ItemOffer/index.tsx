import ImagePlaceHolder from '@Components/ImagePlaceHolder';
import Label from '@Components/Typo/Label';
import { FontWeight, TypoColor, TypoTagLabel, TypoTransform } from '@Enums/typo';
import cn from 'classnames';
import type React from 'react';

import styles from './itemOffer.module.scss';

interface TItemOffer {
  title: string;
  image: string;
  number: number;
  className?: string;
}

function ItemOffer({ title, image, number, className }: TItemOffer): React.ReactElement {
  return (
    <div className={cn(styles.itemOffer, className)}>
      <div className={styles.itemOffer_header}>
        <Label
          as={TypoTagLabel.span}
          size={60}
          textTransform={TypoTransform.uppercase}
          color={TypoColor.dark_grey}
          className={styles.itemOffer_title}
        >
          {title}
        </Label>
        <Label
          as={TypoTagLabel.span}
          size={22}
          textTransform={TypoTransform.uppercase}
          color={TypoColor.dark_grey}
          fontWeight={FontWeight.semiBold}
          className={styles.itemOffer_number}
        >
          {number}
        </Label>
      </div>
      <div className={styles.itemOffer_image}>
        <ImagePlaceHolder src={image} alt="Offer" width={1000} height={1000} />
      </div>
    </div>
  );
}

export default ItemOffer;
