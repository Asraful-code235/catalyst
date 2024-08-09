import { StaticImageData } from 'next/image';

export interface PageTitleProps {
  title: string;
  category?: string;
  description?: string;
  backgroundImage?: StaticImageData | any;
}
export interface AboutSectionProps {
  title: string;
  description?: string;
  extraDescription?: string;
}

export interface WhyChoseUsSectionProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export interface ItemList {
  title: string;
  description: string;
}

export interface ListItemSectionProps {
  title: string;
  description?: string;
  items: ItemList[];
}

export interface Module {
  title: string;
  description: {
    text: string;
  }[];
}

export interface WhatCanYouExpectProps {
  list: Module[];
  image: StaticImageData;
  rtl?: boolean;
}

export interface ContactSectionProps {
  title: string;
  scheduleLink: string;
}

export interface GridSectionProps {
  title: string;
  scheduleLink: string;
}
export interface PointsList {
  title: string;
  list: string[];
}

export interface GridSectionProps {
  items: PointsList[];
}

export interface Service {
  title: string;
  description: string;
  rtl?: boolean;
}

export interface CardProps {
  number: string;
  title: string;
  description: string;
}

export interface CardSectionProps {
  cards: CardProps[];
  className?: string;
}

export interface Technology {
  title: string | any;
}

export interface ListItemProps {
  title: string;
  technologies: Technology[];
}

export interface Item {
  item: string;
}

export interface Description {
  description: string;
  extraDescription?: string;
  items?: Item[];
}

export interface TwoGridSectionData {
  title: string;
  descriptions: Description[];
}

export interface TwoGridSectionProps {
  data: TwoGridSectionData;
}

export interface QnaItem {
  id: string;
  title: string;
  description: string;
}

export interface TwoGridQnaListProps {
  lists: QnaItem[];
}
