import { createContext, startTransition, useEffect, useState } from "react";
import ToggleThemeBtn from "../../components/ToggleTheme/ToggleThemeBtn";

export const ThemeContext = createContext("light");

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("light");

  const themeStorage = localStorage.getItem("theme");

  useEffect(() => {
    if (themeStorage) {
      startTransition(() => {
        setTheme(themeStorage);
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <ToggleThemeBtn
        onChangeTheme={() => {
          startTransition(() => {
            setTheme(theme === "light" ? "dark" : "light");
          });
        }}
      />
      {children}
    </ThemeContext.Provider>
  );
}
