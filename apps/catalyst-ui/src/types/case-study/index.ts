import { StaticImageData } from 'next/image';

export interface Partnering {
  title: string;
  description: string;
}

export interface CaseStudyProps {
  category: string;
  title: string;
  description: string;
  strongText?: string;
  subTitle?: string;
  smallImage: StaticImageData;
  bigImage?: StaticImageData;
  partnering?: Partnering;
  isImageAbsolute?: boolean;
  rtl?: boolean;
}

export interface PhaseProps {
  title?: string;
  description: string;
  strongText?: string;
}

export interface ListProps {
  list: PhaseProps[];
}

export interface GridSectionProps {
  image: StaticImageData;
  title?: string;
  rtl?: boolean;
  list: {
    title: string;
    description: string;
  }[];
}

export interface ImageItem {
  title: string;
  image: StaticImageData;
}

export interface WhyPartnerWithUsDataType {
  title: string;
  description: string;
  images: ImageItem[];
}
