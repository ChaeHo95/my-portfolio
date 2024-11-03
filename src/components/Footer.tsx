import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, Description } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" className="mt-auto p-2 text-center">
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
      <Box className="mt-1 flex justify-center">
        <IconButton color="inherit" href="https://github.com/ChaeHo95" target="_blank" rel="noopener">
          <GitHub />
        </IconButton>
        <IconButton color="inherit" href="https://velog.io/@chlcogh11/posts" target="_blank" rel="noopener">
          <Description />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
