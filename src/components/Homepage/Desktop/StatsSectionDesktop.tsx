'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";

const CDN_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS_CDN;

export const description = "A radar chart with dots"

export default function StatsSectionDesktop() {

    return (
        <>
            <section className="section section-bg-blue hm-stats-section">
                <div className="container">
                    <div className="stats-wrapper stats-wrapper-for-desktop">
                        <div className="stats-card-row-1">
                            <div className="stats-card-1 stats-card">
                                <h2 className="text-sb text-white">Impact</h2>

                                <p className="text-18 text-rg text-white">Behind every number is a promise we&apos;ve kept.
                                    From long-term partnerships to measurable outcomes, these milestones reflect the trust we&apos;ve earned and the impact we&apos;ve created.
                                </p>
                            </div>

                            <div className="stats-card-2 stats-card">
                                <h3 className="h1 text-sb text-white">27+</h3>
                                <p className="text-upper-case text-light-grey text-18 text-sb stats-specification">Specialised Solutions Crafted</p>

                                <div className="stats-element-art-board">
                                    <Image src={`${CDN_URL}/images/homepage/stats/specialized-solution-crafted.svg`} alt="specialized-solution-crafted" width={200} height={200}></Image>
                                </div>

                                <p className="text-18 text-rg text-light-grey">Every solution is purpose-built.
                                    Never recycled. Always intentional.
                                </p>
                            </div>

                            <div className="stats-card-3 stats-card">
                                <h3 className="h1 text-sb text-white">8+</h3>
                                <p className="text-upper-case text-light-grey text-18 text-sb stats-specification">Industries Transformed Globally</p>

                                <div className="stats-element-art-board">
                                    <Image src={`${CDN_URL}/images/homepage/stats/industries-transformed-globally.svg`} alt="specialized-solution-crafted" width={215} height={200}></Image>
                                </div>

                                <p className="text-18 text-rg text-light-grey">From startups to enterprises.
                                    Solutions shaped for every sector.
                                </p>
                            </div>

                            <div className="stats-card-4 stats-card">
                                <h3 className="h1 text-sb text-white">98%</h3>
                                <p className="text-upper-case text-light-grey text-18 text-sb stats-specification">Client Trust Retained</p>

                                <div className="stats-element-art-board">
                                    <Image src={`${CDN_URL}/images/homepage/stats/client-trust-retained.svg`} alt="specialized-solution-crafted" width={271} height={172}></Image>
                                </div>

                                <p className="text-18 text-rg text-light-grey">Relationships built on results.
                                    Trust earned through consistency.</p>
                            </div>
                        </div>

                        <div className="stats-card-row-2">
                            <div className="stats-card-5 stats-card">
                                <h3 className="h2 text-sb text-white">Beyond The Numbers</h3>
                                <p className="text-18 text-rg text-light-grey">
                                    <span>The greatest measure of our work is seeing brands grow with confidence, products perform with purpose, and clients choose to build with us again.
                                    </span>
                                    <span>Behind every percentage is a business that trusted us, a challenge we solved, and a partnership that continues to grow.
                                    </span>
                                </p>
                            </div>

                            <div className="stats-card-6 stats-card">
                                <div className="stats-global-element">
                                    <Image src={`${CDN_URL}/images/homepage/stats/global-market-served.svg`} alt="specialized-solution-crafted" width={754} height={320}></Image>
                                </div>

                                <div className="stats-global-text-wrapper">
                                    <div className="stats-global-left">
                                        <h3 className="h1 text-sb text-white">7</h3>
                                        <p className="text-upper-case text-light-grey text-18 text-sb">Global Markets Served</p>
                                    </div>

                                    <div className="stats-global-right">
                                        <p className="text-18 text-rg text-light-grey">Ideas built without borders.
                                            Creating impact across markets.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="stats-card-7 stats-card">
                                <h3 className="h1 text-sb text-white">95%</h3>

                                <p className="text-upper-case text-white text-light-grey text-18 text-sb stats-specification">Projects Delivered With Precision</p>

                                <div className="stats-element-art-board">
                                    <Image src={`${CDN_URL}/images/homepage/stats/project-delivered-with-precision.svg`} alt="specialized-solution-crafted" width={200} height={200}></Image>
                                </div>

                                <p className="text-18 text-rg text-light-grey">Precision in every milestone.
                                    Delivered when it matters most.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="stats-section-for-tablet">
                        <div className="stats-section-card-row">
                            <div className="stats-tablet-card stats-tablet-card-1">
                                <h2 className="text-sb text-white">Impact</h2>

                                <p className="text-18 text-rg text-white">Behind every number is a promise we&apos;ve kept.
                                    From long-term partnerships to measurable outcomes, these milestones reflect the trust we&apos;ve earned and the impact we&apos;ve created.
                                </p>
                            </div>

                            <div className="stats-tablet-card stats-tablet-card-2">
                                <h3 className="h1 text-sb text-white">27+</h3>
                                <p className="text-upper-case text-light-grey text-18 text-sb stats-specification">Specialised Solutions Crafted</p>

                                <div className="stats-element-art-board">
                                    <Image src={`${CDN_URL}/images/homepage/stats/specialized-solution-crafted.svg`} alt="specialized-solution-crafted" width={200} height={200}></Image>
                                </div>

                                <p className="text-18 text-rg text-light-grey">Every solution is purpose-built.
                                    Never recycled. Always intentional.
                                </p>
                            </div>
                        </div>

                        <div className="stats-section-card-row">
                            <div className="stats-tablet-card stats-tablet-card-3">
                                <h3 className="h1 text-sb text-white">8+</h3>
                                <p className="text-upper-case text-light-grey text-18 text-sb stats-specification">Industries Transformed Globally</p>

                                <div className="stats-element-art-board">
                                    <Image src={`${CDN_URL}/images/homepage/stats/industries-transformed-globally.svg`} alt="specialized-solution-crafted" width={200} height={200}></Image>
                                </div>

                                <p className="text-18 text-rg text-light-grey">From startups to enterprises.
                                    Solutions shaped for every sector.
                                </p>
                            </div>

                            <div className="stats-tablet-card stats-tablet-card-4">
                                <h3 className="h1 text-sb text-white">98%</h3>
                                <p className="text-upper-case text-light-grey text-18 text-sb stats-specification">Client Trust Retained</p>

                                <div className="stats-element-art-board">
                                    <Image src={`${CDN_URL}/images/homepage/stats/client-trust-retained.svg`} alt="specialized-solution-crafted" width={200} height={200}></Image>
                                </div>

                                <p className="text-18 text-rg text-light-grey">Relationships built on results.
                                    Trust earned through consistency.
                                </p>
                            </div>
                        </div>

                        <div className="stats-section-card-row">
                            <div className="stats-tablet-card stats-tablet-text stats-tablet-card-5">
                                <h3 className="h2 text-sb text-white">Beyond The Numbers</h3>
                                <p className="text-18 text-rg text-light-grey">
                                    <span>The greatest measure of our work is seeing brands grow with confidence, products perform with purpose, and clients choose to build with us again.
                                    </span>
                                    <span>Behind every percentage is a business that trusted us, a challenge we solved, and a partnership that continues to grow.
                                    </span>
                                </p>
                            </div>

                            <div className="stats-tablet-card stats-tablet-card-6">
                                <h3 className="h1 text-sb text-white">95%</h3>
                                <p className="text-upper-case text-light-grey text-18 text-sb stats-specification">Projects Delivered With Precision</p>

                                <div className="stats-element-art-board">
                                    <Image src={`${CDN_URL}/images/homepage/stats/project-delivered-with-precision.svg`} alt="specialized-solution-crafted" width={200} height={200}></Image>
                                </div>

                                <p className="text-18 text-rg text-light-grey">Precision in every milestone.
                                    Delivered when it matters most.
                                </p>
                            </div>
                        </div>

                        <div className="stats-section-card-row stats-tablet-card-7">
                            <div className="stats-tablet-card-map">
                                <h3 className="h1 text-sb text-white">7</h3>
                                <p className="text-upper-case text-light-grey text-18 text-sb stats-specification">Global Markets Served</p>

                                <div className="stats-element-art-board element-map-wrapper">
                                    <Image src={`${CDN_URL}/images/homepage/stats/global-market-served.svg`} alt="specialized-solution-crafted" width={754} height={320}></Image>
                                </div>

                                <p className="text-18 text-rg text-light-grey">Ideas built without borders.
                                    Creating impact across markets.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </section >
        </>
    );
}