'use client';

import { Container, GridContainer } from '@/components/Container';
import Text from '@/components/ui/text';
import type React from 'react';

function Hero(): React.ReactElement {
  return (
    <Container className="mt-[149px] laptop:mt-[126px] desktop:mt-[170px]">
      <Container>
        <Text as="h1" size={30} color={'grey-60'} weight={'medium'} font={'heading'}>
          Hello
        </Text>
      </Container>
      <GridContainer>
        <div>left content</div>
        <div>right content</div>
      </GridContainer>
    </Container>
  );
}

export default Hero;
