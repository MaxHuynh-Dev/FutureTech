'use client';

import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Text from '@/components/ui/text';
import type React from 'react';
import { useEffect, useRef } from 'react';

function HomePage(): React.ReactElement {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    console.log(buttonRef.current);
    console.log(textRef.current);
  }, []);

  return (
    <Container>
      <Text as="h1" size={30} weight={'medium'} ref={textRef} font={'heading'}>
        Hello
      </Text>
      <Button
        onClick={() => {
          alert('Hello');
        }}
        className="bg-yellow-55 text-dark-08"
        ref={buttonRef}
      >
        Click me
        <div>
          <p>icon</p>
        </div>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger>Options</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Archive</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Container>
  );
}

export default HomePage;
