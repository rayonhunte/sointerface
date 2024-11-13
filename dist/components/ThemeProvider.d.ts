import React from 'react';
export interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: 'light' | 'dark' | 'system';
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
