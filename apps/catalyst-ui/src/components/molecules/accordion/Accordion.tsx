'use client';

import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import { cn } from '@repo/ui/lib/utils';
import { useState } from 'react';

interface AccordionItemProps {
  id: string;
  title: string;
  description: string;
}

export default function Accordion({
  id,
  title,
  description,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        'border-t border-b border-gray-200 transition-all duration-300 ease-in-out bg-[#1A1A1A05]',
        isOpen && 'bg-[#1A1A1A]'
      )}
    >
      <div
        className={cn(
          'flex flex-col justify-between cursor-pointer p-4 lg:p-8 lg:grid lg:grid-cols-2',
          isOpen ? 'max-lg:gap-6' : ''
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Title
          type='h2'
          size='medium'
          className={cn(
            'hidden lg:block lg:col-span-1',
            isOpen ? 'text-white' : ''
          )}
        >{`${id}`}</Title>
        <div className='flex lg:hidden items-center justify-between gap-0.5 w-full'>
          <Title
            type='h2'
            size='medium'
            className={cn(' lg:col-span-1', isOpen ? 'text-white' : '')}
          >{`${id}`}</Title>
          <Title
            type='h2'
            size='medium'
            className={cn('flex-1 lg:col-span-2', isOpen ? 'text-white' : '')}
          >
            {title}
          </Title>
          <div className='ml-4'>
            {isOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
              >
                <path
                  d='M4.175 11L8 7.2915L11.825 11L13 9.8583L8 5L3 9.8583L4.175 11Z'
                  fill='white'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
              >
                <path
                  d='M11.825 5L8 8.7085L4.175 5L3 6.1417L8 11L13 6.1417L11.825 5Z'
                  fill='#1A1A1A'
                />
              </svg>
            )}
          </div>
        </div>
        <div className='flex flex-col gap-8'>
          <div className=' hidden lg:flex items-center justify-between gap-4 w-full'>
            <Title
              type='h2'
              size='medium'
              className={cn('flex-1 lg:col-span-2', isOpen ? 'text-white' : '')}
            >
              {title}
            </Title>
            <div className='ml-4'>
              {isOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                >
                  <path
                    d='M4.175 11L8 7.2915L11.825 11L13 9.8583L8 5L3 9.8583L4.175 11Z'
                    fill='white'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                >
                  <path
                    d='M11.825 5L8 8.7085L4.175 5L3 6.1417L8 11L13 6.1417L11.825 5Z'
                    fill='#1A1A1A'
                  />
                </svg>
              )}
            </div>
          </div>
          {isOpen ? (
            <div className='flex flex-col gap-6 lg:col-span-2 text-white'>
              <Text className='text-white'>{description}</Text>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
