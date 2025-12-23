import { Container, GridContainer } from '@Components/Container';
import ImagePlaceHolder from '@Components/ImagePlaceHolder';
import Heading from '@Components/Typo/Heading';
import Label from '@Components/Typo/Label';
import Paragraph from '@Components/Typo/Paragraph';
import {
  FontWeight,
  TypoColor,
  TypoFontFamily,
  TypoTagHeading,
  TypoTagLabel,
  TypoTagParagraph,
  TypoTransform,
} from '@Enums/typo';
import type React from 'react';

import styles from './about.module.scss';

function About(): React.ReactElement {
  return (
    <div className={styles.about}>
      <Container className={styles.about_container}>
        <GridContainer className={styles.about_grid}>
          <div className={styles.about_left}>
            <Heading
              as={TypoTagHeading.h2}
              fontWeight={FontWeight.semiBold}
              textTransform={TypoTransform.uppercase}
              size={130}
              fontFamily={TypoFontFamily.raleway}
              color={TypoColor.vani}
            >
              About
            </Heading>
            <div className={styles.about_left_image}>
              <ImagePlaceHolder src="/images/about.jpg" alt="About" width={1000} height={1000} />
            </div>
          </div>
          <div className={styles.about_right}>
            <Paragraph
              as={TypoTagParagraph.p}
              size={18}
              color={TypoColor.vani}
              className={styles.about_right_paragraph}
            >
              We have created an architectural and design bureau, distinguished by an innovative
              creative approach in the field of design and the highest level of ethics in the field
              of business, based on honest and open relationships, we reach an understanding with
              the client and partners. We brought together highly qualified professionals dedicated
              to their work, motivated to succeed in all areas related to the objects of
              architecture and design.
              <br />
              <br />
              <br />
              High standards of quality, creativity of ideas, absolute mastery of the regulatory
              framework, responsibility for the executed projects - all this enables the client to
              trust us. We are focused on satisfying the client&apos;s design needs, integrating
              them into the creative process of architectural design, interior design and other
              sections of the project. We are expanding the range of activities of our architectural
              company, to achieve a balance in the system of &quot;ideas and implementation.&quot;
              Our team consists of architects, designers and engineers from different areas.
            </Paragraph>
            <div className={styles.about_right_items}>
              <div className={styles.about_right_items_item}>
                <Label
                  as={TypoTagLabel.span}
                  size={60}
                  fontWeight={FontWeight.semiBold}
                  color={TypoColor.vani}
                >
                  286
                </Label>
                <Label
                  as={TypoTagLabel.label}
                  size={20}
                  textTransform={TypoTransform.uppercase}
                  fontWeight={FontWeight.regular}
                  color={TypoColor.vani}
                >
                  Unique Projects Finished
                </Label>
              </div>
              <div className={styles.about_right_items_item}>
                <Label
                  as={TypoTagLabel.span}
                  size={60}
                  fontWeight={FontWeight.semiBold}
                  color={TypoColor.vani}
                >
                  139
                </Label>

                <Label
                  as={TypoTagLabel.label}
                  size={20}
                  textTransform={TypoTransform.uppercase}
                  fontWeight={FontWeight.regular}
                  color={TypoColor.vani}
                >
                  Projects in Progress
                </Label>
              </div>
              <div className={styles.about_right_items_item}>
                <Label
                  as={TypoTagLabel.span}
                  size={60}
                  fontWeight={FontWeight.semiBold}
                  color={TypoColor.vani}
                >
                  16
                </Label>
                <Label
                  as={TypoTagLabel.label}
                  size={20}
                  textTransform={TypoTransform.uppercase}
                  fontWeight={FontWeight.regular}
                  color={TypoColor.vani}
                >
                  Achievements
                </Label>
              </div>
              <div className={styles.about_right_items_item}>
                <Label
                  as={TypoTagLabel.span}
                  size={60}
                  fontWeight={FontWeight.semiBold}
                  color={TypoColor.vani}
                >
                  13
                </Label>
                <Label
                  as={TypoTagLabel.label}
                  size={20}
                  textTransform={TypoTransform.uppercase}
                  fontWeight={FontWeight.regular}
                  color={TypoColor.vani}
                >
                  Countries that We Operate In
                </Label>
              </div>
            </div>
          </div>
        </GridContainer>
      </Container>
    </div>
  );
}

export default About;
