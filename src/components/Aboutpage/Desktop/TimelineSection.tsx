"use client"

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";


export default function AboutTimeline () {
    return (
        <>
            <section className="section" style={{ backgroundColor: "#040E36" }}>
                <div className="container">
                    <div className="timeline-titles">
                        <h2 className="text-sb text-white">Our story is more than a timeline of milestones.</h2>

                        <div className="timeline-subtitles">
                            <div className="bold-subtitle">
                                <p className="h5 text-sb text-white">It's a journey of learning, growing, and continuously evolving to create work that truly matters.</p>
                            </div>

                            <div className="regular-subtitle">
                                <p className="text-18 text-white">A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one.</p>
                            </div>
                        </div>
                    </div>

                    <div className="year-timeline-line">
                        <div className="tl-baseline">
                            <div className="years-dot h1 text-white">2024 <span className="the-dot" /></div>
                            <div className="years-dot h1 text-white">2024 <span className="the-dot" /></div>
                            <div className="years-dot h1 text-white">2024 <span className="the-dot" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}