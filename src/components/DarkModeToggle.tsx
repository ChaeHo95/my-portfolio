'use client';
import { Fab } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDarkModeToggle } from '@/store/useDarkModeToggle';

const DarkModeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useDarkModeToggle((state) => state);
  return (
    <Fab
      color="primary"
      className="fixed bottom-6 right-6"
      aria-label="toggle dark mode"
      onClick={() => {
        setIsDarkMode(!isDarkMode);
      }}
    >
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </Fab>
  );
};

export default DarkModeToggle;
