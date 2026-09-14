"use client"

import Image from "next/image";
import Link from "next/link";

export default function AboutTeamDesktop() {
    return (
        <>
            <section className="section team-section-final" style={{ paddingTop: 0 }}>
                <div className="container-sm">
                    <div className="team-section-wrapper">

                        <div className="team-sec-content">
                            <div className="team-heading">
                                <h2 className="h1 text-sb text-80">People Behind The Pixels</h2>

                                <Link href="#" title="Life at RPD" className="link-padding site-radius-30 btn-bg-primary hm-hero-redirect-link inquiry-form-link website-btn">
                                    <span className="text-20 text-md text-white">Life At RPD</span>
                                    <Image src="/images/global/homeHeroArrow.svg" alt="arrow-for-navigation" width={24} height={24}></Image>
                                </Link>
                            </div>

                            <div className="team-addesing">
                                <div className="team-details">
                                    <div className="founder-msg">
                                        <p className="text-18 text-rg">At RarePixels, great work starts with great people. We are a multidisciplinary team of designers, developers, strategists, branding specialists, and creative thinkers who share a passion for building meaningful digital experiences.</p>

                                        <span className="foundr-msg-hr"></span>

                                        <div className="teams-designation-block">
                                            <p className="h5 text-sb">Bina Yogesh</p>

                                            <span className="text-18 team-designation">Founder, Creative Director</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="founder-img">
                                    <Image src="/images/aboutpage/teams/updated-team-image.png" alt="founder image" width={417} height={516} />
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