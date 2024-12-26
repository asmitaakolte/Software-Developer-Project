import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Card, CardContent } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  // Register the required components
  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
  

const YearlyDashboard = () => {
  const [year, setYear] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const fetchYearlyData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/yearly/${year}`);
      setData(response.data);
      setError(false);
    } catch (err) {
      console.error(err);
      setData(null);
      setError(true);
    }
  };

  // Prepare Bar Chart Data
  const chartData = data
    ? {
        labels: data.monthly_summary.map((item) => item.month),
        datasets: [
          {
            label: 'Income',
            data: data.monthly_summary.map((item) => item.income),
            backgroundColor: '#4caf50',
          },
          {
            label: 'Expenses',
            data: data.monthly_summary.map((item) => item.expenses),
            backgroundColor: '#f44336',
          },
        ],
      }
    : null;

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Yearly Dashboard
      </Typography>
      <TextField
        label="Year (YYYY)"
        fullWidth
        value={year}
        onChange={(e) => setYear(e.target.value)}
        sx={{ mb: 3 }}
      />
      <Button variant="contained" color="primary" fullWidth onClick={fetchYearlyData}>
        Fetch Yearly Data
      </Button>

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          No data available for the selected year.
        </Typography>
      )}

      {data && (
        <Box sx={{ mt: 4 }}>
          {/* Summary Cards */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Total Income
                  </Typography>
                  <Typography variant="h4" color="primary">
                    ${data.total_income.toFixed(2)}
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
                    Total Savings
                  </Typography>
                  <Typography variant="h4" color="success.main">
                    ${data.total_savings.toFixed(2)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Bar Chart */}
          <Box sx={{ mt: 5 }}>
            <Typography variant="h6" gutterBottom>
              Monthly Income vs Expenses
            </Typography>
            {chartData && <Bar data={chartData} />}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default YearlyDashboard;
