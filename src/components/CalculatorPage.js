import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CalculatorPage = () => {
  const [income, setIncome] = useState(0);
  const [deductions, setDeductions] = useState(0);
  const navigate = useNavigate();

  const handleCalculate = () => {
    const taxableIncome = income - deductions;
    let taxPayable = 0;
  
    if (taxableIncome > 180000) {
      taxPayable = 51667 + (taxableIncome - 180000) * 0.45;
    } else if (taxableIncome > 120000) {
      taxPayable = 29467 + (taxableIncome - 120000) * 0.37;
    } else if (taxableIncome > 45000) {
      taxPayable = 5092 + (taxableIncome - 45000) * 0.325;
    } else if (taxableIncome > 18200) {
      taxPayable = (taxableIncome - 18200) * 0.19;
    }
  
    // 传递计算结果到结果页面
  };
  
  const calculateRanking = (userIncome, allIncomes) => {
    const sortedIncomes = [...allIncomes].sort((a, b) => a - b);
    const rank = sortedIncomes.indexOf(userIncome) + 1;
    const percentage = ((rank - 1) / allIncomes.length) * 100;
    return percentage;
  };
  

  return (
    <div>
      <h1>税收计算器</h1>
      <form>
        <label>
          年收入:
          <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} />
        </label>
        <label>
          扣除项:
          <input type="number" value={deductions} onChange={(e) => setDeductions(e.target.value)} />
        </label>
        <button type="button" onClick={handleCalculate}>计算税额</button>
      </form>
    </div>
  );
};

export default CalculatorPage;