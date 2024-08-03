import { motion } from "framer-motion";

const aboutItems = [
  { title: "Who We Are", slug: "who-we-are" },
  { title: "Partners", slug: "partners" },
  { title: "Startup Program", slug: "startup-program" },
];

export default function AboutNav() {
  return (
    <motion.section
      transition={{ duration: 0.1, ease: "easeInOut" }}
      className=" w-full h-auto border-b border-[#1A1A1A] bg-white py-6 max-lg:hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="w-[714px] ml-auto grid grid-cols-3">
          <div className="w-fit">
            <div className="paragraph text-left font-bold text-sm pl-9">
              About Us
            </div>
          </div>
          <div className=" w-full">
            <ul className="flex flex-col gap-4">
              {aboutItems.map((item, index) => (
                <a
                  href={`${item.slug}`}
                  key={index}
                  className="paragraph text-start"
                >
                  {item.title}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
