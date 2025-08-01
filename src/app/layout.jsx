'use client';

import React, { useEffect, useState } from 'react';
import './globals.css';
import NavigationBar from '../components/ui/NavigationBar';
import GlobalNavigation from '../components/ui/GlobalNavigation';
import FloatingHomeButton from '../components/ui/FloatingHomeButton';
import { initializeTheme } from '../lib/theme';

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Initialize theme system
    initializeTheme();
    
    // Force immediate update
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>AdMyBrand AI - Futuristic Digital Experience</title>
        <meta name="description" content="Experience the future of digital branding with our advanced AI-powered platform featuring 8K visuals, 4DX effects, and cutting-edge neural network technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning>
        {isClient && <NavigationBar />}
        {isClient && <GlobalNavigation />}
        {isClient && <FloatingHomeButton />}
        {children}
      </body>
    </html>
  );
} 