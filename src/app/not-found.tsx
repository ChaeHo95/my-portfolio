import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

const NotFound = () => {
  return (
    <Box
      className="flex min-h-screen flex-col items-center justify-center p-6 text-center"
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Typography variant="h1" className="mb-4 text-6xl font-bold">
        404
      </Typography>
      <Typography variant="h5" className="mb-4">
        Oops! The page you are looking for does not exist.
      </Typography>
      <Typography variant="body1" className="mb-6">
        It looks like you may have taken a wrong turn.
      </Typography>
      <Button variant="contained" color="primary" component={Link} href="/" className="px-6 py-2">
        Back to Home
      </Button>
    </Box>
  );
};

export default NotFound;
