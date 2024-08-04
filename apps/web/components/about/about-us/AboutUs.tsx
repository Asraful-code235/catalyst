import AboutPageTitle from "../AboutPageTitle";
import MoreAboutUs from "./MoreAboutUs";
import WhatDrivesUs from "./WhatDrivesUs";
import WhatMakesUsUnique from "./WhatMakesUsUnique";
import WhoWeAre from "./WhoWeAre";

export default function AboutUs() {
  return (
    <section className="lg:pt-[94px] flex flex-col gap-8 lg:gap-[64px]">
      <section className="max-w-[1440px] mx-auto flex flex-col gap-8 lg:gap-[64px] p-8 lg:py-0 lg:px-[94px]">
        <AboutPageTitle title={"About Us"} />
        <WhoWeAre />
        <WhatDrivesUs />
      </section>
      <WhatMakesUsUnique />
      <MoreAboutUs />
    </section>
  );
}
