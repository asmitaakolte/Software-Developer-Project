import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

const AddIncome = () => {
  const [income, setIncome] = useState('');
  const navigate = useNavigate();

  const handleAddIncome = () => {
    // Save income to localStorage or state
    localStorage.setItem('totalIncome', income);
    navigate('/expenses'); // Navigate to expenses page
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Add Income
      </Typography>
      <TextField
        label="Total Income"
        type="number"
        fullWidth
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleAddIncome}>
        Add Income
      </Button>
    </Box>
  );
};

export default AddIncome;
