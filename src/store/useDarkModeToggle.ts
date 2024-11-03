import { create } from 'zustand';

export const useDarkModeToggle = create<useDarkModeToggleType>((set) => ({
  isDarkMode: false,
  setIsDarkMode: (data: boolean) => set(() => ({ isDarkMode: data })),
}));

type useDarkModeToggleType = {
  isDarkMode: boolean;
  setIsDarkMode: (_data: boolean) => void;
};
