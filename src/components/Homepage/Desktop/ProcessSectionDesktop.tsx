'use client';

import { useRef } from "react";
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

    const mm = gsap.matchMedia();

    useGSAP(() => {

        mm.add("(min-width: 1200px)", () => {
            if (
                !processSectionRef.current ||
                !containerRef.current ||
                !pointerWrapperRef.current ||
                !leftTitleRef.current ||
                !centerTitleRef.current
            ) return;

            const pointers = gsap.utils.toArray<HTMLElement>(".process-pointer");
            

            gsap.set(leftTitleRef.current, {
                opacity: 0,
                x: 100,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: processSectionRef.current,
                    start: "top top",
                    end: `+=${window.innerHeight * pointers.length * 1.5}`,
                    pin: true,
                    scrub: 1,
                }
            });

            tl
                .to(centerTitleRef.current, {
                    opacity: 0,
                    x: -50,
                    duration: 1,
                })
                .to(
                    leftTitleRef.current,
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                    },
                    "<"
                );

            const container = containerRef.current;

            const containerRect = container.getBoundingClientRect();

            const lastPointer = pointers[pointers.length - 1];
            const lastRect = lastPointer.getBoundingClientRect();

            const moveDistance =
                containerRect.right - lastRect.right;

            const positions = pointers.map(
                p => p.getBoundingClientRect().left
            );

            const deliverPosition = positions[positions.length - 1];

            for (let i = pointers.length - 2; i >= 0; i--) {

                const distance =
                    (deliverPosition - positions[i]) + moveDistance;

                tl.to(pointers[i], {
                    x: `+=${distance}`,
                    duration: 1,
                    ease: "none",
                });
            }

            const elements = gsap.utils.toArray<HTMLElement>(".process-element");
            gsap.set(".process-pointer-text-wrapper p", {
                opacity: 0,
                height: 0,
            });

            const setActiveStepDesktop = (activeIndex: number) => {
                
                pointers.forEach((pointer, i) => {

                    const desc = pointer.querySelector(
                        ".process-pointer-text-wrapper p"
                    );

                    const tick = pointer.querySelector(
                        ".process-complete-tick"
                    );
                    
                    const isActive = i === activeIndex;
                    const isCompleted = i < activeIndex;

                    pointer.classList.toggle("active", isActive);

                    gsap.to(pointer, {
                        opacity: isActive || isCompleted ? 1 : 0.5,
                        duration: 0.3
                    });
                    // gsap.set(".process-pointer-text-wrapper p", {
                    //     opacity: 1,
                    //     overflow: "hidden",
                    //     // maxHeight: 0
                    // });

                    if (tick) {
                        gsap.set(tick, {
                            display: isActive || isCompleted ? "flex" : "none",
                            opacity: isActive || isCompleted ? 1 : 0
                        });
                    }

                    if (desc) {
                        gsap.set(desc, {
                            display: "block"
                        });

                        gsap.to(desc, {
                            opacity: isActive ? 1 : 0,
                            maxHeight: isActive ? 500 : 0,
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    }
                });

                elements.forEach((el, i) => {

                    gsap.to(el, {
                        autoAlpha: i === activeIndex ? 1 : 0,
                        duration: 0.4,
                        onStart: () => {
                            if (i === activeIndex) {
                                gsap.set(el, { display: "block" });
                            }
                        },
                        onComplete: () => {
                            if (i !== activeIndex) {
                                gsap.set(el, { display: "none" });
                            }
                        }
                    });

                });

            };

            gsap.set(pointers, {
                opacity: 0.5,
            });

            gsap.set(elements, {
                autoAlpha: 0,
                display: "none",
            });

            for (let i = 0; i < pointers.length; i++) {

                tl.call(() => {
                    setActiveStepDesktop(i);
                });

                tl.to({}, {
                    duration: 1
                });
            }
        });

        mm.add("(max-width: 1199px)", () => {
            if (
                !processSectionRef.current ||
                !containerRef.current ||
                !elementsRef.current ||
                !pointerWrapperRef.current
            ) return;

            let currentMobileStep = -1;
            const pointers = gsap.utils.toArray<HTMLElement>(".process-pointer-tablet");
            const elements = gsap.utils.toArray<HTMLElement>(".element-tab-wrapper");

            const setActiveStepMobile = (activeIndex: number) => {
                pointers.forEach((pointer, i) => {
                    const desc = pointer.querySelector(".process-text-wrapper");
                    const p = pointer.querySelector(".process-text-wrapper p");
                    const tick = pointer.querySelector(".process-tick-tab");

                    const progressLine = document.querySelector(
                        ".process-vertical-active-line-for-tab"
                    );

                    gsap.to(progressLine, {
                        height: `${((activeIndex + 1) / pointers.length) * 100}%`,
                        duration: 0.5,
                        ease: "power2.out"
                    });

                    const isActive = i === activeIndex;
                    const isCompleted = i < activeIndex;

                    gsap.to(pointer, {
                        maxHeight: isActive ? 500 : 48,
                        duration: 0.6,
                        ease: "power2.out"
                    });
                    if (desc) desc.classList.toggle("active", isActive);

                    gsap.to(pointer, {
                        opacity: isActive || isCompleted ? 1 : 0.5,
                        duration: 0.5,
                        ease: "power2.out"
                    });

                    if (tick) {
                        gsap.set(tick, {
                            opacity: isActive || isCompleted ? 1 : 0,
                            display: isActive || isCompleted ? "flex" : "none"
                        });
                    }

                    gsap.killTweensOf(p);

                    gsap.to(p, {
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 10,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                });

                elements.forEach((el, i) => {
                    const shouldShow = i === activeIndex;
                    if (shouldShow) {
                        gsap.set(el, { display: "flex" });

                        gsap.fromTo(
                            el,
                            {
                                opacity: 0,
                                scale: 0.9,
                                y: 20
                            },
                            {
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                duration: 0.6,
                                ease: "back.out(1.4)"
                            }
                        );
                    } else {
                        gsap.to(el, {
                            opacity: 0,
                            duration: 0.2,
                            onComplete: () => gsap.set(el, { display: "none" })
                        });
                    }
                });
            };

            setActiveStepMobile(0);

            ScrollTrigger.create({
                trigger: processSectionRef.current,
                start: "top top",
                end: `+=${window.innerHeight * pointers.length * 1.5}`,
                pin: true,
                scrub: 2,

                snap: {
                    snapTo: 1 / (pointers.length - 1),
                    duration: 0.8,
                    ease: "power2.inOut"
                },


                onUpdate: (self) => {
                    const step = Math.min(
                        pointers.length - 1,
                        Math.floor(self.progress * pointers.length)
                    );

                    if (step !== currentMobileStep) {
                        currentMobileStep = step;
                        setActiveStepMobile(step);
                    }
                }
            });
        })

        return () => mm.revert();

    }, { scope: processSectionRef });

    return (
        <>
            <section ref={processSectionRef} className="section process-section process-tab-sticky section-yellow-background">
                <div className="process-tab-inner">
                    <div className="container-sm">
                        <div ref={containerRef} className="process-for-desktop">
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
                                    <Image className="process-element" src="/images/homepage/engineer-elements.svg" alt="process-elements" width={317} height={350}></Image>
                                    <Image className="process-element" src="/images/homepage/refine-elements.svg" alt="process-elements" width={347} height={348}></Image>
                                    <Image className="process-element" src="/images/homepage/deliver-elements.svg" alt="process-elements" width={341} height={338}></Image>
                                </div>

                                <div ref={pointerWrapperRef} className="process-pointer-wrapper">
                                    <div className="process-pointer-1 process-pointer">
                                        <div className="process-pointer-svg site-radius-20">
                                            <span className="icon-discover-process text-black"></span>
                                        </div>

                                        <div className="process-pointer-text-wrapper">
                                            <h3 className="text-sb h2">DISCOVER</h3>

                                            <p className="text-rg text-18">
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
                                            <h3 className="text-sb h2">STRATEGIZE</h3>

                                            <p className="text-rg text-18">
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
                                            <h3 className="text-sb h2">CREATE</h3>

                                            <p className="text-rg text-18">
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
                                            <h3 className="text-sb h2">ENGINEER</h3>

                                            <p className="text-rg text-18">
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
                                            <h3 className="text-sb h2">REFINE</h3>

                                            <p className="text-rg text-18">
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
                                            <h3 className="text-sb h2">DELIVER</h3>

                                            <p className="text-rg text-18">
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
                                        <span className="icon-discover-process text-black"></span>
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

                                    <div className="element-tab-wrapper">
                                        <Image className="process-element" src="/images/homepage/discover-elements.svg" alt="process-elements" width={347} height={348}></Image>
                                    </div>
                                </div>

                                <div className="process-pointer-tablet">
                                    <div className="process-icon">
                                        <span className="icon-strategy-process text-black"></span>
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

                                    <div className="element-tab-wrapper">
                                        <Image className="process-element" src="/images/homepage/strategies-elements.svg" alt="process-elements" width={332} height={344}></Image>
                                    </div>
                                </div>

                                <div className="process-pointer-tablet">
                                    <div className="process-icon">
                                        <span className="icon-create-process text-black"></span>
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

                                    <div className="element-tab-wrapper">
                                        <Image className="process-element" src="/images/homepage/create-elements.svg" alt="process-elements" width={292} height={350}></Image>
                                    </div>
                                </div>

                                <div className="process-pointer-tablet">
                                    <div className="process-icon">
                                        <span className="icon-engineer-process text-black"></span>
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

                                    <div className="element-tab-wrapper">
                                        <Image className="process-element" src="/images/homepage/engineer-elements.svg" alt="process-elements" width={317} height={350}></Image>
                                    </div>
                                </div>

                                <div className="process-pointer-tablet">
                                    <div className="process-icon">
                                        <span className="icon-refine-process text-black"></span>
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

                                    <div className="element-tab-wrapper">
                                        <Image className="process-element" src="/images/homepage/refine-elements.svg" alt="process-elements" width={347} height={348}></Image>
                                    </div>
                                </div>

                                <div className="process-pointer-tablet">
                                    <div className="process-icon">
                                        <span className="icon-deliver-svg text-black"></span>
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

                                    <div className="element-tab-wrapper">
                                        <Image className="process-element" src="/images/homepage/deliver-elements.svg" alt="process-elements" width={341} height={338}></Image>
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
