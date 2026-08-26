'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip, ScrollTrigger);

const PROCESS_STEPS = [
    {
        id: "discover",
        title: "Discover",
        icon: "icon-discover-process",
        imgSrc: "/images/homepage/process/discover-elements.svg",
        width: 350,
        height: 350,
        subtext: "Every meaningful solution begins with understanding.",
        desc: "We take time to understand your business, your users, and the challenges standing in the way of growth. The better the questions, the better the outcome."
    },
    {
        id: "strategise",
        title: "Strategise",
        icon: "icon-strategy-process",
        imgSrc: "/images/homepage/process/strategies-elements.svg",
        width: 332,
        height: 344,
        subtext: "Direction creates momentum.",
        desc: "Ideas become impactful when backed by clarity. We bring together research, insights, and business goals to build a roadmap that gives every decision a purpose."
    },
    {
        id: "create",
        title: "Create",
        icon: "icon-create-process",
        imgSrc: "/images/homepage/process/create-elements.svg",
        width: 292,
        height: 350,
        subtext: "Creativity with intention.",
        desc: "We design experiences, identities, and interactions that feel intuitive, leave an impression, and make your brand impossible to overlook."
    },
    {
        id: "engineer",
        title: "Engineer",
        icon: "icon-engineer-process",
        imgSrc: "/images/homepage/process/engineer-elements.svg",
        width: 317,
        height: 350,
        subtext: "Built for the real world.",
        desc: "From websites to digital products, we develop solutions that are scalable, reliable, and engineered to perform long after launch."
    },
    {
        id: "refine",
        title: "Refine",
        icon: "icon-refine-process",
        imgSrc: "/images/homepage/process/refine-elements.svg",
        width: 347,
        height: 348,
        subtext: "The details shape the experience.",
        desc: "We test, improve, and fine-tune every interaction because the smallest refinements often make the biggest difference."
    },
    {
        id: "deliver",
        title: "Deliver",
        icon: "icon-deliver-svg",
        imgSrc: "/images/homepage/process/deliver-elements.svg",
        width: 341,
        height: 350,
        subtext: "Launch is where the journey expands.",
        desc: "We deliver solutions with precision and stay invested in their growth, ensuring they continue to create value as your business evolves."
    }
];

export default function ProjectsSectionDesktop() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const completedLineRef = useRef<HTMLDivElement>(null);

    const pointersRef = useRef<HTMLDivElement[]>([]);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const tabletPointersRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // Desktop Animation
            mm.add("(min-width: 1200px)", () => {
                const container = containerRef.current;
                const title = titleRef.current;
                if (!container || !title) return;

                const containerStyles = getComputedStyle(container);
                const paddingLeft = parseFloat(containerStyles.paddingLeft);
                const paddingRight = parseFloat(containerStyles.paddingRight);
                const contentWidth = container.offsetWidth - paddingLeft - paddingRight;
                const moveX = (contentWidth - title.offsetWidth) / 2;

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

                tl.to(title, { x: -moveX, ease: "none", duration: 1 });
                tl.to(pointersRef.current, { marginLeft: 'auto', ease: "none", stagger: 0.05, duration: 3 }, ">");

                const setActive = (index: number) => {
                    const state = Flip.getState(pointersRef.current);

                    pointersRef.current.forEach((item, i) => {
                        if (!item) return;
                        item.classList.toggle("active", i === index);
                        item.classList.toggle("completed", i <= index);
                    });

                    Flip.from(state, { duration: 0.7, ease: "power2.inOut", absolute: false, nested: true });

                    pointersRef.current.forEach((item, i) => {
                        if (!item) return;
                        const text = item.querySelector(".process-pointer-text p");
                        const heading = item.querySelector(".tick-mark-wrapper");

                        if (i === index && heading && text) {
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

                    imagesRef.current.forEach((img, i) => {
                        img?.classList.toggle("active", i === index);
                    });
                };

                const clearActive = () => {
                    pointersRef.current.forEach((item) => item?.classList.remove("active", "completed"));
                    imagesRef.current.forEach((img) => img?.classList.remove("active"));
                };

                PROCESS_STEPS.forEach((_, i) => {
                    tl.to({}, {
                        duration: 2,
                        onStart: () => setActive(i),
                        onReverseComplete: () => (i > 0 ? setActive(i - 1) : clearActive())
                    });
                });
            });

            // Tablet Animation
            mm.add("(max-width: 1199px)", () => {
                const cards = tabletPointersRef.current;

                cards.forEach((card) => {
                    card?.classList.add("active");
                    card?.classList.remove("closed");
                });

                const setClosed = (index: number) => {
                    cards.forEach((card, i) => {
                        if (!card) return;
                        const isLastCard = i === cards.length - 1;
                        card.classList.toggle("closed", isLastCard ? false : i < index);
                        card.classList.toggle("active", isLastCard ? true : i >= index);
                        card.classList.toggle("completed", isLastCard ? index >= cards.length : i < index);
                    });

                    const activeIcon = cards[Math.min(index, cards.length - 1)]?.querySelector(".process-tablet-icon") as HTMLElement;
                    if (activeIcon && completedLineRef.current) {
                        gsap.to(completedLineRef.current, {
                            height: activeIcon.offsetTop + activeIcon.offsetHeight / 2,
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
                    }
                });

                cards.forEach((_, index) => {
                    tl.to({}, {
                        duration: 3,
                        onStart: () => setClosed(index),
                        onReverseComplete: () => {
                            if (index > 0) {
                                setClosed(index - 1);
                            } else {
                                cards.forEach((card) => card?.classList.replace("closed", "active"));
                            }
                        }
                    });
                });

                tl.to({}, {
                    duration: 3,
                    onStart: () => setClosed(cards.length),
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section section-yellow-background process-section-sticky">
            <div className="process-section-inner">
                <div ref={containerRef} className="container-sm">
                    <div ref={titleRef} className="process-section-title active">
                        <h2 className="text-sb">Work Process We Follow</h2>
                        <p className="text-18 text-rg">
                            Every great outcome starts with understanding. We move from insight to execution through a process designed to reduce guesswork, improve collaboration, and build solutions that perform.
                        </p>
                    </div>

                    {/* Desktop Layout */}
                    <div className="process-elements-pointer process-section-desktop">
                        <div className="process-element">
                            {PROCESS_STEPS.map((step, idx) => (
                                <Image
                                    key={step.id}
                                    ref={(el) => { if (el) imagesRef.current[idx] = el; }}
                                    className="process-element-image"
                                    src={step.imgSrc}
                                    alt={step.title}
                                    width={step.width}
                                    height={step.height}
                                />
                            ))}
                        </div>

                        <div className="process-pointer-wrapper">
                            {PROCESS_STEPS.map((step, idx) => (
                                <div key={step.id} ref={(el) => { if (el) pointersRef.current[idx] = el; }} className="process-pointer">
                                    <div className="process-pointer-icon">
                                        <span className={step.icon}></span>
                                    </div>

                                    <div className="process-pointer-text">
                                        <div className="tick-mark-wrapper">
                                            <h3 className="h2 text-sb text-upper-case">{step.title}</h3>
                                            <Image className="process-completed" src="/images/homepage/process/process-completed-tick.svg" alt="tick" width={27} height={20} />
                                        </div>

                                        <p className="text-18 text-rg">
                                            {/* <span>{step.subtext}</span> */}
                                            <span>{step.desc}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tablet Layout */}
                    <div className="process-section-tablet">
                        <div className="process-tablet-line"></div>
                        <div ref={completedLineRef} className="process-tablet-line-completed"></div>

                        {PROCESS_STEPS.map((step, idx) => (
                            <div key={`tablet-${step.id}`} ref={(el) => { if (el) tabletPointersRef.current[idx] = el; }} className={`process-pointer-tablet ${idx === 0 ? 'active' : ''}`}>
                                <div className="process-tablet-icon">
                                    <span className={step.icon}></span>
                                </div>

                                <div className="process-text-wrapper-tablet">
                                    <div className="tick-mark-wrapper">
                                        <h3 className="h2 text-sb text-upper-case">{step.title}</h3>
                                        <Image className="process-completed" src="/images/homepage/process/process-completed-tick.svg" alt="tick" width={27} height={20} />
                                    </div>

                                    <p className="text-18 text-rg">
                                        {/* <span>{step.subtext}</span> */}
                                        <span>{step.desc}</span>
                                    </p>
                                </div>

                                <div className="process-element-tablet">
                                    <Image className="process-element-image-tablet" src={step.imgSrc} alt={step.title} width={step.width} height={step.height} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}