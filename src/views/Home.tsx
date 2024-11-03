'use client';
import { Box, Button, Typography } from '@mui/material';
import temp from '@/assets/images/temp.jpg';

const Home = () => {
  return (
    <Box className="flex min-h-screen flex-col items-center justify-center p-6 md:flex-row">
      {/* 프로필 사진 */}
      <Box component="img" src={temp.src} alt="Profile" className="mb-6 h-96 min-w-96 rounded-full md:mb-0 md:mr-8" />
      {/* 텍스트 및 버튼 */}
      <Box textAlign={{ xs: 'center', md: 'left' }}>
        <Typography variant="h2" gutterBottom className="mb-4 text-4xl font-bold">
          Hello, I’m CheaHo
        </Typography>
        <Typography variant="body1" className="mb-6 text-lg">
          Frontend Developer with a passion for building seamless and engaging user experiences.
        </Typography>
        <Button variant="contained" color="primary" href="#about" className="rounded-lg px-6 py-3">
          Learn More About Me
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
