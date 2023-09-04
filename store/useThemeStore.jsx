import { create } from "zustand";

const useThemeStore = create((set) => ({
  isDark: JSON.parse(localStorage.getItem("isDark")) || false,
  toggleTheme: () =>
    set((state) => {
      const updatedState = { isDark: !state.isDark };
      localStorage.setItem("isDark", updatedState.isDark);
      return updatedState;
    }),
}));

export default useThemeStore;
