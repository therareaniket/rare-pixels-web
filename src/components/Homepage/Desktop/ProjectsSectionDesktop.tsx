'use client';

import Image from "next/image";
// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap-trial/all";


// gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSectionDesktop() {
    // const container = useRef(null);

    // useGSAP(() =>  {
    //     const cards = gsap.utils.toArray(".card");

    //     ScrollTrigger.create({
    //         trigger: card[0],
    //         start: "top 30%",
    //         endTrigger: cards[cards.length-1],
    //     })
    // })

    return (
        <>
            <section  className="section projects-section-desktop">
                <div className="container">
                    <div className="hm-projects-text">
                        <h2 className="text-sb">Our Projects</h2>
                        <p className="text-rg text-18">A curated selection of work that reflects how we design, build, and deliver impactful digital experiences.</p>
                    </div>

                    <div className="hm-projects-card-wrapper">
                        <div className="hm-projects-card-lg hm-projects-card-1">
                            <div className="hm-projects-images-lg site-radius-20 bg-purple-shade">
                                <Image className="site-radius-20" src="/images/homepage/djk-project.png" alt="rare-projects" width={523} height={423}></Image>
                            </div>

                            <div className="hm-projects-desc site-radius-20 bg-purple-shade">
                                <h3 className="text-sb text-black">DJK</h3>
                                <p className="text-rg text-18 text-black">DJK has delivered trusted HVAC solutions for pharma and food sectors.</p>
                            </div>
                        </div>

                        <div className="hm-projects-card-sm hm-projects-card-2">
                            <div className="hm-projects-images-sm site-radius-20 bg-light-green">
                                <Image className="site-radius-20" src="/images/homepage/sart-project.png" alt="rare-projects" width={523} height={423}></Image>
                            </div>

                            <div className="hm-projects-desc site-radius-20 bg-light-green">
                                <h3 className="text-sb text-black">S.ART</h3>
                                <p className="text-rg text-18 text-black">A modern logo designed for S.Art, blending abstract style with a touch of tradition.</p>
                            </div>
                        </div>

                        <div className="hm-projects-card-lg hm-projects-card-3">
                            <div className="hm-projects-images-lg site-radius-20 bg-light-pink">
                                <Image className="site-radius-20" src="/images/homepage/coverize-project.png" alt="rare-projects" width={523} height={423}></Image>
                            </div>

                            <div className="hm-projects-desc site-radius-20 bg-light-pink">
                                <h3 className="text-sb text-black">COVRIZE</h3>
                                <p className="text-rg text-18 text-black">Transform your business with our platform, providing tailored software solutions to meet your unique needs.</p>
                            </div>
                        </div>

                        <div className="hm-projects-card-sm hm-projects-card-4">
                            <div className="hm-projects-images-sm site-radius-20 bg-light-yellow">
                                <Image className="site-radius-20" src="/images/homepage/seahub-project.png" alt="rare-projects" width={523} height={423}></Image>
                            </div>

                            <div className="hm-projects-desc site-radius-20 bg-light-yellow">
                                <h3 className="text-sb text-black">4SEAHUB</h3>
                                <p className="text-rg text-18 text-black">4SEAHUB is a purpose driven logistics and import-export company, setting new standards in trust and quality.</p>
                            </div>
                        </div>

                        <div className="hm-projects-card-lg hm-projects-card-5">
                            <div className="hm-projects-images-lg site-radius-20 bg-skin">
                                <Image className="site-radius-20" src="/images/homepage/sales-project.png" alt="rare-projects" width={523} height={423}></Image>
                            </div>

                            <div className="hm-projects-desc site-radius-20 bg-skin">
                                <h3 className="text-sb text-black">SALES DASHBOARD</h3>
                                <p className="text-rg text-18 text-black">Enhanced decision making, and improved performance tracking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}