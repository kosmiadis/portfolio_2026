import { create } from "zustand";

export type ThemeType = 'light' | 'dark';

interface ThemeI {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}

const ThemeStore = create<ThemeI>((set) => ({
    theme: 'light',
    setTheme: (theme: ThemeType) => set((state) => ({ ...state, theme }))
}))

export function useTheme () {
    return ThemeStore();
}