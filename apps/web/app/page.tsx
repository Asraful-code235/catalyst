import CaseStudy from "~/components/home/CaseStudy";
import HeroSlider from "~/components/home/HeroSlider";
import InsightsReport from "~/components/home/InsightsReport";
import OurClients from "~/components/home/OurClients";
import ScheduleConsultation from "~/components/home/ScheduleConsultation";
import Statistics from "~/components/home/Statistics";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSlider />
      <Statistics />
      <ScheduleConsultation />
      <OurClients />
      <CaseStudy />
      <InsightsReport />
    </div>
  );
}
