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

function storeTheme(theme: ThemeType) {
    localStorage.setItem('theme', theme);
}   

function getStoredTheme (): ThemeType | string | null {
    return localStorage.getItem('theme');
}

export function useTheme () {

    const { setTheme, theme } = ThemeStore();

    function toggleTheme () {
        const nextThemeState = theme == 'light' ? 'dark' : 'light';
        setTheme(nextThemeState);
        storeTheme(nextThemeState);        
    }

    function loadTheme () {
        const storedTheme: ThemeType | string | null = getStoredTheme();

        if (storedTheme == 'dark' || storedTheme == 'light') {
            setTheme(storedTheme);
        }
        else {
            storeTheme('light');
            setTheme('light');
        }
    }

    return { toggleTheme, loadTheme, theme };
}