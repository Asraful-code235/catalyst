"use client";
import { useState, useEffect } from "react";
import AboutPageTitle from "../AboutPageTitle";

interface Phase {
  phase: string;
  title: string;
  duration: string;
  description: string;
}

const phases: Phase[] = [
  {
    phase: "Phase 01",
    title: "Validation",
    duration: "2 - 3 months",
    description:
      "In the initial phase of our journey together, lasting 2-3 months, we embark on an intensive program aimed at validating your business idea and gaining commercial traction. Through focused market analysis and direct engagement with users and potential customers, we ensure that your venture addresses a real and substantial market need, laying the foundation for a high-growth business. You’ll collaborate closely with two seasoned startup experts specializing in product and commercial aspects, while tapping into Catalyst Venture Studio’s extensive network of entrepreneurs, UX designers, marketers, engineers, and founder communities.",
  },
  {
    phase: "Phase 02",
    title: "Foundation",
    duration: "6 - 12 months",
    description:
      "As we transition into the Foundation phase, spanning approximately 6 to 12 months, our focus shifts to developing an initial Minimum Viable Product (MVP) that resonates with early adopters and drives revenue generation. Integrated within a multidisciplinary team comprising experts in product design, engineering, marketing, and sales, you’ll work towards achieving key growth metrics. We continuously refine the business model, enhance product offerings, and execute targeted marketing strategies to acquire your first customers, setting the stage for sustained growth and success.",
  },
  {
    phase: "Phase 03",
    title: "Growth",
    duration: "12 - 24 months",
    description:
      "Entering the Growth phase, extending over 12 to 24 months, our collective efforts are directed towards expanding the customer base, driving user traction, and maximizing revenues. Through iterative development cycles and user feedback, we gain deeper insights into customer preferences and refine product features and services to exceed their expectations. With a relentless focus on delivering value, we solidify our position as the preferred choice in the market, laying the groundwork for scalable growth and market dominance.",
  },
  {
    phase: "Phase 04",
    title: "Scale",
    duration: "12 - 24 months",
    description:
      "As we progress into the Scale phase, spanning 12 to 24 months, our ambition is to accelerate customer acquisition and revenue generation, positioning your business for rapid expansion. Concurrently, we optimize business operations to accommodate current and future demands, striking a balance between profitability and service quality. With a strategic approach to scaling, we capitalize on emerging opportunities and cement our leadership position in the market.",
  },
  {
    phase: "Phase 05",
    title: "Exit",
    duration: "12 - 24 months",
    description:
      "In the final phase of our journey together, we aim to achieve a successful exit, with the business ideally valued in excess of significant benchmarks. Whether through a partial or full exit, we prioritize maximizing shareholder value while ensuring a seamless transition for the business. Drawing upon our decades of experience and successful exits, we navigate this critical phase with precision, positioning your venture for long-term success and sustainability.",
  },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Check screen size on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex flex-col gap-8 lg:gap-[94px] w-full -mt-8 lg:-mt-[64px] transition-transform duration-0 lg:max-w-[2300px] lg:ml-auto px-8 pb-8 lg:px-[94px] min-[1440px]:ml-[1.5rem] lg:pb-[94px] lg:pr-0">
      <AboutPageTitle title="Our Process" />
      <div className="transition-all duration-300 ease-in-out divide-y-2 divide-gray-200">
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`px-8 py-6 lg:py-[42px] lg:pr-[42px] flex flex-col gap-4 lg:gap-6 ${activeIndex === index ? "bg-[#1A1A1A] max-lg:pb-[52px] text-white" : "bg-white text-[#1A1A1A]"}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="header leading-[36px] font-medium cursor-pointer flex items-center justify-between lg:grid lg:grid-cols-3">
              <h3
                className={`${activeIndex === index ? " lg:pl-[42px]" : ""} flex items-center gap-0.5`}
              >
                <span> {phase.phase}</span>
                <span className="block lg:hidden">-</span>
                <span className="block lg:hidden">{phase.title}</span>
              </h3>
              <div className="col-span-2 flex items-center justify-between gap-4">
                <h4 className="hidden lg:block">{phase.title}</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`transform  transition-transform ${activeIndex === index ? "rotate-180" : "rotate-0"}`}
                >
                  <path
                    d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"
                    fill={activeIndex === index ? "white" : "#1A1A1A"}
                  />
                </svg>
              </div>
            </div>
            {activeIndex === index && (
              <div className="overflow-hidden paragraph cursor-pointer flex flex-col max-lg:gap-6 lg:grid lg:grid-cols-3">
                <p
                  className={`${activeIndex === index ? "text-white lg:pl-[42px]" : ""} text-start`}
                >
                  {phase.duration}
                </p>
                <div
                  className={`${activeIndex === index ? "text-white" : ""} text-start col-span-2 w-full`}
                >
                  <p>{phase.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1252"
          height="1"
          viewBox="0 0 1252 1"
          fill="none"
          className="w-full mx-auto"
        >
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0L1252 0V0.5L0 0.5V0Z"
            fill="#1A1A1A"
          />
        </svg>
      </div>
    </section>
  );
}
