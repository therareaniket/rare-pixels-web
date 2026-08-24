'use client';

import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import Image from "next/image";

export default function AboutMissionVisionMobile() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="abt-mis-vis-title-mobile">
                        <h2 className="text-sb text-30">RarePixels The Brand</h2>

                        <p className="h6 text-sb">Vision gives direction, purpose creates momentum, and execution turns ideas into impact.</p>

                        <Image className="abt-mis-vis-quote" src="/images/aboutpage/about-mis-vis/mis-vis-bg-quote.svg" alt="bg-quote" width={130} height={139} ></Image>
                    </div>

                    <div className="abt-mis-vis-mobile-video">
                        <Image src="/images/aboutpage/about-mis-vis/mis-vis-img.svg" alt="bg-quote" width={228} height={250} ></Image>
                    </div>

                    <h3 className="h5 text-sb text-primary">Our Vision & Mission</h3>

                    <div className="abt-vis-mobile">
                        <p className="text-16 text-rg"><span className="text-sb">Our Vision</span> to become a trusted creative partner that helps brands navigate the future with confidence. We aspire to create meaningful digital experiences that inspire growth, strengthen connections, and empower businesses to thrive in an ever evolving digital world. Through purposeful innovation, evolving expertise, and a commitment to meaningful outcomes, we strive to help brands move forward with clarity and confidence.</p>
                    </div>

                    <div className="abt-mis-mobile">
                        <p className="text-16 text-rg"><span className="text-sb">Our Mission</span> to combine creativity, strategy, and technology to create experiences that deliver real value. We work closely with brands to build strong identities, meaningful connections, and impactful solutions that help them grow with confidence in an evolving digital landscape. Through thoughtful execution, collaborative thinking, and a commitment to excellence, we strive to create work that goes beyond expectations.</p>
                    </div>
                </div>
            </section>
        </>
    );
}