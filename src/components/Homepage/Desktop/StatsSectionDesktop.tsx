'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";

export default function StatsSectionDesktop() {
    return (
        <>
            <section className="section section-bg-blue">
                <div className="container">
                    <div className="stats-wrapper stats-wrapper-for-desktop">
                        <div className="stats-card-row-1">
                            <div className="stats-card-1 stats-card">
                                <h2 className="text-sb text-white">Analytics</h2>

                                <p className="text-18 text-rg text-white">Every number represents our commitment to performance, precision, and delivering work that consistently meets expectations.</p>
                            </div>

                            <div className="stats-card-2 stats-card">
                                <h3 className="h1 text-sb text-white">27+</h3>
                                <p className="text-upper-case text-light-grey text-18 text-sb stats-specification">Specialised Solutions Crafted</p>

                                <div className="stats-element-art-board">
                                    <Image src="images/homepage/specialized-solution-crafted.svg" alt="specialized-solution-crafted" width={200} height={200}></Image>
                                </div>

                                <p className="text-18 text-rg text-light-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>

                            <div className="stats-card-3 stats-card">
                                <h3 className="h1 text-sb text-white">8+</h3>
                                <p className="text-upper-case text-light-grey text-18 text-sb stats-specification">Industries Transformed Globally</p>

                                <div className="stats-element-art-board">
                                    <Image src="images/homepage/industries-transformed-globally.svg" alt="specialized-solution-crafted" width={215} height={200}></Image>
                                </div>

                                <p className="text-18 text-rg text-light-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>

                            <div className="stats-card-4 stats-card">
                                <h3 className="h1 text-sb text-white">98%</h3>
                                <p className="text-upper-case text-light-grey text-18 text-sb stats-specification">Client Trust Retained</p>

                                <div className="stats-element-art-board">
                                    <Image src="images/homepage/client-trust-retained.svg" alt="specialized-solution-crafted" width={271} height={172}></Image>
                                </div>

                                <p className="text-18 text-rg text-light-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                        
                        <div className="stats-card-row-2">
                            <div className="stats-card-5 stats-card">
                                <p className="text-18 text-rg text-light-grey">
                                    <span>Every number represents our commitment to performance, precision, and delivering work that consistently meets expectations.</span>
                                    <span>Every number represents our commitment to performance, precision, and delivering work that consistently meets expectations.</span>
                                </p>
                            </div>

                            <div className="stats-card-6 stats-card">
                                <div className="stats-global-element">
                                    <Image src="images/homepage/global-market-served.svg" alt="specialized-solution-crafted" width={754} height={320}></Image>
                                </div>

                                <div className="stats-global-text-wrapper">
                                    <div className="stats-global-left">
                                        <h3 className="h1 text-sb text-white">7</h3>
                                        <p className="text-upper-case text-light-grey text-18 text-sb">Global Markets Served</p>
                                    </div>

                                    <div className="stats-global-right">
                                        <p className="text-18 text-rg text-light-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="stats-card-7 stats-card">
                                <h3 className="h1 text-sb text-white">95%</h3>

                                <p className="text-upper-case text-white text-light-grey text-18 text-sb stats-specification">Projects Delivered With Precision</p>

                                <div className="stats-element-art-board">
                                    <Image src="images/homepage/project-delivered-with-precision.svg" alt="specialized-solution-crafted" width={200} height={200}></Image>
                                </div>

                                <p className="text-18 text-light text-rg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>

                    <div className="stats-wrapper-for-tablet">
                        <div className="stats-card-row-1">
                            <div className="stats-card-1 stats-card">
                                <h2 className="text-sb text-white">Analytics</h2>

                                <p className="text-18 text-rg text-white">Every number represents our commitment to performance, precision, and delivering work that consistently meets expectations.</p>
                            </div>

                            <div className="stats-hr-line"></div>

                            <div className="stats-card-2 stats-card">
                                <h3 className="h1 text-sb text-white">27+</h3>
                                <p className="text-upper-case text-light-grey text-18 text-sb stats-specification">Specialised Solutions Crafted</p>

                                <div className="stats-element-art-board">
                                    <Image src="images/homepage/specialized-solution-crafted.svg" alt="specialized-solution-crafted" width={200} height={200}></Image>
                                </div>

                                <p className="text-18 text-rg text-light-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>

                            <div className="stats-hr-line"></div>

                            <div className="stats-card-3 stats-card">
                                <h3 className="h1 text-sb text-white">8+</h3>
                                <p className="text-upper-case text-light-grey text-18 text-sb stats-specification">Industries Transformed Globally</p>

                                <div className="stats-element-art-board">
                                    <Image src="images/homepage/industries-transformed-globally.svg" alt="specialized-solution-crafted" width={215} height={200}></Image>
                                </div>

                                <p className="text-18 text-rg text-light-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>

                            <div className="stats-hr-line"></div>

                            <div className="stats-card-4 stats-card">
                                <h3 className="h1 text-sb text-white">98%</h3>
                                <p className="text-upper-case text-light-grey text-18 text-sb stats-specification">Client Trust Retained</p>

                                <div className="stats-element-art-board">
                                    <Image src="images/homepage/client-trust-retained.svg" alt="specialized-solution-crafted" width={271} height={172}></Image>
                                </div>

                                <p className="text-18 text-rg text-light-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>

                        <div className="stats-hr-line"></div>

                        <div className="stats-card-row-2">
                            <div className="stats-card-5 stats-card">
                                <p className="text-18 text-rg text-light-grey">
                                    <span>Every number represents our commitment to performance, precision, and delivering work that consistently meets expectations.</span>
                                    <span>Every number represents our commitment to performance, precision, and delivering work that consistently meets expectations.</span>
                                </p>
                            </div>

                            <div className="stats-hr-line"></div>

                            <div className="stats-card-6 stats-card">
                                <h3 className="h1 text-sb text-white">7</h3>
                                <p className="text-upper-case text-light-grey text-18 text-sb">Global Markets Served</p>
                                
                                <div className="stats-global-element">
                                    <Image src="images/homepage/global-market-served.svg" alt="specialized-solution-crafted" width={754} height={320}></Image>
                                </div>

                                <p className="text-18 text-rg text-light-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>

                            <div className="stats-hr-line"></div>

                            <div className="stats-card-7 stats-card">
                                <h3 className="h1 text-sb text-white">95%</h3>

                                <p className="text-upper-case text-light-grey text-18 text-sb stats-specification">Projects Delivered With Precision</p>

                                <div className="stats-element-art-board">
                                    <Image src="images/homepage/project-delivered-with-precision.svg" alt="specialized-solution-crafted" width={200} height={200}></Image>
                                </div>

                                <p className="text-18 text-rg text-light-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}