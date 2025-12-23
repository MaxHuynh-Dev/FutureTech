import cn from 'classnames';
import type React from 'react';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  className?: string;
};

export const Container = ({ children, className }: Props): React.JSX.Element => {
  return <div className={cn('container', className)}>{children}</div>;
};

export const GridContainer = ({ children, className }: Props): React.JSX.Element => {
  return (
    <div className={cn('grid w-full gap-5 grid-cols-6 md:grid-cols-12', className)}>{children}</div>
  );
};
