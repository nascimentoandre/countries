import React, { useState } from "react";
import { useTheme, themes } from "../contexts/Themes";
import { Link } from 'react-router-dom';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(true);

  function handleDarkMode() {
    setDarkMode(!darkMode)
    if (darkMode) {
      setTheme(themes[1]);
      document.querySelectorAll("body")[0].style.backgroundColor = "hsl(209, 23%, 22%)";
    } else {
      setTheme(themes[0]);
      document.querySelectorAll("body")[0].style.backgroundColor = "hsl(0, 0%, 100%)";
    }
    
  }

  return (
    <header style={{background: theme.colors.elements}}>
      <h2><Link to={"/"} style={{textDecoration: "none", color: theme.colors.text}}>Where in the world?</Link></h2>
      <button className="dark-mode-btn" onClick={handleDarkMode} style={{color: theme.colors.text, background: theme.colors.elements}}>
        <i className="far fa-moon"></i> Dark Mode
      </button>
    </header>
  );
}
