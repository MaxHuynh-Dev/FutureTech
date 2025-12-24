'use client';

import { Container, GridContainer } from '@/components/Container';
import type React from 'react';

function Hero(): React.ReactElement {
  return (
    <Container className="mt-[149px] laptop:mt-[126px] desktop:mt-[170px]">
      <GridContainer className="">
        <div className="col-span-7 pt-[40px] laptop:pt-[100px] desktop:pt-[150px]">
          left content
        </div>
        <div className="col-span-5 border-l border-dark-15 pt-[150px] laptop:pl-[80px]">
          right content
        </div>
      </GridContainer>
    </Container>
  );
}

export default Hero;
