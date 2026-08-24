'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";

export default function AboutRpdSectionDesktop() {
    return (
        <>
            <section className="section bg-black abt-rpd-section-desktop">
                <div className="container-sm">
                    <div className="about-rpd-desktop-content-wrapper">
                        <div className="abt-rpd-card abt-rpd-card-1">
                            <Image className="rare-logo" src="/images/aboutpage/about-rpd/rare.svg" alt="rare" width={247} height={100}></Image>

                            <div className="abt-card-text">
                                <h2 className="text-sb h5 text-white">Results Before Recognition</h2>

                                <p className="text-rg text-18 text-white">We are not chasing awards or industry validation. We are chasing outcomes. Every project is measured by what it achieves for the business not how it looks in a portfolio.</p>
                            </div>
                        </div>

                        <div className="abt-rpd-card abt-rpd-card-2">
                            <Image className="pixels-logo" src="/images/aboutpage/about-rpd/pixels.svg" alt="rare" width={281} height={100}></Image>

                            <div className="abt-card-text">
                                <h2 className="text-sb h5 text-white">Precision in Every Detail</h2>

                                <p className="text-rg text-18 text-white">We are not chasing awards or industry validation. We are chasing outcomes. Every project is measured by what it achieves for the business not how it looks in a portfolio.</p>
                            </div>
                        </div>

                        <div className="abt-rpd-card abt-rpd-card-3">
                            <Image className="design-logo" src="/images/aboutpage/about-rpd/design.svg" alt="rare" width={347} height={100}></Image>

                            <div className="abt-card-text">
                                <h2 className="text-sb h5 text-white">Direction Before Decoration</h2>

                                <p className="text-rg text-18 text-white">We are not chasing awards or industry validation. We are chasing outcomes. Every project is measured by what it achieves for the business not how it looks in a portfolio.</p>
                            </div>
                        </div>
                    </div>

                    <Image className="rpd-pixel-left" src="/images/aboutpage/about-rpd/rpd-left-pixel.svg" alt="pixel" width={167} height={211}></Image>
                    <Image className="rpd-pixel-right" src="/images/aboutpage/about-rpd/rpd-right-pixel.svg" alt="pixel" width={167} height={211}></Image>
                </div>
            </section>
            <div className="abt-strip-animation">
                <div className="abt-rpd-strip">
                    <p className="h2 text-sb">Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * </p>
                </div>
            </div>
        </>
    );
}