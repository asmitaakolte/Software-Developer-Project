import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddData from './components/AddData';
import MonthlyDashboard from './components/MonthlyDashboard';
import YearlyDashboard from './components/YearlyDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-data" element={<AddData />} />
        <Route path="/monthly-dashboard" element={<MonthlyDashboard />} />
        <Route path="/yearly-dashboard" element={<YearlyDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
