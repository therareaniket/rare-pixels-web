"use client";
import { useTheme } from "@/context/ThemeContext";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import GlassEffect from "./LiquideGlass";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {

    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                                    {/* <button className="mode-switching-toggle-button toggle-button mode-theme-btn" onClick={toggleTheme}>
                                        {theme === "light" ? <Image className="dark-mode-icon" src="/images/light-mode-icon.svg" alt="dark-mode" width={36} height={36} loading="eager" /> : <Image className="light-mode-icon" src="/images/light-mode-icon.svg" alt="dark-mode" width={36} height={36} loading="lazy" />}
                                    </button> */}

                                    <div className="nav-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                        {theme === "light" ? <Image className="dark-mode-icon" src="/images/light-mode-hamburger.svg" alt="dark-mode" width={30} height={30} loading="eager" /> : <Image className="light-mode-icon" src="/images/dark-mode-hamburger.svg" alt="dark-mode" width={30} height={30} loading="lazy" />}
                                    </div>

                                </div>

                                <div
                                    className={`header-mega-menu ${isMenuOpen ? "header-mega-menu-open" : ""
                                        }`}
                                >
                                    <div className="header-pages-link-wrapper">
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

                                    <div className="header-links-wrapper">
                                        <div className="header-mega-links-wrapper">
                                            <div className="header-mega-link-title">
                                                <div className="mega-links-icon">
                                                    <span className="icon-draw"></span>
                                                </div>

                                                <p className="text-18 text-md">UI/UX Design</p>
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

                                                <p className="text-18 text-md">Web & App Development</p>
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

                                                <p className="text-18 text-md">Brand Identity Design</p>
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

                                                <p className="text-18 text-md">Social Media Management</p>
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

                                    <div className="header-website-detail">
                                        <div className="brand-quote">
                                            <span className="h3 text-sb">Elevate Your Brand</span>

                                            <Link href="#" title="Make it RARE" className="hero-link-cta text-md text-20">
                                                Start Your Project <span className="icon-hero-cta-arrow cta-arrow"></span>
                                            </Link>
                                        </div>

                                        <div className="menu-company-add">
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
                                        </div>

                                        <div className="menu-company-contact">
                                            <div className="contact-title">
                                                <p className="text-16 text-md">Contact</p>
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
                                                <p className="text-16 text-md">Follow</p>
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
                    </nav>
                </GlassEffect>
            </header>
        </>
    )
}