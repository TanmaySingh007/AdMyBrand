'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NightVisionModeProps {
  children: React.ReactNode;
  isActive: boolean;
  onToggle: () => void;
}

export const NightVisionMode: React.FC<NightVisionModeProps> = ({ 
  children, 
  isActive, 
  onToggle 
}) => {
  const [scanLinePosition, setScanLinePosition] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setScanLinePosition(prev => (prev + 2) % 100);
    }, 100); // Reduced from 50ms to 100ms for better performance

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="relative">
      {children}
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-50"
            style={{
              background: `
                linear-gradient(180deg, 
                  rgba(0, 255, 0, 0.1) 0%, 
                  rgba(0, 255, 0, 0.05) 50%, 
                  rgba(0, 255, 0, 0.1) 100%
                )
              `,
              filter: 'brightness(1.2) contrast(1.3) saturate(1.5)',
            }}
          >
            {/* Scan line effect */}
            <motion.div
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60"
              style={{
                top: `${scanLinePosition}%`,
                boxShadow: '0 0 10px rgba(0, 255, 0, 0.8)',
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Static noise effect - Optimized for performance */}
            <div className="absolute inset-0 opacity-20">
              {Array.from({ length: 20 }).map((_, i) => ( // Reduced from 50 to 20 particles
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-green-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2, // Increased duration for smoother animation
                    repeat: Infinity,
                    delay: Math.random() * 3, // Increased delay
                  }}
                />
              ))}
            </div>

            {/* Thermal overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-green-600/20" />

            {/* Crosshair */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border border-green-400 rounded-full relative">
                <div className="absolute inset-0 border border-green-400 rounded-full animate-pulse" />
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-green-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Corner indicators */}
            <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-green-400" />
            <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-green-400" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-green-400" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-green-400" />

            {/* Status indicator */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <motion.div
                className="px-3 py-1 bg-black/50 text-green-400 text-xs font-mono rounded"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                NIGHT VISION ACTIVE
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={onToggle}
        className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
          isActive
            ? 'bg-green-600 text-white shadow-lg shadow-green-600/50'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isActive ? '🌙 Night Vision ON' : '🌙 Night Vision'}
      </motion.button>
    </div>
  );
};

// Night vision filter for images
export const NightVisionFilter: React.FC<{ children: React.ReactNode; isActive: boolean }> = ({ 
  children, 
  isActive 
}) => {
  return (
    <div
      className={`transition-all duration-500 ${
        isActive
          ? 'filter brightness-125 contrast-150 saturate-150 hue-rotate-90'
          : ''
      }`}
    >
      {children}
    </div>
  );
};

// Thermal vision effect
export const ThermalVision: React.FC<{ children: React.ReactNode; isActive: boolean }> = ({ 
  children, 
  isActive 
}) => {
  return (
    <div
      className={`transition-all duration-500 ${
        isActive
          ? 'filter brightness-150 contrast-200 saturate-200 hue-rotate-180'
          : ''
      }`}
    >
      {children}
    </div>
  );
}; 