'use client';

import Image from "next/image";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import PieYellow from "@/components/global/stats-graph/PieYellow";
import RadarChart from "@/components/global/stats-graph/RadarChart";
import PieGray from "@/components/global/stats-graph/PieGray";

const CDN_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS_CDN;

export default function StatsSectionMobile() {
    return (
        <>
            <section className="section ">
                <div className="container">
                    <div className="stats-mob-wrapper">
                        <div className="stats-mob-card-1">
                            <h2 className="text-sb ">Analytics</h2>

                            <p className="text-16 text-rg ">Every number represents our commitment to performance, precision, and delivering work that consistently meets expectations.</p>
                        </div>

                        <div className="stats-mob-hr"></div>

                        <div className="stats-mob-card-2 site-radius-10">
                            <h3 className="h1 text-sb ">27+</h3>
                            <p className="text-16 text-upper-case text-light-grey">Specialised Solutions Crafted</p>

                            <div className="stats-mob-art-board">
                                {/* <Image src={`${CDN_URL}/images/homepage/stats/specialized-solution-crafted.svg`} alt="specialized-solution-crafted" width={150} height={150}></Image> */}
                                <PieYellow />
                            </div>

                            <p className=" text-light-grey text-16 text-rg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>

                        <div className="stats-mob-hr"></div>

                        <div className="stats-mob-card-3 site-radius-10">
                            <h3 className="h1 text-sb ">8+</h3>
                            <p className="text-16 text-upper-case  text-light-grey">Industries Transformed Globally</p>

                            <div className="stats-mob-art-board">
                                {/* <Image src={`${CDN_URL}/images/homepage/stats/industries-transformed-globally.svg`} alt="specialized-solution-crafted" width={160} height={150}></Image> */}
                                <RadarChart />
                            </div>

                            <p className="text-light-grey text-16 text-rg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>

                        <div className="stats-mob-hr"></div>

                        <div className="stats-mob-card-4 site-radius-10">
                            <h3 className="h1 text-sb ">98%</h3>
                            <p className="text-16 text-upper-case text-light-grey">Client Trust Retained</p>

                            <div className="stats-mob-art-board">
                                <Image src={`${CDN_URL}/images/homepage/stats/client-trust-retained.svg`} alt="specialized-solution-crafted" width={236} height={150}></Image>
                            </div>

                            <p className=" text-light-grey text-16 text-rg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>

                        <div className="stats-mob-hr"></div>

                        <div className="stats-mob-card-6 site-radius-10">
                            <h3 className="h1 text-sb ">7</h3>
                            <p className="text-16 text-upper-case text-light-grey">Global Markets Served</p>

                            <div className="stats-mob-art-board">
                                <Image src={`${CDN_URL}/images/homepage/stats/global-market-served.svg`} alt="specialized-solution-crafted" width={396} height={150}></Image>
                            </div>

                            <p className=" text-light-grey text-16 text-rg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>

                        <div className="stats-mob-hr"></div>

                        <div className="stats-mob-card-7 site-radius-10">
                            <h3 className="h1 text-sb ">95%</h3>
                            <p className="text-16 text-upper-case  text-light-grey">Projects Delivered With Precision</p>

                            <div className="stats-mob-art-board">
                                {/* <Image src={`${CDN_URL}/images/homepage/stats/project-delivered-with-precision.svg`} alt="specialized-solution-crafted" width={150} height={150}></Image> */}
                                <PieGray />
                            </div>

                            <p className=" text-light-grey text-16 text-rg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>

                        <div className="stats-mob-hr"></div>

                        <div className="stats-mob-card-5">
                            <h3 className="h2 text-sb ">Beyond The Numbers</h3>

                            <p className="text-16 text-rg  text-light-grey">The greatest measure of our work is seeing brands grow with confidence, products perform with purpose, and clients choose to build with us again.</p>

                            <p className="text-16 text-rg  text-light-grey">Behind every percentage is a business that trusted us, a challenge we solved, and a partnership that continues to grow.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}