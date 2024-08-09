import { Input } from '@/components/atoms/input';
import { Label } from '@/components/atoms/label';
import { cn } from '@repo/ui/lib/utils';

interface LabeledInputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register?: any;
  className?: string;
}

export const LabeledInput = ({
  label,
  id,
  type = 'text',
  required = false,
  register,
  className,
}: LabeledInputProps) => {
  return (
    <Label htmlFor={id} className='description flex flex-col gap-1'>
      {label} {required && '*'}
      <Input
        id={id}
        type={type}
        required={required}
        {...(register && register(id, { required: `${label} is required` }))}
        className={cn(
          'outline-none border-b border-[#1A1A1A] w-full',
          className
        )}
      />
    </Label>
  );
};
