import React, {useState, useContext, createContext} from "react";

// in this context we define the color themes available for the app

const ThemeContext = createContext();

export const themes = [
    {name: "light", 
    colors: {elements: "hsl(0, 0%, 100%)", 
    background: "hsl(0, 0%, 98%)", 
    input: "hsl(0, 0%, 52%)", 
    text: "hsl(200, 15%, 8%)"}}, 
    {name: "dark", 
    colors: {elements: "hsl(209, 23%, 22%)", 
    background: "hsl(207, 26%, 17%)",
    input: "white", 
    text: "hsl(0, 0%, 100%)"}}
]

export default function ThemeProvider({children}) {
    const [theme, setTheme] = useState(themes[0]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    const { theme, setTheme } = context;
    return { theme, setTheme };
}