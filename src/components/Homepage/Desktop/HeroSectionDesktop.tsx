'use client';

import "@/assets/css/desktop-custom.css";
import Image from "next/image";
import Link from "next/link";

export default function HeroSectionDesktop() {
    return (
        <>
            <section className="section hm-hero-main">
                <div className="container">
                    <div className="home-hero-wrapper-desktop">
                        <div className="hm-hero-row-1-wrapper">
                            <div className="hm-hero-text-left">
                                <h1 className="text-md hm-hero-title">
                                    Seen.
                                    Remembered.
                                    Chosen.
                                </h1>
                                <p className="text-18 text-rg hm-hero-subtitle">Most brands compete for attention. The memorable ones earn it. At RarePixels, we blend strategy, creativity, and technology to create digital experiences that people notice, trust, and return to.</p>

                                <Link href="/" title="make it rare" className="link-padding site-radius-30 btn-bg-primary hm-hero-redirect-link">
                                    <span className="text-20 text-white">Make It Rare</span>
                                    <Image src="/images/homepage/homeHeroArrow.svg" alt="arrow-for-navigation" width={24} height={24}></Image>
                                </Link>
                            </div>

                            <div className="home-hero-services-highlight-wrapper">
                                <div className="hm-services-left">
                                    <Image className="home-hero-service-eye" src="/images/homepage/eye-img-2.png" draggable={false} alt="home-eye-image" width={665} height={530}></Image>
                                </div>
                                <div className="hm-services-right">
                                    <div className="hm-services-content-wrapper active">
                                        <div className="hm-services-title">
                                            <Image src="/images/homepage/home-hero-services-eye.png" alt="services-eye" width={22} height={34}></Image>
                                            <span className="text-md h6">UI/UX Design Services</span>
                                            {/* <Image src="/images/homepage/home-hero-services-brain.png" alt="services-eye" width={22} height={34}></Image>
                                            <Image src="/images/homepage/home-hero-services-heart.png" alt="services-eye" width={22} height={34}></Image>
                                            <Image src="/images/homepage/home-hero-services-handshake.png" alt="services-eye" width={22} height={34}></Image> */}
                                        </div>
                                        <div className="hm-services-subtitle">
                                            <p className="text-18 text-rg">Experiences users remember and businesses benefit from</p>
                                        </div>
                                    </div>

                                    <div className="hm-services-content-wrapper">
                                        <div className="hm-services-title">
                                            <Image src="/images/homepage/home-hero-services-brain.png" alt="services-eye" width={22} height={34}></Image>
                                            <span className="text-md h6">Custom Web & App Development</span>
                                        </div>
                                        {/* <div className="hm-services-subtitle">
                                            <p className="text-18 text-rg">Built to perform today and scale tomorrow</p>
                                        </div> */}
                                    </div>

                                    <div className="hm-services-content-wrapper">
                                        <div className="hm-services-title">
                                            <Image src="/images/homepage/home-hero-services-heart.png" alt="services-eye" width={22} height={34}></Image>
                                            <span className="text-md h6">Brand Identity Design</span>
                                        </div>
                                        {/* <div className="hm-services-subtitle">
                                            <p className="text-18 text-rg">Distinct identities with lasting impact</p>
                                        </div> */}
                                    </div>

                                    <div className="hm-services-content-wrapper">
                                        <div className="hm-services-title">
                                            <Image src="/images/homepage/home-hero-services-handshake.png" alt="services-eye" width={22} height={34}></Image>
                                            <span className="text-md h6">Social Media Management Services</span>
                                        </div>
                                        {/* <div className="hm-services-subtitle">
                                            <p className="text-18 text-rg">Keeping your brand relevant, visible, and valued</p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hm-hero-row-2-wrapper">
                            <div className="hm-hero-stats-wrapper">
                                <div className="hm-hero-stats">
                                    <h2 className="text-md text-primary">100+</h2>
                                    <p className="text-18 text-rg">Brands Empowered</p>
                                </div>
                                <div className="hm-hero-stats">
                                    <h2 className="text-md text-primary">120K+</h2>
                                    <p className="text-18 text-rg">Lines of Code Crafted</p>
                                </div>
                                <div className="hm-hero-stats">
                                    <h2 className="text-md text-primary">250+</h2>
                                    <p className="text-18 text-rg">Creative Campaigns</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}