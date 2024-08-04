import { placeholder } from "@repo/ui/assets/icons/index";
import Image from "next/image";
import AboutUsImage from "../../../public/assets/aboutus/catalyst about us image.webp";
import { Button } from "@repo/ui/components/ui/button";

export default function WhoWeAre() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full">
      <Image
        src={AboutUsImage}
        alt="who we are"
        width={800}
        height={400}
        placeholder="blur"
        blurDataURL={placeholder.src}
        className="max-lg:h-[241px] max-h-[465px] w-full object-cover object-center h-full aspect-auto"
        loading="lazy"
        decoding="async"
        quality={"85"}
      />
      <div className="flex flex-col justify-center gap-4 lg:gap-8">
        <h4 className="text-xs lg:text-4xl font-medium">Who We Are</h4>
        <p className="paragraph lg:text-base text-left ">
          At Catalyst Venture Studio, we are a dynamic collective of experts
          spanning diverse fields, united by our passion for innovation and
          commitment to driving transformative change. From technology and
          application design to business strategy and operations management, our
          comprehensive suite of services empowers founders and entrepreneurs to
          navigate every stage of their journey. With a global perspective and a
          relentless pursuit of excellence, we partner with visionaries to turn
          ideas into reality and redefine industries.
        </p>
        <Button className="lg:hidden">Contact Us</Button>
      </div>
    </section>
  );
}
