'use client';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { createAppTheme } from '@/assets/styles/theme';
import { useDarkModeToggle } from '@/store/useDarkModeToggle';
import Splash from '@/views/Splash';
import FloatingSpeedDial from '@/components/FloatingSpeedDial';

const ClientThemeProvider = ({ children }: ClientThemeProviderProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [loading, setLoading] = useState<boolean>(true);
  const { isDarkMode, setIsDarkMode } = useDarkModeToggle((state) => state);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    setIsDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const theme = useMemo(() => createAppTheme(isDarkMode ? 'dark' : 'light'), [isDarkMode]);

  if (loading) {
    return <Splash />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      <FloatingSpeedDial />
    </ThemeProvider>
  );
};

type ClientThemeProviderProps = {
  children: ReactNode;
};

export default ClientThemeProvider;
