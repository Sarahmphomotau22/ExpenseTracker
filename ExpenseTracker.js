import React, { useState, useEffect } from 'react';
import './Expense.css';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import TotalExpense from './TotalExpense';
import Dashboard from './Dashboard';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    name: '',
    amount: '',
  });
  const [totalEarning, setTotalEarning] = useState(0);
  const [month, setMonth] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setExpenses([...expenses, newExpense]);
    setNewExpense({
      name: '',
      amount: '',
    });
    localStorage.setItem('expenses', JSON.stringify(expenses));
  };

  const handleDelete = (index) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
    localStorage.setItem('expenses', JSON.stringify(newExpenses));
  };

  const handleTotalEarningChange = (event) => {
    setTotalEarning(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const calculateSurplus = () => {
    const totalExpense = expenses.reduce((acc, current) => acc + parseInt(current.amount), 0);
    return totalEarning - totalExpense;
  };

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      <select
        value={selectedMonth}
        onChange={handleMonthChange}
        className="month-select"
      >
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
      <Dashboard
        totalEarning={totalEarning}
        surplus={calculateSurplus()}
        month={selectedMonth}
        handleTotalEarningChange={handleTotalEarningChange}
      />
      <ExpenseForm
        newExpense={newExpense}
        setNewExpense={setNewExpense}
        handleSubmit={handleSubmit}
      />
      <ExpenseList expenses={expenses} handleDelete={handleDelete} />
      <TotalExpense expenses={expenses} />
    </div>
  );
}

export default ExpenseTracker;