// src/components/organisms/Partners.js

import { placeholder } from '@repo/ui/assets/icons/index';
import { cn } from '@repo/ui/lib/utils';
import Image, { StaticImageData } from 'next/image';

type Partner = {
  img: StaticImageData | string;
};

type PartnersProps = {
  partners: Partner[];
  className?: string;
};

const PartnerSlider = ({ partners, className }: PartnersProps) => {
  return (
    <div
      className={cn(
        'max-lg:w-screen mx-auto flex items-center flex-wrap justify-center gap-4',
        className
      )}
    >
      {partners.map((item, key) => (
        <div key={key} className='bg-[#f9f9f9] rounded'>
          <Image
            src={item.img || placeholder.src}
            alt='partners'
            width={400}
            height={400}
            className='flex-shrink-0 aspect-auto object-cover object-center w-[69px] lg:w-[191px] h-[34px] lg:h-[92px]'
            loading='lazy'
            decoding='async'
            quality={85}
          />
        </div>
      ))}
    </div>
  );
};

export default PartnerSlider;
