import { Container } from '@Components/Container';
import Heading from '@Components/Typo/Heading';
import { FontWeight, TypoColor, TypoFontFamily, TypoTagHeading, TypoTransform } from '@Enums/typo';
import type React from 'react';

import ItemOffer from './ItemOffer';
import styles from './offer.module.scss';

function Offer(): React.ReactElement {
  return (
    <div className={styles.offer}>
      <Container>
        <Heading
          as={TypoTagHeading.h2}
          fontWeight={FontWeight.semiBold}
          textTransform={TypoTransform.uppercase}
          size={130}
          fontFamily={TypoFontFamily.raleway}
          color={TypoColor.vani}
        >
          we offer
        </Heading>
        <div className={styles.offer_items}>
          <ItemOffer
            title="DESIGN OF HOUSES"
            image="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287"
            number={12}
            className={styles.offer_item}
          />
          <ItemOffer
            title="INTERIOR DESIGN"
            image="https://images.unsplash.com/photo-1632935187086-49a9d8027292?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1322"
            number={47}
            className={styles.offer_item}
          />
          <ItemOffer
            title="DESIGN OF PUBLIC OBJECTS"
            image="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1365"
            number={18}
            className={styles.offer_item}
          />
          <ItemOffer
            title="DESIGN OF PUBLIC INTERIOR"
            image="https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287"
            number={24}
            className={styles.offer_item}
          />
        </div>
      </Container>
    </div>
  );
}

export default Offer;
