"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, logo } from "@repo/ui/assets/icons/index";
import { navItems } from "utils";
import { cn } from "@repo/ui/lib/utils";

import menu from "../../assets/icons/svg/menu.svg";

export default function Header() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setExpandedIndex(index);
  };

  const handleMouseLeave = () => {
    setExpandedIndex(null);
  };

  const renderDropdown = (
    children: { title: string; children?: { title: string }[] }[] | undefined,
    navTitle?: string
  ) => {
    return (
      <motion.div className="absolute left-0 w-full z-50 h-auto border-b border-[#1A1A1A] bg-white py-6 ">
        <div className="max-w-[1440px] mx-auto">
          <div className="w-[668px] ml-auto grid grid-cols-3">
            {navTitle && (
              <div className="col-span-1">
                <div className="paragraph font-bold text-sm text-start pl-8">
                  {navTitle}
                </div>
              </div>
            )}
            <div className=" w-full">
              {navTitle ? (
                <div className="flex flex-col gap-4">
                  {children?.map((child, childIndex) => (
                    <div key={childIndex} className="flex flex-col gap-4">
                      {child.title && (
                        <div className="paragraph text-start">
                          {child.title}
                        </div>
                      )}

                      {child.children && (
                        <div className="flex flex-wrap-reverse paragraph">
                          {child.children.map((subChild, subChildIndex) => (
                            <div key={subChildIndex} className="p-2 w-1/2">
                              {subChild.title}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-[42px] w-[668px] ml-auto ">
                  {children?.map((child, childIndex) => {
                    return (
                      <div key={child.title} className={`flex gap-[128px]`}>
                        <span className="paragraph font-bold text-sm pl-8">
                          {child.title}
                        </span>

                        {child.children && (
                          <div className="paragraph w-full flex flex-wrap gap-x-[32px] text-start whitespace-nowrap  gap-y-4">
                            {child.children.map((subChild, subChildIndex) => {
                              return (
                                <div
                                  style={{
                                    paddingLeft: childIndex === 4 ? "2rem" : "",
                                  }}
                                  key={subChildIndex}
                                  className="text-xs w-fit"
                                >
                                  {subChild.title}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <header className="border-b border-[#1A1A1A]">
        <div className="p-4 lg:pl-[42px] h-12 max-w-[1440px] mx-auto  flex items-center justify-between gap-4 overflow-hidden relative">
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
                  "px-8 py-[17px] flex items-center gap-1.5 relative",
                  navItems.length - 1 === index &&
                    "border-l border-black bg-primary font-medium"
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
          <img src={menu.src} alt="menu" className="w-6 h-6 block lg:hidden" />
        </div>
      </header>
      <AnimatePresence mode="wait">
        {expandedIndex !== null &&
          expandedIndex >= 0 &&
          expandedIndex < navItems.length &&
          navItems[expandedIndex]?.children && (
            <div
              onMouseEnter={() => handleMouseEnter(expandedIndex)}
              onMouseLeave={handleMouseLeave}
            >
              {renderDropdown(
                navItems[expandedIndex].children,
                navItems[expandedIndex].NavTitle
              )}
            </div>
          )}
      </AnimatePresence>
    </>
  );
}
