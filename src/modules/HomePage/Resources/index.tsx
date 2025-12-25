import { Container } from "@/components/Container";
import Text from "@/components/ui/text";
import { ArrowUpRight, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

interface ResourceBlockModel {
  id: string;
  badgeTitle: string;
  description: string;
  actionText: string;
  highlightTitle: string;
  highlightBody: string;
  totalLabel: string;
  totalValue: string;
  formatLabel: string;
  formatValue: string;
  authorLabel: string;
  authorValue: string;
  imageSrc: string;
}

const RESOURCE_BLOCK_LIST: readonly ResourceBlockModel[] = [
  {
    id: "ebooks",
    badgeTitle: "Ebooks",
    description: "Explore our collection of ebooks covering a wide spectrum of future technology topics.",
    actionText: "Download Ebooks Now",
    highlightTitle: "Variety of Topics",
    highlightBody:
      "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
    totalLabel: "Total Ebooks",
    totalValue: "Over 100 ebooks",
    formatLabel: "Download Formats",
    formatValue: "PDF format for access.",
    authorLabel: "Average Author Expertise",
    authorValue: "Ebooks are authored by renowned experts with an average of 15 years of experience",
    imageSrc: "/pwa/thumbnail.png",
  },
  {
    id: "whitepapers",
    badgeTitle: "Whitepapers",
    description: "Dive into comprehensive reports and analyses with our collection of whitepapers.",
    actionText: "Download Whitepapers Now",
    highlightTitle: "Topics Coverage",
    highlightBody:
      "Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).",
    totalLabel: "Total Whitepapers",
    totalValue: "Over 50 whitepapers",
    formatLabel: "Download Formats",
    formatValue: "PDF format for access.",
    authorLabel: "Average Author Expertise",
    authorValue: "Whitepapers are authored by subject matter experts with an average of 20 years of experience.",
    imageSrc: "/pwa/1920x936.png",
  },
];

function Resources(): React.ReactElement {
  return (
    <section id="resources">
      <div className="bg-dark-10 border-dark-15 border-y py-[120px]">
        <Container className="flex items-center justify-between gap-[24px]">
          <div className="flex flex-col gap-[16px]">
            <div className="bg-dark-20 w-fit rounded-[4px] px-[10px] py-[6px]">
              <Text as="p" size={16} weight="medium" color="white" className="desktop:text-[20px] desktop:tracking-[-0.6px]">
                Your Gateway to In-Depth Information
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
              Unlock Valuable Knowledge with FutureTech&apos;s Resources
            </Text>
          </div>

          <Link
            href="/"
            className="bg-dark-08 border-dark-15 text-grey-60 inline-flex h-[63px] items-center gap-[10px] rounded-[12px] border px-[24px] py-[18px] text-[18px]/[1.5] tracking-[-0.54px]"
          >
            View All Resources
            <ArrowUpRight className="h-6 w-6 text-yellow-55" strokeWidth={1.5} />
          </Link>
        </Container>
      </div>

      {RESOURCE_BLOCK_LIST.map((block: ResourceBlockModel, idx: number) => {
        return (
          <div key={block.id} className={idx === 0 ? "" : "border-dark-15 border-t"}>
            <Container className="desktop:gap-[80px] grid grid-cols-1 gap-[40px] py-[80px] desktop:grid-cols-[519px_1fr]">
              <div className="flex flex-col justify-center gap-[60px]">
                <div className="flex flex-col gap-[50px]">
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
                      {block.badgeTitle}
                    </Text>
                    <Text as="p" size={14} color="grey-60" className="desktop:text-[20px] desktop:tracking-[-0.6px]">
                      {block.description}
                    </Text>
                  </div>

                  <Link
                    href="/"
                    className="bg-dark-10 border-dark-15 text-grey-60 inline-flex h-[63px] w-full items-center justify-center gap-[10px] rounded-[8px] border px-[24px] py-[18px] text-[18px]/[1.5] tracking-[-0.54px]"
                  >
                    {block.actionText}
                    <ArrowUpRight className="h-6 w-6 text-yellow-55" strokeWidth={1.5} />
                  </Link>
                </div>

                <div className="bg-dark-10 border-dark-15 flex items-center gap-[50px] rounded-[13px] border p-[30px]">
                  <div className="flex flex-col gap-[4px]">
                    <Text as="p" size={14} color="grey-60" className="desktop:text-[18px] desktop:tracking-[-0.54px]">
                      Downloaded By
                    </Text>
                    <Text as="p" size={18} weight="semibold" color="white" className="desktop:text-[24px] desktop:tracking-[-0.72px]">
                      10k + Users
                    </Text>
                  </div>

                  <div className="bg-dark-08 flex items-center rounded-[12px] px-[10px] py-[10px] pr-[19px]">
                    <div className="flex">
                      {["/pwa/192x192.png", "/pwa/384x384.png", "/pwa/512x512.png", "/pwa/thumbnail.png"].map((src: string, i: number) => {
                        return (
                          <div
                            key={`${block.id}-dl-${src}`}
                            className={["border-dark-40 relative h-[50px] w-[50px] overflow-hidden rounded-full border-2 bg-dark-15", i > 0 ? "-ml-[9px]" : ""].join(
                              " ",
                            )}
                          >
                            <Image src={src} alt="" fill sizes="50px" className="object-cover opacity-80" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-dark-15 desktop:pl-[80px] flex flex-col gap-[30px] border-l pl-[20px]">
                <div className="flex items-center gap-[20px]">
                  <Text as="p" size={18} weight="semibold" color="white" className="desktop:text-[24px] desktop:tracking-[-0.72px] w-[242.5px]">
                    {block.highlightTitle}
                  </Text>
                  <Text as="p" size={14} color="grey-60" className="desktop:text-[18px] desktop:tracking-[-0.54px] flex-1">
                    {block.highlightBody}
                  </Text>
                </div>

                <div className="relative h-[332px] overflow-hidden rounded-[12px] bg-dark-15">
                  <Image src={block.imageSrc} alt="" fill sizes="(min-width: 1920px) 917px, 100vw" className="object-cover opacity-80" />
                </div>

                <div className="flex gap-[20px]">
                  <div className="bg-dark-10 border-dark-15 flex flex-col justify-center gap-[4px] rounded-[13px] border p-[30px]">
                    <Text as="p" size={14} color="grey-60" className="desktop:text-[18px] desktop:tracking-[-0.54px]">
                      {block.totalLabel}
                    </Text>
                    <Text as="p" size={16} weight="semibold" color="white" className="desktop:text-[20px] desktop:tracking-[-0.6px]">
                      {block.totalValue}
                    </Text>
                  </div>

                  <div className="bg-dark-10 border-dark-15 flex flex-1 items-center gap-[20px] rounded-[13px] border p-[30px]">
                    <div className="flex flex-1 flex-col justify-center gap-[4px]">
                      <Text as="p" size={14} color="grey-60" className="desktop:text-[18px] desktop:tracking-[-0.54px]">
                        {block.formatLabel}
                      </Text>
                      <Text as="p" size={16} weight="semibold" color="white" className="desktop:text-[20px] desktop:tracking-[-0.6px]">
                        {block.formatValue}
                      </Text>
                    </div>

                    <Link
                      href="/"
                      className="bg-dark-08 border-dark-15 text-grey-60 inline-flex h-[63px] items-center gap-[10px] rounded-[10px] border px-[24px] py-[18px] text-[18px]/[1.5] tracking-[-0.54px]"
                    >
                      Preview
                      <Eye className="h-6 w-6 text-yellow-55" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>

                <div className="bg-dark-10 border-dark-15 flex flex-col justify-center gap-[4px] rounded-[13px] border p-[30px]">
                  <Text as="p" size={14} color="grey-60" className="desktop:text-[18px] desktop:tracking-[-0.54px]">
                    {block.authorLabel}
                  </Text>
                  <Text as="p" size={16} weight="medium" color="white" className="desktop:text-[20px] desktop:tracking-[-0.6px]">
                    {block.authorValue}
                  </Text>
                </div>
              </div>
            </Container>
          </div>
        );
      })}
    </section>
  );
}

export default Resources;


