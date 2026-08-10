"use client";
import { useTheme } from "@/context/ThemeContext";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Header() {

    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 50) {
                setShowHeader(true);
            }

            else if (currentScrollY > lastScrollY) {
                setShowHeader(false);
            }

            else {
                setShowHeader(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuContainerRef.current &&
                !menuContainerRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className={`site-header ${showHeader ? "header-visible" : "header-hidden"}`}>
                {/* <GlassEffect> */}
                <nav className="nav">
                    <div className="container">
                        <div className="navbar-wrapper">
                            <div className="website-header-logo">
                                {theme === "light" ? <Image className="dark-mode-icon" src="/images/rp-logo-black.png" alt="dark-mode" width={174} height={28} loading="eager" /> : <Image className="light-mode-icon" src="/images/rp-logo-white.png" alt="dark-mode" width={174} height={28} loading="lazy" />}
                            </div>

                            <div ref={menuContainerRef} className="nav-icon-wrapper">
                                <div
                                    className="nav-hamburger"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsMenuOpen((prev) => !prev);
                                    }}
                                >
                                    <Image className={`menu-icon ${isMenuOpen ? "menu-icon-open" : ""}`} src={isMenuOpen ? "/images/homepage/megamenu-close.svg" : "/images/light-mode-hamburger.svg"} alt={isMenuOpen ? "close menu" : "open menu"} width={30} height={30} loading="eager" />
                                </div>

                                {/* {isMenuOpen && (
                                    <div
                                        className="menu-backdrop"
                                        onClick={() => setIsMenuOpen(false)}
                                    />
                                )} */}
                                <div className="mega-menu-background-blurr">
                                    <div ref={menuRef} className={`header-mega-menu ${isMenuOpen ? "header-mega-menu-open" : ""}`} >
                                        <div className="header-pages-link-wrapper header-links-for-desktop">
                                            <ul className="header-menu-link-wrapper">
                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-other_houses"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-sb">Home</p>
                                                            <p className="text-16 text-rg text-dark-grey">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-info"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-sb">About</p>
                                                            <p className="text-16 text-rg text-dark-grey">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-business_center"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-sb">Industries</p>
                                                            <p className="text-16 text-rg text-dark-grey">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-note_stack"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-sb">Projects</p>
                                                            <p className="text-16 text-rg text-dark-grey">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>

                                            <ul className="header-menu-link-wrapper">
                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-conversion_path"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-sb">Process</p>
                                                            <p className="text-16 text-rg text-dark-grey">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-crowdsource"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-sb">Life at RPD</p>
                                                            <p className="text-16 text-rg text-dark-grey">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-newsmode"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-sb">Articles</p>
                                                            <p className="text-16 text-rg text-dark-grey">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-support_agent"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-sb">Contact</p>
                                                            <p className="text-16 text-rg text-dark-grey">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="header-pages-link-wrapper header-links-for-tablet">
                                            <ul className="header-menu-link-wrapper">
                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-other_houses"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-sb">Home</p>
                                                            <p className="text-16 text-rg text-dark-grey">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-info"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-sb">About</p>
                                                            <p className="text-16 text-rg text-dark-grey">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-business_center"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-sb">Industries</p>
                                                            <p className="text-16 text-rg text-dark-grey">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-note_stack"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-sb">Projects</p>
                                                            <p className="text-16 text-rg text-dark-grey">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-conversion_path"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-sb">Process</p>
                                                            <p className="text-16 text-rg text-dark-grey">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-crowdsource"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-sb">Life at RPD</p>
                                                            <p className="text-16 text-rg text-dark-grey">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-newsmode"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-sb">Articles</p>
                                                            <p className="text-16 text-rg text-dark-grey">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-support_agent"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-sb">Contact</p>
                                                            <p className="text-16 text-rg text-dark-grey">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="header-links-wrapper header-links-wrapper-for-desktop">
                                            <div className="header-mega-links-wrapper">
                                                <div className="header-mega-link-title">
                                                    <div className="mega-links-icon">
                                                        <span className="icon-draw"></span>
                                                    </div>

                                                    <p className="text-18 text-sb">UI/UX Design</p>
                                                </div>

                                                <div className="mega-links">
                                                    <ul>
                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="experience strategy">Experience Strategy & Research</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="website design">Website Design</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="interface design">Interface Design</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="interaction motion design">Interaction & Motion Design</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="dashboard data">Dashboard & Data Experience</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="prototype">Prototype & Validation</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="design system">Design Systems</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="product app design">Product & App Design</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="header-mega-links-wrapper">
                                                <div className="header-mega-link-title">
                                                    <div className="mega-links-icon">
                                                        <span className="icon-code_xml"></span>
                                                    </div>

                                                    <p className="text-18 text-sb">Web & App Development</p>
                                                </div>

                                                <div className="mega-links">
                                                    <ul>
                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="experience strategy">Web & Platform Engineering</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="website design">SaaS & Product Development</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="interface design">E-commerce & Marketplace Builds</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="interaction motion design">Mobile Application Development</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="dashboard data">API & Systems Integration</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="prototype">Progressive & Headless Web</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="header-mega-links-wrapper">
                                                <div className="header-mega-link-title">
                                                    <div className="mega-links-icon">
                                                        <span className="icon-diamond_shine"></span>
                                                    </div>

                                                    <p className="text-18 text-sb">Brand Identity Design</p>
                                                </div>

                                                <div className="mega-links">
                                                    <ul>
                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="experience strategy">Brand Strategy & Positioning</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="website design">Visual Identity Design</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="interface design">Brand Architecture & Guidelines</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="interaction motion design">Packaging & Product Design</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="dashboard data">Rebranding & Brand Evolution</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="prototype">Presentation & Collateral Design</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="design system">Graphics & Print Media Design</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="header-mega-links-wrapper">
                                                <div className="header-mega-link-title">
                                                    <div className="mega-links-icon">
                                                        <span className="icon-automation"></span>
                                                    </div>

                                                    <p className="text-18 text-sb">Social Media Management</p>
                                                </div>

                                                <div className="mega-links">
                                                    <ul>
                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="experience strategy">Social Media Strategy</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="website design">Content Creation & Design</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="interface design">Paid Social & Performance Marketing</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="interaction motion design">Video & Reels Production </Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="dashboard data">Community & Reputation Management</Link>
                                                        </li>

                                                        <li className="text-16 text-rg">
                                                            <Link href="#" title="prototype">Analytics, Audit & Reporting</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="header-links-wrapper-for-mobile">
                                            <ul>
                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-other_houses"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-rg">Home</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-info"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-rg">About</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <Accordion className="menu-accordion">
                                                    <AccordionItem value="products">
                                                        <AccordionTrigger className="menu-link">
                                                            <div className="menu-link-icon">
                                                                <span className="icon-service"></span>
                                                            </div>
                                                            <div className="service-mobile-title">
                                                                <p className="text-18">Services</p>
                                                            </div>
                                                        </AccordionTrigger>

                                                        <AccordionContent className="accordion-menu-content">
                                                            <Accordion >
                                                                <AccordionItem value="cat1" className="accordion-submenu">
                                                                    <AccordionTrigger className="text-16 text-rg submenu-mobile-title">
                                                                        <ul>
                                                                            <li>
                                                                                UI/UX Design
                                                                            </li>
                                                                        </ul>
                                                                    </AccordionTrigger>
                                                                    <AccordionContent className="accordion-submenu-links">
                                                                        <ul>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Experience Strategy & Research</Link></li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Website Design</Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Interface Design</Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Interaction & Motion Design</Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Dashboard & Data Experience</Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Prototype & Validation</Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Design Systems</Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Product & App Design</Link> </li>
                                                                        </ul>
                                                                    </AccordionContent>
                                                                </AccordionItem>

                                                                <AccordionItem value="cat2" className="accordion-submenu">
                                                                    <AccordionTrigger className="text-16 text-rg submenu-mobile-title">
                                                                        <ul>
                                                                            <li>
                                                                                Web & App Development
                                                                            </li>
                                                                        </ul>
                                                                    </AccordionTrigger>
                                                                    <AccordionContent className="accordion-submenu-links">
                                                                        <ul>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Web & Platform Engineering</Link></li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> SaaS & Product Development</Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> E-commerce & Marketplace Builds</Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Mobile Application Development</Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> API & Systems Integration</Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Progressive & Headless Web</Link> </li>
                                                                        </ul>
                                                                    </AccordionContent>
                                                                </AccordionItem>

                                                                <AccordionItem value="cat3" className="accordion-submenu">
                                                                    <AccordionTrigger className="text-16 text-rg submenu-mobile-title">
                                                                        <ul>
                                                                            <li>
                                                                                Brand Identity Design
                                                                            </li>
                                                                        </ul>
                                                                    </AccordionTrigger>
                                                                    <AccordionContent className="accordion-submenu-links">
                                                                        <ul>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Brand Strategy & Positioning</Link></li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Visual Identity Design</Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Brand Architecture & Guidelines</Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Packaging & Product Design</Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Rebranding & Brand Evolution</Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Presentation & Collateral Design</Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Graphics & Print Media Design</Link> </li>
                                                                        </ul>
                                                                    </AccordionContent>
                                                                </AccordionItem>

                                                                <AccordionItem value="cat4" className="accordion-submenu">
                                                                    <AccordionTrigger className="text-16 text-rg submenu-mobile-title">
                                                                        <ul>
                                                                            <li>
                                                                                Social Media Management
                                                                            </li>
                                                                        </ul>
                                                                    </AccordionTrigger>
                                                                    <AccordionContent className="accordion-submenu-links">
                                                                        <ul>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Social Media Strategy</Link></li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Content Creation & Design</Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Paid Social & Performance Marketing</Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Video & Reels Production </Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Community & Reputation Management</Link> </li>
                                                                            <li> <Link href="#" title="hello" className="text-rg text-14"> <span className="text-sb">-</span> Analytics, Audit & Reporting</Link> </li>
                                                                        </ul>
                                                                    </AccordionContent>
                                                                </AccordionItem>
                                                            </Accordion>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-business_center"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-rg">Industries</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-note_stack"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-rg">Projects</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-conversion_path"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-rg">Process</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-crowdsource"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-rg">Life at RPD</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-newsmode"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-rg">Articles</p>
                                                        </div>
                                                    </Link>
                                                </li>

                                                <li className="menu-link">
                                                    <Link href="#">
                                                        <div className="menu-link-icon">
                                                            <span className="icon-support_agent"></span>
                                                        </div>
                                                        <div className="">
                                                            <p className="text-18 text-rg">Contact</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="header-website-detail">
                                            <div className="brand-quote">
                                                <span className="h3 text-sb">Elevate Your Brand</span>

                                                <Link href="#" title="Make it RARE" className="hero-link-cta text-md text-20">
                                                    Start Your Project <span className="icon-hero-cta-arrow cta-arrow"></span>
                                                </Link>
                                            </div>

                                            {/* <div className="menu-company-add">
                                                <div className="head-add-country">
                                                    <span className="text-16 text-md country-india">India</span>
                                                    <span className="text-16 text-md country-usa">USA</span>
                                                </div>

                                                <div className="head-add">
                                                    <span className="text-18 text-rg country-india-address">
                                                        1109-10, Rashmi The Prime, Near Vakil Saheb Bridge, Ambli T Junction, Ahmedabad, Gujarat 380058.
                                                    </span>

                                                    <span className="text-18 text-rg country-usa-address">
                                                        2500 knights road Apt # 29 - 02 Bensalem PA 19020.
                                                    </span>
                                                </div>
                                            </div> */}

                                            <div className="header-contact-detail">
                                                <div className="menu-company-contact">
                                                    <div className="contact-title">
                                                        <p className="text-16 text-sb">Contact</p>
                                                    </div>

                                                    <div className="contact-phone">
                                                        <span className="icon-call"></span>

                                                        <Link href="callTo: +91 8200925920" className="text-18 text-rg">+91 8200925920</Link>
                                                    </div>

                                                    <div className="contact-phone">
                                                        <span className="icon-call"></span>

                                                        <Link href="callTo: +1(347) 352-0172" className="text-18 text-rg">+1(347) 352-0172</Link>
                                                    </div>

                                                    <div className="contact-phone">
                                                        <span className="icon-mail"></span>

                                                        <Link href="mailTo: connect@rarepixelsdesign.com" className="text-18 text-rg">connect@rarepixelsdesign.com</Link>
                                                    </div>
                                                </div>

                                                <div className="menu-social-icon">
                                                    <div className="menu-social-title">
                                                        <p className="text-16 text-sb">Follow</p>
                                                    </div>

                                                    <div className="menu-social-icons">
                                                        <Link href="#">
                                                            <span className="icon-linkedin"></span>
                                                        </Link>

                                                        <Link href="#">
                                                            <span className="icon-instagram"></span>
                                                        </Link>

                                                        <Link href="#">
                                                            <span className="icon-threads"></span>
                                                        </Link>

                                                        <Link href="#">
                                                            <span className="icon-facebook"></span>
                                                        </Link>

                                                        <Link href="#">
                                                            <span className="icon-twitter"></span>
                                                        </Link>

                                                        <Link href="#">
                                                            <span className="icon-youtube"></span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </nav >
                {/* </GlassEffect > */}
            </header >
        </>
    )
}