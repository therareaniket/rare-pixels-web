'use client';

import GlassEffect from "@/components/LiquideGlass";
import Image from "next/image";

export default function AboutSectionDesktop() {

    const cols =
        typeof window !== "undefined"
            ? window.innerWidth < 481
                ? 10
                : window.innerWidth < 576
                    ? 10
                    : window.innerWidth < 640
                        ? 10
                        : window.innerWidth < 768
                            ? 10
                            : window.innerWidth < 992
                                ? 30
                                : window.innerWidth < 1024
                                    ? 40
                                    : window.innerWidth < 1200
                                        ? 53
                                        : window.innerWidth < 1360
                                            ? 55
                                            : window.innerWidth < 1440
                                                ? 55
                                                : window.innerWidth < 1600
                                                    ? 65
                                                    : 76
            : 76;

    const rows =
        typeof window !== "undefined"
            ? window.innerWidth <= 481
                ? 396
                : window.innerWidth <= 576
                    ? 542
                    : window.innerWidth <= 640
                        ? 585
                        : window.innerWidth <= 768
                            ? 83
                            : window.innerWidth <= 840
                                ? 88
                                : window.innerWidth <= 992
                                    ? 71
                                    : window.innerWidth <= 1024
                                        ? 59
                                        : window.innerWidth <= 1200
                                            ? 39
                                            : window.innerWidth <= 1360
                                                ? 40
                                                : window.innerWidth <= 1440
                                                    ? 34
                                                    : window.innerWidth <= 1600
                                                        ? 35
                                                        : 40
                    : 40;

    // const cols = 76;
    // const rows = 33;

    return (
        <>
            <section className="section section-bg-blue ">
                <div className="container">
                    <div className="abt-section-wrapper">
                        <div className="abt-grid-wrapper">
                            {Array.from({ length: cols * rows }).map((_, index) => (
                                <div key={index} className="abt-background-grid"></div>
                            ))}
                        </div>
                    </div>

                    <div className="hm-about-main">
                        <div className="hm-abt-text-wrapper">
                            <h2 className="text-sb text-white">Making Businesses Easier To Notice, Trust, And Remember.</h2>

                            <p className="text-18 text-rg text-white">
                                <span>At RarePixels, we bring together strategy, creativity, and technology to create brands and digital experiences that leave a lasting impact. Everything we build is designed with purpose, shaped by insight, and aligned with business growth. Nothing generic. Nothing without intent.</span>
                                <span>Because being noticed gets you seen. Being remembered gets you chosen.</span>
                            </p>
                        </div>

                        <div className="hm-abt-card-wrapper">
                            <div className="hm-abt-logo-left">
                                <Image src="/images/homepage/rare-logo-white.png" alt="rare-logo" width={276} height={350}></Image>
                            </div>

                            <div className="hm-abt-pointers-right">
                                <GlassEffect className="site-radius-20">
                                    <div className="hm-abt-card">
                                        <span className="hm-abt-pixel"></span>
                                        <div className="hm-abt-card-title">
                                            <h3 className="h6 text-primary text-sb">Design That Creates Clarity</h3>

                                            <p className="text-18 text-white">
                                                <span>Great experiences don&apos;t happen by accident.</span>
                                                <span>We believe every interaction should feel natural, every journey should feel effortless, and every decision should help users move forward with confidence.</span>
                                            </p>
                                        </div>
                                    </div>
                                </GlassEffect>

                                <GlassEffect className="site-radius-20">
                                    <div className="hm-abt-card">
                                        <span className="hm-abt-pixel"></span>
                                        <div className="hm-abt-card-title">
                                            <h3 className="h6 text-primary text-sb">Technology Built Around Growth</h3>

                                            <p className="text-18 text-white">
                                                <span>Technology should support ambition, not limit it.</span>
                                                <span>From websites to digital products, we build solutions designed to perform reliably today and scale with your business tomorrow.</span>
                                            </p>
                                        </div>
                                    </div>
                                </GlassEffect>

                                <GlassEffect className="site-radius-20">
                                    <div className="hm-abt-card">
                                        <span className="hm-abt-pixel"></span>
                                        <div className="hm-abt-card-title">
                                            <h3 className="h6 text-primary text-sb">Creativity With Direction</h3>

                                            <p className="text-18 text-white">
                                                <span>Creativity is powerful when it has a purpose.</span>
                                                <span>Every idea, design, and experience we create is guided by strategy, ensuring it contributes to a larger business objective.</span>
                                            </p>
                                        </div>
                                    </div>
                                </GlassEffect>

                                <GlassEffect className="site-radius-20">
                                    <div className="hm-abt-card">
                                        <span className="hm-abt-pixel"></span>
                                        <div className="hm-abt-card-title">
                                            <h3 className="h6 text-primary text-sb">Brands People Remember</h3>

                                            <p className="text-18 text-white">
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