'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({
  children,
  className,
  onClick
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        // Glassmorphism effect classes
        'backdrop-blur-md bg-white/10 border border-white/20',
        'shadow-2xl shadow-black/10',
        'rounded-2xl p-6',
        'hover:bg-white/20 hover:border-white/30',
        'transition-all duration-300 ease-out',
        // Additional styling
        'relative overflow-hidden',
        // Optional click handler
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {/* Optional inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassmorphismCard; 