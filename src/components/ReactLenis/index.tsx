'use client';

import { gsap } from 'gsap';
import type { LenisRef } from 'lenis/react';
import { ReactLenis } from 'lenis/react';
import type React from 'react';
import { type PropsWithChildren, useLayoutEffect, useRef } from 'react';

export default function LenisScroller({ children }: PropsWithChildren): React.ReactElement {
  const lenisRef = useRef<LenisRef>(null);

  useLayoutEffect(() => {
    const update = (time: number): void => {
      lenisRef.current?.lenis?.raf(time * 1000);
      if (lenisRef.current?.lenis && !window.lenis) {
        window.lenis = lenisRef.current;
      }
    };

    gsap.ticker.add(update);

    return (): void => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
