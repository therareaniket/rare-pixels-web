'use client';

import Image from "next/image";
import Link from "next/link";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";

export default function AboutTeamsSectionMobile() {

    return (
        <>
            <section className="section" style={{ paddingTop: '25px' }}>
                <div className="container">
                    <div className="teams-mobile-title">
                        <h2 className="text-sb text-30">People Behind The Pixels</h2>

                    <Link href="#" title="make it rare" className="link-padding site-radius-30 btn-bg-primary hm-hero-redirect-link inquiry-form-link website-btn">
                        <span className="text-20 text-md text-white">Life at RPD </span>
                        <Image src="/images/global/homeHeroArrow.svg" alt="arrow-for-navigation" width={24} height={24}></Image>
                    </Link>

                        <div className="teams-mob-pixesl-top-left">
                            <Image src="/images/aboutpage/teams/teams-left-top-svg.svg" alt="" width={74} height={130}></Image>
                        </div>  

                        <div className="teams-mob-pixesl-top-right">                            
                            <Image src="/images/aboutpage/teams/teams-right-top-svg.svg" alt="" width={90} height={100}></Image>
                        </div>

                    </div>

                    <div className="teams-mobile-wrapper">
                        <Image className="teams-mobile-author" src="/images/aboutpage/teams/bina-mam-img.png" alt="author image" width={424} height={525}></Image>

                        <div className="mobile-quote-wrapper">
                            <Image className="mobile-quote" src="/images/aboutpage/teams/teams-section-mob-background-quote.svg" alt="background-quote" width={384} height={534}></Image>

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
                           <Image src="/images/aboutpage/teams/teams-left-bottom-svg.svg" alt="teams pixel" width={90} height={100}></Image>
                        </div>

                        <div className="teams-mob-pixesl-bottom-right">
                            <Image src="/images/aboutpage/teams/teams-right-bottom-svg.svg" alt="teams pixel" width={169} height={148}></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}