"use client";

import { useState } from "react";
import Image from "next/image";

import Tradible from "../../public/assets/case-study/catalyst homepage image blockchain copy.png";
import Etr from "../../public/assets/case-study/catalyst homepage image ecommerce copy.png";
import LaMemoire from "../../public/assets/case-study/catalyst homepage image public sector copy.png";

const caseStudyData = [
  {
    id: 1,
    title: "Tradible",
    slug: "/case-study/tradible",
    img: Tradible,
    description:
      "Discover how Tradible is revolutionizing the collectibles market with blockchain technology.",
  },
  {
    id: 2,
    title: "407 ETR",
    slug: "/case-study/407-etr",
    img: Etr,
    description:
      "Explore how 407 ETR transformed its digital strategy and platform to engage a younger demographic in Ontario, enhancing user experience and efficiency.",
  },
  {
    id: 3,
    title: "La Mémoire",
    slug: "/case-study/la-memoire",
    img: LaMemoire,
    description:
      "Experience how La Mémoire transformed luxury home fragrances with unique scents and products.",
  },
];

export default function CaseStudy() {
  const [hoveredItem, setHoveredItem] = useState<number>(0);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3">
      <div className="md:col-span-2 relative h-[400px] md:h-auto">
        <Image
          src={caseStudyData[hoveredItem]?.img || Tradible}
          alt={caseStudyData[hoveredItem]?.title || "tradible"}
          width={800}
          height={375}
          className="w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col w-full h-full">
        {caseStudyData.map((item, index) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(0)}
            className={`p-4 border border-l-0 group flex flex-col gap-[18px] cursor-pointer transition-colors h-full ${
              hoveredItem === index ? "bg-primary" : "bg-white"
            }`}
          >
            <h3 className="text-base font-medium leading-[17px] flex items-center gap-3 group-hover:font-bold">
              {item.title}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="group-hover:transform group-hover:translate-x-1"
                >
                  <path
                    d="M4 13L16.17 13L10.58 18.59L12 20L20 12L12 4L10.59 5.41L16.17 11L4 11L4 13Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </span>
            </h3>
            <p className="paragraph leading-[18px] max-w-[442px] text-left">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
