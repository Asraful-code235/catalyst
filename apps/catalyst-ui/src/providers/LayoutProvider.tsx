'use client';
import Footer from '@repo/ui/components/organisms/Footer';
import Header from '@repo/ui/components/organisms/Header';
import { AnimatePresence, motion } from 'framer-motion';

export default function LayoutProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AnimatePresence mode='wait'>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        className='overflow-x-hidden z-0 mt-12'
      >
        {children}
      </motion.div>
      <Footer />
    </AnimatePresence>
  );
}
