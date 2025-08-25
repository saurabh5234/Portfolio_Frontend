import { useContext } from "react";
import { ThemeProviderContext } from "./theme-provider";

export function useTheme() {
  const ctx = useContext(ThemeProviderContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
