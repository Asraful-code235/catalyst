import {
  CardProps,
  PageTitleProps,
  QnaItem,
  TwoGridSectionData,
} from '@/types/what-we-do';

import Separator from '@/components/molecules/seperator/Separator';
import PageTitle from '@/components/molecules/What-we-do/capabilities/PageTitle';
import RowSeparatedListSection from '@/components/organisms/what-we-do/RowSeparatedListSection';
import TwoGridSection from '@/components/organisms/what-we-do/TwoGridSection';
import UnorderedList from '@/components/organisms/what-we-do/UnorderedList';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import Container from '@repo/ui/components/molecules/Container';
import ContactSection from '../../../molecules/What-we-do/industries/ContactSection';

const PageData: PageTitleProps = {
  title: 'Brand Development & Positioning',
  description: 'Capabilities - Business Strategy ',
};

export const cardsData: CardProps[] = [
  {
    number: '01',
    title: 'Sustainable Value Creation',
    description:
      'We prioritize sustained gains post-transformation, emphasizing continuous value delivery.',
  },
  {
    number: '02',
    title: 'Step Changes in Capabilities',
    description:
      'Our goal is to equip organizations with the necessary capabilities to implement changes and drive continuous improvement effectively.',
  },
  {
    number: '03',
    title: 'Sustained Culture Shift',
    description:
      'We foster a culture that ensures alignment and engagement in new ways of working, facilitating long-term success.',
  },
];

const brandDevelopmentAndPositioning: TwoGridSectionData = {
  title: 'Our Brand Development and Positioning Services',
  descriptions: [
    {
      description:
        'Catalyst is more than just a provider of software development services; our engineers become an integral part of your business for as long as you need them. The software engineering expertise we provide is synonymous with security, exceptional performance, user-centricity, and scalability. Our mission is to transform your innovative ideas into tangible business value.',
    },
  ],
};

const howWeHelp = [
  'Crafting Compelling Brand Stories: We help companies define their brand story and narrative, creating emotional connections with their audience and building brand loyalty.',
  'Creating Consistent Brand Experiences: Our experts ensure that companies deliver consistent brand experiences across all touchpoints, reinforcing brand values and identity at every interaction.',
  'Driving Brand Differentiation: We help companies identify what sets them apart from competitors and leverage those unique attributes to create a distinct and memorable brand.',
  'Building Brand Advocacy: By engaging customers and fostering brand advocacy, we help companies turn loyal customers into brand ambassadors who promote their brand to others.',
  'Adapting to Market Changes: We assist companies in staying agile and responsive to market changes, adapting their brand strategy and positioning as needed to remain relevant and competitive.',
];

const qnaData: QnaItem[] = [
  {
    id: '1.',
    title: '01. Brand Strategy',
    description:
      'We work closely with companies to develop a clear and compelling brand strategy that aligns with their business goals and values. From defining brand purpose to establishing brand positioning, we help companies create a roadmap for building a strong and differentiated brand.',
  },
  {
    id: '2.',
    title: '02. Brand Identity',
    description:
      'Our experts help companies develop a unique and memorable brand identity that reflects their personality, values, and vision. From logo design to brand messaging, we ensure consistency and coherence across all brand touchpoints.',
  },
  {
    id: '3.',
    title: '03. Brand Messaging',
    description:
      "Crafting the right brand messaging is crucial for effectively communicating your brand's value proposition to your target audience. We help companies develop compelling brand messages that resonate with their customers and differentiate them from competitors.",
  },
  {
    id: '4.',
    title: '04. Brand Activation',
    description:
      'We assist companies in activating their brand across various channels and platforms, including digital, social media, and traditional marketing channels. From brand launch campaigns to ongoing brand engagement initiatives, we help companies create meaningful connections with their audience.',
  },
  {
    id: '5.',
    title: '05. Brand Experience',
    description:
      'Creating a positive and memorable brand experience is key to building customer loyalty and advocacy. We help companies design and deliver exceptional brand experiences that delight customers at every touchpoint, from initial awareness to post-purchase engagement.',
  },
  {
    id: '6.',
    title: '06. Brand Monitoring and Management',
    description:
      'We provide ongoing brand monitoring and management services to ensure that companies maintain a consistent and positive brand image. From tracking brand sentiment to addressing brand-related issues, we help companies safeguard their brand reputation and integrity.',
  },
];

export function BrandDevelopmentPositing() {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-col gap-8 max-w-[1440px] px-8 mx-auto pt-8 lg:pt-[94px] lg:px-[94px]'>
        <PageTitle data={PageData} />
        <div className='flex flex-col gap-8 lg:gap-[64px]'>
          <Text>
            In today&apos; s competitive market, building a strong brand and
            positioning it effectively are essential for standing out and
            connecting with your target audience. At Catalyst Venture Studio, we
            offer comprehensive brand development and positioning consulting
            services to help companies create impactful brands that resonate
            with their customers.
          </Text>
          <TwoGridSection
            data={brandDevelopmentAndPositioning}
            titleClassName='lg:text-xl font-medium leading-[36px] lg:max-w-[331px]'
          />
          <Separator />
          <div className='flex flex-col gap-8 lg:gap-6'>
            <RowSeparatedListSection
              lists={qnaData}
              className='lg:gap-[42px]'
              separatorGap='lg:gap-6'
            />
            <Separator />
          </div>
        </div>
      </div>
      <Container className='flex flex-col gap-8 lg:gap-[64px] pt-[64px]'>
        <div className='flex flex-col gap-8 lg:gap-[42px]'>
          <div className='flex flex-col gap-4 lg:gap-6'>
            <Title type='h2' size='medium'>
              How We Help Companies Develop and Position Their Brand
            </Title>
            <UnorderedList lists={howWeHelp} />
          </div>
          <Text>
            At Catalyst Venture Studio, we believe that strong brands are built
            on a foundation of authenticity, consistency, and relevance. With
            our brand development and positioning services, we help companies
            create brands that inspire trust, loyalty, and lasting connections
            with their audience.
          </Text>
        </div>

        <ContactSection
          title='Connect with our Consumer Goods & Services Team'
          scheduleLink='/'
        />
      </Container>
    </section>
  );
}
