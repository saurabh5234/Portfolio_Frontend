import { createContext, useEffect } from "react";

const ThemeProviderContext = createContext({
  theme: "dark",
});

export function ThemeProvider({ children, ...props }) {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
  }, []);

  const value = {
    theme: "dark",
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export { ThemeProviderContext };
