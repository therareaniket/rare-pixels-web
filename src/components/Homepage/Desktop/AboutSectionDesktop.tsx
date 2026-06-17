'use client';

import GlassEffect from "@/components/LiquideGlass";
import Image from "next/image";

export default function AboutSectionDesktop() {

    const cols =
        typeof window !== "undefined"
            ? window.innerWidth < 576
                ? 10
                : window.innerWidth < 640
                    ? 10
                    : window.innerWidth < 768
                        ? 10
                        : window.innerWidth < 992
                            ? 30
                            : window.innerWidth < 1024
                                ? 43
                                : window.innerWidth < 1200
                                    ? 51
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
            ? window.innerWidth <= 576
                ? 300
                : window.innerWidth <= 640
                    ? 543
                    : window.innerWidth <= 768
                        ? 80
                        : window.innerWidth <= 840
                            ? 79
                            : window.innerWidth <= 992
                                ? 55
                                : window.innerWidth <= 1024
                                    ? 44
                                    : window.innerWidth <= 1200
                                        ? 30
                                        : window.innerWidth <= 1360
                                            ? 37
                                            : window.innerWidth <= 1440
                                                ? 37
                                                : window.innerWidth <= 1600
                                                    ? 30
                                                    : 33
            : 33;

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
                            <h2 className="text-sb text-white">Where Ideas Turn Into Impact</h2>

                            <p className="text-18 text-rg text-white">At RarePixels, we combine design, development, and strategy to create meaningful digital experiences. Every project we take on is approached with clarity, creativity, and precision ensuring that every detail contributes to a larger vision.</p>
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
                                            <h3 className="h6 text-primary text-white">Design that leads, not follows</h3>

                                            <p className="text-18 text-rg text-white">We craft user experiences that go beyond visuals focusing on clarity, usability, and engagement. Every interface is designed to guide users intuitively while maintaining a strong visual identity.</p>
                                        </div>
                                    </div>
                                </GlassEffect>

                                <GlassEffect className="site-radius-20">
                                    <div className="hm-abt-card">
                                        <span className="hm-abt-pixel"></span>
                                        <div className="hm-abt-card-title">
                                            <h3 className="h6 text-primary text-white">Built to perform beyond visuals</h3>

                                            <p className="text-18 text-rg text-white">We build fast, scalable, and reliable digital platforms that are designed to perform under real-world conditions. Every line of code is written with efficiency and long-term growth in mind.</p>
                                        </div>
                                    </div>
                                </GlassEffect>

                                <GlassEffect className="site-radius-20">
                                    <div className="hm-abt-card">
                                        <span className="hm-abt-pixel"></span>
                                        <div className="hm-abt-card-title">
                                            <h3 className="h6 text-primary text-white">Where code meets creativity</h3>

                                            <p className="text-18 text-rg text-white">We craft user experiences that go beyond visuals focusing on clarity, usability, and engagement. Every interface is designed to guide users intuitively while maintaining a strong visual identity.</p>
                                        </div>
                                    </div>
                                </GlassEffect>

                                <GlassEffect className="site-radius-20">
                                    <div className="hm-abt-card">
                                        <span className="hm-abt-pixel"></span>
                                        <div className="hm-abt-card-title">
                                            <h3 className="h6 text-primary text-white">Brands that truly stand out</h3>

                                            <p className="text-18 text-rg text-white">We build strong brand identities that extend across every touchpoint from visuals to voice to digital presence. Our approach ensures your brand is not only recognizable but also meaningful.</p>
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