'use client';

import { useRef, useEffect } from "react";
import Image from "next/image";
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

        const totalScroll = slider.scrollWidth - window.innerWidth;

        const tween = gsap.to(slider, {
            x: -totalScroll,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: `+=${totalScroll}`,
                scrub: 1,
                pin: true,
            },
        });

        return () => {
            tween.kill();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <section className="section" ref={sectionRef}>
            <div className="container">
                <div className="process-wrapper">
                    <div className="process-title-wrapper">
                        <h2 className="text-sb">Our Projects</h2>

                        <p className="text-16 text-rg">
                            A curated selection of work that reflects how we
                            design, build, and deliver impactful digital
                            experiences.
                        </p>
                    </div>

                    <div className="process-card-wrapper-mobile" ref={sliderRef}>
                        <div className="process-card-mobile">
                            <div className="process-image-mob bg-purple-shade">
                                <Image src="/images/homepage/djk-project.png" alt="" width={330} height={350}></Image>
                            </div>

                            <div className="process-text-mob bg-purple-shade">
                                <h3 className="text-sb h5">DJK</h3>
                                <p className="text-16 text-rg">DJK has delivered trusted HVAC solutions for pharma and food sectors.</p>
                            </div>
                        </div>

                        <div className="process-card-mobile">
                            <div className="process-image-mob bg-light-green">
                                <Image src="/images/homepage/sart-project.png" alt="" width={330} height={350}></Image>
                            </div>

                            <div className="process-text-mob bg-light-green">
                                <h3 className="text-sb h5">S.ART</h3>
                                <p className="text-16 text-rg">A modern logo designed for S.Art, blending abstract style with a touch of tradition.</p>
                            </div>
                        </div>

                        <div className="process-card-mobile">
                            <div className="process-image-mob bg-light-pink">
                                <Image src="/images/homepage/coverize-project.png" alt="" width={330} height={350}></Image>
                            </div>

                            <div className="process-text-mob bg-light-pink">
                                <h3 className="text-sb h5">COVRIZE</h3>
                                <p className="text-16 text-rg">Transform your business with our platform, providing tailored software solutions to meet your unique needs.</p>
                            </div>
                        </div>

                        <div className="process-card-mobile">
                            <div className="process-image-mob bg-light-yellow">
                                <Image src="/images/homepage/seahub-project.png" alt="" width={330} height={350}></Image>
                            </div>

                            <div className="process-text-mob bg-light-yellow">
                                <h3 className="text-sb h5">4SEAHUB</h3>
                                <p className="text-16 text-rg">4SEAHUB is a purpose driven logistics and import-export company, setting new standards in trust and quality.</p>
                            </div>
                        </div>

                        <div className="process-card-mobile">
                            <div className="process-image-mob bg-skin">
                                <Image src="/images/homepage/sales-project.png" alt="" width={330} height={350}></Image>
                            </div>

                            <div className="process-text-mob bg-skin">
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