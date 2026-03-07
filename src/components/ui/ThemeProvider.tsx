"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: "light", toggle: () => {} });

export function useTheme() {
    return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        try {
            const stored = localStorage.getItem("theme");
            if (stored === "light" || stored === "dark") {
                setTheme(stored);
                document.documentElement.classList.toggle("dark", stored === "dark");
            } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setTheme("dark");
                document.documentElement.classList.add("dark");
            }
        } catch {
            // localStorage unavailable (private browsing) — use default
        }
    }, []);

    const toggle = () => {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        try { localStorage.setItem("theme", next); } catch { /* private browsing */ }
        document.documentElement.classList.toggle("dark", next === "dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}
