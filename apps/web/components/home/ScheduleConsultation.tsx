import Image from "next/image";
import scImage from "../../public/assets/icons/svg/scheduleconsultation.svg";
import { Button } from "@repo/ui/components/ui/button";

export default function ScheduleConsultation() {
  return (
    <section className="w-full grid grid-cols-2 h-[263px]">
      <div className="w-full bg-[#1A1A1A] text-white ">
        <div className="max-w-[718px] w-full ml-auto flex flex-col gap-4 px-[63px] py-8">
          <h3 className="font-medium text-2xl leading-[26.4px] w-full">
            Strategy, Transactions, and Transformation
          </h3>
          <p className="leading-6">
            Catalyst helps you achieve your goals with an innovative approach
            that integrates strategy, transactions, transformation, and
            technology. Our seamless design and delivery process ensures
            effective and cohesive solutions at every step.
          </p>
          <Button>Schedule a Consultation</Button>
        </div>
      </div>
      <div className="">
        <Image
          src={scImage}
          width={600}
          height={263}
          alt="image"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
