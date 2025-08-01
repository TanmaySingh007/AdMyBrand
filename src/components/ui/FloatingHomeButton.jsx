'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FloatingHomeButton = () => {
  return (
    <motion.a
      href="/"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 left-4 z-40 bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-3 rounded-full border border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 shadow-2xl"
    >
      <span className="text-xl">🏠</span>
    </motion.a>
  );
};

export default FloatingHomeButton; 