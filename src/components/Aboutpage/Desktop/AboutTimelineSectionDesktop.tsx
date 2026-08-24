"use client";

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";

export default function AboutTimelineSectionDesktop() {
    return (
        <>
            <section className="section section-bg-blue">
                <div className="container">
                    <div className="abt-timeline-title-desktop">
                        <div className="abt-timeline-title-left">
                            <h2 className="text-sb text-white">Our story is more than a timeline of milestones.</h2>

                            <h3 className="text-sb h5 text-white">It&apos;s a journey of learning, growing, and continuously evolving to create work that truly matters.</h3>
                        </div>
                        <div className="abt-timeline-title-right">
                            <p className="text-rg text-18 text-white">A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one.</p>
                        </div>
                    </div>

                    <div className="time-line-hr-wrapper">
                        <div className="timeline-hr"></div>

                        <div className="timeline-dot tablet-dot-1"></div>
                        <div className="timeline-dot tablet-dot-2"></div>
                        <div className="timeline-dot tablet-dot-3"></div>
                    </div>

                    <div className="abt-timeline-desktop-wrapper">
                        <div className="abt-timeline-desktop-date">
                            <span className="abt-timeline-titledate text-sb">2024</span>
                            {/* <span className="abt-timeline-titledate text-sb">2025</span> */}
                            {/* <span className="abt-timeline-titledate text-sb">2026</span> */}
                        </div>

                        <div className="abt-timeline-content-wrapper">
                            <div className="abt-timeline-content-left">
                                <Image src="/images/aboutpage/about-timeline/timeline-2026.svg" alt="timeline-2026" width={291} height={278}></Image>
                                {/* <Image src="/images/aboutpage/about-timeline/timeline-2025.svg" alt="timeline-2025" width={291} height={278}></Image> */}
                                {/* <Image src="/images/aboutpage/about-timeline/timeline-2025.svg" alt="timeline-2025" width={291} height={278}></Image> */}
                            </div>

                            <div className="abt-timeline-content-right">
                                {/* <div className="time-line-2024">
                                    <span className="h3 text-sb text-white">2024</span>

                                    <h6 className="text-sb text-upper-case text-white">The Launch of RarePixels</h6>

                                    <p className="text-18 text-rg text-light-grey">From the very beginning, our focus extended beyond aesthetics. Every project was approached with a commitment to understanding business goals, user needs, and long-term growth opportunities. This foundation shaped the way we work today combining creativity with execution to deliver experiences that are both visually compelling and strategically effective.</p>
                                </div> */}

                                {/* <div className="time-line-2025">
                                    <span className="h3 text-sb text-white">2025</span>

                                    <h6 className="text-sb text-upper-case text-white">Purposeful Growth</h6>

                                    <p className="text-18 text-rg text-light-grey">Every project brought new challenges, fresh perspectives, and valuable opportunities to grow. As RarePixels expanded its reach, we continued refining our approach and strengthening our expertise across multiple disciplines. The trust placed in us by growing brands allowed us to take on more ambitious projects, and create experiences that combined creativity, strategy, and technology.</p>
                                </div> */}

                                <div className="time-line-2026">
                                    <span className="h3 text-sb text-white">2026</span>

                                    <h6 className="text-sb text-upper-case text-white">Shaping What&apos;s Next</h6>

                                    <p className="text-18 text-rg text-light-grey">Today, RarePixels continues to evolve as a creative and technology partner for ambitious brands. We remain focused on helping businesses create meaningful experiences through innovation, collaboration, and purposeful execution. Every project we take on reflects our commitment to quality, creativity, and delivering value that extends far beyond the final deliverable.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="abt-timeline-tablet">
                        <div className="timeline-tablet-dates">
                            <span className="h5 text-sb active">2024</span>
                            <span className="h5 text-sb">2025</span>
                            <span className="h5 text-sb">2026</span>
                        </div>

                        <div className="timeline-content-wrapper-tablet">
                            <div className="timeline-tablet-image-wrapper">
                                <Image src="/images/aboutpage/about-timeline/timeline-2024.svg" alt="timeline-2025" width={291} height={278}></Image>
                                {/* <Image src="/images/aboutpage/about-timeline/timeline-2025.svg" alt="timeline-2025" width={291} height={278}></Image> */}
                                {/* <Image src="/images/aboutpage/about-timeline/timeline-2026.svg" alt="timeline-2026" width={291} height={278}></Image> */}
                            </div>

                            <div className="timeline-text-wrapper-desktop">
                                <div className="time-line-2024">
                                    <h6 className="text-sb text-upper-case text-white">The Launch of RarePixels</h6>

                                    <p className="text-18 text-rg text-light-grey">From the very beginning, our focus extended beyond aesthetics. Every project was approached with a commitment to understanding business goals, user needs, and long-term growth opportunities. This foundation shaped the way we work today combining creativity with execution to deliver experiences that are both visually compelling and strategically effective.</p>
                                </div>

                                {/* <div className="time-line-2025">
                                    <h6 className="text-sb text-upper-case text-white">Purposeful Growth</h6>

                                    <p className="text-18 text-rg text-light-grey">Every project brought new challenges, fresh perspectives, and valuable opportunities to grow. As RarePixels expanded its reach, we continued refining our approach and strengthening our expertise across multiple disciplines. The trust placed in us by growing brands allowed us to take on more ambitious projects, and create experiences that combined creativity, strategy, and technology.</p>
                                </div> */}

                                {/* <div className="time-line-2026">
                                    <h6 className="text-sb text-upper-case text-white">Shaping What&apos;s Next</h6>

                                    <p className="text-18 text-rg text-light-grey">Today, RarePixels continues to evolve as a creative and technology partner for ambitious brands. We remain focused on helping businesses create meaningful experiences through innovation, collaboration, and purposeful execution. Every project we take on reflects our commitment to quality, creativity, and delivering value that extends far beyond the final deliverable.</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}