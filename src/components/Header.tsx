import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after selection
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="w-8 h-8 sm:w-10 sm:h-10 bg-black dark:bg-white flex items-center justify-center rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white dark:text-black font-bold text-base sm:text-lg">KC</span>
          </motion.div>
          <span className="font-extrabold tracking-tighter text-lg sm:text-xl">GARMENT.</span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center gap-4 lg:gap-6 text-xs sm:text-sm font-medium tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            className="hover:opacity-60 transition-opacity cursor-pointer px-2 py-1"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#');
            }}
          >
            Beranda
          </a>
          <a
            className="hover:opacity-60 transition-opacity cursor-pointer px-2 py-1"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#about');
            }}
          >
            Tentang Kami
          </a>
          <a
            className="hover:opacity-60 transition-opacity cursor-pointer px-2 py-1"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#services');
            }}
          >
            Layanan
          </a>
          <a
            className="hover:opacity-60 transition-opacity cursor-pointer px-2 py-1"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#portfolio');
            }}
          >
            Portfolio
          </a>
          <a
            className="hover:opacity-60 transition-opacity cursor-pointer px-2 py-1"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
          >
            Kontak
          </a>
        </motion.div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <motion.button
            className="bg-black dark:bg-white text-white dark:text-black w-10 h-10 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {/* Burger Icon */}
            {!mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Desktop Hubungi Kami Button */}
        <motion.div
          className="hidden md:flex items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.button
            className="bg-black dark:bg-white text-white dark:text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hubungi Kami
          </motion.button>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-black/90 backdrop-blur-md w-full py-4 px-4 absolute top-20 left-0 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-2">
            <a
              className="hover:opacity-60 transition-opacity cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#');
              }}
            >
              Beranda
            </a>
            <a
              className="hover:opacity-60 transition-opacity cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#about');
              }}
            >
              Tentang Kami
            </a>
            <a
              className="hover:opacity-60 transition-opacity cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#services');
              }}
            >
              Layanan
            </a>
            <a
              className="hover:opacity-60 transition-opacity cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#portfolio');
              }}
            >
              Portfolio
            </a>
            <a
              className="hover:opacity-60 transition-opacity cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
            >
              Kontak
            </a>
            <motion.button
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-sm font-bold mt-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hubungi Kami
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;