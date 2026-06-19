'use client';

import GlassEffect from "@/components/LiquideGlass";
import Image from "next/image";

export default function AboutSectionMobile() {

    const cols =
        typeof window !== "undefined"
            ? window.innerWidth < 401
                ? 31
                : window.innerWidth < 479
                    ? 37
                    : 37
            : 37;

    const rows =
        typeof window !== "undefined"
            ? window.innerWidth <= 401
                ? 100
                : window.innerWidth <= 479
                    ? 100
                    : 100
            : 100;

    // const cols = 37;
    // const rows = 100;

    return (
        <>
            <section className="section section-bg-blue">
                <div className="container">
                    <div className="abt-mobile-section">
                        {/* <div className="abt-section-wrapper">
                            <div className="abt-grid-wrapper">
                                {Array.from({ length: cols * rows }).map((_, index) => (
                                    <div key={index} className="abt-background-grid"></div>
                                ))}
                            </div>
                        </div> */}
                        <div className="abt-mobile-bg">
                            <h2 className="text-sb hm-abt-title text-white">Where Ideas Turn Into Impact</h2>

                            <p className="text-14 text-rg text-white">At RarePixels, we combine design, development, and strategy to create meaningful digital experiences. Every project we take on is approached with clarity, creativity, and precision ensuring that every detail contributes to a larger vision.</p>

                            <div className="hm-abt-site-logo">
                                <Image src="/images/homepage/rare-logo-white.png" alt="rare-logo" width={197} height={250}></Image>
                            </div>

                            <div className="hm-abt-cards-wrapper">
                                <GlassEffect className="site-radius-10">
                                    <div className="hm-abt-card-mobile">
                                        <span className="hm-abt-pixel"></span>

                                        <div className="hm-abt-card-text">
                                            <h3 className="text-18 text-md">Design that leads, not follows</h3>

                                            <p className="text-14 text-rg text-white">We craft user experiences that go beyond visuals focusing on clarity, usability, and engagement. Every interface is designed to guide users intuitively while maintaining a strong visual identity.</p>
                                        </div>
                                    </div>
                                </GlassEffect>

                                <GlassEffect className="site-radius-10">
                                    <div className="hm-abt-card-mobile">
                                        <span className="hm-abt-pixel"></span>

                                        <div className="hm-abt-card-text">
                                            <h3 className="text-18 text-md">Built to perform beyond visuals</h3>

                                            <p className="text-14 text-rg text-white">We build fast, scalable, and reliable digital platforms that are designed to perform under real-world conditions. Every line of code is written with efficiency and long-term growth in mind.</p>
                                        </div>
                                    </div>
                                </GlassEffect>

                                <GlassEffect className="site-radius-10">
                                    <div className="hm-abt-card-mobile">
                                        <span className="hm-abt-pixel"></span>

                                        <div className="hm-abt-card-text">
                                            <h3 className="text-18 text-md">Where code meets creativity</h3>

                                            <p className="text-14 text-rg text-white">We build fast, scalable, and reliable digital platforms that are designed to perform under real-world conditions. Every line of code is written with efficiency, flexibility, and long-term growth in mind.</p>
                                        </div>
                                    </div>
                                </GlassEffect>  

                                <GlassEffect className="site-radius-10">
                                    <div className="hm-abt-card-mobile">
                                        <span className="hm-abt-pixel"></span>

                                        <div className="hm-abt-card-text">
                                            <h3 className="text-18 text-md">Brands that truly stand out</h3>

                                            <p className="text-14 text-rg text-white">We build strong brand identities that extend across every touchpoint from visuals to voice to digital presence. Our approach ensures your brand is not only recognizable but also meaningful.</p>
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