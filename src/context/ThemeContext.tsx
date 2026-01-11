import { createContext, useState } from "react"

type Theme = "light" | "dark"

type ThemeContextValue = {
    theme: Theme
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [theme, setTheme] = useState<Theme>("dark")

    function toggleTheme() {
        setTheme(prev => (prev === "dark" ? "light" : "dark"))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

