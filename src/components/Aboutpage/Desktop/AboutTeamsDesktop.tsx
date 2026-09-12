"use client"

import Image from "next/image";
import Link from "next/link";

export default function AboutTeamDesktop() {
    return (
        <>
            <section className="section">
                <div className="container-sm">
                    <div className="team-section-wrapper">

                        <div className="team-sec-content">
                            <div className="team-heading">
                                <h2 className="h1 text-sb">People Behind The Pixels</h2>

                                <Link href="#" title="Life at RPD" className="link-padding site-radius-30 btn-bg-primary hm-hero-redirect-link inquiry-form-link website-btn">
                                    <span className="text-20 text-md text-white">Life At RPD</span>
                                    <Image src="/images/global/homeHeroArrow.svg" alt="arrow-for-navigation" width={24} height={24}></Image>
                                </Link>
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