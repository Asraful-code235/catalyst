'use client';
import { placeholder } from '@repo/ui/assets/icons/index';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import HeroSlider1 from '../../../../public/assets/icons/Catalyst Spotlight.webp';
import HeroSlider2 from '../../../../public/assets/icons/generativeai.webp';
import HeroSlider3 from '../../../../public/assets/icons/State of Consumer 2026.webp';
import RightArrow from '../../../../public/assets/icons/svg/right-arrow.svg';
import HeroSlider4 from '../../../../public/assets/icons/The CEO AGENDA.webp';

interface SliderItem {
  id: number;
  category: string;
  title: string;
  img: any;
  key: string;
  href: string;
}

const sliderItems: SliderItem[] = [
  {
    id: 1,
    category: 'Lorem ipsum dolor sit amet',
    title: 'Lorem ipsum dolor sit amet',
    img: HeroSlider1,
    key: 'Catalyst Spotlight',
    href: '/',
  },
  {
    id: 2,
    category: 'Lorem ipsum dolor sit amet',
    title: 'Lorem ipsum dolor sit amet',
    img: HeroSlider2,
    key: 'What is Germinative AI?',
    href: '/',
  },
  {
    id: 3,
    category: 'Lorem ipsum dolor sit amet',
    title: 'Lorem ipsum dolor sit amet',
    img: HeroSlider3,
    key: 'State of Consumer 2026',
    href: '/',
  },
  {
    id: 4,
    category: 'Lorem ipsum dolor sit amet',
    title: 'Lorem ipsum dolor sit amet',
    img: HeroSlider4,
    key: 'The CEO AGENDA',
    href: '/',
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [previousIndex, setPreviousIndex] = useState<number>(0);
  const [timestamp, setTimestamp] = useState<number>(Date.now());
  const [showText, setShowText] = useState<boolean>(false);

  const handleCategoryClick = (index: number) => {
    if (index >= 0 && index < sliderItems.length) {
      setPreviousIndex(activeIndex);
      setActiveIndex(index);
      setTimestamp(Date.now());
      setShowText(false);
    }
  };

  return (
    <section className='relative w-full h-[334px] lg:h-[602px] overflow-hidden'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={sliderItems[activeIndex]!.key}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.1, ease: 'easeOut' }}
          className='absolute w-full h-full'
          onAnimationComplete={() => setShowText(true)}
        >
          <Image
            src={sliderItems[activeIndex]?.img?.src || HeroSlider1.src}
            alt={sliderItems[activeIndex]?.title || 'Default Title'}
            placeholder='blur'
            blurDataURL={placeholder.src}
            loading='lazy'
            decoding='async'
            width={1900}
            height={1200}
            objectFit='cover'
            className='object-cover h-full w-full object-center'
          />
        </motion.div>
      </AnimatePresence>

      <div className='max-w-[1440px] mx-auto lg:px-[94px] relative'>
        <Image
          src={RightArrow}
          alt={'right arrow'}
          width={58}
          height={74}
          style={{
            filter: 'drop-shadow(0px 0px 22.8px rgba(0, 0, 0, 0.30))',
          }}
          className='object-cover aspect-auto absolute top-8 lg:top-[70.4px] right-8 lg:right-[94px] z-20 max-md:w-5 max-lg:h-[27px] h-[74.177px]'
        />
        <motion.div className='absolute inset-0 '>
          <div className=' px-8 lg:px-[94px] py-8 lg:py-[94px] font-medium flex flex-col justify-center max-lg:px-6 gap-6 lg:gap-8'>
            <Text
              type='p'
              className='text-white lg:text-2xl lg:leading-[26.4px]'
            >
              {sliderItems[activeIndex]?.category}
            </Text>
            <Title
              size='big'
              type='h1'
              className='text-white  leading-[35.2px] lg:leading-[70.4px] max-w-[214px] lg:max-w-[450px]'
            >
              {sliderItems[activeIndex]?.title}
            </Title>

            <button className='flex items-center mt-4 gap-2 lg:gap-3 '>
              <Text type='p' className='text-white font-medium '>
                Read More
              </Text>
              <span className='x'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='10'
                  height='16'
                  viewBox='0 0 10 16'
                  fill='none'
                >
                  <path
                    d='M0.500002 2.2625L6.06275 8L0.500001 13.7375L2.21255 15.5L9.5 8L2.21255 0.5L0.500002 2.2625Z'
                    fill='white'
                  />
                </svg>
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        style={{
          background:
            'linear-gradient(180deg, rgba(34, 34, 34, 0.00) 0%, #1A1A1A 100%)',
        }}
        className=' absolute bottom-0 md:h-[103px] w-full flex flex-col gap-4 '
      >
        <div className='flex flex-col gap-4 px-8 lg:px-[94px] py-8 lg:pt-[48px] lg:pb-8 max-w-[1440px] mx-auto w-full'>
          <div className='lg:hidden text-center mt-4 text-white'>
            <p className='text-sm font-medium'>
              {sliderItems[activeIndex]?.key}
            </p>
          </div>
          <div className='max-w-[1440px] mx-auto max-lg:px-8 transform flex items-center justify-center lg:justify-between w-full gap-2 lg:gap-8 text-white'>
            {sliderItems.map((item, index) => (
              <button
                key={index}
                className={`${
                  index === activeIndex ? 'underline underline-offset-4' : ''
                } text-shadow max-lg:text-xs max-lg:leading-[18px] font-medium hover:underline hover:underline-offset-2 leading-[150%] flex flex-col gap-4 items-center justify-center`}
                onMouseEnter={() => handleCategoryClick(index)}
              >
                <motion.span className={`hidden lg:block `}>
                  {item.key}
                </motion.span>
                <motion.span
                  animate={{
                    backgroundColor:
                      index === activeIndex
                        ? '#ffff'
                        : 'rgba(255,255,255,0.50)',
                  }}
                  className='w-1.5 h-1.5 rounded-full block lg:hidden'
                ></motion.span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSlider;
