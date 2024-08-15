import { placeholder } from '@repo/ui/assets/icons/index';
import { cn } from '@repo/ui/lib/utils';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ImageAtomProps {
  src: StaticImageData | any;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const defaultStyles = `
  w-full h-full aspect-auto
`;

const ImageAtom: React.FC<ImageAtomProps> = ({
  src,
  alt,
  width = 1600,
  height = 1000,
  className,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder='blur'
      blurDataURL={placeholder.src}
      loading='lazy'
      decoding='async'
      quality={100}
      className={cn(defaultStyles, className)}
    />
  );
};

export default ImageAtom;
