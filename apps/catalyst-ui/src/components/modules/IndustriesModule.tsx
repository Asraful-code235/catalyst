import { Module } from "utils";
import About from "./Industries/About";
import ContactTeam from "./Industries/ContactTeam";
import GridListItem from "./Industries/GridListItem";
import ListItemSection from "./Industries/ListItemSection";
import PageTitleSection from "./Industries/PageTitleSection";
import WhatYouCanExpect from "./Industries/WhatYouCanExpect";
import WhyChoseUs from "./Industries/WhyChoseUs";

interface ModulesProps {
  modules: Module[];
}

export default async function IndustriesModule({ modules }: ModulesProps) {
  return (
    <>
      {modules?.map((module, index) => {
        switch (module._type) {
          case "pageTitleSection":
            return <PageTitleSection key={index} {...module} />;
          case "about":
            return <About key={index} {...module} />;
          case "whyChoseUs":
            return <WhyChoseUs key={index} {...module} />;
          case "listItemSection":
            return <ListItemSection key={index} {...module} />;
          case "gridListItem":
            return <GridListItem key={index} {...module} />;
          case "whatYouCanExpect":
            return <WhatYouCanExpect key={index} {...module} />;
          case "contactTeam":
            return <ContactTeam key={index} {...module} />;
          default:
            return null;
        }
      })}
    </>
  );
}
