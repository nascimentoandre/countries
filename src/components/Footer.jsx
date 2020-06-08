import React from "react";
import { useTheme } from "../contexts/Themes";

export default function Footer() {
    let year = new Date().getFullYear();
    const { theme }  = useTheme();

    return (
        <footer style={{color: theme.colors.text}}>
            © {year} André Nascimento
        </footer>
    );
}