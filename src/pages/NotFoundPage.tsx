import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      <Typography variant="h2" color="error" gutterBottom data-testid="notfound-title">
        404
      </Typography>
      <Typography variant="h5" mb={2} data-testid="notfound-message">
        Page Not Found
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/')} data-testid="btn-go-home">
        Go Home
      </Button>
    </Box>
  );
};

export default NotFoundPage; 