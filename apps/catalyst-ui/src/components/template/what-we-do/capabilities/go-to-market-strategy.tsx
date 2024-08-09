import {
  AboutSectionProps,
  CardProps,
  PageTitleProps,
  QnaItem,
} from '@/types/what-we-do';

import Separator from '@/components/molecules/seperator/Separator';
import AboutSection from '@/components/molecules/What-we-do/capabilities/AboutSection';
import PageTitle from '@/components/molecules/What-we-do/capabilities/PageTitle';
import RowSeparatedListSection from '@/components/organisms/what-we-do/RowSeparatedListSection';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import Container from '@repo/ui/components/molecules/Container';
import ContactSection from '../../../molecules/What-we-do/industries/ContactSection';

const PageData: PageTitleProps = {
  title: 'Digital Strategy & Sales',
  description: 'Capabilities - Business Strategy ',
};

const AboutSectionData: AboutSectionProps = {
  title:
    'Digital Strategy and Sales: Transforming Marketing and Sales Organizations',
  description:
    "In today's rapidly evolving digital landscape, marketing and sales organizations must adapt to meet the changing needs and expectations of customers. At Catalyst Venture Studio, we offer comprehensive digital strategy and sales consulting services to help companies leverage technology, analytics, and agile processes to create more personalized and effective customer experiences.",
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
    title: '01. CMO Agenda',
    description:
      "Our consulting services help Chief Marketing Officers (CMOs) navigate the complexities of today's business environment, driving sustainable growth through innovative strategies and initiatives.",
  },
  {
    id: '2.',
    title: '02. Digital Sales',
    description:
      'We assist companies in transforming their sales processes for the digital age, leveraging data-driven insights and digital channels to drive revenue growth and customer engagement.',
  },
  {
    id: '3.',
    title: '03. E-Commerce',
    description:
      'With the rise of online shopping, e-commerce has become increasingly important for businesses. Our experts help companies develop and optimize their e-commerce strategies to capitalize on this growing market.',
  },
  {
    id: '4.',
    title: '04. Digital Marketing',
    description:
      'From social media to search engine optimization (SEO), we help companies develop and execute digital marketing campaigns that drive brand awareness, engagement, and conversion.',
  },
  {
    id: '5.',
    title: '05. Sales Channel Strategy',
    description:
      'We work with companies to develop comprehensive sales channel strategies that align with their business goals and target markets, optimizing sales performance and customer satisfaction.',
  },
  {
    id: '6.',
    title: '06. Personalization',
    description:
      'Our personalized marketing and sales programs leverage data and analytics to create tailored customer experiences that drive brand loyalty',
  },
  {
    id: '7.',
    title: '07. Marketing Function Excellence',
    description:
      "We help companies optimize their marketing functions and capabilities, enabling them to operate more efficiently and effectively in today's competitive marketplace.",
  },
];

export function GoToMarketStrategy() {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-col gap-8 max-w-[1440px] px-8 mx-auto pt-8 lg:pt-[94px] lg:px-[94px]'>
        <PageTitle data={PageData} />
        <AboutSection data={AboutSectionData} />
        <Separator />
      </div>
      <Container className='flex flex-col gap-8 lg:gap-[64px] pt-[64px]'>
        <div className='flex flex-col gap-8 lg:gap-[42px]'>
          <Title type='h2' size='medium'>
            Our Digital Strategy and Sales Services
          </Title>
          <div className='flex flex-col gap-8 lg:gap-6'>
            <RowSeparatedListSection
              lists={qnaData}
              className='lg:gap-[42px]'
              separatorGap='lg:gap-6'
            />
            <Separator />
          </div>
        </div>
        <div className='flex flex-col gap-8'>
          <Title type='h2' size='medium'>
            How We Help Marketing and Sales Organizations
          </Title>
          <div className='flex flex-col gap-8'>
            <Text>
              <strong className='font-bold'>
                {' '}
                Driving Sustainable Growth:
              </strong>{' '}
              We help CMOs rethink their business strategies to drive
              sustainable growth in a rapidly changing market.
            </Text>
            <Text>
              <strong className='font-bold'>Digital Transformation: </strong> By
              embracing digital channels and e-commerce, we help businesses
              anticipate and respond to evolving consumer needs and preferences.
            </Text>
            <Text>
              <strong className='font-bold'> Personalization:</strong> Our
              unmatched personalization programs create personalized customer
              experiences that deepen brand engagement and drive business value.
            </Text>
            <Text>
              <strong className='font-bold'>Adopting New Trends:</strong> We
              assist clients in adopting new trends in data-driven selling,
              digitization, and sales models to improve the effectiveness of
              their marketing and sales strategies.
            </Text>
            <Text>
              <strong className='font-bold'>Streamlining Operations: </strong>{' '}
              We help clients centralize their operations teams from marketing,
              sales, and customer success to accelerate revenue growth and
              improve operational efficiency.
            </Text>
          </div>
        </div>
        <Separator />
        <Text>
          At Catalyst Venture Studio, we&apos;re committed to helping marketing
          and sales organizations thrive in the digital age. With our innovative
          strategies and hands-on approach, we empower companies to adapt,
          evolve, and succeed in today&apos;s competitive marketplace.
        </Text>
        <ContactSection
          title='Connect with our Digital Strategy & Sales Team'
          scheduleLink='/'
        />
      </Container>
    </section>
  );
}
