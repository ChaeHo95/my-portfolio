import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" className="mt-auto p-2 text-center">
      <Typography variant="body2" color="text.secondary" align="center">
        Copyright © 2024 My CheaHo Choe rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
