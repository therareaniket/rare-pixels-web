"use client";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSquished, setIsSquished] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuContainerRef = useRef<HTMLDivElement>(null);
    const menuScrollPositionRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsSquished(window.scrollY > 1);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            const clickedHamburger =
                menuContainerRef.current?.contains(target);

            const clickedMegaMenu =
                menuRef.current?.contains(target);

            if (!clickedHamburger && !clickedMegaMenu) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const scrollPositionRef = useRef(0);

    useEffect(() => {
        if (isMenuOpen) {
            scrollPositionRef.current = window.scrollY;

            document.body.style.top = `-${scrollPositionRef.current}px`;
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");

            window.scrollTo(0, scrollPositionRef.current);
            document.body.style.top = "";
        }

        return () => {
            document.body.classList.remove("menu-open");
            document.body.style.top = "";
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className="site-header" >
                <div className="container">
                    <nav className="nav">
                        {/* <div className={`navbar-wrapper ${isSquished ? "header-squished" : "header-expanded"}`}> */}
                        <div className="navbar-wrapper header-squished">
                            <div className="website-header-logo">
                                <Image className="dark-mode-icon" src="/images/rp-logo-white.png" alt="dark-mode" width={174} height={28} loading="eager" />

                                {/* <div className="website-logo">
                                    <Image src="/images/website-logo-r.svg" alt="website-logo" width={19} height={25} loading="eager"></Image>
                                </div> */}
                            </div>

                            <div ref={menuContainerRef} className="nav-icon-wrapper">
                                <div className="nav-hamburger" onClick={(e) => { e.stopPropagation(); setIsMenuOpen((prev) => !prev); }}>
                                    <Image className={`menu-icon ${isMenuOpen ? "menu-icon-open" : ""}`} src={isMenuOpen ? "/images/global/white-close.svg" : "/images/global/dark-mode-hamburger.svg"} alt={isMenuOpen ? "close menu" : "open menu"} width={30} height={30} loading="eager" />
                                </div>
                            </div>
                        </div>
                    </nav >

                    <div className={`mega-menu-overlay ${isMenuOpen ? "active" : ""}`} />
                    <div ref={menuRef} data-lenis-prevent className={`header-mega-menu ${isMenuOpen ? "header-mega-menu-open" : ""}`} >
                        <div className="header-pages-link-wrapper header-links-for-desktop">
                            <ul className="header-menu-link-wrapper">
                                <li className="menu-link">
                                    <Link href="/">
                                        <div className="menu-link-icon">
                                            <span className="icon-other_houses"></span>
                                        </div>
                                        <div className="">
                                            <p className="text-18 text-sb">Home</p>
                                            <p className="text-16 text-rg text-dark-grey">Explore ideas built for impact</p>
                                        </div>
                                    </Link>
                                </li>

                                <li className="menu-link">
                                    <Link href="/About">
                                        <div className="menu-link-icon">
                                            <span className="icon-info"></span>
                                        </div>
                                        <div className="">
                                            <p className="text-18 text-sb">About</p>
                                            <p className="text-16 text-rg text-dark-grey">The thinking behind RarePixels</p>
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
                                            <p className="text-16 text-rg text-dark-grey">Experience across evolving industries</p>
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
                                            <p className="text-16 text-rg text-dark-grey">Ideas transformed into digital experiences</p>
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
                                            <p className="text-16 text-rg text-dark-grey">How we turn vision into reality</p>
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
                                            <p className="text-16 text-rg text-dark-grey">People, culture and creative thinking</p>
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
                                            <p className="text-16 text-rg text-dark-grey">Perspectives on design and digital</p>
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
                                            <p className="text-16 text-rg text-dark-grey">Let’s create something meaningful</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="header-pages-link-wrapper header-links-for-tablet">
                            <ul className="header-menu-link-wrapper">
                                <li className="menu-link">
                                    <Link href="/">
                                        <div className="menu-link-icon">
                                            <span className="icon-other_houses"></span>
                                        </div>
                                        <div className="">
                                            <p className="text-18 text-sb">Home</p>
                                            <p className="text-16 text-rg text-dark-grey">Explore ideas built for impact</p>
                                        </div>
                                    </Link>
                                </li>

                                <li className="menu-link">
                                    <Link href="/About">
                                        <div className="menu-link-icon">
                                            <span className="icon-info"></span>
                                        </div>
                                        <div className="">
                                            <p className="text-18 text-sb">About</p>
                                            <p className="text-16 text-rg text-dark-grey">The thinking behind RarePixels</p>
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
                                            <p className="text-16 text-rg text-dark-grey">Experience across evolving industries</p>
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
                                            <p className="text-16 text-rg text-dark-grey">Ideas transformed into digital experiences</p>
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
                                            <p className="text-16 text-rg text-dark-grey">How we turn vision into reality</p>
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
                                            <p className="text-16 text-rg text-dark-grey">People, culture and creative thinking</p>
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
                                            <p className="text-16 text-rg text-dark-grey">Perspectives on design and digital</p>
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
                                            <p className="text-16 text-rg text-dark-grey">Let’s create something meaningful</p>
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
                                            <Link href="#" title="web platform engineering">Web & Platform Engineering</Link>
                                        </li>

                                        <li className="text-16 text-rg">
                                            <Link href="#" title="saas product development">SaaS & Product Development</Link>
                                        </li>

                                        <li className="text-16 text-rg">
                                            <Link href="#" title="ecommerce marketplace builds">E-commerce & Marketplace Builds</Link>
                                        </li>

                                        <li className="text-16 text-rg">
                                            <Link href="#" title="mobile application development">Mobile Application Development</Link>
                                        </li>

                                        <li className="text-16 text-rg">
                                            <Link href="#" title="api system integration">API & Systems Integration</Link>
                                        </li>

                                        <li className="text-16 text-rg">
                                            <Link href="#" title="progressive headless web">Progressive & Headless Web</Link>
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
                                            <Link href="#" title="brand strategy positioning">Brand Strategy & Positioning</Link>
                                        </li>

                                        <li className="text-16 text-rg">
                                            <Link href="#" title="visual identity design">Visual Identity Design</Link>
                                        </li>

                                        <li className="text-16 text-rg">
                                            <Link href="#" title="brand architecture guideline">Brand Architecture & Guidelines</Link>
                                        </li>

                                        <li className="text-16 text-rg">
                                            <Link href="#" title="packaging product design">Packaging & Product Design</Link>
                                        </li>

                                        <li className="text-16 text-rg">
                                            <Link href="#" title="rebranding brand evolution">Rebranding & Brand Evolution</Link>
                                        </li>

                                        <li className="text-16 text-rg">
                                            <Link href="#" title="presentation collateral design">Presentation & Collateral Design</Link>
                                        </li>

                                        <li className="text-16 text-rg">
                                            <Link href="#" title="graphics print media design">Graphics & Print Media Design</Link>
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
                                            <Link href="#" title="social media strategy">Social Media Strategy</Link>
                                        </li>

                                        <li className="text-16 text-rg">
                                            <Link href="#" title="content creation design">Content Creation & Design</Link>
                                        </li>

                                        <li className="text-16 text-rg">
                                            <Link href="#" title="paid socail performance marketing">Paid Social & Performance Marketing</Link>
                                        </li>

                                        <li className="text-16 text-rg">
                                            <Link href="#" title="video reels production">Video & Reels Production </Link>
                                        </li>

                                        <li className="text-16 text-rg">
                                            <Link href="#" title="community reputation management">Community & Reputation Management</Link>
                                        </li>

                                        <li className="text-16 text-rg">
                                            <Link href="#" title="analytics audit reporting">Analytics, Audit & Reporting</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="header-links-wrapper-for-mobile">
                            <ul>
                                <li className="menu-link">
                                    <Link href="/">
                                        <div className="menu-link-icon">
                                            <span className="icon-other_houses"></span>
                                        </div>
                                        <div className="">
                                            <p className="text-18 text-rg">Home</p>
                                        </div>
                                    </Link>
                                </li>

                                <li className="menu-link">
                                    <Link href="/About">
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
                                                            <li> <Link href="#" title="experience strategy research" className="text-rg text-14"> <span className="text-sb">-</span> Experience Strategy & Research</Link></li>
                                                            <li> <Link href="#" title="website design" className="text-rg text-14"> <span className="text-sb">-</span> Website Design</Link> </li>
                                                            <li> <Link href="#" title="interface design" className="text-rg text-14"> <span className="text-sb">-</span> Interface Design</Link> </li>
                                                            <li> <Link href="#" title="interaction motion design" className="text-rg text-14"> <span className="text-sb">-</span> Interaction & Motion Design</Link> </li>
                                                            <li> <Link href="#" title="dashboard data experience" className="text-rg text-14"> <span className="text-sb">-</span> Dashboard & Data Experience</Link> </li>
                                                            <li> <Link href="#" title="prototype validation" className="text-rg text-14"> <span className="text-sb">-</span> Prototype & Validation</Link> </li>
                                                            <li> <Link href="#" title="design systems" className="text-rg text-14"> <span className="text-sb">-</span> Design Systems</Link> </li>
                                                            <li> <Link href="#" title="product app design" className="text-rg text-14"> <span className="text-sb">-</span> Product & App Design</Link> </li>
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
                                                            <li> <Link href="#" title="Web & Platform Engineering" className="text-rg text-14"> <span className="text-sb">-</span> Web & Platform Engineering</Link></li>
                                                            <li> <Link href="#" title="SaaS & Product Development" className="text-rg text-14"> <span className="text-sb">-</span> SaaS & Product Development</Link> </li>
                                                            <li> <Link href="#" title="E-commerce & Marketplace Builds" className="text-rg text-14"> <span className="text-sb">-</span> E-commerce & Marketplace Builds</Link> </li>
                                                            <li> <Link href="#" title="Mobile Application Development" className="text-rg text-14"> <span className="text-sb">-</span> Mobile Application Development</Link> </li>
                                                            <li> <Link href="#" title="API & Systems Integration" className="text-rg text-14"> <span className="text-sb">-</span> API & Systems Integration</Link> </li>
                                                            <li> <Link href="#" title="Progressive & Headless Web" className="text-rg text-14"> <span className="text-sb">-</span> Progressive & Headless Web</Link> </li>
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
                                                            <li> <Link href="#" title="Brand Strategy & Positioning" className="text-rg text-14"> <span className="text-sb">-</span> Brand Strategy & Positioning</Link></li>
                                                            <li> <Link href="#" title="Visual Identity Design" className="text-rg text-14"> <span className="text-sb">-</span> Visual Identity Design</Link> </li>
                                                            <li> <Link href="#" title="Brand Architecture & Guidelines" className="text-rg text-14"> <span className="text-sb">-</span> Brand Architecture & Guidelines</Link> </li>
                                                            <li> <Link href="#" title="Packaging & Product Design" className="text-rg text-14"> <span className="text-sb">-</span> Packaging & Product Design</Link> </li>
                                                            <li> <Link href="#" title="Rebranding & Brand Evolution" className="text-rg text-14"> <span className="text-sb">-</span> Rebranding & Brand Evolution</Link> </li>
                                                            <li> <Link href="#" title="Presentation & Collateral Design" className="text-rg text-14"> <span className="text-sb">-</span> Presentation & Collateral Design</Link> </li>
                                                            <li> <Link href="#" title="Graphics & Print Media Design" className="text-rg text-14"> <span className="text-sb">-</span> Graphics & Print Media Design</Link> </li>
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
                                                            <li> <Link href="#" title="Social Media Strategy" className="text-rg text-14"> <span className="text-sb">-</span> Social Media Strategy</Link></li>
                                                            <li> <Link href="#" title="Content Creation & Design" className="text-rg text-14"> <span className="text-sb">-</span> Content Creation & Design</Link> </li>
                                                            <li> <Link href="#" title="Paid Social & Performance Marketing" className="text-rg text-14"> <span className="text-sb">-</span> Paid Social & Performance Marketing</Link> </li>
                                                            <li> <Link href="#" title="Video & Reels Production" className="text-rg text-14"> <span className="text-sb">-</span> Video & Reels Production </Link> </li>
                                                            <li> <Link href="#" title="Community & Reputation Management" className="text-rg text-14"> <span className="text-sb">-</span> Community & Reputation Management</Link> </li>
                                                            <li> <Link href="#" title="Analytics, Audit & Reporting" className="text-rg text-14"> <span className="text-sb">-</span> Analytics, Audit & Reporting</Link> </li>
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

                                <Link href="#" title="make it rare" className="link-padding site-radius-30 btn-bg-primary hm-hero-redirect-link header-btn website-btn">
                                    <span className="text-20 text-md text-white">Start Your Project </span>
                                    <Image src="/images/global/homeHeroArrow.svg" alt="arrow-for-navigation" width={24} height={24}></Image>
                                </Link>
                            </div>

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
                                        <Link href="#" title="likedin">
                                            <span className="icon-linkedin"></span>
                                        </Link>

                                        <Link href="#" title="instagram">
                                            <span className="icon-instagram"></span>
                                        </Link>

                                        <Link href="#" title="threads">
                                            <span className="icon-threads"></span>
                                        </Link>

                                        <Link href="#" title="facebook">
                                            <span className="icon-facebook"></span>
                                        </Link>

                                        <Link href="#" title="twitter">
                                            <span className="icon-twitter"></span>
                                        </Link>

                                        <Link href="#" title="youtube">
                                            <span className="icon-youtube"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </header >
        </>
    )
}