import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

const AddExpenses = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();

  const handleAddExpense = () => {
    const newExpense = { description, amount: parseFloat(amount) };
    setExpenses([...expenses, newExpense]);
    setDescription('');
    setAmount('');
  };

  const handleCalculate = () => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    navigate('/result'); // Navigate to result page
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Add Expenses
      </Typography>
      <TextField
        label="Description"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Amount"
        type="number"
        fullWidth
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleAddExpense} sx={{ mb: 2 }}>
        Add Expense
      </Button>
      <Button variant="outlined" color="secondary" fullWidth onClick={handleCalculate}>
        Calculate
      </Button>
    </Box>
  );
};

export default AddExpenses;
