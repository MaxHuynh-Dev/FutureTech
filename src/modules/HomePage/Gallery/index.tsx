import PrimaryButton from '@Components/Buttons/PrimaryButton';
import { GridContainer } from '@Components/Container';
import Heading from '@Components/Typo/Heading';
import Paragraph from '@Components/Typo/Paragraph';
import {
  FontWeight,
  TypoColor,
  TypoFontFamily,
  TypoTagHeading,
  TypoTagParagraph,
  TypoTransform,
} from '@Enums/typo';
import type React from 'react';

import styles from './gallery.module.scss';
import Slide from './Slide';

const IMGS = [
  'https://images.unsplash.com/photo-1638962502979-05d81dcaa096?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2777',
  'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335',
  'https://images.unsplash.com/photo-1632935187086-49a9d8027292?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1322',
  'https://images.unsplash.com/photo-1680503397671-caa25818d36f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370',
  'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287',
];

function Gallery(): React.ReactElement {
  return (
    <div className={styles.gallery}>
      <GridContainer>
        <div className={styles.gallery_left}>
          <Heading
            as={TypoTagHeading.h2}
            fontWeight={FontWeight.semiBold}
            textTransform={TypoTransform.uppercase}
            size={130}
            fontFamily={TypoFontFamily.raleway}
            color={TypoColor.vani}
          >
            GALLERY
          </Heading>
          <div className={styles.gallery_left_bottom}>
            <Paragraph
              as={TypoTagParagraph.p}
              textTransform={TypoTransform.uppercase}
              size={20}
              color={TypoColor.vani}
            >
              We are constantly growing, learning, and improving and our partners are steadily
              increasing. 286 projects is a sizable number, but we always strive to be better, more
              relevant, more determined, and more successful than yesterday. We are not going to
              stop.
            </Paragraph>
            <PrimaryButton text="Explore our work" />
          </div>
        </div>
        <div className={styles.gallery_right}>
          <Slide imgs={IMGS} />
          <Slide direction="backward" imgs={IMGS.reverse()} />
        </div>
      </GridContainer>
    </div>
  );
}

export default Gallery;
