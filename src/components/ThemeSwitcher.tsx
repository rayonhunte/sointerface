import React from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch } from "@nextui-org/react";

export const ThemeSwitcher = () => {
  const { setTheme, theme } = useNextTheme();

  return (
    <div>
      <Switch
        checked={theme === 'dark'}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
      <span style={{ marginLeft: '8px' }}>
        {theme === 'dark' ? 'Dark' : 'Light'} Mode
      </span>
    </div>
  );
};