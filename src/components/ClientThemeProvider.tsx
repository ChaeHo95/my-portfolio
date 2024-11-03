'use client';
import { Box, CssBaseline, LinearProgress, ThemeProvider, Typography, useMediaQuery } from '@mui/material';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { createAppTheme } from '@/assets/styles/theme';
import DarkModeToggle from '@/components/DarkModeToggle';

const ClientThemeProvider = ({ children }: ClientThemeProviderProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    setIsDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const theme = useMemo(() => createAppTheme(isDarkMode ? 'dark' : 'light'), [isDarkMode]);

  if (loading) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        bgcolor="background.default"
        className="rounded-lg border p-4"
      >
        <Typography variant="h6" mb={2}>
          Loading...
        </Typography>
        <LinearProgress style={{ width: '80%' }} />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </ThemeProvider>
  );
};

type ClientThemeProviderProps = {
  children: ReactNode;
};

export default ClientThemeProvider;
