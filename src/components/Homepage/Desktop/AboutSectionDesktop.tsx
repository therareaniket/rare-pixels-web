'use client';

import GlassEffect from "@/components/LiquideGlass";
import Image from "next/image";

export default function AboutSectionDesktop() {
    return (
        <>
            <section className="section section-bg-blue ">
                <div className="container">
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