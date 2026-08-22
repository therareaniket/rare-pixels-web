'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSectionDesktop() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const pointersRef = useRef<HTMLDivElement[]>([]);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const completedLineRef = useRef<HTMLDivElement>(null);

    const tabletPointersRef = useRef<HTMLDivElement[]>([]);

    const addTabletPointerRef = (el: HTMLDivElement | null) => {
        if (el && !tabletPointersRef.current.includes(el)) {
            tabletPointersRef.current.push(el);
        }
    };

    const addImageRef = (el: HTMLImageElement | null) => {
        if (el && !imagesRef.current.includes(el)) {
            imagesRef.current.push(el);
        }
    };

    const addPointerRef = (el: HTMLDivElement | null) => {
        if (el && !pointersRef.current.includes(el)) {
            pointersRef.current.push(el);
        }
    };

    useLayoutEffect(() => {
        const mm = gsap.matchMedia();

        // Desktop Animation
        mm.add("(min-width: 1200px)", () => {
            const ctx = gsap.context(() => {
                const container = document.querySelector(".container-sm") as HTMLElement;
                const title = titleRef.current as unknown as HTMLDivElement;

                const containerStyles = getComputedStyle(container);

                const paddingLeft = parseFloat(containerStyles.paddingLeft);
                const paddingRight = parseFloat(containerStyles.paddingRight);

                const contentWidth =
                    container.offsetWidth - paddingLeft - paddingRight;

                const moveX =
                    (contentWidth - title.offsetWidth) / 2;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "+=6000",
                        scrub: 2,
                        pin: true,
                        anticipatePin: 1,
                    },
                });

                tl.to(title, {
                    x: -moveX,
                    ease: "none",
                    duration: 1,
                });

                tl.to(
                    pointersRef.current,
                    {
                        marginLeft: 'auto',
                        ease: "none",
                        stagger: 0.05,
                        duration: 3,
                    },
                    ">"
                );

                const setActive = (index: number) => {
                    const state = Flip.getState(pointersRef.current);

                    pointersRef.current.forEach((item, i) => {
                        const isActive = i === index;

                        item.classList.toggle("active", isActive);
                        item.classList.toggle("completed", i <= index);
                    });

                    Flip.from(state, {
                        duration: 0.7,
                        ease: "power2.inOut",
                        absolute: false,
                        nested: true,
                    });

                    pointersRef.current.forEach((item, i) => {
                        const isActive = i === index;

                        const text = item.querySelector(".process-pointer-text p");
                        const heading = item.querySelector(".tick-mark-wrapper");

                        if (isActive) {
                            gsap.killTweensOf([heading, text]);

                            gsap.to([heading, text], {
                                opacity: 1,
                                y: 0,
                                duration: 0.4,
                                ease: "power2.out",
                                stagger: 0.1,
                                overwrite: true,
                            });
                        }
                    });

                    imagesRef.current.forEach((item, i) => {
                        item.classList.toggle("active", i === index);
                    });
                };

                const clearActive = () => {
                    pointersRef.current.forEach((item) => {
                        item.classList.remove("active");
                        item.classList.remove("completed");
                    });

                    imagesRef.current.forEach((item) => {
                        item.classList.remove("active");
                    });
                };

                for (let i = 0; i < pointersRef.current.length; i++) {
                    tl.to({}, {
                        duration: 2,
                        onStart: () => setActive(i),

                        onReverseComplete: () => {
                            if (i > 0) {
                                setActive(i - 1);
                            } else {
                                clearActive();
                            }
                        }
                    });
                }
            }, sectionRef);

            return () => ctx.revert();
        });

        // Tablet Animation
        mm.add("(max-width: 1199px)", () => {
            const cards = tabletPointersRef.current;

            const sectionInner = document.querySelector(
                ".process-section-inner"
            ) as HTMLElement;


            cards.forEach((card) => {
                card.classList.add("active");
                card.classList.remove("closed");
            });

            const setClosed = (index: number) => {
                cards.forEach((card, i) => {
                    const isLastCard = i === cards.length - 1;

                    card.classList.toggle(
                        "closed",
                        isLastCard ? false : i < index
                    );

                    card.classList.toggle(
                        "active",
                        isLastCard ? true : i >= index
                    );

                    card.classList.toggle(
                        "completed",
                        isLastCard
                            ? index >= cards.length
                            : i < index
                    );
                });

                const activeIcon = cards[Math.min(index, cards.length - 1)]
                    ?.querySelector(".process-tablet-icon") as HTMLElement;

                if (activeIcon && completedLineRef.current) {
                    gsap.to(completedLineRef.current, {
                        height:
                            activeIcon.offsetTop +
                            activeIcon.offsetHeight / 2,
                        duration: 0.5,
                        ease: "power2.out",
                    });
                }
            };

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=6000",
                    scrub: 2,
                    // pin: true,
                    // anticipatePin: 1,
                }
            });

            cards.forEach((_, index) => {
                tl.to({}, {
                    duration: 3,

                    onStart: () => {
                        setClosed(index);
                    },

                    onReverseComplete: () => {
                        if (index > 0) {
                            setClosed(index - 1);
                        } else {
                            cards.forEach((card) => {
                                card.classList.remove("closed");
                                card.classList.add("active");
                            });
                        }
                    }
                });
            });

            tl.to({}, {
                duration: 3,
                onStart: () => {
                    setClosed(cards.length);
                },
            })

            return () => {
                tl.scrollTrigger?.kill();
                tl.kill();
            };
        });

        return () => mm.revert();
    }, []);

    return (
        <>
            <section ref={sectionRef} className="section section-yellow-background process-section-sticky">
                <div className="process-section-inner">
                    <div className="container-sm">
                        <div ref={titleRef} className="process-section-title active">
                            <h2 className="text-sb">Work Process We Follow</h2>

                            <p className="text-18 text-rg">Every great outcome starts with understanding. We move from insight to execution through a   process designed to reduce guesswork, improve collaboration, and build solutions that perform.</p>
                        </div>

                        <div className="process-elements-pointer process-section-desktop">
                            <div className="process-element">
                                <Image ref={addImageRef} className="process-element-image" src="/images/homepage/process/discover-elements.svg" alt="discover-element" width={350} height={350}></Image>
                                <Image ref={addImageRef} className="process-element-image" src="/images/homepage/process/strategies-elements.svg" alt="discover-element" width={332} height={344}></Image>
                                <Image ref={addImageRef} className="process-element-image" src="/images/homepage/process/create-elements.svg" alt="discover-element" width={292} height={350}></Image>
                                <Image ref={addImageRef} className="process-element-image" src="/images/homepage/process/engineer-elements.svg" alt="discover-element" width={317} height={350}></Image>
                                <Image ref={addImageRef} className="process-element-image" src="/images/homepage/process/refine-elements.svg" alt="discover-element" width={347} height={348}></Image>
                                <Image ref={addImageRef} className="process-element-image" src="/images/homepage/process/deliver-elements.svg" alt="discover-element" width={341} height={350}></Image>
                            </div>

                            <div className="process-pointer-wrapper">
                                <div ref={addPointerRef} className="process-pointer">
                                    <div className="process-pointer-icon">
                                        <span className="icon-discover-process"></span>
                                    </div>

                                    <div className="process-pointer-text">
                                        <div className="tick-mark-wrapper">
                                            <h3 className="h2 text-sb text-upper-case">Discover</h3>
                                            <Image className="process-completed" src="/images/homepage/process/process-completed-tick.svg" alt="tick" width={27} height={20}></Image>
                                        </div>

                                        <p className="text-18 text-rg">
                                            <span>Every meaningful solution begins with understanding.</span>
                                            <span>We take time to understand your business, your users, and the challenges standing in the way of growth. The better the questions, the better the outcome.</span>
                                        </p>
                                    </div>

                                </div>

                                <div ref={addPointerRef} className="process-pointer">
                                    <div className="process-pointer-icon">
                                        <span className="icon-strategy-process"></span>
                                    </div>

                                    <div className="process-pointer-text">
                                        <div className="tick-mark-wrapper">

                                            <h3 className="h2 text-sb text-upper-case">Strategise</h3>
                                            <Image className="process-completed" src="/images/homepage/process/process-completed-tick.svg" alt="tick" width={27} height={20}></Image>
                                        </div>

                                        <p className="text-18 text-rg">
                                            <span>Direction creates momentum.</span>
                                            <span>Ideas become impactful when backed by clarity. We bring together research, insights, and business goals to build a roadmap that gives every decision a purpose.</span>
                                        </p>
                                    </div>
                                </div>

                                <div ref={addPointerRef} className="process-pointer">
                                    <div className="process-pointer-icon">
                                        <span className="icon-create-process"></span>
                                    </div>

                                    <div className="process-pointer-text">
                                        <div className="tick-mark-wrapper">
                                            <h3 className="h2 text-sb text-upper-case">Create</h3>

                                            <Image className="process-completed" src="/images/homepage/process/process-completed-tick.svg" alt="tick" width={27} height={20}></Image>
                                        </div>

                                        <p className="text-18 text-rg">
                                            <span>Creativity with intention.</span>
                                            <span>We design experiences, identities, and interactions that feel intuitive, leave an impression, and make your brand impossible to overlook.</span>
                                        </p>
                                    </div>
                                </div>

                                <div ref={addPointerRef} className="process-pointer">
                                    <div className="process-pointer-icon">
                                        <span className="icon-engineer-process"></span>
                                    </div>

                                    <div className="process-pointer-text">
                                        <div className="tick-mark-wrapper">

                                            <h3 className="h2 text-sb text-upper-case">Engineer</h3>
                                            <Image className="process-completed" src="/images/homepage/process/process-completed-tick.svg" alt="tick" width={27} height={20}></Image>
                                        </div>

                                        <p className="text-18 text-rg">
                                            <span>Built for the real world.</span>
                                            <span>From websites to digital products, we develop solutions that are scalable, reliable, and engineered to perform long after launch.</span>
                                        </p>
                                    </div>
                                </div>

                                <div ref={addPointerRef} className="process-pointer">
                                    <div className="process-pointer-icon">
                                        <span className="icon-refine-process"></span>
                                    </div>

                                    <div className="process-pointer-text">
                                        <div className="tick-mark-wrapper">

                                            <h3 className="h2 text-sb text-upper-case">Refine</h3>
                                            <Image className="process-completed" src="/images/homepage/process/process-completed-tick.svg" alt="tick" width={27} height={20}></Image>
                                        </div>

                                        <p className="text-18 text-rg">
                                            <span>The details shape the experience.</span>
                                            <span>We test, improve, and fine-tune every interaction because the smallest refinements often make the biggest difference.</span>
                                        </p>
                                    </div>
                                </div>

                                <div ref={addPointerRef} className="process-pointer">
                                    <div className="process-pointer-icon">
                                        <span className="icon-deliver-svg"></span>
                                    </div>

                                    <div className="process-pointer-text">
                                        <div className="tick-mark-wrapper">

                                            <h3 className="h2 text-sb text-upper-case">deliver</h3>
                                            <Image className="process-completed" src="/images/homepage/process/process-completed-tick.svg" alt="tick" width={27} height={20}></Image>
                                        </div>

                                        <p className="text-18 text-rg">
                                            <span>Launch is where the journey expands.</span>
                                            <span>We deliver solutions with precision and stay invested in their growth, ensuring they continue to create value as your business evolves.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="process-section-tablet">
                            <div className="process-tablet-line"></div>
                            <div ref={completedLineRef} className="process-tablet-line-completed"></div>

                            <div ref={addTabletPointerRef} className="process-pointer-tablet active">
                                <div className="process-tablet-icon">
                                    <span className="icon-discover-process"></span>
                                </div>

                                <div className="process-text-wrapper-tablet">
                                    <div className="tick-mark-wrapper">
                                        <h3 className="h2 text-sb text-upper-case">Discover</h3>
                                        <Image className="process-completed" src="/images/homepage/process/process-completed-tick.svg" alt="tick" width={27} height={20}></Image>
                                    </div>

                                    <p className="text-18 text-rg">
                                        <span>Every meaningful solution begins with understanding.</span>
                                        <span>We take time to understand your business, your users, and the challenges standing in the way of growth. The better the questions, the better the outcome.</span>
                                    </p>
                                </div>

                                <div className="process-element-tablet">
                                    <Image className="process-element-image-tablet" src="/images/homepage/process/discover-elements.svg" alt="discover-element" width={350} height={350}></Image>
                                </div>
                            </div>

                            <div ref={addTabletPointerRef} className="process-pointer-tablet">
                                <div className="process-tablet-icon">
                                    <span className="icon-strategy-process"></span>
                                </div>

                                <div className="process-text-wrapper-tablet">
                                    <div className="tick-mark-wrapper">
                                        <h3 className="h2 text-sb text-upper-case">Strategise</h3>
                                        <Image className="process-completed" src="/images/homepage/process/process-completed-tick.svg" alt="tick" width={27} height={20}></Image>
                                    </div>
                                    <p className="text-18 text-rg">
                                        <span>Direction creates momentum.</span>
                                        <span>Ideas become impactful when backed by clarity. We bring together research, insights, and business goals to build a roadmap that gives every decision a purpose.</span>
                                    </p>
                                </div>

                                <div className="process-element-tablet">
                                    <Image className="process-element-image-tablet" src="/images/homepage/process/strategies-elements.svg" alt="discover-element" width={332} height={344}></Image>
                                </div>
                            </div>

                            <div ref={addTabletPointerRef} className="process-pointer-tablet">
                                <div className="process-tablet-icon">
                                    <span className="icon-create-process"></span>
                                </div>

                                <div className="process-text-wrapper-tablet">
                                    <div className="tick-mark-wrapper">
                                        <h3 className="h2 text-sb text-upper-case">Create</h3>
                                        <Image className="process-completed" src="/images/homepage/process/process-completed-tick.svg" alt="tick" width={27} height={20}></Image>
                                    </div>

                                    <p className="text-18 text-rg">
                                        <span>Creativity with intention.</span>
                                        <span>We design experiences, identities, and interactions that feel intuitive, leave an impression, and make your brand impossible to overlook.</span>
                                    </p>
                                </div>

                                <div className="process-element-tablet">
                                    <Image className="process-element-image-tablet" src="/images/homepage/process/create-elements.svg" alt="discover-element" width={292} height={350}></Image>

                                </div>
                            </div>

                            <div ref={addTabletPointerRef} className="process-pointer-tablet">
                                <div className="process-tablet-icon">
                                    <span className="icon-engineer-process"></span>
                                </div>

                                <div className="process-text-wrapper-tablet">
                                    <div className="tick-mark-wrapper">
                                        <h3 className="h2 text-sb text-upper-case">Engineer</h3>
                                        <Image className="process-completed" src="/images/homepage/process/process-completed-tick.svg" alt="tick" width={27} height={20}></Image>
                                    </div>

                                    <p className="text-18 text-rg">
                                        <span>Built for the real world.</span>
                                        <span>From websites to digital products, we develop solutions that are scalable, reliable, and engineered to perform long after launch.</span>
                                    </p>
                                </div>

                                <div className="process-element-tablet">
                                    <Image className="process-element-image-tablet" src="/images/homepage/process/engineer-elements.svg" alt="discover-element" width={317} height={350}></Image>

                                </div>
                            </div>

                            <div ref={addTabletPointerRef} className="process-pointer-tablet">
                                <div className="process-tablet-icon">
                                    <span className="icon-refine-process"></span>
                                </div>

                                <div className="process-text-wrapper-tablet">
                                    <div className="tick-mark-wrapper">
                                        <h3 className="h2 text-sb text-upper-case">Refine</h3>
                                        <Image className="process-completed" src="/images/homepage/process/process-completed-tick.svg" alt="tick" width={27} height={20}></Image>
                                    </div>

                                    <p className="text-18 text-rg">
                                        <span>The details shape the experience.</span>
                                        <span>We test, improve, and fine-tune every interaction because the smallest refinements often make the biggest difference.</span>
                                    </p>
                                </div>

                                <div className="process-element-tablet">
                                    <Image className="process-element-image-tablet" src="/images/homepage/process/refine-elements.svg" alt="discover-element" width={347} height={348}></Image>
                                </div>
                            </div>

                            <div ref={addTabletPointerRef} className="process-pointer-tablet">
                                <div className="process-tablet-icon">
                                    <span className="icon-deliver-svg"></span>
                                </div>

                                <div className="process-text-wrapper-tablet">
                                    <div className="tick-mark-wrapper">
                                        <h3 className="h2 text-sb text-upper-case">deliver</h3>
                                        <Image className="process-completed" src="/images/homepage/process/process-completed-tick.svg" alt="tick" width={27} height={20}></Image>
                                    </div>

                                    <p className="text-18 text-rg">
                                        <span>Launch is where the journey expands.</span>
                                        <span>We deliver solutions with precision and stay invested in their growth, ensuring they continue to create value as your business evolves.</span>
                                    </p>
                                </div>

                                <div className="process-element-tablet">
                                    <Image className="process-element-image-tablet" src="/images/homepage/process/deliver-elements.svg" alt="discover-element" width={341} height={350}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}