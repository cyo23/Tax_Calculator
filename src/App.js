import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaxCalculatorPage from './components/TaxCalculatorPage';
import ResultsPage from './components/ResultsPage';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaxCalculatorPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
