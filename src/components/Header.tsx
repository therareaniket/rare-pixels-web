"use client";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import GlassEffect from "./LiquideGlass";
import Link from "next/link";
import { useEffect, useState } from "react";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight - 60) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            };
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`${isSticky ? "atTop" : "atBottom"}`}>
                <div className="container">
                    <div className="navbar-wrapper">
                        <div className="nav-logo">
                            <Link href="/">
                                {theme === "light" ? <Image src="/images/rp-logo-black.png" alt="rare-logo" width={174} height={28} /> : <Image src="/images/rp-logo-white.png" alt="rare-logo" width={174} height={28} />}
                                {/* <Image className="rare-website-logo" src="/images/rp-logo-black.png" alt="rare-logo" width={174} height={28}></Image> */}
                            </Link>
                        </div>

                        <div className="navbar-links-wrapper">
                            <GlassEffect className="site-radius-30">
                                <div className="navbar-links">
                                    <ul>
                                        <li className="text-18 text-md"><Link href="/" title="home">Home</Link></li>
                                        <li className="text-18 text-md"><Link href="/" title="about">About</Link></li>
                                        <li className="text-18 text-md"><Link href="/" title="services">Services</Link></li>
                                        <li className="text-18 text-md"><Link href="/" title="projects">Projects</Link></li>
                                        <li className="text-18 text-md"><Link href="/" title="industries">Industries</Link></li>
                                        <li className="text-18 text-md"><Link href="/" title="process">Process</Link></li>
                                        <li className="text-18 text-md"><Link href="/" title="life at RarePixels Design">Life at RPD</Link></li>
                                        <li className="text-18 text-md"><Link href="/" title="articles">Articles</Link></li>
                                        <li className="text-18 text-md"><Link href="/" title="contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </GlassEffect>

                            <div className="navbar-theme-btn">
                                <GlassEffect className="site-radius-50">
                                    <button className="mode-switching-toggle-button toggle-button" onClick={toggleTheme}>
                                        {theme === "light" ? <Image className="dark-mode-icon" src="/images/dark-mode-icon.svg" alt="dark-mode" width={24} height={24} /> : <Image className="light-mode-icon" src="/images/light-mode-icon.svg" alt="dark-mode" width={24} height={24} />}
                                    </button>
                                </GlassEffect>
                            </div>

                            <button className={`hamburger-wrapper ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                                <GlassEffect className="site-radius-50">
                                    <div className="hamburger-image">
                                        {theme === "light" ? <Image src="/images/light-mode-hamburger.svg" alt="hamburger-light" width={24} height={24} /> : <Image src="/images/dark-mode-hamburger.svg" alt="hamburger-dark" width={24} height={24} />}
                                    </div>
                                </GlassEffect>
                            </button>

                            <div className={`menu-for-responsive ${isOpen ? "active" : ""}`}>
                                <GlassEffect className="site-radius-20">
                                    <div className="mobile-menu">
                                        <div className="menu-cross-icon" onClick={() => setIsOpen(false)}>
                                            {theme === "light" ? <Image className="dark-mode-icon" src="/images/light-menu-cross-icon.svg" alt="dark-mode" width={24} height={24} /> : <Image className="light-mode-icon" src="/images/dark-menu-cross-icon.svg" alt="dark-mode" width={24} height={24} />}
                                        </div>

                                        <div className="menu-links-wrapper">
                                            <ul>
                                                <li className="text-18 text-md"><Link href="/" title="home"><span className="rare-pixel-square"></span> Home</Link></li>
                                                <li className="text-18 text-md"><Link href="/" title="about"><span className="rare-pixel-square"></span> About</Link></li>
                                                <li className="text-18 text-md"><Link href="/" title="services"><span className="rare-pixel-square"></span> Services</Link></li>
                                                <li className="text-18 text-md"><Link href="/" title="projects"><span className="rare-pixel-square"></span> Projects</Link></li>
                                                <li className="text-18 text-md"><Link href="/" title="industries"><span className="rare-pixel-square"></span> Industries</Link></li>
                                            </ul>

                                            <ul>
                                                <li className="text-18 text-md"><Link href="/" title="process"><span className="rare-pixel-square"></span> Process</Link></li>
                                                <li className="text-18 text-md"><Link href="/" title="life at RarePixels Design"><span className="rare-pixel-square"></span> Life at RPD</Link></li>
                                                <li className="text-18 text-md"><Link href="/" title="articles"><span className="rare-pixel-square"></span> Articles</Link></li>
                                                <li className="text-18 text-md"><Link href="/" title="contact"><span className="rare-pixel-square"></span> Contact</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </GlassEffect>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}