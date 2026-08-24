"use client";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";

export default function AboutHeroSectionDesktop() {
    return (
        <>
            <section id="first-section" className="about-hero-section-desktop">
                <div className="container">
                    <div className="section">
                        <div className="container-sm">
                            <div className="about-hero-section-title">
                                <h1 className="text-sb">
                                    The People, Purpose, and Principles Behind RarePixels.
                                </h1>

                                <p className="text-18 text-rg">
                                    <span>RarePixels is more than a creative agency. It&apos;s a collective of thinkers, creators, and problem-solvers united by a passion for meaningful work. Through collaboration, innovation, and a commitment to excellence, we help transform ideas into experiences that leave a lasting impression.</span>
                                    <span>We believe that great work is built on strong partnerships, shared vision, and a genuine understanding of the people behind every brand. By bringing together diverse perspectives and expertise, we create solutions that are not only visually compelling but also purposeful, strategic, and designed to deliver long-term value.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="about-hero-mask-title text-extra-bold">
                        <svg
                            viewBox="0 0 1600 500"
                            className="about-text-mask"
                        >
                            <defs>
                                <mask id="video-text-mask">
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
                                mask="url(#video-text-mask)"
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

                    {/* <div className="about-desktop-video-wrapper">
                        <div className="about-hero-video">
                            <video className="about-banner-video" src="/images/aboutpage/about-hero/rare-second-anniversary.mp4" width={1600} height={800} autoPlay playsInline muted loop preload="auto"></video>
                        </div>

                        <div className="about-hero-mask-title">
                            <span className="text-extra-bold">ABOUT US</span>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    );
}