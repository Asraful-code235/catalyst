import ImageAtom from '@/components/atoms/Image';
import Text from '@repo/ui/components/atoms/Text';
import Link from 'next/link';

interface CardOverlayTextProps {
  image: string;
  title: string;
  slug?: string;
  date?: string;
  href: string;
}

export default function CardOverlayText({
  image,
  title,
  slug,
  date,
  href,
}: CardOverlayTextProps) {
  return (
    <div className='flex flex-col gap-4'>
      <div className='relative group flex flex-col gap-4 transition-all duration-300 ease-in-out'>
        <ImageAtom
          src={image}
          alt={title}
          width={800}
          height={800}
          className='w-full h-full aspect-auto'
        />
        <div className='absolute hidden p-3 bg-primary inset-0 lg:flex flex-col items-center justify-center gap-[62px] w-full h-full opacity-0 group-hover:opacity-100'>
          <Text className='text-[32px] font-bold leading-[35.2px] text-center'>
            {title}
          </Text>
          <Link
            href={href}
            className='cursor-pointer flex absolute bottom-3 right-3 p-3 items-center gap-3 text-xs leading-[18px] font-medium justify-end'
          >
            <span className='hover:font-bold'>View Details</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='10'
              height='16'
              viewBox='0 0 10 16'
              fill='none'
            >
              <path
                d='M0.500002 2.2625L6.06275 8L0.500001 13.7375L2.21255 15.5L9.5 8L2.21255 0.5L0.500002 2.2625Z'
                fill='#1A1A1A'
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className='flex items-center  justify-between gap-4'>
        <Text className='text-sm leading-[15.4px] font-medium'>{title}</Text>
        <Text className='text-sm leading-[15.4px]'>{date}</Text>
      </div>
    </div>
  );
}
