import React from 'react';

function TotalExpense({ expenses }) {
  const total = expenses.reduce((acc, current) => acc + parseInt(current.amount), 0);
  return (
    <p>
      Total Expense: R{total}
    </p>
  );
}

export default TotalExpense;