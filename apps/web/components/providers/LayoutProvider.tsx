"use client";
import Footer from "@repo/ui/components/shared/Footer";
import Header from "@repo/ui/components/shared/Header";
import { AnimatePresence } from "framer-motion";

export default function LayoutProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AnimatePresence mode="wait">
      <Header />
      <main className="overflow-x-hidden z-0 mt-12">{children}</main>
      <Footer />
    </AnimatePresence>
  );
}
