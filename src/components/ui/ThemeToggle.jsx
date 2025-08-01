'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme) => {
    const root = document.documentElement;
    const body = document.body;
    
    // Set data attribute
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Remove all theme classes first
    body.classList.remove('night-vision', 'bright-mode');
    
    // Apply theme-specific styles
    if (newTheme === 'night') {
      body.classList.add('night-vision');
      // Force immediate visual update
      document.body.style.filter = 'hue-rotate(90deg) brightness(1.2) contrast(1.5)';
    } else if (newTheme === 'bright') {
      body.classList.add('bright-mode');
      // Force immediate visual update
      document.body.style.filter = 'brightness(1.1) contrast(1.1)';
    } else {
      // Dark mode - remove any filters
      document.body.style.filter = 'none';
    }

    // Force a re-render by triggering a resize event
    window.dispatchEvent(new Event('resize'));
    
    // Dispatch custom event for other components to listen
    window.dispatchEvent(new CustomEvent('themeChange', { detail: { theme: newTheme } }));
    
    // Force DOM update
    setTimeout(() => {
      const elements = document.querySelectorAll('*');
      elements.forEach(el => {
        if (el.style) {
          el.style.transition = 'all 0.3s ease';
        }
      });
    }, 10);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
    
    // Force immediate update
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  };

  const themes = [
    { id: 'dark', name: 'Dark Mode', icon: '🌙', color: 'from-gray-800 to-black' },
    { id: 'bright', name: 'Bright Mode', icon: '☀️', color: 'from-blue-400 to-cyan-400' },
    { id: 'night', name: 'Night Vision', icon: '🔍', color: 'from-green-800 to-green-600' }
  ];

  if (!isClient) {
    return (
      <div className="relative">
        <div className="relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg border border-cyan-400/50">
          <span className="flex items-center space-x-2">
            <span>🌙</span>
            <span>Theme</span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg border border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
      >
        <span className="flex items-center space-x-2">
          <span>{themes.find(t => t.id === theme)?.icon}</span>
          <span>Theme</span>
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full right-0 mt-2 w-48 bg-black/90 backdrop-blur-2xl border border-cyan-400/50 rounded-lg shadow-2xl shadow-cyan-400/25 z-50"
          >
            <div className="p-2">
              {themes.map((themeOption) => (
                <motion.button
                  key={themeOption.id}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(0, 255, 255, 0.1)' }}
                  onClick={() => handleThemeChange(themeOption.id)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-all duration-200 flex items-center space-x-3 ${
                    theme === themeOption.id 
                      ? 'bg-cyan-500/20 text-cyan-300' 
                      : 'text-gray-300 hover:text-cyan-300'
                  }`}
                >
                  <span className="text-lg">{themeOption.icon}</span>
                  <span className="text-sm font-medium">{themeOption.name}</span>
                  {theme === themeOption.id && (
                    <motion.div
                      layoutId="activeTheme"
                      className="w-2 h-2 bg-cyan-400 rounded-full ml-auto"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle; 