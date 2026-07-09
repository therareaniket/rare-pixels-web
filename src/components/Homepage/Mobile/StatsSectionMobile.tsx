'use client';

import Image from "next/image";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";

export default function StatsSectionMobile() {
    return (
        <>
            <section className="section section-bg-blue">
                <div className="container">
                    <div className="stats-mob-wrapper">
                        <div className="stats-mob-card-1">
                            <h2 className="text-sb text-white">Analytics</h2>

                            <p className="text-16 text-rg text-white">Every number represents our commitment to performance, precision, and delivering work that consistently meets expectations.</p>
                        </div>

                        <div className="stats-mob-hr"></div>

                        <div className="stats-mob-card-2 site-radius-10">
                            <h3 className="h1 text-sb text-white">27+</h3>
                            <p className="text-16 text-upper-case text-light-grey">Specialised Solutions Crafted</p>

                            <div className="stats-mob-art-board">
                                <Image src="images/homepage/specialized-solution-crafted.svg" alt="specialized-solution-crafted" width={150} height={150}></Image>
                            </div>

                            <p className=" text-light-grey text-16 text-rg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>

                        <div className="stats-mob-hr"></div>

                        <div className="stats-mob-card-3 site-radius-10">
                            <h3 className="h1 text-sb text-white">8+</h3>
                            <p className="text-16 text-upper-case  text-light-grey">Industries Transformed Globally</p>

                            <div className="stats-mob-art-board">
                                <Image src="images/homepage/industries-transformed-globally.svg" alt="specialized-solution-crafted" width={160} height={150}></Image>
                            </div>

                            <p className="text-light-grey text-16 text-rg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>

                        <div className="stats-mob-hr"></div>

                        <div className="stats-mob-card-4 site-radius-10">
                            <h3 className="h1 text-sb text-white">98%</h3>
                            <p className="text-16 text-upper-case text-light-grey">Client Trust Retained</p>

                            <div className="stats-mob-art-board">
                                <Image src="images/homepage/client-trust-retained.svg" alt="specialized-solution-crafted" width={236} height={150}></Image>
                            </div>

                            <p className=" text-light-grey text-16 text-rg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>

                        <div className="stats-mob-hr"></div>

                        <div className="stats-mob-card-5">
                            <p className="text-16 text-rg  text-light-grey">Every number represents our commitment to performance, precision, and delivering work that consistently meets expectations.</p>

                            <p className="text-16 text-rg  text-light-grey">Every number represents our commitment to performance, precision, and delivering work that consistently meets expectations.</p>
                        </div>

                        <div className="stats-mob-hr"></div>

                        <div className="stats-mob-card-6 site-radius-10">
                            <h3 className="h1 text-sb text-white">7</h3>
                            <p className="text-16 text-upper-case text-light-grey">Global Markets Served</p>

                            <div className="stats-mob-art-board">
                                <Image src="images/homepage/global-market-served.svg" alt="specialized-solution-crafted" width={396} height={150}></Image>
                            </div>

                            <p className=" text-light-grey text-16 text-rg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>

                        <div className="stats-mob-hr"></div>

                        <div className="stats-mob-card-7 site-radius-10">
                            <h3 className="h1 text-sb text-white">95%</h3>
                            <p className="text-16 text-upper-case  text-light-grey">Projects Delivered With Precision</p>

                            <div className="stats-mob-art-board">
                                <Image src="images/homepage/project-delivered-with-precision.svg" alt="specialized-solution-crafted" width={150} height={150}></Image>
                            </div>

                            <p className=" text-light-grey text-16 text-rg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}