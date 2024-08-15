import { Module, WhatCanYouExpectProps } from '@/types/what-we-do';
import { placeholder } from '@repo/ui/assets/icons/index';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import { cn } from '@repo/ui/lib/utils';
import Image from 'next/image';

interface Props {
  data: WhatCanYouExpectProps;
}

export default function WhatYouCanExpect({ data }: Props) {
  if (!data) return null;
  const { list, image, rtl = false } = data;

  return (
    <section className=''>
      <div
        className={cn(
          'grid gap-8 lg:gap-[42px] h-full w-full',
          rtl ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-2'
        )}
      >
        <Image
          loading='lazy'
          decoding='async'
          width={1200}
          height={1000}
          quality={100}
          placeholder='blur'
          blurDataURL={placeholder.src}
          src={image}
          alt={list[0].title}
          className={cn(
            'w-full h-full object-cover aspect-auto object-center max-lg:h-[242px]',
            rtl ? 'lg:order-2' : 'lg:order-1'
          )}
        />
        <article
          className={cn(
            'flex flex-col gap-6 justify-between',
            rtl ? 'lg:order-1 lg:col-span-2' : 'lg:order-2'
          )}
        >
          {list?.length > 0 &&
            list.map((item: Module, index: number) => (
              <div key={index} className='flex flex-col gap-4 lg:gap-6'>
                <Title type='h2' size='medium' className='tracking-tight'>
                  {item.title}
                </Title>
                <div className=' flex flex-col gap-4 lg:gap-6'>
                  {item.description?.map((desc, desKey: number) => (
                    <Text key={desKey}>{desc.text}</Text>
                  ))}
                </div>
              </div>
            ))}
        </article>
      </div>
    </section>
  );
}
