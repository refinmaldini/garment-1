import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CtaBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create transforms based on scroll progress
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [0.4, 1, 0.7]);

  return (
    <motion.section
      ref={containerRef}
      className="py-16 px-6"
      style={{ y, scale, opacity }}
    >
      <motion.div
        className="container mx-auto bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-white/5 dark:bg-black/5 rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div
          className="relative z-10 space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            staggerChildren: 0.2,
            delayChildren: 0.2
          }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold max-w-3xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Siap Memulai Produksi Pakaian Anda?
          </motion.h2>
          <motion.p
            className="text-gray-400 dark:text-gray-500 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Konsultasikan desain Anda sekarang secara gratis dengan tim ahli kami.
          </motion.p>
          <motion.button
            className="bg-white dark:bg-black text-black dark:text-white px-10 py-5 rounded-full font-bold text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hubungi WhatsApp Kami
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CtaBanner;