'use client';

import { Container } from '@Components/Container';
import SvgInsert from '@Components/SvgInsert';
import Heading from '@Components/Typo/Heading';
import Label from '@Components/Typo/Label';
import {
  FontWeight,
  TypoColor,
  TypoFontFamily,
  TypoTagHeading,
  TypoTagLabel,
  TypoTransform,
} from '@Enums/typo';
import type { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import type React from 'react';

import styles from './projects.module.scss';
import Slide from './Slide';
import { usePrevNextButtons } from './usePrevNextButtons';

function Projects(): React.ReactElement {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    // loop: true,
  });
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <div className={styles.projects}>
      <Container>
        <div className={styles.projects_header}>
          <Heading
            as={TypoTagHeading.h2}
            fontWeight={FontWeight.semiBold}
            textTransform={TypoTransform.uppercase}
            size={130}
            fontFamily={TypoFontFamily.raleway}
            color={TypoColor.vani}
          >
            projects
          </Heading>
          <div className={styles.projects_header_number}>
            <Label
              as={TypoTagLabel.span}
              size={60}
              fontWeight={FontWeight.semiBold}
              textTransform={TypoTransform.uppercase}
              color={TypoColor.vani}
              className={styles.projects_header_number_label}
            >
              1/6
            </Label>
            <div className={styles.projects_arrows}>
              <button
                type="button"
                className={styles.projects_arrow}
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              >
                <SvgInsert src="/icons/arrow-left.svg" width={49} height={49} />
              </button>

              <button
                type="button"
                className={styles.projects_arrow}
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              >
                <SvgInsert src="/icons/arrow-right.svg" width={49} height={49} />
              </button>
            </div>
          </div>
        </div>
      </Container>
      <Slide emblaRef={emblaRef as unknown as EmblaCarouselType} />
    </div>
  );
}

export default Projects;
