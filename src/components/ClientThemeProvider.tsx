'use client';

import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { ReactNode, useMemo } from 'react';
import { createAppTheme } from '@/assets/styles/theme';

type ClientThemeProviderProps = {
  children: ReactNode;
};

export default function ClientThemeProvider({ children }: ClientThemeProviderProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(() => createAppTheme(prefersDarkMode ? 'dark' : 'light'), [prefersDarkMode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
