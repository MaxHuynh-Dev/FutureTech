'use client';

import { Container, GridContainer } from '@Components/Container';
import cn from 'classnames';
import type React from 'react';
import { Activity, useCallback, useEffect, useState } from 'react';

const GridColumn = (): React.ReactElement => (
  <div className="col-span-1">
    <div className="bg-[#ff6b4c4c] h-screen relative before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-[#ff6b4c4c] after:absolute after:right-0 after:top-0 after:h-full after:w-px after:bg-[#ff6b4c4c]" />
  </div>
);

export default function GridDebug(): React.ReactElement {
  const [isGrid, setIsGrid] = useState<boolean>(false);

  const handleKeyDown: (ev: KeyboardEvent) => void = useCallback(
    (ev: KeyboardEvent) => {
      const isShift = ev.shiftKey;
      const key = ev.key.toLowerCase();
      if (isShift && key === 'g') {
        const nextValue = !isGrid;
        localStorage.setItem('isGrid', String(nextValue));
        setIsGrid(nextValue);
      }
    },
    [isGrid]
  );

  useEffect(() => {
    const storedValue = localStorage.getItem('isGrid');
    if (storedValue !== null) {
      const initialIsGrid: boolean = storedValue === 'true';
      if (initialIsGrid !== isGrid) {
        setTimeout(() => {
          setIsGrid(initialIsGrid);
        }, 0);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return (): void => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Activity mode={isGrid ? 'visible' : 'hidden'} name="Grid Debug">
      <div
        className={cn(
          'h-full pointer-events-none fixed w-full top-0 left-1/2 -translate-x-1/2 z-50'
        )}
      >
        <Container>
          <GridContainer>
            {Array.from({ length: 12 }).map((_, index) => (
              <GridColumn key={`grid-column-${index.toString()}`} />
            ))}
          </GridContainer>
        </Container>
      </div>
    </Activity>
  );
}
