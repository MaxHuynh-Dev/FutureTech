'use client';

import Link from 'next/link';
import type React from 'react';

import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import Text from '@/components/ui/text';
import { ROUTER } from '@/constants/router';
import { cn } from '@/lib/utils';
import { ArrowUpRight, TextAlignEnd } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function Header(): React.ReactElement {
  const pathname = usePathname();
  return (
    <div className={'bg-dark-10 fixed top-0 left-0 w-full z-10'}>
      <div
        className={
          'bg-dark-08 flex items-center justify-center gap-[10px] py-[15px] laptop:py-[12px] desktop:py-[20px] '
        }
      >
        <Text color={'grey-60'} size={12}>
          Subscribe to our Newsletter For New & latest Blogs and Resources
        </Text>
        <ArrowUpRight color="#ffd700" strokeWidth={1} className="w-6 h-6" />
      </div>
      <div className="border-y border-dark-15">
        <Container className="py-5 desktop:py-6">
          <div className={'flex items-center justify-between'}>
            <Link href="/" className="w-[125px] h-auto laptop:w-[143px] desktop:w-[178px]">
              <Image
                src="/images/Logo.svg"
                alt="Logo"
                width={148}
                height={63}
                className="w-full h-full object-contain"
              />
            </Link>

            <ul className={'hidden laptop:flex items-center gap-4'}>
              {ROUTER.map((item) => {
                const isActive = pathname === item.href;
                const activeClass = isActive && 'bg-dark-08 border-dark-20';
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center justify-center h-[41px] px-[18px] desktop:h-[55px] desktop:px-[24px] rounded-[6px] desktop:rounded-[10px] border border-transparent',
                        activeClass
                      )}
                    >
                      <Text
                        as="span"
                        size={14}
                        color={'grey-50'}
                        className="text-[14px]/[1.5] desktop:text-[18px]"
                        transform="capitalize"
                      >
                        {item.label}
                      </Text>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button variant="yellow" className="hidden laptop:block">
              Contact Us
            </Button>
            <div className="block laptop:hidden">
              <TextAlignEnd color="#fff" strokeWidth={2} className="w-8 h-8" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Header;
