'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSectionMobile() {

    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {

        const cards = gsap.utils.toArray<HTMLElement>(".process-card-mobile");
        const activeLine = document.querySelector(".process-vertical-line-active") as HTMLElement

        const setActive = (activeIndex: number) => {
            cards.forEach((card, i) => {
                const content = card.querySelector("p");
                const tick = card.querySelector(".process-mobile-tick");

                const isOpen = i >= activeIndex;

                card.classList.toggle("active", isOpen);
                card.classList.toggle("completed", !isOpen);

                gsap.to(content, {
                    opacity: 1,
                    y: isOpen ? 0 : 20,
                    duration: 0.4,
                    overwrite: true,
                });

                gsap.to(tick, {
                    opacity: isOpen ? 0 : 1,
                    scale: isOpen ? 0.5 : 1,
                    duration: 0.3,
                    overwrite: true,
                });
            });

            const progress = activeIndex / cards.length;

            gsap.to(activeLine, {
                height: `${progress * 90}%`,
                duration: 1,
                overwrite: true,
            });
        };

        cards.forEach((card) => {
            card.classList.add("active");
        });

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: () => "+=" + (cards.length * 500),
            invalidateOnRefresh: true,
            // pin: true,
            scrub: true,
            markers: true,

            onUpdate: (self) => {
                const activeIndex = Math.min(
                    cards.length,
                    Math.floor(self.progress * (cards.length + 1))
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
            <section ref={sectionRef} className="section section-yellow-background process-section-sticky">
                <div className="process-section-inner">
                    <div className="container">

                        <h2 className="text-sb">Work Process We Follow</h2>

                        <p className="text-16 text-rg">Every project flows through a defined path understanding, planning, designing, building, and refining. This ensures that every decision is intentional and every outcome is crafted with clarity and precision.</p>

                        <div className="process-section-mobile-wrapper">

                            <div className="process-vertical-line"></div>
                            <div className="process-vertical-line-active"></div>

                            <div className="process-card-mobile">
                                <div className="process-mob-icon">
                                    <span className="icon-discover-process"></span>
                                </div>

                                <div className="process-card-mob-text">
                                    <div className="process-title-text">
                                        <h3 className="h2 text-sb text-upper-case">Discover</h3>
                                        <div className="process-mobile-tick">
                                            <Image src="/images/homepage/process-completed-tick.svg" alt="process-tick" width={16} height={12}></Image>
                                        </div>
                                    </div>

                                    <p className="text-16 text-rg">
                                        <span>Every meaningful solution begins with understanding.</span>
                                        <span>We take time to understand your business, your users, and the challenges standing in the way of growth. The better the questions, the better the outcome.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="process-card-mobile">
                                <div className="process-mob-icon">
                                    <span className="icon-strategy-process"></span>
                                </div>

                                <div className="process-card-mob-text">
                                    <div className="process-title-text">
                                        <h3 className="h2 text-sb text-upper-case">Strategize</h3>
                                        <div className="process-mobile-tick">
                                            <Image src="/images/homepage/process-completed-tick.svg" alt="process-tick" width={16} height={12}></Image>
                                        </div>
                                    </div>

                                    <p className="text-16 text-rg">
                                        <span>Direction creates momentum.</span>
                                        <span>Ideas become impactful when backed by clarity. We bring together research, insights, and business goals to build a roadmap that gives every decision a purpose.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="process-card-mobile">
                                <div className="process-mob-icon">
                                    <span className="icon-create-process"></span>
                                </div>

                                <div className="process-card-mob-text">
                                    <div className="process-title-text">
                                        <h3 className="h2 text-sb text-upper-case">Create</h3>
                                        <div className="process-mobile-tick">
                                            <Image src="/images/homepage/process-completed-tick.svg" alt="process-tick" width={16} height={12}></Image>
                                        </div>
                                    </div>

                                    <p className="text-16 text-rg ">
                                        <span>Creativity with intention.</span>
                                        <span>We design experiences, identities, and interactions that feel intuitive, leave an impression, and make your brand impossible to overlook.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="process-card-mobile">
                                <div className="process-mob-icon">
                                    <span className="icon-engineer-process"></span>
                                </div>

                                <div className="process-card-mob-text">
                                    <div className="process-title-text">
                                        <h3 className="h2 text-sb text-upper-case">Engineer</h3>
                                        <div className="process-mobile-tick">
                                            <Image src="/images/homepage/process-completed-tick.svg" alt="process-tick" width={16} height={12}></Image>
                                        </div>
                                    </div>

                                    <p className="text-16 text-rg">
                                        <span>Built for the real world.</span>
                                        <span>We develop scalable, high-performing systems where design and functionality come together seamlessly.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="process-card-mobile">
                                <div className="process-mob-icon">
                                    <span className="icon-refine-process"></span>
                                </div>

                                <div className="process-card-mob-text">
                                    <div className="process-title-text">
                                        <h3 className="h2 text-sb text-upper-case">Refine</h3>

                                        <div className="process-mobile-tick">
                                            <Image src="/images/homepage/process-completed-tick.svg" alt="process-tick" width={16} height={12}></Image>
                                        </div>
                                    </div>

                                    <p className="text-16 text-rg">
                                        <span>The details shape the experience.</span>
                                        <span>We test, improve, and fine-tune every interaction because the smallest refinements often make the biggest difference.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="process-card-mobile">
                                <div className="process-mob-icon">
                                    <span className="icon-deliver-svg"></span>
                                </div>

                                <div className="process-card-mob-text">
                                    <div className="process-title-text">
                                        <h3 className="h2 text-sb text-upper-case">Deliver</h3>

                                        <div className="process-mobile-tick">
                                            <Image src="/images/homepage/process-completed-tick.svg" alt="process-tick" width={16} height={12}></Image>
                                        </div>
                                    </div>

                                    <p className="text-16 text-rg">
                                        <span>Launch is where the journey expands.</span>
                                        <span>We deliver solutions with precision and stay invested in their growth, ensuring they continue to create value as your business evolves.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}