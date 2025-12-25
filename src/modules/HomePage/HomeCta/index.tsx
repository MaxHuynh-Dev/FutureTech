import { Container } from "@/components/Container";
import Text from "@/components/ui/text";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

type CtaCardModel = {
  title: string;
  description: string;
};

const CTA_CARD_LIST: readonly CtaCardModel[] = [
  {
    title: "Resource Access",
    description: "Visitors can access a wide range of resources, including ebooks, whitepapers, reports.",
  },
  {
    title: "Community Forum",
    description: "Join our active community forum to discuss industry trends, share insights, and collaborate with peers.",
  },
  {
    title: "Tech Events",
    description: "Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.",
  },
];

function HomeCta(): React.ReactElement {
  return (
    <section className="bg-dark-10 border-dark-15 border-y py-[120px]">
      <Container className="flex flex-col gap-[100px]">
        <div className="flex items-center gap-[80px]">
          <div className="relative h-[150px] w-[150px]">
            <Image src="/images/Logo.svg" alt="FutureTech" fill sizes="150px" className="object-contain" />
          </div>

          <div className="flex flex-1 flex-col gap-[30px]">
            <div className="flex flex-col gap-[16px]">
              <div className="bg-dark-20 w-fit rounded-[4px] px-[10px] py-[6px]">
                <Text as="p" size={16} weight="medium" color="white" className="desktop:text-[20px] desktop:tracking-[-0.6px]">
                  Learn, Connect, and Innovate
                </Text>
              </div>

              <Text
                as="h2"
                size={30}
                weight="medium"
                color="white"
                font="heading"
                className="desktop:text-[58px] desktop:tracking-[-1.74px] text-[34px]/[1.3]"
              >
                Be Part of the Future Tech Revolution
              </Text>
            </div>

            <Text as="p" size={14} color="grey-50" className="desktop:text-[18px] desktop:tracking-[-0.54px]">
              Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.
            </Text>
          </div>
        </div>

        <div className="bg-dark-08 border-dark-15 grid grid-cols-1 gap-[20px] rounded-[12px] border p-[20px] desktop:grid-cols-3">
          {CTA_CARD_LIST.map((card: CtaCardModel) => {
            return (
              <div key={card.title} className="bg-dark-10 border-dark-15 flex flex-col gap-[20px] rounded-[12px] border p-[40px]">
                <div className="flex items-center gap-[20px]">
                  <Text as="p" size={16} weight="semibold" color="white" className="desktop:text-[22px] desktop:tracking-[-0.66px]">
                    {card.title}
                  </Text>
                  <Link href="/" className="bg-yellow-55 ml-auto flex h-[52px] w-[52px] items-center justify-center rounded-full">
                    <ArrowUpRight className="h-6 w-6 text-dark-08" strokeWidth={1.5} />
                  </Link>
                </div>
                <Text as="p" size={14} color="grey-60" className="desktop:text-[18px] desktop:tracking-[-0.54px]">
                  {card.description}
                </Text>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default HomeCta;


