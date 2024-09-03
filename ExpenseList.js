import React from 'react';

function ExpenseList({ expenses, handleDelete }) {
  return (
    <ul style={{listStyle: 'none', padding: 0}}>
      {expenses.map((expense, index) => (
        <li key={index}>
          {expense.name} - R{expense.amount}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;