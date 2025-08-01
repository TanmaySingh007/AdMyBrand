'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const GlobalNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('dark');

  // Show navigation after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Listen for theme changes
  useEffect(() => {
    const handleThemeChange = () => {
      const savedTheme = localStorage.getItem('theme') || 'dark';
      setCurrentTheme(savedTheme);
    };

    // Initial theme check
    handleThemeChange();

    // Listen for storage changes
    window.addEventListener('storage', handleThemeChange);
    window.addEventListener('themeChange', handleThemeChange);

    return () => {
      window.removeEventListener('storage', handleThemeChange);
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-4 z-50 flex flex-col space-y-3">
      {/* Back to Home Button - More Prominent */}
      <motion.a
        href="/"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg border border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 flex items-center space-x-2 font-semibold"
      >
        <span className="text-lg">🏠</span>
        <span>Back to Home</span>
      </motion.a>

      {/* Enhanced Theme Toggle */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-black/20 backdrop-blur-2xl border border-cyan-400/30 rounded-lg p-2"
      >
        <ThemeToggle />
      </motion.div>

      {/* Quick Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col space-y-2 bg-black/20 backdrop-blur-2xl border border-cyan-400/30 rounded-lg p-3"
      >
        <div className="text-cyan-400 text-xs font-semibold mb-2 px-2">Quick Navigation</div>
        {[
          { href: '/ui-demo', label: 'UI Demo', icon: '🎨' },
          { href: '/forms-demo', label: 'Forms', icon: '📝' },
          { href: '/blog', label: 'Blog', icon: '📚' },
          { href: '/shop', label: 'Shop', icon: '🛍️' }
        ].map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-2 rounded-lg border border-purple-400/50 hover:shadow-lg hover:shadow-purple-400/25 transition-all duration-300 flex items-center space-x-2 text-sm"
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* Current Theme Indicator */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-black/20 backdrop-blur-2xl border border-cyan-400/30 rounded-lg p-2 text-center"
      >
        <div className="text-cyan-400 text-xs font-semibold">Current Theme</div>
        <div className="text-white text-sm mt-1">
          {currentTheme === 'dark' && '🌙 Dark Mode'}
          {currentTheme === 'bright' && '☀️ Bright Mode'}
          {currentTheme === 'night' && '🔍 Night Vision'}
        </div>
      </motion.div>
    </div>
  );
};

export default GlobalNavigation; 