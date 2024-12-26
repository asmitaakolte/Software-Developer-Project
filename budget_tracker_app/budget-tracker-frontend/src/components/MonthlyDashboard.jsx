import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const MonthlyDashboard = () => {
  const [month, setMonth] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const fetchMonthlyData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/monthly/${month}`);
      setData(response.data);
      setError(false);
    } catch (err) {
      console.error(err);
      setData(null);
      setError(true);
    }
  };

  // Chart Data
  const chartData = data
    ? {
        labels: ['Savings', 'Total Expenses'],
        datasets: [
          {
            data: [data.savings, data.total_expenses],
            backgroundColor: ['#4caf50', '#f44336'],
            hoverBackgroundColor: ['#66bb6a', '#ef5350'],
          },
        ],
      }
    : null;

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Monthly Dashboard
      </Typography>
      <TextField
        label="Month (YYYY-MM)"
        fullWidth
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        sx={{ mb: 3 }}
      />
      <Button variant="contained" color="primary" fullWidth onClick={fetchMonthlyData}>
        Fetch Monthly Data
      </Button>

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          No data available for the selected month.
        </Typography>
      )}

      {data && (
        <Box sx={{ mt: 4 }}>
          {/* Summary Section */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Income
                  </Typography>
                  <Typography variant="h4" color="primary">
                    ${data.income.toFixed(2)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Total Expenses
                  </Typography>
                  <Typography variant="h4" color="secondary">
                    ${data.total_expenses.toFixed(2)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Savings
                  </Typography>
                  <Typography variant="h4" color="success.main">
                    ${data.savings.toFixed(2)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Chart Section */}
          <Box sx={{ mt: 5 }}>
            <Typography variant="h6" gutterBottom>
              Expense Breakdown
            </Typography>
            {chartData && <Pie data={chartData} />}
          </Box>

          {/* Expense Details */}
          <Box sx={{ mt: 5 }}>
            <Typography variant="h6" gutterBottom>
              Detailed Expenses
            </Typography>
            <List>
              {data.expenses.map((expense, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={expense.name}
                    secondary={`Amount: $${expense.amount.toFixed(2)}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MonthlyDashboard;
