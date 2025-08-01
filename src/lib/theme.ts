'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark' | 'system' | 'night' | 'bright';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

export const useTheme = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'dark',
      isDark: true,
      setTheme: (theme: Theme) => {
        set({ theme });
        
        // Apply theme to document
        const root = document.documentElement;
        const body = document.body;
        
        // Remove all existing theme classes and data attributes
        root.classList.remove('dark', 'light');
        body.classList.remove('night-vision', 'bright-mode');
        root.removeAttribute('data-theme');
        body.style.filter = 'none';
        
        let isDark = false;
        
        if (theme === 'dark') {
          isDark = true;
          root.classList.add('dark');
          root.setAttribute('data-theme', 'dark');
        } else if (theme === 'light') {
          isDark = false;
          root.classList.add('light');
          root.setAttribute('data-theme', 'light');
        } else if (theme === 'night') {
          isDark = true;
          root.setAttribute('data-theme', 'night');
          body.classList.add('night-vision');
          body.style.filter = 'hue-rotate(90deg) brightness(1.2) contrast(1.5)';
        } else if (theme === 'bright') {
          isDark = false;
          root.setAttribute('data-theme', 'bright');
          body.classList.add('bright-mode');
          body.style.filter = 'brightness(1.1) contrast(1.1)';
        } else if (theme === 'system') {
          const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          isDark = systemPrefersDark;
          if (systemPrefersDark) {
            root.classList.add('dark');
            root.setAttribute('data-theme', 'dark');
          } else {
            root.classList.add('light');
            root.setAttribute('data-theme', 'light');
          }
        }
        
        set({ isDark });
        
        // Force immediate update
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 100);
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);

// Initialize theme on mount
export const initializeTheme = () => {
  const { theme, setTheme } = useTheme.getState();
  setTheme(theme);
};

// Listen for system theme changes
if (typeof window !== 'undefined') {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const { theme } = useTheme.getState();
    if (theme === 'system') {
      useTheme.getState().setTheme('system');
    }
  });
} 