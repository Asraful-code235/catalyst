import ImageAtom from '@/components/atoms/Image';
import Separator from '@/components/molecules/seperator/Separator';
import CardList from '@/components/organisms/case-study/CardList';
import {
  CityOfBoston,
  Etr,
  Lamemoire,
  Lcbo,
  Miami,
  Toronto,
  Tradible,
} from '@repo/ui/assets/icons/index';
import { Button } from '@repo/ui/components/atoms/button';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import Link from 'next/link';

export interface CaseProps {
  id: number;
  title: string;
  date: string;
  image: any;
  href: string;
}

const caseStudiesData: CaseProps[] = [
  {
    id: 1,
    title: '407 ETR',
    href: '/case-studies/407-etr',
    date: '2023',
    image: Etr,
  },
  {
    id: 2,
    title: 'La Mémoire',
    href: '/case-studies/la-memoire',
    date: '2024',

    image: Lamemoire,
  },
  {
    id: 3,
    title: 'City of Toronto',
    href: '/case-studies/city-of-tronto',
    date: '2024',

    image: Toronto,
  },
  {
    id: 4,
    title: 'LCBO',
    href: '/case-studies/lcbo',
    date: '2024',

    image: Lcbo,
  },
  {
    id: 5,
    title: 'city of Miami',
    href: '/case-studies/city-of-miami',
    date: '2024',

    image: Miami,
  },
  {
    id: 6,
    title: 'city of Boston',
    href: '/case-studies/city-of-boston',
    date: '2024',

    image: CityOfBoston,
  },
];

export function CaseStudyHomePage() {
  return (
    <section className='max-w-[1440px] mx-auto p-8 pb-[64px] lg:p-[94px] flex flex-col gap-8 lg:gap-[42px] '>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>
        <div className='h-[374px] overflow-hidden lg:h-[388px] border-[0.5px] border-[#1A1A1A66] border-opacity-[0.50] w-full col-span-2 flex items-center justify-center flex-col gap-6'>
          <ImageAtom
            src={Tradible}
            alt='who we are'
            width={800}
            height={400}
            className='object-center object-cover aspect-auto w-[198.992px] h-[47px] lg:w-[436px] lg:h-[103px]'
          />

          <p className='header max-[390px]:text-[10px] max-lg:text-xs text-center max-lg:font-semibold max-lg:leading-[13.2px] leading-[26.4px] font-semibold'>
            Redefining Collectibles for Today&apos;s Enthusiasts.
          </p>
        </div>
        <div className='flex flex-col gap-6 justify-between w-full col-span-2 lg:col-span-1'>
          <div className='flex flex-col gap-4 lg:gap-8'>
            <Title type='h1' size='medium'>
              Tradible
            </Title>
            <Text className='w-full lg:max-w-[310px]'>
              Explore how Catalyst Venture Studio partnered with Tradible to
              revolutionize the $500+ billion collectibles market using
              blockchain technology, ensuring transparent, secure, and
              data-driven trading experiences.
            </Text>
          </div>
          <Button className='w-full sm:w-fit'>
            <Link href={`/case-studies/tradible`}>View Details</Link>
          </Button>
        </div>
      </div>

      <Separator />
      <CardList lists={caseStudiesData} />
    </section>
  );
}
