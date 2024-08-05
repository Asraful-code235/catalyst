import { separator } from "@repo/ui/assets/icons/index";
import { Button } from "@repo/ui/components/ui/button";
import Image from "next/image";
import { Module } from "utils";

export default function ContactTeam({ data }: Module) {
  if (!data) return null;
  const { title, scheduleLink, contactUs } = data;
  return (
    <section className="max-w-[1440px] mx-auto px-8 lg:px-[94px] pb-[64px] lg:pb-[94px]">
      <Image
        src={separator.src}
        alt="separator"
        width={400}
        height={400}
        className="w-full h-auto pb-8 lg:pb-[64px] max-w-[1440px] mx-auto "
      />
      <div className="flex flex-col gap-6">
        <h3 className="header text-center">{title}</h3>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Button className="max-lg:text-xs">
            <a href={scheduleLink} target="_blank">
              Schedule a Consultation
            </a>
          </Button>
          <Button className="max-lg:text-xs" variant={"link"}>
            <a href={contactUs}>Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
