import Accordion from '@/components/molecules/accordion/Accordion';

interface AccordionListProps {
  items: Array<{ id: string; title: string; description: string }>;
}

export default function AccordionList({ items }: AccordionListProps) {
  return (
    <div className='divide-y divide-gray-200'>
      {items.map((item) => (
        <Accordion
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
