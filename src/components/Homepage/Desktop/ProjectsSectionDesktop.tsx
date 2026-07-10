'use client';

import Image from 'next/image';

export default function ProjectsSectionDesktop() {
    return (
        <section className="section projects-section-desktop projects-section-sticky">
            <div className="container">
                <div className="hm-project-container">
                    <div className="hm-projects-text">
                        <h2 className="text-sb">Our Projects</h2>
                        <p className="text-rg text-18">A curated selection of work that reflects how we design, build, and deliver impactful digital experiences.</p>
                    </div>

                    <div className="hm-projects-horizontal-pin-viewport">
                        <div className="hm-projects-card-wrapper">
                            <div className="hm-projects-card-lg hm-projects-card-1">
                                <div className="hm-projects-images-lg site-radius-20 bg-purple-shade">
                                    <video className="site-radius-20" src="/images/homepage/projects/AutoBot_proj.mp4" width={523} height={423} autoPlay loop muted></video>
                                </div>
                                <div className="hm-projects-desc site-radius-20 bg-purple-shade text-black">
                                    <h3 className="text-sb text-black">DJK</h3>
                                    <p className="text-rg text-18 text-black">DJK has delivered trusted HVAC solutions for pharma and food sectors.</p>
                                </div>
                            </div>

                            <div className="hm-projects-card-sm hm-projects-card-2">
                                <div className="hm-projects-images-sm site-radius-20 bg-light-green">
                                    <video className="site-radius-20" src="/images/homepage/projects/SteamOvap_proj.mp4" width={523} height={423} autoPlay loop muted></video>
                                </div>
                                <div className="hm-projects-desc site-radius-20 bg-light-green text-black">
                                    <h3 className="text-sb text-black">S.ART</h3>
                                    <p className="text-rg text-18 text-black">A modern logo designed for S.Art, blending abstract style with a touch of tradition.</p>
                                </div>
                            </div>

                            <div className="hm-projects-card-lg hm-projects-card-3">
                                <div className="hm-projects-images-lg site-radius-20 bg-light-pink">
                                    <video className="site-radius-20" src="/images/homepage/projects/Jedon.mp4" width={523} height={423} autoPlay loop muted></video>
                                </div>
                                <div className="hm-projects-desc site-radius-20 bg-light-pink text-black">
                                    <h3 className="text-sb text-black">COVRIZE</h3>
                                    <p className="text-rg text-18 text-black">Transform your business with our platform, providing tailored software solutions to meet your unique needs.</p>
                                </div>
                            </div>

                            <div className="hm-projects-card-sm hm-projects-card-4">
                                <div className="hm-projects-images-sm site-radius-20 bg-light-yellow">
                                    <Image className="site-radius-20" src="/images/homepage/seahub-project.png" alt="rare-projects" width={523} height={423}></Image>
                                </div>
                                <div className="hm-projects-desc site-radius-20 bg-light-yellow text-black">
                                    <h3 className="text-sb text-black">4SEAHUB</h3>
                                    <p className="text-rg text-18 text-black">4SEAHUB is a purpose driven logistics and import-export company, setting new standards in trust and quality.</p>
                                </div>
                            </div>

                            <div className="hm-projects-card-lg hm-projects-card-5">
                                <div className="hm-projects-images-lg site-radius-20 bg-skin">
                                    <Image className="site-radius-20" src="/images/homepage/sales-project.png" alt="rare-projects" width={523} height={423}></Image>
                                </div>
                                <div className="hm-projects-desc site-radius-20 bg-skin text-black">
                                    <h3 className="text-sb text-black">SALES DASHBOARD</h3>
                                    <p className="text-rg text-18 text-black">Enhanced decision making, and improved performance tracking.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
