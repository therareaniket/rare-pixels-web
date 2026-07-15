'use client';

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSectionMobile() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const sliderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const section = sectionRef.current;

        if (!slider || !section) return;

        const totalScroll =
            slider.scrollWidth - slider.parentElement!.clientWidth;

        const tween = gsap.to(slider, {
            x: -totalScroll,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: `+=${totalScroll}`,
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true,
            },
        });

        ScrollTrigger.refresh();

        return () => {
            tween.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <section className="section" ref={sectionRef}>
            <div className="container">
                <div className="projects-wrapper">
                    <div className="projects-title-wrapper">
                        <h2 className="text-sb">Our Projects</h2>

                        <p className="text-16 text-rg">
                            A curated selection of work that reflects how we
                            design, build, and deliver impactful digital
                            experiences.
                        </p>
                    </div>

                    <div className="projects-card-wrapper-mobile" ref={sliderRef}>
                        <div className="projects-card-mobile">
                            <div className="projects-image-mob bg-purple-shade">
                                <video className="site-radius-20 mobile-projects-videos" src="/images/homepage/projects/AutoBot_proj.mp4" width={513} height={406} autoPlay loop muted playsInline></video>
                            </div>

                            <div className="projects-text-mob bg-purple-shade text-black">
                                <h3 className="text-sb h5">DJK</h3>
                                <p className="text-16 text-rg">DJK has delivered trusted HVAC solutions for pharma and food sectors.</p>
                            </div>
                        </div>

                        <div className="projects-card-mobile">
                            <div className="projects-image-mob bg-light-green">
                                <video className="site-radius-20 mobile-projects-videos" src="/images/homepage/projects/steamovap-video.mp4" width={513} height={406} autoPlay loop muted playsInline></video>
                            </div>

                            <div className="projects-text-mob bg-light-green text-black">
                                <h3 className="text-sb h5">S.ART</h3>
                                <p className="text-16 text-rg">A modern logo designed for S.Art, blending abstract style with a touch of tradition.</p>
                            </div>
                        </div>

                        <div className="projects-card-mobile">
                            <div className="projects-image-mob bg-light-pink text-black">
                                <video className="site-radius-20 mobile-projects-videos" src="/images/homepage/projects/AutoBot_proj.mp4" width={513} height={406} autoPlay loop muted playsInline></video>
                            </div>

                            <div className="projects-text-mob bg-light-pink">
                                <h3 className="text-sb h5">COVRIZE</h3>
                                <p className="text-16 text-rg">Transform your business with our platform, providing tailored software solutions to meet your unique needs.</p>
                            </div>
                        </div>

                        <div className="projects-card-mobile">
                            <div className="projects-image-mob bg-light-yellow">
                                <video className="site-radius-20 mobile-projects-videos" src="/images/homepage/projects/steamovap-video.mp4" width={513} height={406} autoPlay loop muted playsInline></video>
                            </div>

                            <div className="projects-text-mob bg-light-yellow text-black">
                                <h3 className="text-sb h5">4SEAHUB</h3>
                                <p className="text-16 text-rg">4SEAHUB is a purpose driven logistics and import-export company, setting new standards in trust and quality.</p>
                            </div>
                        </div>

                        <div className="projects-card-mobile">
                            <div className="projects-image-mob bg-skin">
                                <video className="site-radius-20 mobile-projects-videos" src="/images/homepage/projects/AutoBot_proj.mp4" width={513} height={406} autoPlay loop muted playsInline></video>
                            </div>

                            <div className="projects-text-mob bg-skin text-black">
                                <h3 className="text-sb h5">SALES DASHBOARD</h3>
                                <p className="text-16 text-rg">Enhanced decision making, and improved performance tracking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}