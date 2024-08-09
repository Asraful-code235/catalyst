import { CardProps, PageTitleProps, QnaItem } from '@/types/what-we-do';

import Separator from '@/components/molecules/seperator/Separator';
import PageTitle from '@/components/molecules/What-we-do/capabilities/PageTitle';
import RowSeparatedListSection from '@/components/organisms/what-we-do/RowSeparatedListSection';
import UnorderedList from '@/components/organisms/what-we-do/UnorderedList';
import Text from '@repo/ui/components/atoms/Text';
import Title from '@repo/ui/components/atoms/Title';
import Container from '@repo/ui/components/molecules/Container';
import ContactSection from '../../../molecules/What-we-do/industries/ContactSection';

const PageData: PageTitleProps = {
  title: 'Finance and Strategy',
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

const howWeHelp = [
  'Corporate Strategy',
  'Business Strategy',
  'Value Creation Strategy and Shareholder Activism Defense',
  'Strategic Planning',
  'Finance Function Excellence',
  'Family Business',
];

const howWeWork: QnaItem[] = [
  {
    id: '1.',
    title: 'Develop a Clear Vision',
    description:
      'Our corporate finance consulting services help you craft a business portfolio prioritizing growth platforms and establish a financial plan to drive value.',
  },
  {
    id: '2.',
    title: 'Define Your Journey',
    description:
      "We assist in creating a business strategy that not only addresses competition but also allows creativity in charting your organization's unique path to success.",
  },
  {
    id: '3.',
    title: 'Deliver and Defend',
    description:
      'Partnering with you, we shape corporate, business, financial, and investor strategies that generate sustained value, maximize results, and shield against shareholder activism.',
  },
  {
    id: '4.',
    title: 'Maximize Transaction Value',
    description:
      'From strategic decision-making in mergers and acquisitions to supporting IPOs and spinoffs, we provide end-to-end transaction excellence, including winning post-merger integration strategies.',
  },
  {
    id: '5.',
    title: 'Remain Agile and Ahead',
    description:
      'Our corporate finance consulting services enhance your overall strategy by implementing planning processes focused on insight, preparedness, and agility for long-term success.',
  },
  {
    id: '6.',
    title: 'Achieve Superior Business Result',
    description:
      'We collaborate with you to build a world-class finance function strategy and approach aligned with strategy and digital transformation, fostering a performance-driven culture.',
  },
  {
    id: '7.',
    title: 'Prepare and Mitigate',
    description:
      'Our strategic, transformational, and technical offerings in risk and compliance help you navigate uncertainty, turning challenges into opportunities.',
  },
];

export function FinanceStrategy() {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-col gap-8 max-w-[1440px] px-8 mx-auto pt-8 lg:pt-[94px] lg:px-[94px]'>
        <PageTitle data={PageData} />
        <Text>
          In today&apos;s dynamic business landscape, leaders continually
          grapple with the challenge of creating exceptional value amidst
          rapidly shifting competitive dynamics. At Catalyst Venture Studio, we
          understand the crucial role of strategy and value creation in
          navigating this complex terrain. Drawing from our rich legacy of
          strategic innovation, including pioneering frameworks like the
          experience curve and growth-share matrix, we empower clients to drive
          growth, attract talent, enhance stock performance, and deliver value
          to stakeholders.
        </Text>
      </div>
      <Container className='flex flex-col gap-8 lg:gap-[64px] lg:pt-[64px]'>
        <div className='flex flex-col gap-4 lg:gap-8 '>
          <Title type='h2' size='medium'>
            Our Corporate Finance and Strategy Consulting Services
          </Title>
          <UnorderedList lists={howWeHelp} />
          <div className='lg:mt-8'>
            <Separator />
          </div>
        </div>

        <Title type='h2' size='medium'>
          How We Collaborate with Corporate Strategy and Finance Clients
        </Title>

        <div className='flex flex-col gap-8 lg:gap-6'>
          <RowSeparatedListSection
            lists={howWeWork}
            className='lg:gap-[42px]'
            separatorGap='lg:gap-6'
          />
        </div>
        <div className='-mt-2 lg:-mt-[40px]'>
          <ContactSection
            title='Connect with our Finance and Strategy Team'
            scheduleLink='/'
          />
        </div>
      </Container>
    </section>
  );
}
