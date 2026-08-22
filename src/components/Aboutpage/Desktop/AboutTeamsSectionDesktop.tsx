'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";
import Link from "next/link";

export default function AboutTeamsSectionDesktop() {

    return (
        <>
            <section className="section teams-section-desktop" style={{ paddingTop: 0 }}>
                <div className="container-sm">
                    <div className="teams-section-wrapper">
                        <div className="teams-section-left">
                            <h2 className="text-sb teams-section-title">
                                People Behind The Pixels
                            </h2>

                            <Link href="#" title="make it rare" className="site-radius-30 btn-bg-primary hm-teams-link">
                                <span className="text-20 text-md text-white">Life at RPD</span>
                                <Image src="/images/global/homeHeroArrow.svg" alt="arrow-for-navigation" width={24} height={24}></Image>
                            </Link>
                        </div>

                        <div className="teams-section-right">
                            <div className="teams-section-quote-wrapper">
                                <Image className="teams-quote-image" src="/images/aboutpage/teams/teams-section-quote.svg" alt="quote image" width="382" height="572"></Image>
                                <div className="teams-section-quote-text">
                                    <p className="text-18 text-rg text-white">At RarePixels, great work starts with great people. We are a multidisciplinary team of designers, developers, strategists, branding specialists, and creative thinkers who share a passion for building meaningful digital experiences.</p>

                                    <div className="teams-sec-owner-desi">
                                        <h3 className="text-sb h5 text-white">Bina Yogesh</h3>
                                        <p className="text-rg text-18 text-white">Founder, Creative Director</p>
                                    </div>
                                </div>
                            </div>

                            <div className="teams-author-image">
                                <Image src="/images/aboutpage/teams/bina-mam-img.png" alt="Bina Yogesh" width={437} height={541}></Image>
                            </div>
                        </div>

                        <div className="teams-section-tablet">
                            <div className="teams-tablet-author-image">
                                <Image src="/images/aboutpage/teams/bina-mam-img.png" alt="Bina Yogesh" width={437} height={541}></Image>
                            </div>

                            <div className="teams-quote-tab-wrapper">
                                <Image className="teams-quote-image" src="/images/aboutpage/teams/teams-section-quote.svg" alt="quote image" width="382" height="572"></Image>

                                <div className="teams-quote-tab-text">
                                    <p className="text-18 text-rg text-white">At RarePixels, great work starts with great people. We are a multidisciplinary team of designers, developers, strategists, branding specialists, and creative thinkers who share a passion for building meaningful digital experiences.</p>

                                    <div className="teams-sec-owner-desi">
                                        <h3 className="text-sb h5 text-white">Bina Yogesh</h3>
                                        <p className="text-rg text-18 text-white">Founder, Creative Director</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="teams-pixels-top-left teams-pixels">
                            <Image src="/images/aboutpage/teams/teams-left-top-svg.svg" alt="" width={152} height={232}></Image>
                        </div>

                        <div className="teams-pixels-bottom-left teams-pixels">
                            <Image src="/images/aboutpage/teams/teams-left-bottom-svg.svg" alt="" width={186} height={205}></Image>
                        </div>

                        <div className="teams-pixels-top-right teams-pixels">
                            <Image src="/images/aboutpage/teams/teams-right-top-svg.svg" alt="" width={186} height={205}></Image>
                        </div>

                        <div className="teams-pixels-bottom-right teams-pixels">
                            <Image src="/images/aboutpage/teams/teams-right-bottom-svg.svg" alt="" width={309} height={296}></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}