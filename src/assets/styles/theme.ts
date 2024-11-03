'use client';
import { createTheme } from '@mui/material/styles';

export const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#556cd6' },
          background: { default: '#f5f5f5' },
        }
      : {
          primary: { main: '#90caf9' },
          background: { default: '#121212' },
        }),
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  cssVariables: true,
  key: 'css',
  prepend: true,
});

export const createAppTheme = (mode: 'light' | 'dark') => createTheme(getDesignTokens(mode));
