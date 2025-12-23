'use client';

import ImagePlaceHolder from '@Components/ImagePlaceHolder';
import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import type React from 'react';

import styles from './slide.module.scss';

interface Props {
  direction?: 'forward' | 'backward';
  imgs: string[];
}

function Slide({ direction = 'forward', imgs }: Props): React.ReactElement {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      axis: 'y',
    },
    [
      AutoScroll({
        direction,
      }),
    ]
  );

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla_container}>
        {imgs.map((img) => (
          <div className={styles.embla_slide} key={img}>
            <ImagePlaceHolder src={img} alt="Gallery" width={1000} height={1000} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slide;
