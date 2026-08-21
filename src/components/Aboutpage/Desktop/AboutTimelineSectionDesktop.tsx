"use client";

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";

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

                    <div className="abt-timeline-desktop-wrapper">
                        <div className="abt-timeline-desktop-date">
                            <span className="abt-timeline-titledate">2024</span>
                            {/* <span className="abt-timeline-titledate">2025</span> */}
                            {/* <span className="abt-timeline-titledate">2026</span> */}
                        </div>

                        <div className="abt-timeline-content-wrapper">
                            <div className="abt-timeline-content-left">

                            </div>

                            <div className="abt-timeline-content-right">
                                <span className="h3 text-sb text-white">2026</span>

                                <h6 className="text-sb text-upper-case text-white">Shaping What&apos;s Next</h6>

                                <p className="text-18 text-rg text-white">Today, RarePixels continues to evolve as a creative and technology partner for ambitious brands. We remain focused on helping businesses create meaningful experiences through innovation, collaboration, and purposeful execution. Every project we take on reflects our commitment to quality, creativity, and delivering value that extends far beyond the final deliverable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}