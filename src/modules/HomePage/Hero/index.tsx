"use client";

import Text from "@/components/ui/text";
import type React from "react";
import Count from "./Count";
import HeroHighlights from "./HeroHighlights";
import HeroRightPanel from "./HeroRightPanel";

function Hero(): React.ReactElement {
  return (
    <>
      <div className="desktop:grid-cols-[1fr_943px_653px_1fr] laptop:grid-cols-[1fr_837px_523px_1fr] laptop:mt-[126px] desktop:mt-[170px] divide-dark-15 mt-[149px] grid grid-cols-[1fr_358px_1fr] grid-rows-[1fr_auto]">
        <div className="laptop:pt-[100px] desktop:pt-[150px] laptop:pb-[100px] col-span-1 col-start-2 pt-[40px] pb-[30px]">
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
        <div className="border-dark-15 divide-dark-15 desktop:gap-[50px] laptop:gap-[40px] col-span-1 col-start-2 row-span-1 row-start-2 grid grid-cols-3 gap-[20px] divide-x border-t">
          <Count number="300" description="Resources available" />
          <Count number="12k" description="Total Downloads" />
          <Count number="10k" description="Active Users" />
        </div>
        <HeroRightPanel />
        <div className="border-dark-15 col-span-1 col-start-1 row-span-1 row-start-2 border-t" />
      </div>
      <HeroHighlights />
    </>
  );
}

export default Hero;
