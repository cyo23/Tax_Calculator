import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles.css';

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { taxPayable, rankingPercentage } = location.state || {};

  const handleRecalculate = () => {
    navigate('/');
  };

  const handleShare = () => {
    // Implement share functionality here
    alert('Share functionality to be implemented.');
  };

  return (
    <div className="container">
      <h1>Calculation Results</h1>
      <div className="result">
        <p>Tax Payable: ${taxPayable.toFixed(2)}</p>
        <p>Your income is higher than {rankingPercentage.toFixed(2)}% of users</p>
        <p>Congratulations! You used the tax calculator tool, and your results show that you beat {rankingPercentage.toFixed(2)}% of users. Share with your friends now!</p>
      </div>
      <button onClick={handleRecalculate}>Recalculate</button>
      <button onClick={handleShare}>Share</button>
    </div>
  );
};

export default ResultsPage;
