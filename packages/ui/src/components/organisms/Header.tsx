"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { logo } from "@repo/ui/assets/icons/index";
import { cn } from "@repo/ui/lib/utils";

import menu from "../../assets/icons/svg/menu.svg";

import IndustriesNav from "../molecules/header-items/IndustriesNav";
import CapabilitiesNav from "../molecules/header-items/CapabilitiesNav";
import InsightsNav from "../molecules/header-items/InsightsNav";
import AboutNav from "../molecules/header-items/AboutNav";
import MobileNav from "../molecules/header-items/MobileNav";
import { navItems } from "../../constants/navItems";

export default function Header() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState<boolean>(false);

  const handleMouseEnter = (index: number) => {
    setExpandedIndex(index);
  };

  const handleMouseLeave = () => {
    setExpandedIndex(null);
  };

  const handleMenuClick = () => {
    setIsMobileNavVisible((prev) => !prev);
  };

  const renderDropdown = (parentSlug: string) => {
    switch (parentSlug) {
      case "what-we-do":
        return <IndustriesNav />;
      case "capabilities":
        return <CapabilitiesNav />;
      case "insights":
        return <InsightsNav />;
      case "about":
        return <AboutNav />;
      default:
        return null;
    }
  };

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50">
      <div
        className={`${isMobileNavVisible ? " " : "border-b border-[#1A1A1A] z-40"}`}
      >
        <div className="max-lg:p-4 lg:pl-[42px] h-12 max-w-[1440px] mx-auto flex items-center justify-between gap-4  relative">
          <a href="/">
            <img
              src={logo.src}
              alt="logo"
              className="w-[68px] h-[14px] lg:h-[20.115px] lg:w-[90.82px] object-center object-cover"
            />
          </a>
          <nav className="paragraph hidden lg:flex justify-items-center">
            {navItems.map((item, index) => {
              const isLastItem = navItems.length - 1 === index;
              return isLastItem ? (
                <a
                  key={index}
                  href={`/${item.slug}`}
                  className={cn(
                    "px-9 text-xs  flex items-center gap-1.5 relative cursor-pointer border-l border-black bg-primary hover:bg-primary/90 font-medium leading-normal"
                  )}
                >
                  {item.title}
                </a>
              ) : (
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={cn(
                    "px-9 py-[16px] group transition-colors duration-300 ease-in-out text-xs flex items-center gap-1.5 font-normal relative cursor-pointer",
                    expandedIndex === index && "text-[#99e5d9]"
                  )}
                >
                  <span className="group-hover:text-[#99e5d9] text-inherit">
                    {item?.children ? (
                      <span>{item.title}</span>
                    ) : (
                      <a href={`/${item.slug}`}>{item.title}</a>
                    )}
                  </span>

                  {item.children && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill={expandedIndex === index ? "#99e5d9" : "none"}
                      xmlns="http://www.w3.org/2000/svg"
                      className={cn(
                        "w-4 h-4 transition-transform",
                        expandedIndex === index && "rotate-180"
                      )}
                    >
                      <g id="mdi:chevron-up">
                        <path
                          id="Vector"
                          d="M11.825 5L8 8.7085L4.175 5L3 6.1417L8 11L13 6.1417L11.825 5Z"
                          fill={expandedIndex === index ? "#99e5d9" : "#1A1A1A"}
                        />
                      </g>
                    </svg>
                  )}
                  <div
                    className={cn(
                      "absolute left-0 bottom-[-0.5px] w-full h-0.5 bg-primary transition-all duration-300 ease-in-out",
                      expandedIndex === index && item?.children
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    )}
                  ></div>
                </div>
              );
            })}
          </nav>
          <img
            src={menu.src}
            alt="menu"
            className="w-6 h-6 block lg:hidden cursor-pointer"
            onClick={handleMenuClick}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {expandedIndex !== null &&
          expandedIndex >= 0 &&
          expandedIndex < navItems.length &&
          navItems[expandedIndex]?.children && (
            <div
              onMouseEnter={() => handleMouseEnter(expandedIndex)}
              onMouseLeave={handleMouseLeave}
            >
              {renderDropdown(navItems[expandedIndex].slug!)}
            </div>
          )}
      </AnimatePresence>
      {isMobileNavVisible && <MobileNav onClick={handleMenuClick} />}
    </header>
  );
}
