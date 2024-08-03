"use client";
import { motion } from "framer-motion";
import { mobileNav, MobileNavType, type NavItem } from "utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Button } from "../../ui/button";
import logo from "../../../assets/icons/svg/logo.svg";
import menu from "../../../assets/icons/svg/menu.svg";

const MobileNav = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.div
      className="bg-white fixed inset-0 z-50 overflow-y-scroll lg:hidden"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-lg:p-4 lg:pl-[42px] h-12 max-w-[1440px] mx-auto flex items-center justify-between gap-4 overflow-hidden relative">
        <div>
          <img
            src={logo.src}
            alt="logo"
            className="w-[68px] h-[14px] lg:h-[20.115px] lg:w-[90.82px]"
          />
        </div>

        <img
          src={menu.src}
          alt="menu"
          className="w-6 h-6 block lg:hidden cursor-pointer"
          onClick={onClick}
        />
      </div>
      <Accordion type="multiple" className="w-full">
        {mobileNav.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            {!item.children && item.title === "Contact Us" ? (
              <div className="w-full flex flex-col mt-4">
                <Button className="border-b border-[#1A1A1A]">
                  {item.title}
                </Button>
              </div>
            ) : (
              <AccordionTrigger className="paragraph font-bold text-left px-8 ">
                {item.title}
              </AccordionTrigger>
            )}
            <AccordionContent className="">
              {item.children ? (
                <div
                  className={`${item.title === "About" ? "space-y-6" : "space-y-8"}`}
                >
                  {(Array.isArray(item.children) ? item.children : []).map(
                    (child: any, childIndex: number) => (
                      <NavItem key={childIndex} item={child} />
                    )
                  )}
                </div>
              ) : null}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
};

const NavItem = ({ item }: { item: MobileNavType }) => {
  return (
    <div
      className={`${item.children ? "flex flex-col gap-4" : "flex flex-col"} px-8 `}
    >
      {item.children?.length ? (
        <p className="paragraph text-left font-bold">{item.title}</p>
      ) : (
        <p className="paragraph text-left">{item.title}</p>
      )}

      {item.title === "Featured Topics" ? (
        <ul className="grid grid-cols-3 gap-4">
          {item.children?.slice(0, 5).map((sub, index) => (
            <a
              href={`/${sub.slug}`}
              key={index}
              className="paragraph text-left"
            >
              {sub.title}
            </a>
          ))}
        </ul>
      ) : (
        <ul className="flex flex-col gap-6">
          {item.children?.map((sub, index) => (
            <a
              href={`/${sub.slug}`}
              key={index}
              className="paragraph text-left"
            >
              {sub.title}
            </a>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
