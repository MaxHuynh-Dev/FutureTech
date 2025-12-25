"use client";

import { Container } from "@/components/Container";
import Text from "@/components/ui/text";
import { ArrowUpRight } from "lucide-react";
import type React from "react";

interface HeroHighlightItemModel {
  title: string;
  subtitle: string;
  description: string;
}

const HERO_HIGHLIGHT_ITEM_LIST: readonly HeroHighlightItemModel[] = [
  {
    title: "Latest News Updates",
    subtitle: "Stay Current",
    description: "Over 1,000 articles published monthly",
  },
  {
    title: "Expert Contributors",
    subtitle: "Trusted Insights",
    description: "50+ renowned AI experts on our team",
  },
  {
    title: "Global Readership",
    subtitle: "Worldwide Impact",
    description: "2 million monthly readers",
  },
];

function HeroHighlights(): React.ReactElement {
  return (
    <div className="border-dark-15 border-t">
      <Container className="desktop:grid-cols-3 grid grid-cols-1 gap-0">
        {HERO_HIGHLIGHT_ITEM_LIST.map(
          (item: HeroHighlightItemModel, idx: number) => {
            const isFirst: boolean = idx === 0;

            return (
              <div
                key={item.title}
                className={[
                  "desktop:py-[50px] py-[30px]",
                  !isFirst
                    ? "desktop:border-dark-15 desktop:border-l desktop:pl-[80px]"
                    : "desktop:pr-[80px]",
                ].join(" ")}
              >
                <div className="flex flex-col gap-[30px]">
                  <div className="flex items-center gap-[20px]">
                    <div className="flex flex-col gap-[4px]">
                      <Text as="p" size={16} weight="medium" color="white">
                        {item.title}
                      </Text>
                      <Text as="p" size={14} color="grey-50">
                        {item.subtitle}
                      </Text>
                    </div>
                    <div className="bg-yellow-55 ml-auto flex h-[52px] w-[52px] items-center justify-center rounded-full">
                      <ArrowUpRight
                        className="text-dark-08 h-6 w-6"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <Text
                    as="p"
                    size={16}
                    color="grey-60"
                    font="heading"
                    className="desktop:text-[20px] desktop:tracking-[-0.6px] text-[16px]/[1.5] tracking-[-0.48px]"
                  >
                    {item.description}
                  </Text>
                </div>
              </div>
            );
          },
        )}
      </Container>
    </div>
  );
}

export default HeroHighlights;
