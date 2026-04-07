import React from "react";

const StatsCard = React.memo(({ item }) => {
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <p>{item.value}</p>
    </div>
  );
});

export default StatsCard;
