import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";

function Counter(props) {
  const [cnt, setCnt] = useState(props.cntHolder);
  const style = useContext(ThemeContext);
  function handleButton(amount) {
    setCnt((count) => count + amount);
    setCnt((count) => count + amount);
  }
  return (
    <>
      <button style={style} onClick={() => handleButton(-3)}>
        -
      </button>
      <span>{cnt}</span>
      <button style={style} onClick={() => handleButton(2)}>
        +
      </button>
    </>
  );
}
export default Counter;
