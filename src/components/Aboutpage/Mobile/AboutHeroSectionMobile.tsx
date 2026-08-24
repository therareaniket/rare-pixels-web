"use client";

import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";

export default function AboutHeroSectionMobile() {
    return (
        <>
            <section id="first-section" className="about-hero-section-mobile">
                <div className="container">
                    <div className="section">
                        <div className="about-mobile-title-wrapper">
                            <h1 className="text-sb">
                                The People, Purpose, and Principles Behind RarePixels.
                            </h1>

                            <p className="text-rg text-16">
                                <span>RarePixels is more than a creative agency. It&apos;s a collective of thinkers, creators, and problem-solvers united by a passion for meaningful work. Through collaboration, innovation, and a commitment to excellence, we help transform ideas into experiences that leave a lasting impression.</span>

                                <span>We believe that great work is built on strong partnerships, shared vision, and a genuine understanding of the people behind every brand. By bringing together diverse perspectives and expertise, we create solutions that are not only visually compelling but also purposeful, strategic, and designed to deliver long-term value.</span>
                            </p>
                        </div>
                    </div>
                    {/* <div className="about-mobile-video-wrapper">
                        <span className="about-mobile-title text-extra-bold">ABOUT US</span>
                    </div> */}

                    <div className="about-hero-mask-title text-extra-bold">
                        <svg
                            viewBox="0 0 1600 500"
                            className="about-text-mask"
                        >
                            <defs>
                                <mask id="video-text-mask-mobile">
                                    <rect width="100%" height="100%" fill="black" />

                                    <text
                                        x="50%"
                                        y="50%"
                                        dominantBaseline="middle"
                                        textAnchor="middle"
                                        fill="white"
                                        className="mask-text"
                                    >
                                        ABOUT US
                                    </text>
                                </mask>
                            </defs>

                            <foreignObject
                                width="100%"
                                height="100%"
                                mask="url(#video-text-mask-mobile)"
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="masked-video"
                                >
                                    <source
                                        src="/images/aboutpage/about-hero/rare-second-anniversary.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </foreignObject>
                        </svg>
                    </div>
                </div>
            </section>
        </>
    );
}