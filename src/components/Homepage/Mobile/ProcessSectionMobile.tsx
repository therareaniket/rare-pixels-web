'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ProcessSectionMobile() {

    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = gsap.utils.toArray<HTMLElement>(".process-card-mobile");

        const setActive = (activeIndex: number) => {
            cards.forEach((card, i) => {
                const content = card.querySelector("p");

                if (i === activeIndex) {
                    card.classList.add("active");

                    gsap.to(content, {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        overwrite: true,
                    });
                } else {
                    card.classList.remove("active");

                    gsap.to(content, {
                        opacity: 0,
                        y: 20,
                        duration: 0.4,
                        overwrite: true,
                    });
                }
            });
        };

        setActive(0);

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "+=3000",
            pin: true,
            scrub: true,

            onUpdate: (self) => {
                const progress = self.progress;

                const activeIndex = Math.min(
                    cards.length - 1,
                    Math.floor(progress * cards.length)
                );

                setActive(activeIndex);
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);


    return (
        <>
            <section ref={sectionRef} className="section bg-yellowish process-section-sticky">
                <div className="container">

                    <h2 className="text-sb text-black">Work Process We Follow</h2>

                    <p className="text-16 text-rg text-black">Every project flows through a defined path understanding, planning, designing, building, and refining. This ensures that every decision is intentional and every outcome is crafted with clarity and precision.</p>

                    <div className="process-section-mobile-wrapper">
                        <div className="process-card-mobile">
                            <div className="process-mob-icon">
                                <span className="icon-discover-process"></span>
                            </div>

                            <div className="process-card-mob-text">
                                <h3 className="h2 text-sb text-black text-upper-case">Discover</h3>

                                <p className="text-16 text-rg text-black">
                                    <span>Understanding the foundation</span>
                                    <span>We begin by learning about your business, goals, and audience to build a strong foundation for everything that follows.</span>
                                </p>
                            </div>
                        </div>

                        <div className="process-card-mobile">
                            <div className="process-mob-icon">
                                <span className="icon-strategy-process"></span>
                            </div>

                            <div className="process-card-mob-text">
                                <h3 className="h2 text-sb text-black text-upper-case">Strategise</h3>

                                <p className="text-16 text-rg text-black">
                                    <span>Defining the direction</span>
                                    <span>We shape the structure, user flow, and key decisions to ensure a clear and focused path before execution begins.</span>
                                </p>
                            </div>
                        </div>

                        <div className="process-card-mobile">
                            <div className="process-mob-icon">
                                <span className="icon-create-process"></span>
                            </div>

                            <div className="process-card-mob-text">
                                <h3 className="h2 text-sb text-black text-upper-case">Create</h3>

                                <p className="text-16 text-rg text-black">
                                    <span>Designing the experience</span>
                                    <span>We craft intuitive, visually strong designs that align with your brand and deliver meaningful user experiences.</span>
                                </p>
                            </div>
                        </div>

                        <div className="process-card-mobile">
                            <div className="process-mob-icon">
                                <span className="icon-engineer-process"></span>
                            </div>

                            <div className="process-card-mob-text">
                                <h3 className="h2 text-sb text-black text-upper-case">Engineer</h3>

                                <p className="text-16 text-rg text-black">
                                    <span>Building the solution</span>
                                    <span>We develop scalable, high-performing systems where design and functionality come together seamlessly.</span>
                                </p>
                            </div>
                        </div>

                        <div className="process-card-mobile">
                            <div className="process-mob-icon">
                                <span className="icon-refine-process"></span>
                            </div>

                            <div className="process-card-mob-text">
                                <h3 className="h2 text-sb text-black text-upper-case">Refine</h3>

                                <p className="text-16 text-rg text-black">
                                    <span>Improving with precision</span>
                                    <span>We test, optimize, and fine-tune every detail to ensure the product performs smoothly and meets expectations.</span>
                                </p>
                            </div>
                        </div>

                        <div className="process-card-mobile">
                            <div className="process-mob-icon">
                                <span className="icon-deliver-svg"></span>
                            </div>

                            <div className="process-card-mob-text">
                                <h3 className="h2 text-sb text-black text-upper-case">Deliver</h3>

                                <p className="text-16 text-rg text-black">
                                    <span>Launching with confidence</span>
                                    <span>WWe finalize, deploy, and ensure everything is ready to go live built to perform, scale, and support your growth.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}