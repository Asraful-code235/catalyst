import CardOverlayText from '@/components/molecules/card/CardOverlayText';
import { cn } from '@repo/ui/lib/utils';

interface ListItem {
  href: string;
  image: string;
  title: string;
  date: string;
}

interface CardListProps {
  lists: ListItem[];
  className?: string;
}

export default function CardList({ lists, className }: CardListProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8',
        className
      )}
    >
      {lists?.map((list, index: number) => (
        <CardOverlayText
          href={list.href}
          image={list.image}
          title={list.title}
          date={list.date}
          key={index}
        />
      ))}
    </div>
  );
}
