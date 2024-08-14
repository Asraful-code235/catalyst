'use client';

import Separator from '@/components/molecules/seperator/Separator';
import { GridSectionProps } from '@/types/case-study';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import { cn } from '@repo/ui/lib/utils';
import { useParams } from 'next/navigation';

interface Props {
  data: GridSectionProps;
  isLastSection?: boolean;
}

export default function CaseStudiesGridSection({ data, isLastSection }: Props) {
  const param = useParams();
  const rtl = data?.rtl || false;
  if (!data) return null;

  return (
    <div className='flex flex-col gap-8 max-w-[1440px] mx-auto'>
      <section
        className={cn(
          'px-8 lg:px-[94px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[42px] overflow-hidden'
        )}
      >
        <div
          className={cn(
            param.slug === 'la-memoire'
              ? 'max-lg:h-[405px]'
              : 'h-full  max-lg:h-[571px]',
            'relative w-full',
            rtl ? 'order-1' : 'order-2'
          )}
        >
          <img
            src={data?.image.src}
            alt='grid hero image'
            className='w-full h-full object-cover object-center aspect-auto'
          />
        </div>
        <div
          className={cn(
            rtl ? 'order-2' : 'order-1',
            'flex flex-col gap-8 lg:gap-16'
          )}
        >
          {data?.title && (
            <h1 className='lg:text-[40px] font-medium leading-[44px]'>
              {data?.title}
            </h1>
          )}
          <ul className='flex flex-col gap-6 lg:gap-8'>
            {data?.list?.map((list, index: number) => (
              <li key={index} className='flex flex-col gap-6 lg:gap-8'>
                <div className='flex flex-col gap-4'>
                  <Title type='h2' size='medium'>
                    {list?.title}
                  </Title>
                  <Text>{list?.description}</Text>
                </div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='591'
                  height='2'
                  viewBox='0 0 591 2'
                  fill='none'
                  className={cn(
                    data?.list?.length - 1 === index ? 'hidden' : 'block',
                    'w-full max-lg:mx-auto flex-1 '
                  )}
                >
                  <path
                    opacity='0.4'
                    d='M591 1L0 1'
                    stroke='#1A1A1A'
                    strokeWidth='0.5'
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {!isLastSection && (
        <div className='px-8 lg:px-[94px]'>
          <Separator />
        </div>
      )}
    </div>
  );
}
