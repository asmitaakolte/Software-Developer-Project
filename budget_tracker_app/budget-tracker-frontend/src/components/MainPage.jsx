import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Budget Tracker
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ m: 2 }}
        onClick={() => navigate('/add')}
      >
        Add New Data
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ m: 2 }}
        onClick={() => navigate('/monthly')}
      >
        View Monthly Dashboard
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ m: 2 }}
        onClick={() => navigate('/yearly')}
      >
        View Yearly Dashboard
      </Button>
    </Box>
  );
};

export default MainPage;
