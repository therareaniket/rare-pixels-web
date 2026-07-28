'use client';

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";

export default function TeamsSectionMobile() {

    const { theme, toggleTheme } = useTheme();
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="teams-mobile-title">
                        <h2 className="text-sb">People Behind The Pixels</h2>

                        <Link href="#" title="Make it RARE" className="hero-link-cta text-md">
                            Life at RPD <span className="icon-hero-cta-arrow cta-arrow"></span>
                        </Link>

                        <div className="teams-mob-pixesl-top-left">
                            {theme === "light" ? <Image src="/images/homepage/teams-left-top-svg.svg" alt="" width={74} height={130}></Image> : <Image src="/images/homepage/teams-left-top-dark-svg.svg" alt="" width={152} height={232}></Image>}
                        </div>  

                        <div className="teams-mob-pixesl-top-right">                            
                            {theme === "light" ? <Image src="/images/homepage/teams-right-top-svg.svg" alt="" width={90} height={100}></Image> : <Image src="/images/homepage/teams-right-top-dark-svg.svg" alt="" width={186} height={205}></Image>}
                        </div>

                    </div>

                    <div className="teams-mobile-wrapper">
                        <Image className="teams-mobile-author" src="/images/homepage/bina-mam-img.png" alt="author image" width={424} height={525}></Image>

                        <div className="mobile-quote-wrapper">
                            <Image className="mobile-quote" src="/images/homepage/teams-section-mob-background-quote.svg" alt="background-quote" width={384} height={534}></Image>

                            <div className="mobile-quote-text">
                                <p className="text-16 text-rg text-white">
                                    At RarePixels, great work starts with great people. We are a multidisciplinary team of designers, developers, strategists, branding specialists, and creative thinkers who share a passion for building meaningful digital experiences.
                                </p>

                                <div className="mobile-autor-desi">
                                    <h3 className="h4 text-sb text-white">Bina Yogesh</h3>
                                    <p className="text-rg text-16 text-white">Founder, Creative Director</p>
                                </div>
                            </div>
                        </div>

                        <div className="teams-mob-pixesl-bottom-left">
                            {theme === "light" ? <Image src="/images/homepage/teams-left-bottom-svg.svg" alt="teams pixel" width={90} height={100}></Image> : <Image src="/images/homepage/teams-left-bottom-dark-svg.svg" alt="teams pixel" width={90} height={100}></Image>}
                        </div>

                        <div className="teams-mob-pixesl-bottom-right">
                            {theme === "light" ? <Image src="/images/homepage/teams-right-bottom-svg.svg" alt="teams pixel" width={169} height={148}></Image> : <Image src="/images/homepage/teams-right-bottom-dark-svg.svg" alt="teams pixel" width={169} height={148}></Image>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}