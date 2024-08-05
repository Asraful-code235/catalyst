import React from "react";

const statisticsItems = [
  { id: 1, number: "100+", name: "Award-Winning Clients" },
  { id: 2, number: "$500M+", name: "In Client Acquisitions" },
  { id: 3, number: "32", name: "Month Average Engagement" },
  { id: 4, number: "1000+", name: "Startups Supported" },
  { id: 5, number: "20+", name: "Years Of Experience" },
  { id: 6, number: "5+", name: "Companies Under Portfolio" },
  { id: 7, number: "$25M+", name: "Capital Raised" },
];

export default function Statistics() {
  return (
    <section className="p-8 lg:p-[94px] max-w-[1440px] mx-auto flex flex-col gap-[64px]">
      <p className="paragraph text-xs lg:text-2xl font-medium leading-[150%] lg:leading-[36px] text-left">
        With over two decades of experience, Catalyst Venture Studio specializes
        in consulting for global innovation. We guide visionary founders and
        companies from inception to market disruption. Our expertise helps
        navigate challenges, optimize operations, and drive sustainable growth.
      </p>
      <section className="flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-[90px] gap-y-12 max-lg:divide-y max-lg:divide-gray-200 max-lg:gap-y-6">
          <p className="paragraph text-2xl col-span-3 font-medium leading-[36px] text-left mb-4 w-fit">
            Key Statistics
          </p>
          {statisticsItems.map((item) => (
            <div
              key={item.id}
              className=" col-span-3 lg:col-span-1 text-left flex flex-col gap-4 lg:gap-6 max-lg:pt-4 "
            >
              <p className="text-2xl lg:text-5xl leading-[26.4px] lg:leading-[52.8px] font-bold text-secondary ">
                {item.number}
              </p>
              <p className="paragraph lg:text-base text-left leading-[18px] lg:leading-6 text-gray-700 capitalize">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1252"
        height="2"
        viewBox="0 0 1252 2"
        fill="none"
        className="hidden lg:block w-full"
      >
        <path
          opacity="0.4"
          d="M1252 1L0 1"
          stroke="#1A1A1A"
          strokeWidth="0.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="366"
        height="2"
        viewBox="0 0 366 2"
        fill="none"
        className="-mt-10 mx-auto w-full lg:hidden"
      >
        <path
          d="M0 1L366 1.00003"
          stroke="#1A1A1A"
          strokeOpacity="0.25"
          strokeWidth="0.5"
        />
      </svg>
    </section>
  );
}
