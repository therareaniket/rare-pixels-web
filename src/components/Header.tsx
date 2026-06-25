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
    const [isOpen, setIsOpen] = useState(false);
    // const [isSticky, setIsSticky] = useState(false);
    // const [headerTop, setHeaderTop] = useState<number | null>(null);
    // const [isMobile, setIsMobile] = useState(false);

    const menuRef = useRef<HTMLDivElement | null>(null);
    const headerRef = useRef<HTMLElement | null>(null);

    // useEffect(() => {
    //     const mediaQuery = window.matchMedia('(max-width: 767px)');
    //     const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    //     updateIsMobile();
    //     mediaQuery.addEventListener('change', updateIsMobile);
    //     return () => mediaQuery.removeEventListener('change', updateIsMobile);
    // }, []);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (isMobile) {
    //             setIsSticky(true);
    //             setHeaderTop(0);
    //             return;
    //         }

    //         const hero = document.querySelector<HTMLElement>('#hero-section');
    //         if (!hero || !headerRef.current) {
    //             setIsSticky(false);
    //             setHeaderTop(null);
    //             return;
    //         }

    //         const heroBottom = hero.getBoundingClientRect().bottom;
    //         const headerHeight = headerRef.current.offsetHeight;
    //         const viewportHeight = window.innerHeight;
    //         const bottomOffset = 50;
    //         const stickyOffset = 20;
    //         const initialTop = viewportHeight - headerHeight - bottomOffset;
    //         const trackedTop = heroBottom - headerHeight;

    //         if (trackedTop >= initialTop) {
    //             setIsSticky(false);
    //             setHeaderTop(initialTop);
    //         } else if (trackedTop <= stickyOffset) {
    //             setIsSticky(true);
    //             setHeaderTop(stickyOffset);
    //         } else {
    //             setIsSticky(false);
    //             setHeaderTop(trackedTop);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll, { passive: true });
    //     handleScroll();

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [isMobile]);

    // const headerStyle: React.CSSProperties = isMobile
    //     ? { top: '0px', bottom: 'auto' }
    //     : headerTop !== null
    //         ? { top: `${headerTop}px`, bottom: 'auto' }
    //         : { top: 'auto', bottom: '50px' };

    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //         if (
    //             isOpen &&
    //             menuRef.current &&
    //             event.target instanceof Node &&
    //             !menuRef.current.contains(event.target)
    //         ) {
    //             setIsOpen(false);
    //         }
    //     };
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [isOpen])

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* <GlassEffect> */}
            <header ref={headerRef} className="nav-main">
                <div className="container">
                    <div className={`navbar-wrapper-mob for-mobile ${isScrolled ? "scrolled-away" : ""}`}>
                        <div className="rare-logo-wrapper">
                            {theme === "light" ? <Image src="/images/rp-logo-black.png" alt="rare-logo" width={174} height={28} /> : <Image src="/images/rp-logo-white.png" alt="rare-logo" width={174} height={28} />}
                        </div>
                        <div className="nav-btn-wrapper">
                            <div>
                                <button className="nav-theme-change-icon" onClick={toggleTheme}>
                                    {theme === "light" ?
                                        <div className="light-mode-hover-icon"><span className="icon-light-mode-icon"></span><span className="icon-dark-mode-icon"></span> </div>
                                        :
                                        <div className="dark-mode-hover-icon"><span className="icon-dark-mode-icon"></span><span className="icon-light-mode-icon"></span></div>
                                    }
                                </button>
                            </div>
                            <button type="button" className="navbar-hamburger-button" onClick={() => setIsOpen(!isOpen)}>
                                <div className="navbar-hamburger-effect">
                                    {theme === "light" ? <Image src="/images/light-mode-hamburger.svg" alt="hamburger-light" width={30} height={30} /> : <Image src="/images/dark-mode-hamburger.svg" alt="hamburger-dark" width={30} height={30} />}
                                </div>
                            </button>
                        </div>
                    </div>

                    <button type="button" className={`navbar-hamburger-bottom for-mobile ${isScrolled ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                        <div className="bottom-wrapper">
                            <GlassEffect className="nav-theme-change-icon">
                                <button className="nav-theme-change-icon" onClick={toggleTheme}>
                                    {theme === "light" ?
                                        <div className="light-mode-hover-icon"><span className="icon-light-mode-icon"></span><span className="icon-dark-mode-icon"></span> </div>
                                        :
                                        <div className="dark-mode-hover-icon"><span className="icon-dark-mode-icon"></span><span className="icon-light-mode-icon"></span></div>
                                    }
                                </button>
                            </GlassEffect>
                            <GlassEffect className="navbar-hamburger-effect">
                                {theme === "light" ? <Image src="/images/light-mode-hamburger.svg" alt="hamburger-light" width={30} height={30} /> : <Image src="/images/dark-mode-hamburger.svg" alt="hamburger-dark" width={30} height={30} />}
                            </GlassEffect>
                        </div>

                        <div ref={menuRef} className={`menu-for-responsive ${isOpen ? "active" : ""}`}>
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
                    </button>
                </div>
            </header>
            {/* </GlassEffect> */}
        </>
    )
}
