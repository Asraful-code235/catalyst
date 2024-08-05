import {
  CaseStudyProps,
  GridSectionProps,
  ListProps,
} from '@/utils/types/case-study';
import {
  ETRbottomimage,
  EtrHeaderSmallImage,
} from '@repo/ui/assets/icons/index';
import CaseStudiesGridSection from '../CaseStudiesGridSection';
import HeroSection from '../HeroSection';
import CaseStudyTradibleFooterSection from '../tradible/FooterSection';

const data: CaseStudyProps = {
  rtl: true,
  category: '407 ETR',
  title: '407 ETR Digital Strategy Transformation',
  subTitle: 'Client Background: 407 ETR',
  description:
    '407 ETR, a leading toll highway operator in Ontario, partnered with Catalyst Venture Studio to revamp its digital strategy aimed at engaging a younger demographic. The project included a comprehensive redesign and development of their platform to enhance transaction efficiency, user interface (UI), user experience (UX), and information display.',
  smallImage: EtrHeaderSmallImage,
};

const gridSectionData: GridSectionProps = {
  rtl: false,
  image: ETRbottomimage,
  title: 'Services Deployed',
  list: [
    {
      title: 'Application Design and Development',
      description:
        'Catalyst Venture Studio spearheaded the redesign and development of 407 ETR’s platform, focusing on improving usability and functionality for seamless user transactions.',
    },
    {
      title: 'Innovation Strategy and Delivery',
      description:
        'Collaborating closely with 407 ETR, Catalyst formulated and executed an innovation strategy to modernize service offerings and capture new market segments.',
    },
    {
      title: 'Product Validation and Market Research',
      description:
        'Through rigorous market analysis and user feedback, Catalyst validated product enhancements and market positioning strategies, ensuring alignment with evolving customer expectations.',
    },
  ],
};

const footerSectionData: ListProps = {
  list: [
    {
      title: 'Outcome',
      description:
        'The partnership empowered 407 ETR to successfully reposition its brand among younger demographics in Ontario through a modernized digital platform. The enhanced UI/UX and efficient transaction capabilities have bolstered customer engagement and satisfaction, setting a new standard in toll highway services.',
    },
    {
      title: 'Conclusion',
      description:
        '407 ETR’s collaboration with Catalyst Venture Studio exemplifies the transformative impact of strategic digital initiatives in driving customer-centric innovation and market leadership. Together, they have set a benchmark for seamless user experiences and operational efficiency in the toll highway industry.',
    },
  ],
};

export default function CaseStudyETR() {
  return (
    <section className='flex flex-col gap-8 lg:gap-[64px] pb-16 pt-8 lg:py-[94px]'>
      <HeroSection data={data} />
      <CaseStudiesGridSection data={gridSectionData} />
      <CaseStudyTradibleFooterSection data={footerSectionData} />
    </section>
  );
}
