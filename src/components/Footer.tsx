'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <section className="section section-bg-blue">
                <div className="container">
                    <div className="footer-quote-wrapper">
                        <div className="footer-quote-right">
                            <span className="text-md text-white h6">Unveiling Brilliance</span>

                            <h2 className="text-sb footer-quote-title text-white">Elevate Your Brand!</h2>

                            <p className="text-18 text-rg text-light-grey">Whether you&apos;re launching a new brand, designing a digital product, or scaling an existing business, we&apos;d love to hear your vision. Tell us about your project, and we&apos;ll help transform ideas into impactful digital experiences.</p>

                            <Link href="#" title="make it rare" className="link-padding site-radius-30 btn-bg-primary hm-hero-redirect-link">
                                <span className="text-20 text-md text-white">Start Your Project </span>
                                <Image src="/images/homepage/homeHeroArrow.svg" alt="arrow-for-navigation" width={24} height={24}></Image>
                            </Link>
                        </div>

                        <div className="footer-social-wrapper">
                            <div className="footer-social-row-1 footer-social-row">
                                <div className="social-icon text-light-grey">
                                    <span className="icon-linkedin"></span>
                                    <p className="text-upper-case text-18 text-rg">LinkedIn</p>
                                </div>

                                <div className="social-icon text-light-grey">
                                    <span className="icon-instagram"></span>
                                    <p className="text-upper-case text-18 text-rg">Instagram</p>
                                </div>

                                <div className="social-icon text-light-grey">
                                    <span className="icon-threads"></span>
                                    <p className="text-upper-case text-18 text-rg">Threads</p>
                                </div>
                            </div>

                            <div className="footer-social-row-2 footer-social-row">
                                <div className="social-icon text-light-grey">
                                    <span className="icon-facebook"></span>
                                    <p className="text-upper-case text-18 text-rg">Facebook</p>
                                </div>

                                <div className="social-icon text-light-grey">
                                    <span className="icon-twitter"></span>
                                    <p className="text-upper-case text-18 text-rg">Twitter</p>
                                </div>

                                <div className="social-icon text-light-grey">
                                    <span className="icon-youtube"></span>
                                    <p className="text-upper-case text-18 text-rg">Youtube</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-detail-wrapper">
                        <div className="footer-links-wrapper">
                            <div className="footer-title">
                                <p className="text-18 text-md text-white">Quick Links & Services</p>
                            </div>

                            <div className="footer-links">
                                <div className="footer-link-col">
                                    <ul>
                                        <li className="text-18 text-rg text-light-grey"> <Link href="#" title="home">Home</Link> </li>
                                        <li className="text-18 text-rg text-light-grey"> <Link href="#" title="about">About</Link> </li>
                                        <li className="text-18 text-rg text-light-grey"> <Link href="#" title="industries">Industries</Link> </li>
                                        <li className="text-18 text-rg text-light-grey"> <Link href="#" title="projects">Projects</Link> </li>
                                    </ul>
                                </div>

                                <div className="footer-link-col">
                                    <ul>
                                        <li className="text-18 text-rg text-light-grey"> <Link href="#" title="process">Process</Link> </li>
                                        <li className="text-18 text-rg text-light-grey"> <Link href="#" title="life at rpd">Life at RPD</Link> </li>
                                        <li className="text-18 text-rg text-light-grey"> <Link href="#" title="articles">Articles</Link> </li>
                                        <li className="text-18 text-rg text-light-grey"> <Link href="#" title="contact">Contact</Link> </li>
                                    </ul>
                                </div>

                                <div className="footer-link-col">
                                    <ul>
                                        <li className="text-18 text-rg text-light-grey"> <Link href="#" title="ui/ux">UI/UX Design</Link> </li>
                                        <li className="text-18 text-rg text-light-grey"> <Link href="#" title="web dev">Web & App Development</Link> </li>
                                        <li className="text-18 text-rg text-light-grey"> <Link href="#" title="brand identity">Brand Identity Design</Link> </li>
                                        <li className="text-18 text-rg text-light-grey"> <Link href="#" title="social media">Social Media Management</Link> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="footer-vr-line"></div>

                        <div className="footer-company-detail">
                            <div className="footer-title">
                                <p className="text-18 text-md text-white">Location & Contact</p>
                            </div>

                            <div className="footer-contact">
                                <div className="footer-address-wrapper">
                                    <div className="footer-add-country">
                                        <div className="footer-india">
                                            <p className="text-16 text-sb text-light-grey"> India </p>
                                        </div>

                                        <div className="footer-usa">
                                            <p className="text-16 text-sb text-light-grey"> USA </p>
                                        </div>
                                    </div>

                                    <div className="footer-address">
                                        <div className="footer-address-india">
                                            <p className="text-16 text-rg text-light-grey">
                                                The Prime
                                                1109-10, Near Vakil Saheb Bridge, Ambli T Junction, Ahmedabad, Gujarat 380058.
                                            </p>
                                        </div>

                                        <div className="footer-address-usa">
                                            <p className="text-16 text-rg text-light-grey">
                                                The Prime
                                                1109-10, Near Vakil Saheb Bridge, Ambli T Junction, Ahmedabad, Gujarat 380058.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}