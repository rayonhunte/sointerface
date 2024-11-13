import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: 'light' | 'dark' | 'system';
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, defaultTheme = 'system' }) => {
  return (
    <NextThemesProvider
      defaultTheme={defaultTheme}
      attribute="class"
    >
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </NextThemesProvider>
  );
};