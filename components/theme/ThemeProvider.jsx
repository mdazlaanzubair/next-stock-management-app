"use client";

import useThemeStore from "@/store/useThemeStore";

const ThemeProvider = ({ children }) => {
  const isDarkMode = useThemeStore((state) => state.isDark);

  return <main data-theme={isDarkMode ? "dark" : "light"}>{children}</main>;
};

export default ThemeProvider;
