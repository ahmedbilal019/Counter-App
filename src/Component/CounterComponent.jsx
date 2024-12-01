import React, { useState } from "react";
import "../App.css";
function CounterComponent() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div className="counter-card">
      <h2 className="count-value">Counter Value : {count}</h2>
      <div className="counter-controls">
        <button
          id="increment"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          Increment Counter
        </button>
        <button
          id="decrement"
          onClick={() => setCount((prevCount) => prevCount - 1)}
        >
          Decrement Counter
        </button>
        <button id="reset" onClick={() => setCount(initialCount)}>
          Reset Counter
        </button>
      </div>
    </div>
  );
}

export default CounterComponent;
