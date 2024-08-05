import {
  CaseStudyProps,
  GridSectionProps,
  ListProps,
  PhaseProps,
} from '@/utils/types/case-study';
import {
  tradibleHeaderBigImage,
  tradibleHeaderSmallImage,
  tradibleServiceImage,
} from '@repo/ui/assets/icons/index';
import CaseStudiesGridSection from '../CaseStudiesGridSection';
import PhaseSection from '../CaseStudiesPhase';
import HeroSection from '../HeroSection';
import FooterSection from './FooterSection';

const data: CaseStudyProps = {
  category: 'Tradible',
  strongText: 'Phase 1: ',
  title: 'Building Tradible with Catalyst Venture Studio',
  description:
    'Tradible is pioneering the peer-to-peer marketplace for trading cards and collectibles, leveraging blockchain technology to enhance transparency and security in the $500+ billion industry. With a commitment to transparent pricing, asset tokenization, and data-driven trading, Tradible aims to revolutionize how enthusiasts buy, sell, and authenticate their collectibles.',
  smallImage: tradibleHeaderSmallImage,
  bigImage: tradibleHeaderBigImage,
  partnering: {
    title: 'Partnering with Catalyst Venture Studio',
    description:
      "Tradible's journey from conceptualization to market leadership exemplifies the transformative impact of Catalyst Venture Studio's comprehensive service offerings. From initial concept validation to ongoing strategic advisory, Catalyst has been integral in shaping Tradible's trajectory as a disruptive force in the digital collectibles market.",
  },
};

const validation: PhaseProps = {
  strongText: 'Phase 1: ',
  title: 'Validation - Laying the Foundation',
  description:
    "During Phase 1, spanning 2-3 months, Catalyst Venture Studio collaborated closely with Tradible to validate its unique marketplace concept and establish initial market traction. This phase included rigorous market analysis, direct engagement with potential users, and leveraging Catalyst's extensive network to ensure Tradible effectively addresses market needs.",
};

const serviceDeployed: PhaseProps = {
  strongText: 'Services Deployed',
  description:
    'Lorem ipsum dolor sit amet consectetur. Turpis sem tempus quam senectus in dictum fames adipiscing. Scelerisque cursus integer nunc nisl erat. Lorem ipsum dolor sit amet consectetur. Turpis sem tempus quam senectus in dictum fames adipiscing. Scelerisque cursus integer nunc nisl erat.',
};

const gridSectionData: GridSectionProps = {
  image: tradibleServiceImage,
  rtl: true,
  list: [
    {
      title: 'Brand Development and Positioning',
      description:
        'Establishing Tradible as the premier peer-to-peer marketplace for trading cards and collectibles.',
    },
    {
      title: 'Product Validation and Market Research',
      description:
        'Ensuring alignment with market demands through comprehensive analysis and user feedback.',
    },
    {
      title: 'Startup Advisory',
      description:
        "Strategic guidance tailored to Tradible's distinctive challenges and opportunities.",
    },
    {
      title: 'Raising Venture Capital',
      description:
        "Facilitating funding to support Tradible's growth and technological advancements.",
    },
    {
      title: 'Website Design and Development',
      description:
        'Creating an intuitive platform optimized for seamless trading experiences.',
    },

    {
      title: 'Blockchain Development',
      description:
        'Implementing blockchain technology for transparent pricing, secure tokenization, and counterfeit prevention.',
    },
    {
      title: 'Full Stack Development',
      description:
        "Building a scalable infrastructure to support Tradible's global marketplace operations.",
    },
  ],
};

const footerSectionData: ListProps = {
  list: [
    {
      title: 'Current Status and Ongoing Engagement',
      description:
        'As an ongoing client of Catalyst Venture Studio, Tradible continues to benefit from strategic advisory and support. Positioned in Phase 1, Tradible is refining its platform and preparing for subsequent growth phases. Catalyst remains committed to guiding Tradible towards industry leadership and sustainable growth in the dynamic collectibles market.',
    },
    {
      title: 'Future Outlook',
      description:
        "With Catalyst's ongoing support, Tradible is poised to redefine the digital collectibles landscape. The collaboration between Tradible and Catalyst Venture Studio exemplifies a commitment to innovation, excellence, and market disruption. As Tradible progresses through subsequent phases—Foundation, Growth, Scale, and Exit—Catalyst will continue to maximize Tradible's potential and ensure its long-term success.",
    },
    {
      title: 'Conclusion',
      description:
        "Tradible's partnership with Catalyst Venture Studio underscores the power of strategic collaboration in transforming visionary concepts into thriving enterprises. By harnessing Catalyst's expertise across technology, business strategy, and startup development, Tradible is not only reshaping the collectibles marketplace but also setting new benchmarks for user-centric digital experiences worldwide. Together, Tradible and Catalyst Venture Studio are paving the way for sustained innovation and leadership in the digital collectibles industry, revolutionizing how enthusiasts engage with their passions through advanced blockchain technology and transparent trading solutions.",
    },
  ],
};

export default function CaseStudyTradible() {
  return (
    <section className='flex flex-col gap-8 lg:gap-[64px] pb-16 pt-8 lg:py-[94px]'>
      <HeroSection data={data} />
      <PhaseSection data={validation} />
      <PhaseSection data={serviceDeployed} />
      <CaseStudiesGridSection data={gridSectionData} />
      <FooterSection data={footerSectionData} />
    </section>
  );
}
