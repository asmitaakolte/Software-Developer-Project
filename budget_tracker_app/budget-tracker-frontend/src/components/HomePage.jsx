import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
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
        onClick={() => navigate('/add-data')}
      >
        Add or Update Data
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ m: 2 }}
        onClick={() => navigate('/monthly-dashboard')}
      >
        View Monthly Expenses
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ m: 2 }}
        onClick={() => navigate('/yearly-dashboard')}
      >
        View Combined Expenses
      </Button>
    </Box>
  );
};

export default HomePage;
