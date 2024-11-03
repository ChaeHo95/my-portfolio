'use client';
import { Fab } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Dispatch, SetStateAction } from 'react';

const DarkModeToggle = ({ isDarkMode, setIsDarkMode }: DarkModeToggleProps) => {
  return (
    <Fab
      color="primary"
      className="fixed bottom-6 right-6"
      aria-label="toggle dark mode"
      onClick={() => {
        setIsDarkMode((prev) => !prev);
      }}
    >
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </Fab>
  );
};

type DarkModeToggleProps = {
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
  isDarkMode: boolean;
};

export default DarkModeToggle;
