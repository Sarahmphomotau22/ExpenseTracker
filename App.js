import React, { useState, useEffect } from 'react';
import './components/ExpenseForm.js';
import './components/ExpenseList.js';
import './components/ExpenseTracker.js';
import './TotalExpense.js';

function App() {
  const [expenses, setExpenses] = useState([]);
 const [newExpense, setNewExpense] = useState({
    name: '',
    amount: '',
  });

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

  return (
    <div className="App">
    <h1>Expense Tracker</h1>
    <div className="card" style={{ width: '50%', marginRight: '30px' }}>
    <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={newExpense.name}
          onChange={(event) =>
            setNewExpense({ ...newExpense, name: event.target.value })
          }
        />
        <br />
        <label>Amount:</label>
        <input
          type="number"
          value={newExpense.amount}
          onChange={(event) =>
            setNewExpense({ ...newExpense, amount: event.target.value })
          }
        />
        <br />
        <button type="submit">Add Expense</button>
      </form>
    </div>
    <div className="card" style={{ width: '30%' }}>
      <h2>Expenses</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {expenses.map((expense, index) => (
          <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            {expense.name} - R{expense.amount}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>
        Total Expense: R
        {expenses.reduce((acc, current) => acc + parseInt(current.amount), 0)}
      </p>
    </div>
  </div>

  );
}

export default App;