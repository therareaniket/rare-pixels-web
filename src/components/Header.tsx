"use client";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import GlassEffect from "./LiquideGlass";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    const [darkSection, setDarkSection] = useState(false);
    useEffect(() => {
        const sections = document.querySelectorAll(".dark-section");

        const observer = new IntersectionObserver(([Entry]) => {
            setDarkSection(Entry.isIntersecting);
        },
            {
                threshold: 0.3,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <header>
                <div className="container">
                    <div className={`navbar-wrapper ${darkSection ? "light-links" : "dark-links"}`}>
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
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}