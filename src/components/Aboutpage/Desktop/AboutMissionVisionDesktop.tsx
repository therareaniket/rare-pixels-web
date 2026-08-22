'use client';

import Image from "next/image";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";

export default function AboutMissionVisionDesktop() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="abt-mis-vis-title-desktop">
                        <div className="abt-mis-vis-title-desktop-left">
                            <h2 className="text-sb">RarePixels The Brand</h2>

                            <p className="h3 text-sb">Vision gives direction, purpose creates momentum, and execution turns ideas into impact.</p>

                            <Image className="abt-mis-vis-quote-desktop" src="/images/aboutpage/about-mis-vis/mis-vis-bg-quote.svg" alt="bg-quote" width={307} height={327} ></Image>
                        </div>

                        <div className="abt-mis-vis-title-desktop-right">
                            <Image className="abt-mis-vis-original" src="/images/aboutpage/about-mis-vis/original-logo.png" alt="bg-quote" width={265} height={225} ></Image>
                        </div>
                    </div>

                    <div className="abt-mis-vis-content-desktop">
                        <div className="abt-mis-vis-content-right">
                            <Image className="abt-mis-vis-img-desktop" src="/images/aboutpage/about-mis-vis/mis-vis-img.svg" alt="bg-quote" width={528} height={580} ></Image>
                        </div>

                        <div className="abt-mis-vis-content-left">
                            <h3 className="h2 text-sb text-primary">Our Vision & Mission</h3>

                            <div className="abt-mis-desktop">
                                <p className="text-18 text-rg"><span className="text-sb">Our Vision</span> to become a trusted creative partner that helps brands navigate the future with confidence. We aspire to create meaningful digital experiences that inspire growth, strengthen connections, and empower businesses to thrive in an ever evolving digital world. Through purposeful innovation, evolving expertise, and a commitment to meaningful outcomes, we strive to help brands move forward with clarity and confidence.</p>
                            </div>

                            <div className="abt-vis-desktop">
                                <p className="text-18 text-rg"><span className="text-sb">Our Mission</span> to combine creativity, strategy, and technology to create experiences that deliver real value. We work closely with brands to build strong identities, meaningful connections, and impactful solutions that help them grow with confidence in an evolving digital landscape. Through thoughtful execution, collaborative thinking, and a commitment to excellence, we strive to create work that goes beyond expectations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}