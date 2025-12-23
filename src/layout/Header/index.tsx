import { Container } from '@Components/Container';
import ImagePlaceHolder from '@Components/ImagePlaceHolder';
import Label from '@Components/Typo/Label';
import { ROUTER } from '@Constants/router';
import { TypoColor, TypoTagLabel, TypoTransform } from '@Enums/typo';
import Link from 'next/link';
import type React from 'react';

import s from './header.module.scss';

function Header(): React.ReactElement {
  return (
    <div className={s.header}>
      <Container>
        <div className={s.header_container}>
          <Link href="/" className={s.header_logo}>
            <ImagePlaceHolder src="/images/logo.png" alt="Logo" width={148} height={63} />
          </Link>
          <ul className={s.header_menu}>
            {ROUTER.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <Label
                    as={TypoTagLabel.span}
                    size={18}
                    color={TypoColor.vani}
                    textTransform={TypoTransform.uppercase}
                  >
                    {item.label}
                  </Label>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Header;
