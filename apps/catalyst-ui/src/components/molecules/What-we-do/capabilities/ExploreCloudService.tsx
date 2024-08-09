import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/ui/components/molecules/select';
import Separator from '../../seperator/Separator';

interface ExploreCloudServiceProps {
  title: string;
  description: string;
  items: {
    title: string;
    value: string;
  }[];

  className?: string;
}

export default function ExploreCloudService({
  title,
  description,
  items,
  className,
}: ExploreCloudServiceProps) {
  return (
    <section className=''>
      <div className='flex flex-col gap-8 lg:gap-[42px]'>
        <Title
          type='h2'
          size='medium'
          className='text-[32px] max-sm:max-w-[266px] lg:text-[64px] font-medium'
        >
          {title}
        </Title>
        <div>
          <Select>
            <SelectTrigger className='w-full border-[0.5px] border-[#1A1A1A] py-3 rounded-none'>
              <SelectValue placeholder={`${items[0]?.title}`} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {items?.map((service, key: number) => (
                  <SelectItem
                    key={key}
                    value={service.value}
                    className='description'
                  >
                    {service.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Text>{description}</Text>
        <Separator />
      </div>
    </section>
  );
}
