'use client';


import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSectionMobile() {
    const section = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (!section.current) return;

        const trigger = ScrollTrigger.create({
            trigger: section.current,
            start: "top top",
            end: "+=1000",
            pin: true,
            scrub: true,
        });

        return () => trigger.kill();
    }, []);

    return (
        <section ref={section} className="section project-mobile-section project-section-sticky">
            <div className="project-section-inner">
                <div className="container">
                    <div className="projects-title-wrapper">
                        <h2 className="text-sb">Our Projects</h2>

                        <p className="text-14 text-rg">
                            A curated selection of work that reflects how we
                            design, build, and deliver impactful digital
                            experiences.
                        </p>
                    </div>

                    <div className="projects-wrapper">
                        <div className="project-card-mobile project-card-mobile-1">
                            <video className="project-card-mobile-video" src="/images/homepage/projects/djk-project.mp4" width={523} height={423} autoPlay loop muted></video>
                        </div>

                        <div className="project-card-mobile project-card-mobile-2">
                            <video className="project-card-mobile-video" src="/images/homepage/projects/autobot-project.mp4" width={523} height={423} autoPlay loop muted></video>
                        </div>

                        <div className="project-card-mobile project-card-mobile-3">
                            <video className="project-card-mobile-video" src="/images/homepage/projects/cameriz-project.mp4" width={523} height={423} autoPlay loop muted></video>
                        </div>

                        <div className="project-card-mobile project-card-mobile-4">
                            <video className="project-card-mobile-video" src="/images/homepage/projects/ra-project.mp4" width={523} height={423} autoPlay loop muted></video>
                        </div>

                        <div className="project-card-mobile project-card-mobile-5">
                            <video className="project-card-mobile-video" src="/images/homepage/projects/steamovap-project.mp4" width={523} height={423} autoPlay loop muted></video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}