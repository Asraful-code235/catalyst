const statisticsItems = [
  { id: 1, number: "100+", name: "Award-Winning Clients" },
  { id: 2, number: "$500M+", name: "In Client Acquisitions" },
  { id: 3, number: "32", name: "Month Average Engagement" },
  { id: 4, number: "1000+", name: "Startups Supported" },
  { id: 5, number: "20+", name: "Years Of Experience" },
  { id: 6, number: "5+", name: "Companies Under Portfolio" },
  { id: 7, number: "$25M+", name: "Capital Raised" },
];

export default function WhatDrivesUs() {
  return (
    <section className="flex flex-col gap-4 lg:gap-8">
      <h2 className="text-xs lg:text-4xl font-medium">What Drives us</h2>
      <ul className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-[64px] lg:gap-y-[42px]">
        <p className="paragraph lg:text-base text-left lg:col-span-3 tracking-tight ">
          We are driven by a shared commitment to excellence and a deep
          understanding of the challenges faced by entrepreneurs and technology
          leaders. Our comprehensive expertise in technology, business strategy,
          and operations management enables us to empower our clients to
          innovate with confidence, accelerate their growth, and navigate the
          complexities of today's rapidly evolving landscape.
        </p>
        {statisticsItems.map((item, index) => (
          <li key={index} className="text-left flex flex-col gap-4 lg:gap-6">
            <p className="text-2xl lg:text-5xl leading-[26.4px] lg:leading-[52.8px] font-bold text-secondary ">
              {item.number}
            </p>
            <p className="paragraph lg:text-base text-left leading-[18px] lg:leading-6 text-gray-700 capitalize">
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
