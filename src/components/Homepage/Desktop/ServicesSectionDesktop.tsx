'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CDN_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS_CDN;

export default function ServicesSectionDesktop() {
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.services-ui-ux', { y: 500, scale: 1.1, },  { 
                y: 0, 
                scale: 1,
                scrollTrigger: {
                    trigger: '.section-wrapper',
                    start: 'top 70%',
                    end: 'top -10%',
                    scrub: true
                }
            });

            gsap.fromTo('.services-development', { x: 400, y: 500, scale: 1.1, },  { 
                x: 0,
                y: 0, 
                scale: 1,
                scrollTrigger: {
                    trigger: '.section-wrapper',
                    start: 'top 100%',
                    end: 'top -30%',
                    scrub: true
                }
            });

            gsap.fromTo('.services-brand-identity', { x: 600, y: 300, scale: 1.1, },  { 
                x: 0,
                y: 0, 
                scale: 1,
                scrollTrigger: {
                    trigger: '.section-wrapper',
                    start: 'top 110%',
                    end: 'top -40%',
                    scrub: true
                }
            });

            gsap.fromTo('.services-social-media', { x: 700, scale: 1.1, },  { 
                x: 0,
                scale: 1,
                scrollTrigger: {
                    trigger: '.section-wrapper',
                    start: 'top 120%',
                    end: 'top -50%',
                    scrub: true
                }
            });
    }, []);

    return (
        <>
            <section className="services-section">
                <div className="section section-wrapper">
                    <div className="container">
                        <div className="hm-services-title-wrapper">
                            <div className="services-title">
                                <h2 className="text-sb">What Businesses Need. Not Just What We Do.</h2>
                            </div>

                            <div className="services-subtitle">
                                <p className="text-18 text-rg">
                                    <span>Every business is trying to earn attention, build trust, and stay memorable. The tools may differ. The objective never does.</span>
                                    <span>We help brands create experiences, identities, platforms, and conversations that make them easier to choose in a crowded market.</span>
                                </p>
                            </div>
                        </div>

                        <div className="services-card-wrapper">
                            <div className="services-card services-ui-ux site-radius-20 bg-purple-shade">
                                <div className="services-art-board">
                                    <Image src={`${CDN_URL}/images/homepage/services/services-ui-ux.svg`} alt="services ui-ux" width={385} height={285}></Image>
                                </div>
                                <div className="site-radius-20 services-text">
                                    <h3 className="text-sb text-black">CLARITY</h3>

                                    <span className="h6 text-sb text-black">UI/UX Design</span>

                                    <div className="services-detail-text">
                                        <p className="text-rg text-18 text-black">People don&apos;t abandon products. They abandon experiences that feel difficult.</p>

                                        <p className="text-18 text-rg text-black">We design interfaces that simplify decisions, remove friction, and help users move from curiosity to confidence without second-guessing their next step.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="services-card services-development site-radius-20 bg-light-yellow">
                                <div className="services-art-board">
                                    <Image src={`${CDN_URL}/images/homepage/services/services-development.svg`} alt="services development" width={300} height={314}></Image>
                                </div>
                                <div className="site-radius-20 services-text">
                                    <h3 className="text-sb text-black">MOMENTUM</h3>

                                    <span className="h6 text-sb text-black">Web & App Development</span>

                                    <div className="services-detail-text">
                                        <p className="text-rg text-18 text-black">Growth shouldn&apos;t be limited by the technology behind it.</p>

                                        <p className="text-18 text-rg text-black">We build websites and applications that are reliable, scalable, and ready for the opportunities, challenges, and ambitions that come with business growth.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="services-card services-brand-identity site-radius-20 bg-light-pink">
                                <div className="services-art-board">
                                    <Image src={`${CDN_URL}/images/homepage/services/services-brand-identity.svg`} alt="services brand-identity" width={300} height={314}></Image>
                                </div>
                                <div className="site-radius-20 services-text">
                                    <h3 className="text-sb text-black">PERCEPTION</h3>

                                    <span className="h6 text-sb text-black">Brand Identity Design</span>

                                    <div className="services-detail-text">
                                        <p className="text-rg text-18 text-black">People form opinions long before they become customers.</p>

                                        <p className="text-18 text-rg text-black">We create brand identities that communicate credibility, consistency, and confidence from the very first interaction, helping businesses leave a stronger and more lasting impression.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="services-card services-social-media site-radius-20 bg-light-green">
                                <div className="services-art-board">
                                    <Image src={`${CDN_URL}/images/homepage/services/services-social-media.svg`} alt="services social-media" width={300} height={314}></Image>
                                </div>
                                <div className="site-radius-20 services-text">
                                    <h3 className="text-sb text-black">RELEVANCE</h3>

                                    <span className="h6 text-sb text-black">SM Management</span>

                                    <div className="services-detail-text">
                                        <p className="text-rg text-18 text-black">Being visible is easy. Staying relevant takes intention.</p>

                                        <p className="text-18 text-rg text-black">We help brands stay worth remembering with content strategies built around your specific voice, your audience&apos;s behaviour, and the platforms where they actually spend their time.</p>
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