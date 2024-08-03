"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, logo } from "@repo/ui/assets/icons/index";
import { navItems } from "utils";
import { cn } from "@repo/ui/lib/utils";

import menu from "../../assets/icons/svg/menu.svg";

import IndustriesNav from "./header-items/IndustriesNav";
import CapabilitiesNav from "./header-items/CapabilitiesNav";
import InsightsNav from "./header-items/InsightsNav";
import AboutNav from "./header-items/AboutNav";
import MobileNav from "./header-items/MobileNav";

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
        className={`${isMobileNavVisible ? " " : "border-b border-[#1A1A1A]"}`}
      >
        <div className="max-lg:p-4 lg:pl-[42px] h-12 max-w-[1440px] mx-auto flex items-center justify-between gap-4 overflow-hidden relative">
          <div>
            <img
              src={logo.src}
              alt="logo"
              className="w-[68px] h-[14px] lg:h-[20.115px] lg:w-[90.82px]"
            />
          </div>
          <nav className="paragraph hidden lg:flex justify-items-center">
            {navItems.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={cn(
                  "px-9 py-[17px] text-xs flex items-center gap-1.5 font-normal relative cursor-pointer",
                  navItems.length - 1 === index &&
                    "border-l border-black bg-primary font-medium leading-normal"
                )}
              >
                {item.title}
                {item.children && (
                  <motion.img
                    src={ChevronDown.src}
                    alt="chevron-down"
                    className={cn(
                      "w-4 h-4 transition-transform",
                      expandedIndex === index && "rotate-180"
                    )}
                  />
                )}
              </div>
            ))}
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
