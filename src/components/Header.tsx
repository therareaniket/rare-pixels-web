"use client";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    return (
        <>
            <button className="toggle-button" onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"}
            </button>
        </>
    )    
}