import { Container } from "@/components/Container";
import Text from "@/components/ui/text";
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

interface TestimonialModel {
  id: string;
  name: string;
  location: string;
  content: string;
}

const TESTIMONIAL_LIST: readonly TestimonialModel[] = [
  {
    id: "t-1",
    name: "Sarah Thompson",
    location: "San Francisco, USA",
    content:
      "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
  },
  {
    id: "t-2",
    name: "Raj Patel",
    location: "Mumbai, India",
    content:
      "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
  },
  {
    id: "t-3",
    name: "Emily Adams",
    location: "London, UK",
    content:
      "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
  },
  {
    id: "t-4",
    name: "Alan Jackson",
    location: "Houston, USA",
    content:
      "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",
  },
  {
    id: "t-5",
    name: "Jessica Miller",
    location: "Boston, USA",
    content:
      "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
  },
  {
    id: "t-6",
    name: "Diego Lopez",
    location: "Barcelona, Spain",
    content:
      "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
  },
];

interface TestimonialCardProp {
  item: TestimonialModel;
}

function TestimonialCard({ item }: TestimonialCardProp): React.ReactElement {
  return (
    <div className="flex flex-col items-center gap-[40px] py-[80px]">
      <div className="flex items-center justify-center gap-[12px]">
        <div className="relative h-[60px] w-[60px] overflow-hidden rounded-full bg-dark-15">
          <Image src="/pwa/192x192.png" alt="" fill sizes="60px" className="object-cover opacity-80" />
        </div>
        <div className="flex flex-col gap-[2px]">
          <Text as="p" size={16} weight="medium" color="white" className="desktop:text-[20px]">
            {item.name}
          </Text>
          <Text as="p" size={14} color="dark-40" className="desktop:text-[18px] text-dark-40">
            {item.location}
          </Text>
        </div>
      </div>

      <div className="relative w-full max-w-[465px]">
        <div className="bg-dark-08 border-dark-15 absolute left-1/2 top-[-22px] flex -translate-x-1/2 items-center gap-[4px] rounded-[100px] border px-[16px] py-[9px]">
          {new Array(5).fill(0).map((_, idx: number) => {
            return <Star key={idx} className="h-5 w-5 text-yellow-55" fill="currentColor" strokeWidth={0} />;
          })}
        </div>

        <div className="bg-dark-10 border-dark-15 rounded-[12px] border px-[30px] pb-[30px] pt-[50px]">
          <Text as="p" size={14} color="white" className="desktop:text-[18px] text-center">
            {item.content}
          </Text>
        </div>
      </div>
    </div>
  );
}

function Testimonials(): React.ReactElement {
  return (
    <section id="testimonials">
      <div className="bg-dark-10 border-dark-15 border-y py-[120px]">
        <Container className="flex items-center justify-between gap-[24px]">
          <div className="flex flex-col gap-[16px]">
            <div className="bg-dark-20 w-fit rounded-[4px] px-[10px] py-[6px]">
              <Text as="p" size={16} weight="medium" color="white" className="desktop:text-[20px] desktop:tracking-[-0.6px]">
                What Our Readers Say
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
              Real Words from Real Readers
            </Text>
          </div>

          <Link
            href="/"
            className="bg-dark-08 border-dark-15 text-grey-60 inline-flex h-[63px] items-center gap-[10px] rounded-[12px] border px-[24px] py-[18px] text-[18px]/[1.5] tracking-[-0.54px]"
          >
            View All Testimonials
            <ArrowUpRight className="h-6 w-6 text-yellow-55" strokeWidth={1.5} />
          </Link>
        </Container>
      </div>

      <div className="border-dark-15 border-b">
        <Container className="grid grid-cols-1 desktop:grid-cols-3">
          {TESTIMONIAL_LIST.map((item: TestimonialModel, idx: number) => {
            const col: number = idx % 3;
            const row: number = Math.floor(idx / 3);
            const hasLeftBorder: boolean = col !== 0;
            const hasTopBorder: boolean = row !== 0;

            return (
              <div
                key={item.id}
                className={[
                  hasLeftBorder ? "border-dark-15 desktop:border-l" : "",
                  hasTopBorder ? "border-dark-15 desktop:border-t" : "",
                ].join(" ")}
              >
                <TestimonialCard item={item} />
              </div>
            );
          })}
        </Container>
      </div>
    </section>
  );
}

export default Testimonials;


