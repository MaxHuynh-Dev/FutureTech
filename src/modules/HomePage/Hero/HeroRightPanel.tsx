import Text from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type React from "react";

const HERO_AVATAR_SRC_LIST: readonly string[] = [
  "/pwa/192x192.png",
  "/pwa/384x384.png",
  "/pwa/512x512.png",
  "/pwa/thumbnail.png",
];

function HeroRightPanel(): React.ReactElement {
  return (
    <div className="border-dark-15 col-span-1 col-start-3 row-span-2 h-full border-l">
      <div className="laptop:pl-[80px] desktop:pt-[150px] desktop:pb-[80px] laptop:pt-[150px] laptop:pb-[80px] relative h-full overflow-hidden pt-[120px] pb-[60px] pl-[20px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(600px 450px at 10% 10%, rgba(255, 209, 26, 0.10), transparent 60%), radial-gradient(700px 520px at 90% 20%, rgba(255, 209, 26, 0.08), transparent 55%), radial-gradient(900px 700px at 60% 100%, rgba(255, 255, 255, 0.06), transparent 60%)",
          }}
        />

        <div className="relative flex flex-col gap-[30px]">
          <div className="bg-dark-10 border-dark-15 flex w-fit items-center gap-[10px] rounded-[100px] border px-[10px] py-[10px] pr-[24px]">
            <div className="flex items-center">
              {HERO_AVATAR_SRC_LIST.map((src: string, idx: number) => {
                return (
                  <div
                    key={src}
                    className={cn(
                      "border-dark-40 bg-dark-15 relative h-[60px] w-[60px] overflow-hidden rounded-full border-2",
                      idx > 0 && "-ml-[14px]",
                    )}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="60px"
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-[2px]">
              <Text as="p" size={18} color="grey-60">
                Explore 1000+ resources
              </Text>
              <Text as="p" size={14} color="grey-50">
                Over 1,000 articles on emerging tech trends and breakthroughs.
              </Text>
            </div>
          </div>

          <a
            href="#resources"
            className="bg-dark-08 border-dark-15 text-grey-60 inline-flex h-[63px] w-fit items-center gap-[10px] rounded-[12px] border px-[24px] py-[18px] text-[18px]/[1.5] tracking-[-0.54px]"
          >
            Explore Resources
            <ArrowUpRight
              className="text-yellow-55 h-6 w-6"
              strokeWidth={1.5}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroRightPanel;
