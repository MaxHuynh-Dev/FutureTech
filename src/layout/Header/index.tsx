// import { Container } from '@Components/Container';
// import ImagePlaceHolder from '@Components/ImagePlaceHolder';
// import { ROUTER } from '@Constants/router';
// import Link from 'next/link';
import type React from 'react';

import Text from '@/components/ui/text';
import { ArrowUpRight } from 'lucide-react';

function Header(): React.ReactElement {
  return (
    <div className={'fixed top-0 left-0 w-full z-10'}>
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
      {/* <Container>
        <div className={s.header_container}>
          <Link href="/" className={s.header_logo}>
            <ImagePlaceHolder src="/images/logo.png" alt="Logo" width={148} height={63} />
          </Link>
          <ul className={s.header_menu}>
            {ROUTER.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <Text as="span" size={16} weight={'medium'}>
                    {item.label}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container> */}
    </div>
  );
}

export default Header;
