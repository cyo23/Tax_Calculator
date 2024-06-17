import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultsPage = () => {
  const location = useLocation();
  const { taxPayable, income } = location.state || {};

  const calculateRanking = (userIncome) => {
    const allIncomes = [50000, 60000, 70000, 80000, 90000, 100000]; // 示例数据
    const sortedIncomes = [...allIncomes, userIncome].sort((a, b) => a - b);
    const rank = sortedIncomes.indexOf(userIncome) + 1;
    const percentage = ((rank - 1) / allIncomes.length) * 100;
    return percentage;
  };

  const rankingPercentage = calculateRanking(income);

  return (
    <div>
      <h1>计算结果</h1>
      <p>应缴税额: ${taxPayable}</p>
      <p>你的收入超过了 {rankingPercentage}% 的用户</p>
      <button onClick={() => window.location.href = '/calculator'}>重新计算</button>
    </div>
  );
};

export default ResultsPage;
