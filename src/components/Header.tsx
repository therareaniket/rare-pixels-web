"use client";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import GlassEffect from "./LiquideGlass";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <header className="navbar-main">
                <div className="container">
                    <div className="navbar-wrapper">
                        <div className="navbar-links-wrapper">
                            <div className="navbar-theme-btn">
                                <button className="mode-switching-toggle-button toggle-button" onClick={toggleTheme}>
                                    {theme === "light" ? <Image className="dark-mode-icon" src="/images/light-mode-icon.svg" alt="dark-mode" width={24} height={24} /> : <Image className="light-mode-icon" src="/images/dark-mode-icon.svg" alt="dark-mode" width={24} height={24} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
