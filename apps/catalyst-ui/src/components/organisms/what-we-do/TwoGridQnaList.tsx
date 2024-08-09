import RowQnaSection from '@/components/molecules/list/RowQnaSection';
import Separator from '@/components/molecules/seperator/Separator';
import { TwoGridQnaListProps } from '@/types/what-we-do';

export default function TwoGridQnaList({ lists }: TwoGridQnaListProps) {
  return (
    <div className='flex flex-col gap-6 lg:gap-[42px]'>
      {lists?.map((list, index: number) => (
        <div key={list.id} className='flex flex-col gap-6 lg:gap-[42px]'>
          <RowQnaSection
            title={list.title}
            description={list.description}
            number={list.id}
          />
          {index < (lists?.length || 0) - 1 && <Separator />}
        </div>
      ))}
    </div>
  );
}
