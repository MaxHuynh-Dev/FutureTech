import { Button } from '@/components/ui/button';
import type React from 'react';

interface TPrimaryButton {
  color?: 'dark' | 'white';
  variant?: 'solid' | 'outline';
  weight?: 'light' | 'regular' | 'bold';
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
  text?: string;
  className?: string;
  onClick?: () => void;
}

export default function PrimaryButton({ ...props }: TPrimaryButton): React.JSX.Element {
  const { text = '', className, onClick } = props;

  return (
    <Button variant="default" className={className} onClick={onClick}>
      {text}
    </Button>
  );
}
