import React, { useEffect, useState } from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    const income = parseFloat(localStorage.getItem('totalIncome')) || 0;
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const totalExpenseAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    setTotalIncome(income);
    setTotalExpenses(totalExpenseAmount);
    setRemaining(income - totalExpenseAmount);
  }, []);

  // Data for Pie Chart
  const chartData = {
    labels: ['Total Income', 'Total Expenses', 'Remaining'],
    datasets: [
      {
        data: [totalIncome, totalExpenses, remaining],
        backgroundColor: ['#4caf50', '#f44336', '#2196f3'],
        hoverBackgroundColor: ['#66bb6a', '#ef5350', '#42a5f5'],
      },
    ],
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={3}>
        {/* Total Income Card */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Income
              </Typography>
              <Typography variant="h4" color="primary">
                ${totalIncome.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Total Expenses Card */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Expenses
              </Typography>
              <Typography variant="h4" color="secondary">
                ${totalExpenses.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Remaining Balance Card */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Remaining Balance
              </Typography>
              <Typography variant="h4" color="success.main">
                ${remaining.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Pie Chart */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" gutterBottom>
          Income vs Expenses Overview
        </Typography>
        <Pie data={chartData} />
      </Box>
    </Box>
  );
};

export default Result;
