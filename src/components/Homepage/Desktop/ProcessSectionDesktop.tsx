'use client';

import { useEffect, useRef } from "react";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSectionDesktop() {

    const processSectionRef = useRef<HTMLElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const titleWrapperRef = useRef<HTMLDivElement | null>(null);
    const elementsRef = useRef<HTMLDivElement | null>(null);
    const pointerWrapperRef = useRef<HTMLDivElement | null>(null);
    const elementWrapperRef = useRef<HTMLDivElement | null>(null);
    const centerTitleRef = useRef<HTMLDivElement | null>(null);
    const leftTitleRef = useRef<HTMLDivElement | null>(null);

    let currentStep = -1;

    useGSAP(() => {
        if (
            !processSectionRef.current ||
            !containerRef.current ||
            !titleWrapperRef.current ||
            !elementsRef.current ||
            !pointerWrapperRef.current
        ) return;

        gsap.set(elementsRef.current, { display: "block", yPercent: -50, opacity: 0 });

        const pointers = gsap.utils.toArray<HTMLElement>(".process-pointer");
        const elements = gsap.utils.toArray<HTMLElement>(".process-element");

        const setActiveStep = (activeIndex: number) => {
            pointers.forEach((pointer, i) => {
                const desc = pointer.querySelector(".process-pointer-text-wrapper");
                const p = pointer.querySelector(".process-pointer-text-wrapper p");
                const tick = pointer.querySelector(".process-complete-tick");

                const isActive = activeIndex >= 0 && i === activeIndex;
                const isCompleted = activeIndex > 0 && i < activeIndex;

                pointer.classList.toggle("active", isActive);

                if (isActive) {
                    desc?.classList.add("active");
                } else {
                    desc?.classList.remove("active");
                }

                gsap.set(pointer, {
                    opacity: isActive || isCompleted ? 1 : 0.5
                });

                if (tick) {
                    gsap.set(tick, {
                        opacity: isCompleted ? 1 : 0,
                        display: isCompleted ? "flex" : "none"
                    });
                }

                if (p) {
                    gsap.to(p, {
                        opacity: isActive ? 1 : 0,
                        height: isActive ? "auto" : 0,
                        duration: 0.4,
                        overwrite: true
                    });
                }
            });

            elements.forEach((el, i) => {
                const shouldShow =
                    activeIndex >= 0 && i === activeIndex;

                gsap.to(el, {
                    autoAlpha: shouldShow ? 1 : 0,
                    duration: 0.4,
                    ease: "power2.out",
                    overwrite: true,
                    onStart: () => {
                        if (shouldShow) {
                            gsap.set(el, { display: "block" });
                        }
                    },
                    onComplete: () => {
                        if (!shouldShow) {
                            gsap.set(el, { display: "none" });
                        }
                    }
                });
            });
        };

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: processSectionRef.current,
                start: "top -50px",
                end: `+=${window.innerHeight * pointers.length * 2}`,
                pin: true,
                scrub: 1.2,
                invalidateOnRefresh: true,

                snap: {
                    snapTo: 1 / (pointers.length - 1),
                    duration: { min: 1, max: 1.3 },
                    ease: "power2.out"
                },

                onUpdate: (self) => {
                    const totalSteps = pointers.length + 1;

                    const activeIndex = Math.min(
                        pointers.length - 1,
                        Math.floor(self.progress * totalSteps) - 1
                    );

                    if (activeIndex !== currentStep) {
                        currentStep = activeIndex;
                        setActiveStep(activeIndex);
                    }
                }
            }
        });

        gsap.set(pointers, { opacity: 0.5 });

        gsap.set(elements, {
            autoAlpha: 0,
            display: "none"
        });

        const centerRect = centerTitleRef.current?.getBoundingClientRect();
        const leftRect = leftTitleRef.current?.getBoundingClientRect();

        if (centerRect && leftRect) {
            const offset = centerRect.left - leftRect.left;

            gsap.set(leftTitleRef.current, {
                x: offset,
                opacity: 0
            });
        }

        pointers.forEach((pointer) => {
            const p = pointer.querySelector(".process-pointer-text-wrapper p");

            gsap.set(p, {
                height: 0,
                opacity: 0
            });
        });

        tl.to(containerRef.current, {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "100%",
            duration: 1
        }, 0)

        tl.to(centerTitleRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
        }, 0);

        tl.to(leftTitleRef.current, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.inOut"
        }, 0)

            .to(pointerWrapperRef.current, {
                marginLeft: "auto",
                duration: 0.9,
                ease: "power2.inOut"
            }, 0)

            .to(pointers, {
                translateX: 0,
                stagger: 0.02,
                duration: 1,
                ease: "power2.inOut"
            }, 0)

            .to(elementsRef.current, {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "back.out(1.4)"
            }, 0.2);

        pointers.forEach((pointer, index) => {
            const currentDesc = pointer.querySelector(".process-pointer-text-wrapper");
            const currentP = pointer.querySelector(".process-pointer-text-wrapper p");
            const currentElement = elements[index];
            const prevElement = index > 0 ? elements[index - 1] : null;
            if (!currentP || !currentDesc || !currentElement) return;

            const stepStartTime = 1.0 + index * 1.0;
            if (index > 0) {
                const prevPointer = pointers[index - 1];
                const prevDesc = prevPointer.querySelector(".process-pointer-text-wrapper");
                const prevP = prevPointer.querySelector(".process-pointer-text-wrapper p");

                if (prevP && prevDesc) {
                    tl.to(prevP, { display: "none", height: 0, opacity: 0, duration: 0.4 }, stepStartTime)
                        .to(prevPointer, { opacity: 1, duration: 1 }, stepStartTime)
                }

                if (prevElement) {
                    tl.to(prevElement, { autoAlpha: 0, display: "none", duration: 0.2 }, stepStartTime)
                        .to(currentElement, { autoAlpha: 1, display: "block", duration: 0.4 }, stepStartTime +
                            0.1);
                }

                tl.to(currentP, {
                    display: "flex", height: "auto", opacity: 1, paddingTop: "20px", duration: 0.6
                }, stepStartTime + 0.1)
                    .to(pointer, { opacity: 1, duration: 0.6 }, stepStartTime + 0.1)
            }
            tl.to({}, { duration: 1 });
        });

    }, { scope: processSectionRef });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = gsap.utils.toArray<HTMLElement>(".process-pointer-tablet");

        const activeLine = document.querySelector(".process-vertical-active-line-for-tab") as HTMLElement

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
            trigger: processSectionRef.current,
            start: "top top",
            end: "+=4000",
            // pin: true,
            scrub: true,

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
            <section ref={processSectionRef} className="section bg-light-yellow process-section process-tab-sticky">
                <div className="process-tab-inner">
                    <div className="container-sm">
                        <div ref={containerRef} className="process-for-desktop">
                            {/* <div ref={titleWrapperRef} className="process-title-text-wrapper text-black">
                                <h2 className="text-sb">Work Process We Follow</h2>

                                <p className="text-rg text-18">Every great outcome starts with understanding. We move from insight to execution through a process designed to reduce guesswork, improve collaboration, and build solutions that perform.</p>
                            </div> */}

                            <div ref={titleWrapperRef} className="process-title-wrapper">
                                <div ref={centerTitleRef} className="process-title-text-wrapper process-title-center">
                                    <h2 className="text-sb">Work Process We Follow</h2>

                                    <p className="text-rg text-18">
                                        Every great outcome starts with understanding. We move from insight to execution through a process designed to reduce guesswork, improve collaboration, and build solutions that perform.
                                    </p>
                                </div>

                                <div ref={leftTitleRef} className="process-title-text-wrapper process-title-left">
                                    <h2 className="text-sb">Work Process We Follow</h2>

                                    <p className="text-rg text-18">
                                        Every great outcome starts with understanding. We move from insight to execution through a process designed to reduce guesswork, improve collaboration, and build solutions that perform.
                                    </p>
                                </div>
                            </div>

                            <div ref={elementWrapperRef} className="process-elements-wrapper">
                                <div ref={elementsRef} className="process-element-art-board">
                                    <Image className="process-element" src="/images/homepage/discover-elements.svg" alt="process-elements" width={347} height={348}></Image>
                                    <Image className="process-element" src="/images/homepage/strategies-elements.svg" alt="process-elements" width={332} height={344}></Image>
                                    <Image className="process-element" src="/images/homepage/create-elements.svg" alt="process-elements" width={292} height={350}></Image>
                                    <Image className="process-element" src="/images/homepage/refine-elements.svg" alt="process-elements" width={347} height={348}></Image>
                                    <Image className="process-element" src="/images/homepage/engineer-elements.svg" alt="process-elements" width={317} height={350}></Image>
                                    <Image className="process-element" src="/images/homepage/deliver-elements.svg" alt="process-elements" width={341} height={338}></Image>
                                </div>

                                <div ref={pointerWrapperRef} className="process-pointer-wrapper active">
                                    <div className="process-pointer-1 process-pointer active text-black">
                                        <div className="process-pointer-svg site-radius-20">
                                            <span className="icon-discover-process"></span>
                                        </div>

                                        <div className="process-pointer-text-wrapper">
                                            <h2 className="text-sb text-black">DISCOVER</h2>

                                            <p className="text-rg text-18 text-black">
                                                <span>Every meaningful solution begins with understanding.</span>
                                                <span>We take time to understand your business, your users, and the challenges standing in the way of growth. The better the questions, the better the outcome.</span>
                                            </p>
                                        </div>

                                        <div className="process-complete-tick">
                                            <Image src="/images/homepage/process-completed-tick.svg" alt="process-completed-tick" width={27} height={20}></Image>
                                        </div>
                                    </div>

                                    <div className="process-pointer-2 process-pointer">
                                        <div className="process-pointer-svg site-radius-20 text-black">
                                            <span className="icon-strategy-process"></span>
                                        </div>

                                        <div className="process-pointer-text-wrapper">
                                            <h2 className="text-sb text-black">STRATEGISE</h2>

                                            <p className="text-rg text-18 text-black">
                                                <span>Direction creates momentum.</span>
                                                <span>Ideas become impactful when backed by clarity. We bring together research, insights, and business goals to build a roadmap that gives every decision a purpose.</span>
                                            </p>
                                        </div>

                                        <div className="process-complete-tick">
                                            <Image src="/images/homepage/process-completed-tick.svg" alt="process-completed-tick" width={27} height={20}></Image>
                                        </div>
                                    </div>

                                    <div className="process-pointer-3 process-pointer">
                                        <div className="process-pointer-svg site-radius-20 text-black">
                                            <span className="icon-create-process"></span>
                                        </div>

                                        <div className="process-pointer-text-wrapper">
                                            <h2 className="text-sb text-black">CREATE</h2>

                                            <p className="text-rg text-18 text-black">
                                                <span>Creativity with intention.</span>
                                                <span>We design experiences, identities, and interactions that feel intuitive, leave an impression, and make your brand impossible to overlook.</span>
                                            </p>
                                        </div>

                                        <div className="process-complete-tick">
                                            <Image src="/images/homepage/process-completed-tick.svg" alt="process-completed-tick" width={27} height={20}></Image>
                                        </div>
                                    </div>

                                    <div className="process-pointer-4 process-pointer">
                                        <div className="process-pointer-svg site-radius-20 text-black">
                                            <span className="icon-engineer-process"></span>
                                        </div>

                                        <div className="process-pointer-text-wrapper">
                                            <h2 className="text-sb text-black">ENGINEER</h2>

                                            <p className="text-rg text-18 text-black">
                                                <span>Built for the real world.</span>
                                                <span>From websites to digital products, we develop solutions that are scalable, reliable, and engineered to perform long after launch.</span>
                                            </p>
                                        </div>

                                        <div className="process-complete-tick">
                                            <Image src="/images/homepage/process-completed-tick.svg" alt="process-completed-tick" width={27} height={20}></Image>
                                        </div>
                                    </div>

                                    <div className="process-pointer-5 process-pointer">
                                        <div className="process-pointer-svg site-radius-20 text-black">
                                            <span className="icon-refine-process"></span>
                                        </div>

                                        <div className="process-pointer-text-wrapper">
                                            <h2 className="text-sb text-black">REFINE</h2>

                                            <p className="text-rg text-18 text-black">
                                                <span>The details shape the experience.</span>
                                                <span>We test, improve, and fine-tune every interaction because the smallest refinements often make the biggest difference.</span>
                                            </p>
                                        </div>

                                        <div className="process-complete-tick">
                                            <Image src="/images/homepage/process-completed-tick.svg" alt="process-completed-tick" width={27} height={20}></Image>
                                        </div>
                                    </div>

                                    <div className="process-pointer-6 process-pointer">
                                        <div className="process-pointer-svg site-radius-20 text-black">
                                            <span className="icon-deliver-svg"></span>
                                        </div>

                                        <div className="process-pointer-text-wrapper">
                                            <h2 className="text-sb text-black">DELIVER</h2>

                                            <p className="text-rg text-18 text-black">
                                                <span>Launch is where the journey expands.</span>
                                                <span>We deliver solutions with precision and stay invested in their growth, ensuring they continue to create value as your business evolves.</span>
                                            </p>
                                        </div>

                                        <div className="process-complete-tick">
                                            <Image src="/images/homepage/process-completed-tick.svg" alt="process-completed-tick" width={27} height={20}></Image>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="process-section-tablet-wrapper">
                            <div className="process-tablet-title">
                                <h2 className="text-sb">Work Process We Follow</h2>

                                <p className="text-rg text-18">Every great outcome starts with understanding. We move from insight to execution through a   process designed to reduce guesswork, improve collaboration, and build solutions that perform.</p>
                            </div>

                            <div className="process-pointer-wrapper">
                                <div className="process-vertical-line-for-tab"></div>
                                <div className="process-vertical-active-line-for-tab"></div>

                                <div className="process-pointer-tablet active">
                                    <div className="process-icon">
                                        <span className="icon-discover-process"></span>
                                    </div>

                                    <div className="process-text-wrapper">
                                        <div className="process-tick-tab-wrapper">
                                            <h3 className="text-upper-case h2 text-sb">Discover</h3>

                                            <div className="process-tick-tab">
                                                <Image src="/images/homepage/process-completed-tick.svg" alt="process-tick" width={27} height={20}></Image>
                                            </div>
                                        </div>

                                        <p className="text-18 text-rg">
                                            <span>Every meaningful solution begins with understanding.</span>

                                            <span>We take time to understand your business, your users, and the challenges standing in the way of growth. The better the questions, the better the outcome.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="process-pointer-tablet">
                                    <div className="process-icon">
                                        <span className="icon-strategy-process"></span>
                                    </div>

                                    <div className="process-text-wrapper">
                                        <div className="process-tick-tab-wrapper">
                                            <h3 className="text-upper-case h2 text-sb">Strategise</h3>

                                            <div className="process-tick-tab">
                                                <Image src="/images/homepage/process-completed-tick.svg" alt="process-tick" width={27} height={20}></Image>
                                            </div>
                                        </div>

                                        <p className="text-18 text-rg">
                                            <span>Direction creates momentum.</span>

                                            <span>Ideas become impactful when backed by clarity. We bring together research, insights, and business goals to build a roadmap that gives every decision a purpose.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="process-pointer-tablet">
                                    <div className="process-icon">
                                        <span className="icon-create-process"></span>
                                    </div>

                                    <div className="process-text-wrapper">
                                        <div className="process-tick-tab-wrapper">
                                            <h3 className="text-upper-case h2 text-sb">Create</h3>

                                            <div className="process-tick-tab">
                                                <Image src="/images/homepage/process-completed-tick.svg" alt="process-tick" width={27} height={20}></Image>
                                            </div>
                                        </div>

                                        <p className="text-18 text-rg">
                                            <span>Creativity with intention.</span>

                                            <span>We design experiences, identities, and interactions that feel intuitive, leave an impression, and make your brand impossible to overlook.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="process-pointer-tablet">
                                    <div className="process-icon">
                                        <span className="icon-engineer-process"></span>
                                    </div>

                                    <div className="process-text-wrapper">
                                        <div className="process-tick-tab-wrapper">
                                            <h3 className="text-upper-case h2 text-sb">Engineer</h3>

                                            <div className="process-tick-tab">
                                                <Image src="/images/homepage/process-completed-tick.svg" alt="process-tick" width={27} height={20}></Image>
                                            </div>
                                        </div>

                                        <p className="text-18 text-rg">
                                            <span>Built for the real world.</span>

                                            <span>From websites to digital products, we develop solutions that are scalable, reliable, and engineered to perform long after launch.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="process-pointer-tablet">
                                    <div className="process-icon">
                                        <span className="icon-refine-process"></span>
                                    </div>

                                    <div className="process-text-wrapper">
                                        <div className="process-tick-tab-wrapper">
                                            <h3 className="text-upper-case h2 text-sb">Refine</h3>

                                            <div className="process-tick-tab">
                                                <Image src="/images/homepage/process-completed-tick.svg" alt="process-tick" width={27} height={20}></Image>
                                            </div>
                                        </div>

                                        <p className="text-18 text-rg">
                                            <span>The details shape the experience.</span>

                                            <span>We test, improve, and fine-tune every interaction because the smallest refinements often make the biggest difference.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="process-pointer-tablet">
                                    <div className="process-icon">
                                        <span className="icon-deliver-svg"></span>
                                    </div>

                                    <div className="process-text-wrapper">
                                        <div className="process-tick-tab-wrapper">
                                            <h3 className="text-upper-case h2 text-sb">DELIVER</h3>

                                            <div className="process-tick-tab">
                                                <Image src="/images/homepage/process-completed-tick.svg" alt="process-tick" width={27} height={20}></Image>
                                            </div>
                                        </div>

                                        <p className="text-18 text-rg">
                                            <span>Launch is where the journey expands.</span>

                                            <span>We deliver solutions with precision and stay invested in their growth, ensuring they continue to create value as your business evolves.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}