import React, { useEffect, useState } from "react";
import DarkTheme from "./DarkTheme";

const loadDarkMode = () => {
  if (typeof localStorage === "undefined") return false;
  const value = localStorage.getItem("darkMode");
  return !value ? false : JSON.parse(value);
};

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(loadDarkMode);

  const text = darkMode ? "Light Mode" : "Dark Mode";

  const handleClick = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleClick} suppressHydrationWarning>
        {text}
      </button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
        }
      `}</style>
      {darkMode && <DarkTheme />}
    </>
  );
};

export default ThemeSwitch;
