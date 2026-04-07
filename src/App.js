import React from "react";
import "./style.css";
import useCounter from "./hooks/UseCounter.js";
import DashboardContainer from "./dashboard/containers/DashboardContainer.jsx";
export default function App() {
  const { count, handleIncrement, handleDecrement, handleReset } = useCounter();
  return (
    <div>
      <DashboardContainer />
      {/* <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement </button>
      <button onClick={handleReset}>reset </button>
      <p>Start editing to see some magic happen :)</p> */}
    </div>
  );
}
