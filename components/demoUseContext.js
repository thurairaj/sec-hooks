import { createContext, useState } from "react";

export const ThemeContext = createContext(null);
export function MyPage({ children }) {
  const [theme, setTheme] = useState("light");
  const onClickHandler = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={onClickHandler}>Switch theme</button>
      {children}
    </ThemeContext.Provider>
  );
}
