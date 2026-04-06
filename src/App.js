import React from 'react';
import './style.css';
import useCounter from './hooks/UseCounter.js';
export default function App() {
  const { count, handleIncrement, handleDecrement, handleReset } = useCounter();
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement </button>
      <button onClick={handleReset}>reset </button>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
