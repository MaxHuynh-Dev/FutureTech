"use client";

import { Container, GridContainer } from "@/components/Container";
import type React from "react";

function Hero(): React.ReactElement {
  return (
    <Container className="laptop:mt-[126px] desktop:mt-[170px] mt-[149px]">
      <GridContainer className="">
        <div className="laptop:pt-[100px] desktop:pt-[150px] col-span-7 pt-[40px]">
          left content
        </div>
        <div className="border-dark-15 laptop:pl-[80px] col-span-5 border-l pt-[150px]">
          right conten
        </div>
      </GridContainer>
    </Container>
  );
}

export default Hero;
