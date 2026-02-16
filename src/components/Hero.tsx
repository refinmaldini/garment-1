import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create transforms based on scroll progress
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.section
      ref={containerRef}
      className="container mx-auto px-6 py-16 md:py-28 flex flex-col md:flex-row items-center gap-12"
    >
      <motion.div
        className="flex-1 space-y-8"
        style={{ y }}
      >
        <motion.div
          className="inline-block px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Trusted Garment Manufacturer
        </motion.div>
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Konveksi Pakaian <br />
          <span className="text-gray-400">Berkualitas &amp; Terpercaya.</span>
        </motion.h1>
        <motion.p
          className="text-gray-500 dark:text-gray-400 text-lg max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Kami hadir untuk memenuhi kebutuhan produksi pakaian Anda dengan standar kualitas tinggi, pengerjaan tepat waktu, dan harga yang kompetitif.
        </motion.p>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Lihat Layanan
            <motion.span
              className="material-icons-outlined group-hover:translate-x-1 transition-transform"
              whileHover={{ x: 5 }}
            >
              arrow_forward
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex-1 relative"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
      >
        <motion.div
          className="absolute -inset-4 bg-gray-100 dark:bg-gray-900 rounded-[2rem] -z-10 rotate-3"
          initial={{ rotate: 5 }}
          animate={{ rotate: 3 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
        <motion.img
          alt="Garment rack showing various clothes in black and white"
          className="w-full h-[500px] object-cover rounded-[2rem] shadow-2xl bw-image border-4 border-white dark:border-gray-800"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwxipmHeMsIE9jq3f68v8dp49WbJ-EhwTtW2KhxRkG7agEkj2zHf5OEnkYzvOwbLMpZKrJwpysIvzuYnsYg1e3YR5bUT69Lk2uUDue8NW5hSlBvRpWEEUmgWjf6iZI-8LXTVIxVWjleoiUl-KnT__gTltrCLK622HkVieyxdjLGsSNsTjj6AS0KfkL01b1q03bYcGwDgHZemcR7yLV_VSR-X1rBHl5-8DVclwGsHlYtThF7iHnnXibzinVvZFbpGky0Yd4nhi9if-u"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;