"use client";

import useThemeStore from "@/store/useThemeStore";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggler = () => {
  const isDark = useThemeStore((state) => state.isDark);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <button
      type="button"
      className="btn btn-circle btn-neutral hover:bg-transparent hover:text-primary bg-transparent border-none text-xl"
      onClick={() => toggleTheme()}
    >
      {isDark ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggler;
