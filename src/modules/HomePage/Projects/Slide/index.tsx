import { Container } from '@Components/Container';
import ImagePlaceHolder from '@Components/ImagePlaceHolder';
import SvgInsert from '@Components/SvgInsert';
import Label from '@Components/Typo/Label';
import Paragraph from '@Components/Typo/Paragraph';
import { TypoColor, TypoTagLabel, TypoTagParagraph, TypoTransform } from '@Enums/typo';
import type { EmblaCarouselType } from 'embla-carousel';
import type React from 'react';

import styles from './slide.module.scss';

const PROJECTS = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1632935187086-49a9d8027292?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1322',
    title: '269 HOUSE',
    tag: 'interior Design',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1632935187086-49a9d8027292?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1322',
    title: '269 HOUSE',
    tag: 'interior Design',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1632935187086-49a9d8027292?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1322',
    title: '269 HOUSE',
    tag: 'interior Design',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1632935187086-49a9d8027292?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1322',
    title: '269 HOUSE',
    tag: 'interior Design',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1632935187086-49a9d8027292?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1322',
    title: '269 HOUSE',
    tag: 'interior Design',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1632935187086-49a9d8027292?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1322',
    title: '269 HOUSE',
    tag: 'interior Design',
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1632935187086-49a9d8027292?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1322',
    title: '269 HOUSE',
    tag: 'interior Design',
  },
];

function Slide({ emblaRef }: { emblaRef: EmblaCarouselType }): React.ReactElement {
  return (
    <div className={styles.slider}>
      <Container>
        <div className={styles.embla} ref={emblaRef as unknown as React.Ref<HTMLDivElement>}>
          <div className={styles.embla_container}>
            {PROJECTS.map((project) => (
              <div className={styles.slider_item} key={project.id}>
                <div className={styles.slider_item_image}>
                  <ImagePlaceHolder
                    src="https://images.unsplash.com/photo-1632935187086-49a9d8027292?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1322"
                    alt="Project"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.slider_item_content}>
                  <Label
                    as={TypoTagLabel.label}
                    size={60}
                    textTransform={TypoTransform.uppercase}
                    color={TypoColor.vani}
                  >
                    269 HOUSE
                  </Label>
                  <div className={styles.slider_item_content_icon}>
                    <SvgInsert src="/icons/arrow-btn.svg" width={51} height={50} />
                  </div>
                </div>
                <div className={styles.slider_item_tag}>
                  <Paragraph
                    as={TypoTagParagraph.p}
                    size={20}
                    textTransform={TypoTransform.uppercase}
                    color={TypoColor.vani}
                  >
                    interior Design
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Slide;
