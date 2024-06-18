import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const TaxCalculatorPage = () => {
  const [employmentType, setEmploymentType] = useState('');
  const [incomeType, setIncomeType] = useState('');
  const [income, setIncome] = useState(0);
  const [hoursPerWeek, setHoursPerWeek] = useState(0);
  const [totalHoursWorked, setTotalHoursWorked] = useState(0);
  const [deductions, setDeductions] = useState(0);
  const navigate = useNavigate();

  const calculateTax = (taxableIncome) => {
    let tax = 0;

    if (taxableIncome > 180000) {
      tax = 51667 + (taxableIncome - 180000) * 0.45;
    } else if (taxableIncome > 120000) {
      tax = 29467 + (taxableIncome - 120000) * 0.37;
    } else if (taxableIncome > 45000) {
      tax = 5092 + (taxableIncome - 45000) * 0.325;
    } else if (taxableIncome > 18200) {
      tax = (taxableIncome - 18200) * 0.19;
    }

    return tax;
  };

  const handleCalculate = () => {
    let taxableIncome = 0;
    switch (incomeType) {
      case 'annual':
        taxableIncome = income - deductions;
        break;
      case 'monthly':
        taxableIncome = income * 12 - deductions;
        break;
      case 'hourly':
        if (employmentType === 'part-time' || employmentType === 'casual') {
          taxableIncome = income * hoursPerWeek * 52 - deductions;
        } else {
          taxableIncome = income * totalHoursWorked - deductions;
        }
        break;
      default:
        return;
    }

    const taxPayable = calculateTax(taxableIncome);

    const allIncomes = [50000, 60000, 70000, 80000, 90000, 100000]; // Example data
    const sortedIncomes = [...allIncomes, taxableIncome].sort((a, b) => a - b);
    const rank = sortedIncomes.indexOf(taxableIncome) + 1;
    const percentage = ((rank - 1) / allIncomes.length) * 100;

    navigate('/results', { state: { taxPayable, rankingPercentage: percentage } });
  };

  return (
    <div className="container">
      <h1>Australian Personal Income Tax Calculator</h1>
      <form>
        <div className="form-group">
          <label>Employment Type:</label>
          <select value={employmentType} onChange={(e) => setEmploymentType(e.target.value)}>
            <option value="">Select...</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="casual">Casual</option>
            <option value="contractor">Contractor</option>
            <option value="self-employed">Self-employed</option>
          </select>
        </div>
        <div className="form-group">
          <label>Income Type:</label>
          <select value={incomeType} onChange={(e) => setIncomeType(e.target.value)}>
            <option value="">Select...</option>
            <option value="annual">Annual Salary</option>
            <option value="monthly">Monthly Salary</option>
            <option value="hourly">Hourly Wage</option>
          </select>
        </div>
        {incomeType && (
          <div className="form-group">
            <label>{incomeType.charAt(0).toUpperCase() + incomeType.slice(1)} Income:</label>
            <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} />
          </div>
        )}
        {(employmentType === 'part-time' || employmentType === 'casual') && incomeType === 'hourly' && (
          <div className="form-group">
            <label>Hours per Week:</label>
            <input type="number" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(e.target.value)} />
          </div>
        )}
        {employmentType !== 'part-time' && employmentType !== 'casual' && incomeType === 'hourly' && (
          <div className="form-group">
            <label>Total Hours Worked:</label>
            <input type="number" value={totalHoursWorked} onChange={(e) => setTotalHoursWorked(e.target.value)} />
          </div>
        )}
        <div className="form-group">
          <label>Deductions:</label>
          <input type="number" value={deductions} onChange={(e) => setDeductions(e.target.value)} />
        </div>
        <button type="button" onClick={handleCalculate}>Calculate Tax</button>
      </form>
    </div>
  );
};

export default TaxCalculatorPage;
