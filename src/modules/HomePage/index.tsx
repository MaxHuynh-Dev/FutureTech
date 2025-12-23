'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type React from 'react';
import { useEffect, useRef } from 'react';

function HomePage(): React.ReactElement {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.log(buttonRef.current);
  }, []);

  return (
    <>
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
        <DropdownMenuTrigger>
          <Button variant="outline">Options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Archive</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default HomePage;
