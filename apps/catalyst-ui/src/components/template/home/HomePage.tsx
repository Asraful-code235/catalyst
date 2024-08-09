import CaseStudy from '@/components/organisms/home/CaseStudy';
import HeroSlider from '@/components/organisms/home/HeroSlider';
import InsightsReport from '@/components/organisms/home/InsightsReport';
import OurClients from '@/components/organisms/home/OurClients';
import ScheduleConsultation from '@/components/organisms/home/ScheduleConsultation';
import Statistics from '@/components/organisms/home/Statistics';

export default function HomePage() {
  return (
    <div className='w-full'>
      <HeroSlider />
      <Statistics />
      <ScheduleConsultation />
      <OurClients />
      <CaseStudy />
      <InsightsReport />
    </div>
  );
}
