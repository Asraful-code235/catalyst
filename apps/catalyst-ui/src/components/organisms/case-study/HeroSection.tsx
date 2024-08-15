import ImageAtom from '@/components/atoms/Image';
import Separator from '@/components/molecules/seperator/Separator';
import { CaseStudyProps } from '@/types/case-study';
import { placeholder } from '@repo/ui/assets/icons/index';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import { cn } from '@repo/ui/lib/utils';
import Image from 'next/image';

interface HeroSectionProps {
  data: CaseStudyProps;
}

export default function HeroSection({ data }: HeroSectionProps) {
  if (!data) return null;
  const isImageAbsolute = data?.isImageAbsolute || false;
  const rtl = data?.rtl || false;
  return (
    <div className='flex flex-col gap-8 lg:gap-[64px]'>
      <section
        className={cn(
          isImageAbsolute ? ' ' : ' max-w-[1440px] mx-auto lg:px-[94px]',
          ' max-lg:px-8 '
        )}
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[42px]'>
          <div
            className={cn(
              rtl ? 'col-span-2' : 'col-span-2 lg:col-span-1',
              isImageAbsolute ? 'w-full lg:max-w-[649px] ml-auto' : '',
              'flex flex-col gap-[42px]'
            )}
          >
            <div className='flex flex-col gap-8'>
              <Title type='h2' size='medium' className='max-lg:text-[32px]'>
                {data?.category}
              </Title>
              <Title
                type='h1'
                size='big'
                className=' text-xs lg:text-[40px] leading-[13.2px] lg:leading-[44px]'
              >
                {data?.title}
              </Title>
              <Text className=' max-lg:-mt-4'>{data?.description}</Text>
            </div>
            <div>
              {isImageAbsolute ? (
                <div className='border-[0.5px] border-[#000] w-fit overflow-hidden'>
                  <ImageAtom
                    src={data?.smallImage || placeholder.src}
                    alt={data?.title || 'case-study'}
                    width={1900}
                    height={800}
                    className='w-full max-w-[402px] max-h-[175px] aspect-auto object-center object-cover lg:object-contain'
                  />
                </div>
              ) : (
                <ImageAtom
                  src={data?.smallImage || placeholder.src}
                  alt={data?.title || 'case-study big'}
                  width={1900}
                  height={800}
                  className='w-full h-[130px] lg:h-[198px] object-cover object-center aspect-auto'
                />
              )}
            </div>
          </div>
          {data?.bigImage && (
            <div className='w-full relative max-lg:h-[330px] max-lg:col-span-2'>
              <Image
                src={data?.bigImage || placeholder.src}
                placeholder='blur'
                blurDataURL={placeholder.src}
                alt={data?.title || 'case-study-big'}
                loading='lazy'
                decoding='async'
                quality={'100'}
                layout='fill'
                className='w-full h-full object-cover object-center aspect-auto'
              />
            </div>
          )}

          {data?.partnering ? (
            <div className='flex flex-col gap-4 lg:gap-8 lg:-mt-[10px] col-span-2'>
              <Title type='h2' size='medium'>
                {data?.partnering?.title}
              </Title>
              <Text>{data?.partnering?.description}</Text>
            </div>
          ) : null}
        </div>
      </section>
      <div className='w-full px-8 lg:px-[94px] max-w-[1440px] mx-auto'>
        <Separator />
      </div>
    </div>
  );
}
