import { Box, LinearProgress, Typography } from '@mui/material';

const Splash = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="background.default"
      className="box-border rounded-lg"
    >
      <Typography variant="h6" mb={2}>
        Loading...
      </Typography>
      <LinearProgress style={{ width: '80%' }} />
    </Box>
  );
};

export default Splash;
