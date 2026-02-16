import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create transforms based on scroll progress
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [0.5, 1, 0.8]);

  return (
    <motion.section
      ref={containerRef}
      className="bg-gray-50 dark:bg-gray-900/50 py-24"
      id="about"
      style={{
        y,
        scale,
        opacity
      }}
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          className="grid grid-cols-2 gap-4"
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        >
          <motion.img
            alt="Sewing machine detail"
            className="w-full h-80 object-cover rounded-2xl bw-image"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8WLwssTvFf7aSu96sUU-kZjMVN_I1yy9yNzJ3SBsb_Faw2Qsr5EDGZ8tLKkb8XqLG8_R50X483PP4xI9nDv-3fPCirZ6c81RpemwuaJq_qV1Vigmcx0iCdgUr8uyqt4vrf0IJdwJm_qI9J0d1zLozI4GtetKfWBC9p0aqARvPrmW1nZwwhY1gZaQdlbiK1ocGmLkzm5vUEBqYdlG0-QdIgQqOZTgEuT7VwvDpOa03YFVCX5F3jNp4I6yG6se8I_yPcjBAneZabWlX"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
          />
          <motion.img
            alt="Fabric materials"
            className="w-full h-80 object-cover rounded-2xl mt-8 bw-image"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCax1QjxkHzINggHSt3T_L2mlFysEXD0sTt42Gn9YMd4fgJIeH9RSG-pSLN22l6szDr6tXB-pmdG7d7ZbmDIt92gyYPfcvCVYplFBTn6gmCen09jiUwKVj4MAuR3M6Rfv5faAY6gjg2RZgxA1NohL2JOrRgaNk3pbEkxlpGv4vgYLc-ns-6kl5CwrZtnGQzsGr6Fi7UQa015BA_vOeOboJIcNrVNGkPS6jHyYoZe06mIdcJIKQjgp66ch97AvBSq0yX021MTZNb08J5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
        <motion.div
          className="space-y-6"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
        >
          <motion.h3
            className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Tentang Kami
          </motion.h3>
          <motion.h2
            className="text-4xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Jasa Produksi Konveksi Baju Berkualitas di Kota Makassar.
          </motion.h2>
          <motion.p
            className="text-gray-500 dark:text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Tenri Collection adalah salah satu usaha di bidang pembuatan pakaian yang memiliki fokus utama yaitu memproduksi pakaian dalam jumlah yang besar atau satuan sesuai kebutuhan sandang permintaan konsumen.
          </motion.p>
          <motion.p
            className="text-gray-500 dark:text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Dengan pengalaman bertahun-tahun melayani klien korporat maupun perorangan, kami menjamin kepuasan pada setiap jahitan yang kami hasilkan.
          </motion.p>
          <motion.div
            className="pt-4 flex gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-3xl font-black"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
              >
                10k+
              </motion.div>
              <div className="text-xs font-bold text-gray-400 uppercase">Produk Selesai</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-3xl font-black"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              >
                500+
              </motion.div>
              <div className="text-xs font-bold text-gray-400 uppercase">Klien Senang</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;