'use client';

const CDN_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS_CDN;

import GlassEffect from "@/components/global/LiquideGlass";
import Image from "next/image";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";

export default function AboutSectionMobile() {

    return (
        <>
            <section className="section section-bg-blue">
                <div className="container">
                    <div className="abt-mobile-section">
                        <div className="abt-mobile-bg">
                            <h2 className="text-sb hm-abt-title text-white">Making Businesses Easier To Notice, Trust, And Remember.</h2>

                            <p className="text-16 text-rg text-white">
                                <span>At RarePixels, we bring together strategy, creativity, and technology to create brands and digital experiences that leave a lasting impact. Everything we build is designed with purpose, shaped by insight, and aligned with business growth. Nothing generic. Nothing without intent.</span>
                                <span>Because being noticed gets you seen. Being remembered gets you chosen.</span>
                            </p>

                            <div className="hm-abt-site-logo">
                                <Image src={`${CDN_URL}/images/homepage/about/rare-logo-white.png`} alt="rare-logo" width={197} height={250}></Image>
                            </div>

                            <div className="hm-abt-cards-wrapper">
                                <GlassEffect className="site-radius-10">
                                    <div className="hm-abt-card-mobile">
                                        <span className="hm-abt-pixel"></span>

                                        <div className="hm-abt-card-text">
                                            <h3 className="text-18 text-sb">Design That Creates Clarity</h3>

                                            <p className="text-16 text-rg text-white">
                                                <span>Great experiences don&apos;t happen by accident.</span>
                                                <span>We believe every interaction should feel natural, every journey should feel effortless, and every decision should help users move forward with confidence.</span>
                                            </p>
                                        </div>
                                    </div>
                                </GlassEffect>

                                <GlassEffect className="site-radius-10">
                                    <div className="hm-abt-card-mobile">
                                        <span className="hm-abt-pixel"></span>

                                        <div className="hm-abt-card-text">
                                            <h3 className="text-18 text-sb">Technology Built Around Growth</h3>

                                            <p className="text-16 text-rg text-white">
                                                <span>Technology should support ambition, not limit it.</span>
                                                <span>From websites to digital products, we build solutions designed to perform reliably today and scale with your business tomorrow.</span>
                                            </p>
                                        </div>
                                    </div>
                                </GlassEffect>

                                <GlassEffect className="site-radius-10">
                                    <div className="hm-abt-card-mobile">
                                        <span className="hm-abt-pixel"></span>

                                        <div className="hm-abt-card-text">
                                            <h3 className="text-18 text-sb">Creativity With Direction</h3>

                                            <p className="text-16 text-rg text-white">
                                                <span>Creativity is powerful when it has a purpose.</span>
                                                <span>Every idea, design, and experience we create is guided by strategy, ensuring it contributes to a larger business objective.</span>
                                            </p>
                                        </div>
                                    </div>
                                </GlassEffect>

                                <GlassEffect className="site-radius-10">
                                    <div className="hm-abt-card-mobile">
                                        <span className="hm-abt-pixel"></span>

                                        <div className="hm-abt-card-text">
                                            <h3 className="text-18 text-sb">Brands People Remember</h3>

                                            <p className="text-16 text-rg text-white">
                                                <span>Recognition is earned through consistency.</span>
                                                <span>We help businesses create meaningful brand experiences that stay relevant, build trust, and leave a lasting impression over time.</span>
                                            </p>
                                        </div>
                                    </div>
                                </GlassEffect>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}