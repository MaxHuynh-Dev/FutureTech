'use client';

import { Container, GridContainer } from '@Components/Container';
import cn from 'classnames';
import type React from 'react';
import { Activity, useCallback, useEffect, useState } from 'react';

import s from './styles.module.scss';

const GridColumn = (): React.ReactElement => (
  <div className={s.grid_column}>
    <div className={s.grid_col} />
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
      <div className={cn(s.gridDebug)}>
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
