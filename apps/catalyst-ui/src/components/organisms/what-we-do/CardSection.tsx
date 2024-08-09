import Card from '@/components/molecules/card/Cards';
import { CardProps, CardSectionProps } from '@/types/what-we-do';
import { cn } from '@repo/ui/lib/utils';

export default function CardSection({ cards, className }: CardSectionProps) {
  return (
    <div
      className={cn(
        'grid',
        'grid-cols-1',
        'md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
        'gap-4',
        className
      )}
    >
      {cards.map((card: CardProps, index: number) => (
        <Card
          key={index}
          number={card.number}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
