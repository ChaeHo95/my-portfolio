import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, Description } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        padding: 2,
        textAlign: 'center',
        mt: 'auto',
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
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
