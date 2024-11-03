'use client';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useDarkModeToggle } from '@/store/useDarkModeToggle';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const FloatingSpeedDial = () => {
  const [open, setOpen] = useState(false);
  const { isDarkMode, setIsDarkMode } = useDarkModeToggle((state) => state);

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic"
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <SpeedDialAction
        icon={isDarkMode ? <LightModeIcon fontSize="large" /> : <DarkModeIcon fontSize="large" />}
        onClick={() => {
          setIsDarkMode(!isDarkMode);
          setOpen(false);
        }}
        sx={{
          width: 50,
          height: 50,
        }}
        tooltipTitle={isDarkMode ? 'LightMode' : 'DarkMode'}
        className={twMerge(isDarkMode ? 'bg-white text-[#20232A]' : 'bg-[#20232A] text-white')}
      />
    </SpeedDial>
  );
};

export default FloatingSpeedDial;
