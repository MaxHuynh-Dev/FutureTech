import { Container, GridContainer } from '@Components/Container';
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

import styles from './footer.module.scss';
import Form from './Form';

function Footer(): React.JSX.Element {
  return (
    <div className={styles.footer}>
      <Container>
        <GridContainer>
          <div className={styles.footer_left}>
            <div className={styles.footer_left_top}>
              <Heading
                as={TypoTagHeading.h2}
                fontWeight={FontWeight.semiBold}
                textTransform={TypoTransform.uppercase}
                size={130}
                fontFamily={TypoFontFamily.raleway}
                color={TypoColor.vani}
              >
                CONTACTS
              </Heading>
              <div className={styles.footer_left_top_paragraph}>
                <Paragraph
                  as={TypoTagParagraph.p}
                  textTransform={TypoTransform.uppercase}
                  size={20}
                  color={TypoColor.vani}
                >
                  We are ready to share with you our design vision and lead you into the exciting
                  world of creativity.
                </Paragraph>
              </div>
            </div>
            <div className={styles.footer_left_bottom}>
              <div className={styles.footer_left_bottom_item}>
                <Label
                  as={TypoTagLabel.label}
                  textTransform={TypoTransform.uppercase}
                  size={20}
                  color={TypoColor.vani}
                  fontWeight={FontWeight.semiBold}
                >
                  Address
                </Label>
                <Paragraph as={TypoTagParagraph.p} size={18} color={TypoColor.vani}>
                  Address: 123 Main St, Anytown, USA
                </Paragraph>
              </div>
              <div className={styles.footer_left_bottom_item}>
                <Label
                  as={TypoTagLabel.label}
                  textTransform={TypoTransform.uppercase}
                  size={20}
                  color={TypoColor.vani}
                  fontWeight={FontWeight.semiBold}
                >
                  email
                </Label>
                <Paragraph as={TypoTagParagraph.div} size={18} color={TypoColor.vani}>
                  <a href="mailto:brilini.mail.asb@gmail.com">brilini.mail.asb@gmail.com</a>
                </Paragraph>
              </div>
              <div className={styles.footer_left_bottom_item}>
                <Label
                  as={TypoTagLabel.label}
                  textTransform={TypoTransform.uppercase}
                  size={20}
                  color={TypoColor.vani}
                  fontWeight={FontWeight.semiBold}
                >
                  phone
                </Label>
                <Paragraph as={TypoTagParagraph.div} size={18} color={TypoColor.vani}>
                  <a href="tel:+380683650360">+38 068 365 03 60</a>
                  <a href="tel:+380662304412">+38 066 230 44 12</a>
                </Paragraph>
              </div>
            </div>
          </div>
          <div className={styles.footer_right}>
            <div className={styles.footer_right_inner}>
              <Heading
                as={TypoTagHeading.h2}
                fontWeight={FontWeight.semiBold}
                textTransform={TypoTransform.uppercase}
                size={60}
                fontFamily={TypoFontFamily.raleway}
                color={TypoColor.vani}
              >
                Let’s talk about your project!
              </Heading>
              <Form />
            </div>
          </div>
        </GridContainer>
      </Container>
    </div>
  );
}

export default Footer;
