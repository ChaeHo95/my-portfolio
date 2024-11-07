'use client';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useDarkModeToggle } from '@/store/useDarkModeToggle';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Description, GitHub } from '@mui/icons-material';

const FloatingSpeedDial = () => {
  const [open, setOpen] = useState(false);
  const { isDarkMode, setIsDarkMode } = useDarkModeToggle((state) => state);

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic"
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
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
      <SpeedDialAction
        icon={<GitHub fontSize="large" />}
        onClick={() => {
          window.open('https://github.com/ChaeHo9', '_blank');
        }}
        sx={{
          width: 50,
          height: 50,
        }}
        tooltipTitle={'github'}
        className={twMerge(isDarkMode ? 'bg-white text-[#20232A]' : 'bg-[#20232A] text-white')}
      />
      <SpeedDialAction
        icon={<Description fontSize="large" />}
        onClick={() => {
          window.open('https://velog.io/@chlcogh11/posts', '_blank');
        }}
        sx={{
          width: 50,
          height: 50,
        }}
        color="inherit"
        tooltipTitle={'velog'}
        className={twMerge(isDarkMode ? 'bg-white text-[#20232A]' : 'bg-[#20232A] text-white')}
      />
    </SpeedDial>
  );
};

export default FloatingSpeedDial;
