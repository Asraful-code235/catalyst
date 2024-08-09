import RowSeparatedItem from '@/components/molecules/list/RowSeparatedItem';
import Separator from '@/components/molecules/seperator/Separator';
import { TwoGridQnaListProps } from '@/types/what-we-do';
import { cn } from '@repo/ui/lib/utils';

interface RowSeparatedListSectionProps extends TwoGridQnaListProps {
  className?: string;
  separatorGap?: string;
}
export default function RowSeparatedListSection({
  lists,
  className,
  separatorGap,
}: RowSeparatedListSectionProps) {
  return (
    <div className={cn('flex flex-col gap-6 lg:gap-16', className)}>
      {lists?.map((list, index: number) => (
        <div
          key={index}
          className={cn('flex flex-col gap-6 lg:gap-[42px]', separatorGap)}
        >
          <RowSeparatedItem title={list.title} description={list.description} />
          {index < (lists?.length || 0) - 1 && <Separator />}
        </div>
      ))}
    </div>
  );
}
