import React, { useState } from "react";

function App() {
  const [cnt, setCnt] = useState(0);
  function handleDecr() {
    setCnt(cnt - 1);
  }
  function handleIncr() {
    setCnt(cnt + 1);
  }
  return (
    <>
      <button onClick={handleDecr}>-</button>
      <h2>{cnt}</h2>
      <button onClick={handleIncr}>+</button>
    </>
  );
}

export default App;
