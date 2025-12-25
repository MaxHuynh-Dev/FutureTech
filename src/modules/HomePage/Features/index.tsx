import { Container } from "@/components/Container";
import Text from "@/components/ui/text";
import type React from "react";

type FeatureCardModel = {
  title: string;
  description: string;
};

type FeatureBlockModel = {
  title: string;
  description: string;
  cardList: readonly FeatureCardModel[];
};

const FEATURE_BLOCK_LIST: readonly FeatureBlockModel[] = [
  {
    title: "Future Technology Blog",
    description: "Stay informed with our blog section dedicated to future technology.",
    cardList: [
      {
        title: "Quantity",
        description: "Over 1,000 articles on emerging tech trends and breakthroughs.",
      },
      {
        title: "Variety",
        description: "Articles cover fields like AI, robotics, biotechnology, and more.",
      },
      {
        title: "Frequency",
        description: "Fresh content added daily to keep you up to date.",
      },
      {
        title: "Authoritative",
        description: "Written by our team of tech experts and industry professionals.",
      },
    ],
  },
  {
    title: "Research Insights Blogs",
    description: "Dive deep into future technology concepts with our research section.",
    cardList: [
      {
        title: "Depth",
        description: "500+ research articles for in-depth understanding.",
      },
      {
        title: "Graphics",
        description: "Visual aids and infographics to enhance comprehension.",
      },
      {
        title: "Trends",
        description: "Explore emerging trends in future technology research.",
      },
      {
        title: "Contributors",
        description: "Contributions from tech researchers and academics.",
      },
    ],
  },
];

function FeatureCard({ title, description }: FeatureCardModel): React.ReactElement {
  return (
    <div className="bg-dark-10 border-dark-15 flex flex-col gap-[20px] rounded-[12px] border p-[40px]">
      <Text as="p" size={18} weight="medium" color="white" className="desktop:text-[24px] desktop:tracking-[-0.72px]">
        {title}
      </Text>
      <Text as="p" size={14} color="grey-60" className="desktop:text-[18px] desktop:tracking-[-0.54px]">
        {description}
      </Text>
    </div>
  );
}

function Features(): React.ReactElement {
  return (
    <section className="border-dark-15 border-y" id="features">
      <div className="bg-dark-10 desktop:py-[120px] py-[80px]">
        <Container className="flex flex-col gap-[16px]">
          <div className="bg-dark-20 w-fit rounded-[4px] px-[10px] py-[6px]">
            <Text as="p" size={16} weight="medium" color="white" className="desktop:text-[20px] desktop:tracking-[-0.6px]">
              Unlock the Power of
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
            FutureTech Features
          </Text>
        </Container>
      </div>

      {FEATURE_BLOCK_LIST.map((block: FeatureBlockModel, idx: number) => {
        return (
          <div key={block.title} className={idx === 0 ? "" : "border-dark-15 border-t"}>
            <Container className="desktop:gap-[80px] grid grid-cols-1 gap-[40px] py-[80px] desktop:grid-cols-[519px_1fr]">
              <div className="flex flex-col justify-center gap-[50px]">
                <div className="h-[80px] w-[80px] rounded-full bg-yellow-55/10" aria-hidden="true" />
                <div className="flex flex-col gap-[16px]">
                  <Text
                    as="h3"
                    size={24}
                    weight="semibold"
                    color="white"
                    font="heading"
                    className="desktop:text-[40px] desktop:tracking-[-1.2px]"
                  >
                    {block.title}
                  </Text>
                  <Text as="p" size={14} color="grey-60" className="desktop:text-[18px] desktop:tracking-[-0.54px]">
                    {block.description}
                  </Text>
                </div>
              </div>

              <div className="border-dark-15 desktop:pl-[80px] grid grid-cols-1 gap-[30px] border-l pl-[20px] md:grid-cols-2">
                {block.cardList.map((card: FeatureCardModel) => {
                  return <FeatureCard key={card.title} title={card.title} description={card.description} />;
                })}
              </div>
            </Container>
          </div>
        );
      })}
    </section>
  );
}

export default Features;


