'use client';

import { Button } from '@/components/ui/button';
// import Hero from '@Modules/HomePage/Hero';
import type React from 'react';
import { useEffect, useRef } from 'react';

function HomePage(): React.ReactElement {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.log(buttonRef.current);
  }, []);

  return (
    <>
      {/* <Hero /> */}
      <Button
        onClick={() => {
          alert('Hello');
        }}
        ref={buttonRef}
      >
        Click me
      </Button>
    </>
  );
}

export default HomePage;
