'use client';

import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import Image from "next/image";
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CDN_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS_CDN;

export default function ServicesSectionMobile() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.services-ui-ux', { y: 600, scale: 1.5, rotate: 20 },  { 
            y: 0,
            scale: 1,
            rotate: 0,
            scrollTrigger: {
                trigger: '.services-mobile',
                start: 'top 70%',
                end: 'top 20%',
                scrub: true
            }
        });

        gsap.fromTo('.services-development', { y: 600, scale: 1.5, rotate: -30 },  { 
            y: 0,
            scale: 1,
            rotate: 0,
            scrollTrigger: {
                trigger: '.services-mobile',
                start: 'top 50%',
                end: 'top top',
                scrub: true
            }
        });

        gsap.fromTo('.services-brand-identity', { y: 600, scale: 1.5, rotate: 30 },  { 
            y: 0,
            scale: 1,
            rotate: 0,
            scrollTrigger: {
                trigger: '.services-mobile',
                start: 'top 20%',
                end: 'top -40%',
                scrub: true
            }
        });

        gsap.fromTo('.services-social-media', { y: 600, scale: 1.5, rotate: -40 },  { 
            y: 0,
            scale: 1,
            rotate: 0,
            scrollTrigger: {
                trigger: '.services-mobile',
                start: 'top top',
                end: 'top -60%',
                scrub: true
            }
        });
    }, []);

    return (
        <>
            <section className="section services-mobile" style={{ paddingBottom: 0, overflow: "hidden" }}>
                <div className="container">
                    <div className="services-mobile-title">
                        <h2 className="text-sb">What Businesses Need. Not Just What We Do.</h2>

                        <p className="text-rg text-16"> Every business is trying to earn attention, build trust, and stay memorable. The tools may differ. The objective never does. We help brands create experiences, identities, platforms, and conversations that make them easier to choose in a crowded market.
                        </p>
                    </div>

                    <div className="services-mobile-card-wrapper">
                        <div className="services-mobile-card services-ui-ux site-radius-10 bg-purple-shade">
                            <div className="services-art-board">
                                <Image src={`${CDN_URL}/images/homepage/services/services-ui-ux.svg`} alt="services ui-ux" width={385} height={285}></Image>
                            </div>

                            <div className="services-mobile-text-wrapper site-radius-10">
                                <h3 className="h5 text-black text-sb">CLARITY</h3>

                                <p className="text-18 text-sb text-black">UI/UX Design</p>

                                <p className="text-16 services-detail-text">
                                    <span className="text-rg text-black">People don&apos;t abandon products. They abandon experiences that feel difficult.</span>

                                    <span className="text-rg text-black">We design interfaces that simplify decisions, remove friction, and help users move from curiosity to confidence without second-guessing their next step.</span>
                                </p>
                            </div>
                        </div>

                        <div className="services-mobile-card services-development site-radius-10 bg-light-yellow">
                            <div className="services-art-board">
                                <Image src={`${CDN_URL}/images/homepage/services/services-development.svg`} alt="services development" width={385} height={285}></Image>
                            </div>

                            <div className="services-mobile-text-wrapper site-radius-10">
                                <h3 className="h5 text-black text-sb">MOMENTUM</h3>

                                <p className="text-18 text-sb text-black">Web & App Development</p>

                                <p className="text-16 services-detail-text">
                                    <span className="text-rg text-black">Growth shouldn&apos;t be limited by the technology behind it.</span>

                                    <span className="text-rg text-black">We build websites and applications that are reliable, scalable, and ready for the opportunities, challenges, and ambitions that come with business growth.</span>
                                </p>
                            </div>
                        </div>

                        <div className="services-mobile-card services-brand-identity site-radius-10 bg-light-pink">
                            <div className="services-art-board">
                                <Image src={`${CDN_URL}/images/homepage/services/services-brand-identity.svg`} alt="services brand identity" width={385} height={285}></Image>
                            </div>

                            <div className="services-mobile-text-wrapper site-radius-10">
                                <h3 className="h5 text-black text-sb">PERCEPTION</h3>

                                <p className="text-18 text-sb text-black">Brand Identity Design</p>

                                <p className="text-16 services-detail-text">
                                    <span className="text-rg text-black">People form opinions long before they become customers.</span>

                                    <span className="text-rg text-black"> We create brand identities that communicate credibility, consistency, and confidence from the very first interaction, helping businesses leave a stronger and more lasting impression. </span>
                                </p>
                            </div>
                        </div>

                        <div className="services-mobile-card services-social-media site-radius-10 bg-light-green">
                            <div className="services-art-board">
                                <Image src={`${CDN_URL}/images/homepage/services/services-social-media.svg`} alt="services social media" width={385} height={285}></Image>

                            </div>

                            <div className="services-mobile-text-wrapper site-radius-10">
                                <h3 className="h5 text-black text-sb">RELEVANCE</h3>

                                <p className="text-18 text-sb text-black">Social Media Management</p>

                                <p className="text-16 services-detail-text">
                                    <span className="text-rg text-black"> Being visible is easy. Staying relevant takes intention. </span>

                                    <span className="text-rg text-black">We create content and strategies that keep brands present, recognizable, and connected to the audiences that matter most over time.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
