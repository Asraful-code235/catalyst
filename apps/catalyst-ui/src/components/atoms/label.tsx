import { cn } from '@repo/ui/lib/utils';
import { LabelHTMLAttributes } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

export const Label = ({ className, children, ...props }: LabelProps) => {
  return (
    <label
      {...props}
      className={cn('description flex flex-col gap-4', className)}
    >
      {children}
    </label>
  );
};
