import { Box, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper elevation={3} sx={{ p: 4, minWidth: 320, textAlign: 'center' }}>
        <Typography variant="h3" mb={2}>
          Welcome to Connecxion Market
        </Typography>
        <Typography variant="body1" mb={3}>
          Your one-stop platform for clinical AI solutions.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/login')}
          data-testid="btn-go-login"
        >
          Go to Login
        </Button>
      </Paper>
    </Box>
  );
};

export default LandingPage; 