import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ServiceCard: React.FC<{ title: string; description: string; icon: string }> = ({ title, description, icon }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Create transforms based on scroll progress
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  return (
    <motion.div
      ref={cardRef}
      className="p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group"
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ y, scale }}
    >
      <motion.div
        className="w-14 h-14 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors"
        whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff",
                     transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="material-icons-outlined text-3xl">{icon}</span>
      </motion.div>
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Pemesanan Kustom",
      description: "Wujudkan segala desain dan ukuran sesuai dengan selera yang Anda inginkan secara presisi.",
      icon: "auto_fix_high"
    },
    {
      title: "Pengerjaan Express",
      description: "Kami menyediakan layanan pengerjaan secara cepat dengan tetap mengedepankan kualitas jahitan.",
      icon: "speed"
    },
    {
      title: "Opsi Pembayaran",
      description: "Banyak metode pembayaran praktis melalui transfer bank maupun dompet digital pilihan Anda.",
      icon: "payments"
    },
    {
      title: "Pengiriman Nasional",
      description: "Siap mengirimkan hasil produksi ke seluruh pelosok Indonesia dengan packing yang aman.",
      icon: "local_shipping"
    }
  ];

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
      className="py-24"
      id="services"
      style={{ y, opacity }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3
            className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Layanan Unggulan
          </motion.h3>
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Mengapa Memilih Kami?
          </motion.h2>
          <motion.p
            className="text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Layanan profesional dengan perhatian penuh pada detail dan kualitas bahan terbaik untuk hasil yang memuaskan.
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
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
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;