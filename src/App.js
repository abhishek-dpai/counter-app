import React, { useState } from "react";
import Counter from "./Counter";

export const ThemeContext = React.createContext();
function App() {
  const [theme, setTheme] = useState("green");
  function handleToggleTheme() {
    if (theme === "green") setTheme("blue");
    else setTheme("green");
  }
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <Counter cntHolder={10} />;
      <button onClick={handleToggleTheme}>Toggle Theme</button>
    </ThemeContext.Provider>
  );
}

export default App;
