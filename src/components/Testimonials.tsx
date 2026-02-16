import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create transforms based on scroll progress
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [0.3, 1, 0.6]);

  return (
    <motion.section
      ref={containerRef}
      className="py-20"
      style={{ y, opacity }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Telah Dipercaya Oleh
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            staggerChildren: 0.2,
            delayChildren: 0.4
          }}
        >
          <motion.span
            className="text-2xl font-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
          >
            LOGOBRAND
          </motion.span>
          <motion.span
            className="text-2xl font-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
          >
            PARTNER_CO
          </motion.span>
          <motion.span
            className="text-2xl font-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
          >
            INSTITUTION
          </motion.span>
          <motion.span
            className="text-2xl font-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
          >
            COMPANY_X
          </motion.span>
          <motion.span
            className="text-2xl font-black"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.1, opacity: 1 }}
          >
            STARTUP.IO
          </motion.span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;