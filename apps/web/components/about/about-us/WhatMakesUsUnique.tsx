import Image from "next/image";
import { placeholder } from "@repo/ui/assets/icons/index";
import whatmakesusunique from "../../../public/assets/aboutus/whatmakesusunique.svg";
import { Button } from "@repo/ui/components/ui/button";

export default function WhatMakesUsUnique() {
  return (
    <section className="lg:max-w-[1440px] mx-auto w-full lg:px-[94px]">
      <section className="relative w-full h-[430px] lg:h-[349px] max-lg:-mt-6">
        <Image
          src={whatmakesusunique}
          alt="who we are"
          width={800}
          height={400}
          placeholder="blur"
          blurDataURL={placeholder.src}
          className="object-center object-cover w-full h-full absolute inset-0 z-10 "
          loading="lazy"
          decoding="async"
          quality={"85"}
        />
        <div className="z-10 absolute inset-0 flex items-center justify-center flex-col gap-8 text-white px-8 py-6 lg:py-16">
          <h3 className="max-[390px]:text-[28px] text-[32px] lg:text-4xl font-medium text-center text-white">
            What Makes Us Unique
          </h3>
          <p className="paragraph lg:text-base leading-[18px] max-[390px]:mt-0 max-lg:mt-4 lg:leading-6 font-normal max-w-[834px] mx-auto z-20 text-white ">
            At Catalyst Venture Studio, we differentiate ourselves through our
            holistic approach to innovation and our unwavering dedication to our
            clients' success. With a broad range of services including
            technology development, business transformation, and start-up
            advisory, we offer a unique blend of expertise to address the
            diverse needs of founders and entrepreneurs. Our global perspective
            and collaborative ethos ensure that we deliver tailored solutions
            that drive meaningful impact and unlock new opportunities for
            growth.
          </p>
          <Button className="lg:w-fit px-10">Schedule a Consultation</Button>
        </div>
      </section>
    </section>
  );
}
