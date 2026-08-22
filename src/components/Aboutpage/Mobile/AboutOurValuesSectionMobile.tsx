'use client';

import Image from "next/image";

import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";

export default function AboutOurValuesSectionMobile() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <h2 className="text-sb">Our Values</h2>

                    <p className="text-rg text-16">A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one. A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one.</p>

                    <Image className="our-values-image" src="/images/aboutpage/abt-our-values/our-values.png" alt="our-values" width={692} height={458}></Image>

                    <div className="abt-our-values-left">
                        <div className="abt-our-values-pointer-mobile">
                            <div className="abt-our-values-pointer-left">
                                <span>
                                    <Image src="/images/aboutpage/abt-our-values/creative.svg" alt="our-values" width={24} height={24}></Image>
                                </span>
                            </div>
                            <div className="abt-our-values-pointer-right">
                                <h3 className="text-sb h5">Creative Excellence</h3>

                                <p className="text-16 text-rg">Delivering thoughtful, refined work that balances creativity, functionality, and impact.</p>
                            </div>
                        </div>

                        <div className="abt-our-values-hr"></div>

                        <div className="abt-our-values-pointer-mobile">
                            <div className="abt-our-values-pointer-left">
                                <span>
                                    <Image src="/images/aboutpage/abt-our-values/strategic.svg" alt="our-values" width={24} height={24}></Image>
                                </span>
                            </div>
                            <div className="abt-our-values-pointer-right">
                                <h3 className="text-sb h5">Strategic Thinking</h3>

                                <p className="text-16 text-rg">Approaching every challenge with clarity, insight, and a long term perspective.</p>
                            </div>
                        </div>

                        <div className="abt-our-values-hr"></div>

                        <div className="abt-our-values-pointer-mobile">
                            <div className="abt-our-values-pointer-left">
                                <span>
                                    <Image src="/images/aboutpage/abt-our-values/communications.svg" alt="our-values" width={24} height={24}></Image>
                                </span>
                            </div>
                            <div className="abt-our-values-pointer-right">
                                <h3 className="text-sb h5">Open Communication</h3>

                                <p className="text-16 text-rg">Building trust through transparency, collaboration, and meaningful conversations.</p>
                            </div>
                        </div>

                        <div className="abt-our-values-hr"></div>

                        <div className="abt-our-values-pointer-mobile">
                            <div className="abt-our-values-pointer-left">
                                <span>
                                    <Image src="/images/aboutpage/abt-our-values/ownership.svg" alt="our-values" width={24} height={24}></Image>
                                </span>
                            </div>
                            <div className="abt-our-values-pointer-right">
                                <h3 className="text-sb h5">Shared Ownership</h3>

                                <p className="text-16 text-rg">Taking collective responsibility for every decision, detail, and outcome.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}