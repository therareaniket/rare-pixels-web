'use client';
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import Image from "next/image";

export default function AboutTimelineSectionMobile() {
    return (
        <>
            <section className="section section-bg-blue">
                <div className="container">
                    <div className="abt-timeline-mobile-title">
                        <h2 className="text-sb text-white">Our story is more than a timeline of milestones. </h2>

                        <h3 className="text-sb text-18 text-white">It&apos;s a journey of learning, growing, and continuously evolving to create work that truly matters.</h3>

                        <p className="text-light-grey text-16 text-rg">A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one.</p>
                    </div>

                    <div className="timeline-hr-mobile">
                        <div className="time-line-hr"></div>

                        <div className="timeline-dot-1"></div>
                        <div className="timeline-dot-2"></div>
                        <div className="timeline-dot-3"></div>
                    </div>

                    <div className="timeline-date-wrapper">
                        <span className="h4 text-sb active">2024</span>
                        <span className="h4 text-sb">2025</span>
                        <span className="h4 text-sb">2026</span>
                    </div>

                    <div className="timeline-content-wrapper">
                        <div className="timeline-image-mobile-wrapper">
                            <Image src="/images/aboutpage/about-timeline/timeline-2024.svg" alt="timeline-2025" width={291} height={278}></Image>
                            {/* <Image src="/images/aboutpage/about-timeline/timeline-2025.svg" alt="timeline-2025" width={291} height={278}></Image> */}
                            {/* <Image src="/images/aboutpage/about-timeline/timeline-2026.svg" alt="timeline-2026" width={291} height={278}></Image> */}
                        </div>

                        <div className="timeline-mobile-content">
                            <h3 className="text-sb text-upper-case text-white h6">The Launch of RarePixels</h3>

                            <p className="text-16 text-rg text-light-grey">From the very beginning, our focus extended beyond aesthetics. Every project was approached with a commitment to understanding business goals, user needs, and long-term growth opportunities. This foundation shaped the way we work today combining creativity with execution to deliver experiences that are both visually compelling and strategically effective.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}