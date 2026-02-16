import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PortfolioItem: React.FC<{ title: string; description: string; image: string }> = ({ title, description, image }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  // Create transforms based on scroll progress
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  return (
    <motion.div
      ref={itemRef}
      className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ y, scale }}
    >
      <motion.img
        alt={title}
        className="w-full h-full object-cover bw-image transition-transform duration-700 group-hover:scale-110"
        src={image}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
        animate={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <h5 className="text-white text-xl font-bold">{title}</h5>
        <p className="text-gray-300 text-sm">{description}</p>
      </motion.div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      title: "Seragam Korporat",
      description: "Desain elegan & profesional",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEr3kJ2-CKcn9cYtq47ybis0hho_0B2rliVOCZviOAwM7kxsPFzJHgRQyPCVXKy6GiRqQlhXBvxVRPsaLRfktMc0aKzuEs9hFK_-YrDZGTi1CSFjU-6jX8pCiYWXGmQVrLrOuRftaWqu6iTFSdglW20pBNHRjwdCMaXNrlfX-SqZNpqprZfMfSI7yt-zge5xiBKlnZ693T9X7MmBZkkbhiQcz1iCy9fF-59fzsP9r-F4FYMCuH8sVosUxa0OlB2xbRCmQSL3jduf07",
      category: "seragam"
    },
    {
      title: "Jaket Komunitas",
      description: "Bahan premium & bordir komputer",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_SDQbSfw5xrRV5D1JJ-v5cJ0C69uhSxWO9fYI1jdtDPXor7lC4ccuGyzkcv9mIGr1awvEMu9j4mkQlxPYkUs1z5zGb5yIPBE1UPpabHI87Iolvi7VuyPcF7hTzFfz7TacSEibZ-8tiajJFqYRaTqBKO9nyUIeooCyqDERkWhFK9QYB5SeE5pUQP9KdM9xlVvPZnitlDvfcth8wpxKxTZ3rimhF-55k0vVxoC9qc0e1yG2NjvX9gIb5To02f5-WETRRBq8JywD9cWx",
      category: "jaket"
    },
    {
      title: "Kaos Sablon",
      description: "Kualitas tinta tahan lama",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLljGz8SQzayTCj-4w8tSmsYAHXuAKAh_DfbM2g3PP3H9WJ6uIiB_smkraht96wAedx30SuOwcN7PY5hX3KLXMKZkkZFgeyqpU1g7uu9zEwYFES-oGhwEv9W6avDZL-hHyFu2p-NQOZmjNaL7bOJb78LFAtCGLPfKVDwu7n99kdaFJeIqeGKFeNSAPZKn_jc_BHCFbUwwrGKn5tXp-N1vzwt-PkjRRSMTdczryOjlpYh1CDP__5q3hfE5IH876-w7Y7ywcumYR71lE",
      category: "kaos"
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create transforms based on scroll progress
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [0.5, 1, 0.8]);

  return (
    <motion.section
      ref={containerRef}
      className="py-24 bg-gray-50 dark:bg-gray-900/50"
      id="portfolio"
      style={{ y, opacity }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Portfolio</h3>
            <h2 className="text-4xl font-bold">Hasil Karya Kami</h2>
          </motion.div>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className={`px-6 py-2 ${activeFilter === 'all' ? 'bg-black dark:bg-white text-white dark:text-black' : 'text-gray-500 hover:text-black dark:hover:text-white'} rounded-full font-bold text-sm transition-colors`}
              onClick={() => setActiveFilter('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Semua
            </motion.button>
            <motion.button
              className={`px-6 py-2 ${activeFilter === 'seragam' ? 'bg-black dark:bg-white text-white dark:text-black' : 'text-gray-500 hover:text-black dark:hover:text-white'} font-bold text-sm transition-colors`}
              onClick={() => setActiveFilter('seragam')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Seragam
            </motion.button>
            <motion.button
              className={`px-6 py-2 ${activeFilter === 'jaket' ? 'bg-black dark:bg-white text-white dark:text-black' : 'text-gray-500 hover:text-black dark:hover:text-white'} font-bold text-sm transition-colors`}
              onClick={() => setActiveFilter('jaket')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Jaket
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {filteredItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;