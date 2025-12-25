"use client";

import { Container, GridContainer } from "@/components/Container";
import Text from "@/components/ui/text";
import type React from "react";

function Hero(): React.ReactElement {
  return (
    <Container className="laptop:mt-[126px] desktop:mt-[170px] mt-[149px]">
      <GridContainer className="">
        <div className="laptop:pt-[100px] desktop:pt-[150px] col-span-7 pt-[40px]">
          <Text as="p" size={18} weight="medium" color="dark-40" font="heading">
            Your Journey to Tomorrow Begins Here
          </Text>
          <Text
            as="h1"
            size={30}
            weight="medium"
            color="white"
            font="heading"
            className="mt:[14px] mb:[10px] laptop:mt-[20px] laptop:mb-[14px] desktop:mt-[30px] desktop:mb-[20px]"
          >
            Explore the Frontiers of <br /> Artificial Intelligence
          </Text>
          <Text as="p" size={14} color="grey-50">
            Welcome to the epicenter of AI innovation. FutureTech AI News is
            your passport to a world where machines think, learn, and reshape
            the future. Join us on this visionary expedition into the heart of
            AI.
          </Text>
        </div>
        <div className="border-dark-15 laptop:pl-[80px] col-span-5 border-l pt-[150px]">
          right content
        </div>
      </GridContainer>
    </Container>
  );
}

export default Hero;
