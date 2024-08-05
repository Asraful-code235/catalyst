import {
  CaseStudyProps,
  GridSectionProps,
  PhaseProps,
  WhyPartnerWithUsDataType,
} from '@/utils/types/case-study';
import {
  LamemoireBigHeaderImage,
  LamemoireBigSmallImage,
  lamemoireBottomImage,
  whypartnerwithusImage1,
  whypartnerwithusImage2,
} from '@repo/ui/assets/icons/index';
import CaseStudiesGridSection from '../CaseStudiesGridSection';
import PhaseSection from '../CaseStudiesPhase';
import HeroSection from '../HeroSection';
import WhyPartnerWithUs from './WhyWorkWithUs';

const data: CaseStudyProps = {
  isImageAbsolute: true,
  category: 'La Mémoire',
  title: 'La Mémoire’s Journey with Catalyst Venture Studio',
  subTitle: 'La Mémoire: A Luxury Home Fragrance Brand',
  description:
    'Tradible is pioneering the peer-to-peer marketplace for trading cards and collectibles, leveraging blockchain technology to enhance transparency and security in the $500+ billion industry. With a commitment to transparent pricing, asset tokenization, and data-driven trading, Tradible aims to revolutionize how enthusiasts buy, sell, and authenticate their collectibles.',
  smallImage: LamemoireBigSmallImage,
  bigImage: LamemoireBigHeaderImage,
};

const WhyPartnerWithUsData: WhyPartnerWithUsDataType = {
  title: 'Partnering with Catalyst Venture Studio',
  description:
    'La Mémoire’s collaboration with Catalyst Venture Studio has been instrumental in transforming its visionary concept into a market-leading brand. Through strategic brand development, website design, digital strategy, and startup advisory services, Catalyst has helped La Mémoire craft a luxurious and memorable consumer experience.',
  images: [
    {
      title: 'image1',
      image: whypartnerwithusImage2,
    },
    {
      title: 'image2',
      image: whypartnerwithusImage1,
    },
  ],
};

const validation: PhaseProps = {
  strongText: 'Phase 1: ',
  title: 'Validation - Laying the Foundation',
  description:
    "During Phase 1, spanning 2-3 months, Catalyst Venture Studio collaborated closely with Tradible to validate its unique marketplace concept and establish initial market traction. This phase included rigorous market analysis, direct engagement with potential users, and leveraging Catalyst's extensive network to ensure Tradible effectively addresses market needs.",
};

const gridSectionData: GridSectionProps = {
  rtl: true,
  image: lamemoireBottomImage,
  list: [
    {
      title: 'Brand Development',
      description:
        'Created a unique, heart-first brand identity that stands out in the luxury market.',
    },
    {
      title: 'Website Design',
      description:
        'Developed an intuitive, aesthetically pleasing e-commerce site for easy navigation and product selection.',
    },
    {
      title: 'Digital Strategy',
      description:
        'Crafted a visually stunning digital narrative, integrating product stories and brand ethos.',
    },
    {
      title: 'Pricing and Revenue Management',
      description:
        'Implemented tailored pricing strategies and revenue management practices to optimize growth and profitability.',
    },
    {
      title: 'Startup Advisory',
      description:
        'Provided strategic guidance on business model validation, venture capital funding, go-to-market strategy development, and product development.',
    },
  ],
};

export default function CaseStudyLaMemoire() {
  return (
    <section className='flex flex-col gap-8 lg:gap-[64px] pb-16 pt-8 lg:py-[94px]'>
      <HeroSection data={data} />
      <WhyPartnerWithUs data={WhyPartnerWithUsData} />
      <PhaseSection data={validation} />{' '}
      <CaseStudiesGridSection data={gridSectionData} isLastSection={true} />
    </section>
  );
}
