import React from "react";

const SalesChart = React.memo(({ data }) => {
  return (
    <div className="card">
      <h3>Sales Chart</h3>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
});

export default SalesChart;
