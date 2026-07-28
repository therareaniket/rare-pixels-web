"use client";
import { useTheme } from "@/context/ThemeContext";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import GlassEffect from "./LiquideGlass";
import Image from "next/image";
import { useState } from "react";

export default function Header() {

    const { theme, toggleTheme } = useTheme();
    const [ isMenuOpen, setIsMenuOpen ]  = useState(false);

    return (
        <>
            <header className="site-header">
                <GlassEffect>
                    <nav className="nav">
                        <div className="container">
                            <div className="navbar-wrapper">
                                <div className="website-header-logo">
                                    {theme === "light" ? <Image className="dark-mode-icon" src="/images/rp-logo-black.png" alt="dark-mode" width={174} height={28} loading="eager" /> : <Image className="light-mode-icon" src="/images/rp-logo-white.png" alt="dark-mode" width={174} height={28} loading="lazy" />}
                                </div>

                                <div className="nav-icon-wrapper">
                                    <button className="mode-switching-toggle-button toggle-button mode-theme-btn" onClick={toggleTheme}>
                                        {theme === "light" ? <Image className="dark-mode-icon" src="/images/light-mode-icon.svg" alt="dark-mode" width={36} height={36} loading="eager" /> : <Image className="light-mode-icon" src="/images/light-mode-icon.svg" alt="dark-mode" width={36} height={36} loading="lazy" />}
                                    </button>

                                    <div className="nav-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                        {theme === "light" ? <Image className="dark-mode-icon" src="/images/light-mode-hamburger.svg" alt="dark-mode" width={30} height={30} loading="eager" /> : <Image className="light-mode-icon" src="/images/dark-mode-hamburger.svg" alt="dark-mode" width={30} height={30} loading="lazy" />}
                                    </div>

                                </div>

                                {/* <div
                                    className={`header-mega-menu ${isMenuOpen ? "header-mega-menu-open" : ""
                                        }`}
                                >
                                    <ul>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Projects</li>
                                        <li>Contact</li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </nav>
                </GlassEffect>
            </header>
        </>
    )
}