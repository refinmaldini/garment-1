import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform values based on scroll progress
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        style={{
          y: backgroundY,
          filter: blur,
          opacity,
        }}
        className="fixed inset-0 -z-10"
      >
        {/* Optional: Add a subtle parallax background effect */}
      </motion.div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default LayoutWrapper;