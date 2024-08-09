import { cn } from '@repo/ui/lib/utils';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={cn('outline-none border-b border-[#1A1A1A] w-full', className)}
    />
  );
};
