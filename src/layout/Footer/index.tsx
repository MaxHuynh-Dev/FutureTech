import { Container } from "@/components/Container";
import Text from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type React from "react";

interface FooterLinkModel {
  label: string;
  href: string;
  isNew?: boolean;
}

interface FooterColumnModel {
  title: string;
  links: readonly FooterLinkModel[];
}

const FOOTER_COLUMN_LIST: readonly FooterColumnModel[] = [
  {
    title: "Home",
    links: [
      { label: "Features", href: "#features" },
      { label: "Blogs", href: "#blogs" },
      { label: "Resources", href: "#resources", isNew: true },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact Us", href: "/" },
      { label: "Newsletter", href: "/" },
    ],
  },
  {
    title: "News",
    links: [
      { label: "Trending Stories", href: "/" },
      { label: "Featured Videos", href: "/" },
      { label: "Technology", href: "/" },
      { label: "Health", href: "/" },
      { label: "Politics", href: "/" },
      { label: "Environment", href: "/" },
    ],
  },
  {
    title: "Blogs",
    links: [
      { label: "Quantum Computing", href: "/" },
      { label: "AI Ethics", href: "/" },
      { label: "Space Exploration", href: "/" },
      { label: "Biotechnology", href: "/", isNew: true },
      { label: "Renewable Energy", href: "/" },
      { label: "Biohacking", href: "/" },
    ],
  },
  {
    title: "Podcasts",
    links: [
      { label: "AI Revolution", href: "/" },
      { label: "AI Revolution", href: "/", isNew: true },
      { label: "TechTalk AI", href: "/" },
      { label: "AI Conversations", href: "/" },
    ],
  },
];

const FOOTER_RESOURCE_BUTTON_LIST: readonly FooterLinkModel[] = [
  { label: "Whitepapers", href: "/" },
  { label: "Ebooks", href: "/" },
  { label: "Reports", href: "/" },
  { label: "Research Papers", href: "/" },
];

function Footer(): React.ReactElement {
  return (
    <footer id="footer">
      <Container className="border-dark-15 border-b py-[80px]">
        <div className="desktop:grid-cols-5 grid grid-cols-1 gap-[80px]">
          {FOOTER_COLUMN_LIST.map((col: FooterColumnModel) => {
            return (
              <div key={col.title} className="flex flex-col gap-[36px]">
                <Text
                  as="p"
                  size={16}
                  weight="medium"
                  color="white"
                  className="desktop:text-[20px] desktop:tracking-[-0.6px]"
                >
                  {col.title}
                </Text>
                <div className="flex flex-col gap-[18px]">
                  {col.links.map((l: FooterLinkModel) => {
                    return (
                      <Link
                        key={`${col.title}-${l.label}`}
                        href={l.href}
                        className="flex items-center gap-[8px]"
                      >
                        <Text
                          as="span"
                          size={14}
                          color="dark-40"
                          className="desktop:text-[18px] text-dark-40"
                        >
                          {l.label}
                        </Text>
                        {l.isNew ? (
                          <span className="bg-dark-10 border-dark-15 inline-flex items-center rounded-[6px] border px-[12px] py-[4px]">
                            <Text
                              as="span"
                              size={12}
                              color="white"
                              className="text-[16px]/[1.5] tracking-[-0.48px]"
                            >
                              New
                            </Text>
                          </span>
                        ) : null}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="flex flex-col gap-[36px]">
            <Text
              as="p"
              size={16}
              weight="medium"
              color="white"
              className="desktop:text-[20px] desktop:tracking-[-0.6px]"
            >
              Resources
            </Text>
            <div className="flex flex-col gap-[18px]">
              {FOOTER_RESOURCE_BUTTON_LIST.map((l: FooterLinkModel) => {
                return (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="bg-dark-08 border-dark-15 text-grey-60 inline-flex w-fit items-center gap-[10px] rounded-[8px] border px-[16px] py-[10px] text-[18px]/[1.5] tracking-[-0.54px]"
                  >
                    {l.label}
                    <ArrowUpRight
                      className="text-yellow-55 h-5 w-5"
                      strokeWidth={1.5}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container className="relative py-[40px]">
        <div className="desktop:flex-row desktop:items-center flex flex-col items-start justify-between gap-[24px]">
          <div className="flex items-center gap-[11px]">
            <Link
              href="/"
              className={cn(
                "text-dark-40 text-[18px]/[1.3] tracking-[-0.54px]",
              )}
            >
              Terms &amp; Conditions
            </Link>
            <span className="bg-dark-15 h-[23px] w-px" aria-hidden="true" />
            <Link
              href="/"
              className={cn(
                "text-dark-40 text-[18px]/[1.3] tracking-[-0.54px]",
              )}
            >
              Privacy Policy
            </Link>
          </div>

          <div className="text-dark-40 text-[18px]/[1.3] tracking-[-0.54px]">
            © 2024 FutureTech. All rights reserved.
          </div>

          <div className="desktop:absolute desktop:left-1/2 desktop:top-1/2 desktop:-translate-x-1/2 desktop:-translate-y-1/2 flex items-center gap-[20px]">
            <Link
              href="/"
              aria-label="Twitter"
              className="text-grey-60 h-[24px] w-[24px]"
            >
              <span className="sr-only">Twitter</span>
              <ArrowUpRight className="h-6 w-6" strokeWidth={1.25} />
            </Link>
            <Link
              href="/"
              aria-label="Dribbble"
              className="text-grey-60 h-[24px] w-[24px]"
            >
              <span className="sr-only">Dribbble</span>
              <ArrowUpRight className="h-6 w-6" strokeWidth={1.25} />
            </Link>
            <Link
              href="/"
              aria-label="LinkedIn"
              className="text-grey-60 h-[24px] w-[24px]"
            >
              <span className="sr-only">LinkedIn</span>
              <ArrowUpRight className="h-6 w-6" strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
