import React, { useState } from "react";

function Counter(props) {
  const [cnt, setCnt] = useState(props.cntHolder);
  function handleButton(amount) {
    setCnt((count) => count + amount);
    setCnt((count) => count + amount);
  }
  return (
    <>
      <button onClick={() => handleButton(-3)}>-</button>
      <span>{cnt}</span>
      <button onClick={() => handleButton(2)}>+</button>
    </>
  );
}
export default Counter;
