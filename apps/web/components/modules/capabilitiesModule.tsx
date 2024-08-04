import { Module } from "utils";
import CapabilitiesPageTitle from "./capabalities/CapabilitiesPageTitle";
import CapabilitiesAbout from "./capabalities/CapabilitiesAbout";
import ListItems from "./capabalities/ListItems";
import ContactTeam from "./Industries/ContactTeam";
import AboutWithCards from "./capabalities/AboutWithCards";
import TwoGridSection from "./capabalities/TwoGridSection";
import AccordionList from "./capabalities/AccordionList";
import HowWeWorkAndWhatWeGet from "./capabalities/HowWeWorkAndWhatWeGet";

interface ModulesProps {
  modules: Module[];
}
export default function CapabilitiesModule({ modules }: ModulesProps) {
  return (
    <>
      {modules?.map((module) => {
        switch (module._type) {
          case "pageTitleSection":
            return <CapabilitiesPageTitle key={module._key} {...module} />;
          case "about":
            return <CapabilitiesAbout key={module._key} {...module} />;
          case "about-with-cards":
            return <AboutWithCards key={module._key} {...module} />;
          case "two-grid-section":
            return <TwoGridSection key={module._key} {...module} />;
          case "list-item":
            return <ListItems key={module._key} {...module} />;
          case "accordion-list":
            return <AccordionList key={module._key} {...module} />;
          case "how-we-work":
            return <HowWeWorkAndWhatWeGet key={module._key} {...module} />;
          case "contactTeam":
            return <ContactTeam key={module._key} {...module} />;
          default:
            return null;
        }
      })}
    </>
  );
}
