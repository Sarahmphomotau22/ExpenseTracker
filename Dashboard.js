import React from 'react';

function Dashboard({ totalEarning, surplus, month, handleTotalEarningChange }) {
  return (
    <div className="dashboard">
      
      <p>Month: {month}</p>
      <p>Total Earning: R<input type="number" value={totalEarning} onChange={handleTotalEarningChange} /></p>
      <p>Surplus: R{surplus}</p>
    </div>
  );
}

export default Dashboard;