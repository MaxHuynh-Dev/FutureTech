import GridDebug from '@Components/GridDebug';
import LenisScroll from '@Components/ReactLenis';
import Animate from '@Layout/Animate';
import Header from '@Layout/Header';
import type { PropsWithChildren } from 'react';
import React from 'react';

export default function MainLayout({ children }: PropsWithChildren): React.ReactElement {
  return (
    <React.Fragment>
      <Header />
      <LenisScroll>
        <Animate>{children}</Animate>
      </LenisScroll>
      <GridDebug />
    </React.Fragment>
  );
}
