"use client";

import Link from "next/link";
import type React from "react";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import { ROUTER } from "@/constants/router";
import { cn } from "@/lib/utils";
import { ArrowUpRight, TextAlignEnd } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Header(): React.ReactElement {
  const pathname = usePathname();
  return (
    <div className={"bg-dark-10 fixed top-0 left-0 z-10 w-full"}>
      <div
        className={
          "bg-dark-08 laptop:py-[12px] desktop:py-[20px] flex items-center justify-center gap-[10px] py-[15px]"
        }
      >
        <Text color={"grey-60"} size={12}>
          Subscribe to our Newsletter For New & latest Blogs and Resources
        </Text>
        <ArrowUpRight color="#ffd700" strokeWidth={1} className="h-6 w-6" />
      </div>
      <div className="border-dark-15 border-y">
        <Container className="desktop:py-6 py-5">
          <div className={"flex items-center justify-between"}>
            <Link
              href="/"
              className="laptop:w-[143px] desktop:w-[178px] h-auto w-[125px]"
            >
              <Image
                src="/images/Logo.svg"
                alt="Logo"
                width={148}
                height={63}
                className="h-full w-full object-contain"
              />
            </Link>
            <ul className={"laptop:flex hidden items-center gap-4"}>
              {ROUTER.map((item) => {
                const isActive = pathname === item.href;
                const activeClass = isActive && "bg-dark-08 border-dark-20";
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "desktop:h-[55px] desktop:px-[24px] desktop:rounded-[10px] flex h-[41px] items-center justify-center rounded-[6px] border border-transparent px-[18px]",
                        activeClass,
                      )}
                    >
                      <Text
                        as="span"
                        size={14}
                        color={"grey-50"}
                        className="desktop:text-[18px] text-[14px]/[1.5]"
                        transform="capitalize"
                      >
                        {item.label}
                      </Text>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button variant="yellow" className="laptop:block hidden">
              Contact Us
            </Button>
            <div className="laptop:hidden block">
              <TextAlignEnd color="#fff" strokeWidth={2} className="h-8 w-8" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Header;
