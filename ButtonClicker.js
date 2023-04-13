import React, { useState, useEffect } from "react";

function ButtonClicker() {
  const [count, setCount] = useState(
    () => parseInt(localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Button Click Counter</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Click me!</button>
    </div>
  );
}

export default ButtonClicker;
