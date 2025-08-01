'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, isDark } = useTheme();

  useEffect(() => {
    // Initialize theme on mount
    setTheme(theme);
  }, [theme, setTheme]);

  const toggleTheme = () => {
    const themes: Array<'dark' | 'light' | 'night' | 'bright'> = ['dark', 'light', 'night', 'bright'];
    const currentIndex = themes.indexOf(theme as 'dark' | 'light' | 'night' | 'bright');
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getSystemTheme = () => {
    setTheme('system');
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'dark':
        return '🌙';
      case 'light':
        return '☀️';
      case 'night':
        return '🔍';
      case 'bright':
        return '💡';
      default:
        return '🌙';
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'dark':
        return 'Dark';
      case 'light':
        return 'Light';
      case 'night':
        return 'Night';
      case 'bright':
        return 'Bright';
      case 'system':
        return 'System';
      default:
        return 'Dark';
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Theme Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        <motion.div
          className="w-4 h-4 bg-white rounded-full shadow-md"
          animate={{
            x: isDark ? 24 : 0,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        
        {/* Icons */}
        <div className="absolute inset-0 flex items-center justify-between px-1.5">
          <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
          <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </motion.button>

      {/* Current Theme Display */}
      <div className="flex items-center space-x-1">
        <span className="text-lg">{getThemeIcon()}</span>
        <span className="text-xs font-mono text-gray-600 dark:text-gray-300">
          {getThemeLabel()}
        </span>
      </div>

      {/* System Theme Button */}
      <motion.button
        onClick={getSystemTheme}
        className={`px-3 py-1.5 text-xs rounded-md transition-colors duration-200 ${
          theme === 'system'
            ? 'bg-primary-600 text-white'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Use system theme"
      >
        System
      </motion.button>
    </div>
  );
};

export default ThemeToggle; 