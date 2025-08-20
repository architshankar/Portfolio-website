import React, { createContext, useContext, useEffect } from "react";

const ThemeProviderContext = createContext(undefined);

export function ThemeProvider({
  children,
  ...props
}) {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add("dark");
  }, []);

  const value = {
    theme: "dark",
    setTheme: () => {}, // No-op since we only want dark theme
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
