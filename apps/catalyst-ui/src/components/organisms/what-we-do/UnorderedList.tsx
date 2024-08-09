import Text from '@repo/ui/components/atoms/Text';

interface Props {
  lists: string[];
}

export default function UnorderedList({ lists }: Props) {
  return (
    <ul className='flex flex-col gap-0.5 lg:gap-2 list-disc'>
      {lists?.map((item, index: number) => (
        <li key={index} className='ml-4 lg:ml-6'>
          <Text className='lg:leading-[32px]'>{item}</Text>
        </li>
      ))}
    </ul>
  );
}
