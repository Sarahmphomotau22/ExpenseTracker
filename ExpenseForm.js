import React from 'react';

function ExpenseForm({ newExpense, setNewExpense, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>Expense Item:</label>
      <input
          type="text"
          value={newExpense.name}
          onChange={(event) => setNewExpense({ ...newExpense, name: event.target.value })}
          className="expense-form-input"
          style={{ border: 'none', borderBottom: '1px solid #ccc', padding: '10px' }}
        />
      <br />
      <br />
      <label>Amount:</label>
      <input
          type="number"
          value={newExpense.amount}
          onChange={(event) => setNewExpense({ ...newExpense, amount: event.target.value })}
          className="expense-form-input"
          style={{ border: 'none', borderBottom: '1px solid #ccc', padding: '10px' }}
        />
      <br />
      <br />
      <button
        type="submit"
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Add Expense
      </button>
      <br />
    </form>
  );
}

export default ExpenseForm;