import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import axios from 'axios';

const AddData = () => {
  const [date, setDate] = useState('');
  const [income, setIncome] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleAddIncome = async () => {
    try {
      await axios.post('http://localhost:5000/add-income', { date, income: parseFloat(income) });
      alert('Income saved successfully!');
      setIncome('');
    } catch (err) {
      console.error(err);
      alert('Failed to save income.');
    }
  };

  const handleAddExpense = async () => {
    try {
      await axios.post('http://localhost:5000/add-expense', {
        date,
        name: expenseName,
        amount: parseFloat(expenseAmount)
      });
      alert('Expense saved successfully!');
      setExpenseName('');
      setExpenseAmount('');
    } catch (err) {
      console.error(err);
      alert('Failed to save expense.');
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Add or Update Data
      </Typography>
      <TextField
        label="Date (YYYY-MM)"
        fullWidth
        value={date}
        onChange={(e) => setDate(e.target.value)}
        sx={{ mb: 3 }}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{ border: '1px solid #ccc', borderRadius: 2, p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Add Income
            </Typography>
            <TextField
              label="Income"
              type="number"
              fullWidth
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" fullWidth onClick={handleAddIncome}>
              Save Income
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ border: '1px solid #ccc', borderRadius: 2, p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Add Expense
            </Typography>
            <TextField
              label="Expense Name"
              fullWidth
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Expense Amount"
              type="number"
              fullWidth
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="secondary" fullWidth onClick={handleAddExpense}>
              Save Expense
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddData;
