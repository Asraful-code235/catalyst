"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeroSlider1 from "../../public/assets/icons/Catalyst Spotlight.webp";
import HeroSlider2 from "../../public/assets/icons/generativeai.webp";
import HeroSlider3 from "../../public/assets/icons/State of Consumer 2026.webp";
import HeroSlider4 from "../../public/assets/icons/The CEO AGENDA.webp";
import RightArrow from "../../public/assets/icons/svg/right-arrow.svg";

interface SliderItem {
  id: number;
  category: string;
  title: string;
  img: any;
  key: string;
  href: string;
}

const sliderItems: SliderItem[] = [
  {
    id: 1,
    category: "Lorem ipsum dolor sit amet",
    title: "Lorem ipsum dolor sit amet",
    img: HeroSlider1,
    key: "Catalyst Spotlight",
    href: "/",
  },
  {
    id: 2,
    category: "Lorem ipsum dolor sit amet",
    title: "Lorem ipsum dolor sit amet",
    img: HeroSlider2,
    key: "What is Germinative AI?",
    href: "/",
  },
  {
    id: 3,
    category: "Lorem ipsum dolor sit amet",
    title: "Lorem ipsum dolor sit amet",
    img: HeroSlider3,
    key: "State of Consumer 2026",
    href: "/",
  },
  {
    id: 4,
    category: "Lorem ipsum dolor sit amet",
    title: "Lorem ipsum dolor sit amet",
    img: HeroSlider4,
    key: "The CEO AGENDA",
    href: "/",
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleCategoryClick = (index: number) => {
    if (index >= 0 && index < sliderItems.length) {
      setActiveIndex(index);
    }
  };

  return (
    <section className="relative w-full h-[334px] md:h-[602px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={sliderItems[activeIndex]?.key}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.7 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute w-full h-full "
        >
          <Image
            src={RightArrow}
            alt={"right arrow"}
            width={58}
            height={74}
            style={{
              filter: "drop-shadow(0px 0px 22.8px rgba(0, 0, 0, 0.30))",
            }}
            className="object-cover aspect-auto absolute top-8 md:top-[70.4px] right-8 md:right-24 z-20 max-md:w-5 max-md:h-[27px] h-[74.177px] "
          />
          <Image
            src={sliderItems[activeIndex]?.img?.src || HeroSlider1.src}
            alt={sliderItems[activeIndex]?.title || "Default Title"}
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
          <div className="absolute py-8 md:top-[70.4px] md:left-0 font-medium flex flex-col justify-center px-6 md:pl-24 gap-6 md:gap-8">
            <p className="text-white text-xs md:text-2xl leading-[13.2px] md:leading-6">
              {sliderItems[activeIndex]?.category}
            </p>
            <h1
              style={{
                textShadow: "0px 0px 4px rgba(0, 0, 0, 0.50)",
              }}
              className="text-white text-[32px] leading-[35.2px] md:text-[64px] md:leading-[70.4px] max-w-[214px] md:max-w-[416px]"
            >
              {sliderItems[activeIndex]?.title}
            </h1>
            <button className="text-white mt-4 max-md:text-xs flex items-center font-medium leading-[18px] md:leading-6">
              Read More
              <span className="ml-3 md:ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                >
                  <path
                    d="M0.500002 2.2625L6.06275 8L0.500001 13.7375L2.21255 15.5L9.5 8L2.21255 0.5L0.500002 2.2625Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
      <motion.div
        style={{
          background:
            "linear-gradient(180deg, rgba(34, 34, 34, 0.00) 0%, #1A1A1A 100%)",
        }}
        className="absolute bottom-0 pb-8 md:h-[103px] w-full px-24"
      >
        <div className=" max-w-[1440px] mx-auto transform flex items-center justify-center md:justify-between gap-2 md:gap-8 text-white">
          {sliderItems.map((item, index) => (
            <motion.button
              key={item.key}
              className={`${index === activeIndex ? "font-bold underline underline-offset-4" : ""} text-shadow max-md:text-xs max-md:leading-[18px] font-medium hover:font-bold hover:underline hover:underline-offset-2 leading-[150%] flex flex-col gap-4 items-center justify-center`}
              onMouseEnter={() => handleCategoryClick(index)}
            >
              <motion.span className={`hidden md:block `}>
                {item.key}
              </motion.span>
              <motion.span
                animate={{
                  backgroundColor:
                    index === activeIndex ? "#ffff" : "rgba(255,255,255,0.50)",
                }}
                className="w-1.5 h-1.5 rounded-full block md:hidden"
              ></motion.span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSlider;
