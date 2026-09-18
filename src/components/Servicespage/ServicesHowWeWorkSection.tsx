"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";

const workSteps = [
    {
        number: "01",
        title: "Discover",
        subtitle: "Good solutions begin with good questions.",
        description:
            "We research your business, your audience, and your competitors before a single pixel is placed or a line of code is written. Every project starts with understanding - not assumptions.",
    },
    {
        number: " 02",
        title: "Strategies",
        subtitle: "Every direction needs a reason.",
        description:
            "We define goals, audience, positioning, and success metrics before any creative or technical work begins. Strategy is not a phase we skip to get to the work - it is the work.",
    },
    {
        number: "03",
        title: "Create",
        subtitle: "Where thinking becomes something visible.",
        description:
            "Design, brand concepts, content frameworks, and interaction models - all conceived specifically for this project. Nothing carried over from previous work.",
    },
    {
        number: "04",
        title: "Engineer",
        subtitle: "Built specifically - never assembled from parts.",
        description:
            "Every platform, application, and digital product is engineered from the ground up. Clean, performant, scalable code that passes every quality standard before it reaches a single user.",
    },
    {
        number: "05",
        title: "Refine",
        subtitle: "Improved until it performs exactly as designed.",
        description:
            "We test, gather feedback, and iterate until every element performs the way it was designed to. Great work is not assumed - it is earned through refinement.",
    },
    {
        number: " 06",
        title: "Deliver",
        subtitle: "Launch is the beginning, not the end.",
        description:
            "We hand over every project with full documentation, training where needed, and a clear plan for what comes next. The relationship does not end at delivery - it evolves.",
    },
];

export default function ServicesHowWeWorkSection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const cardsWrapperRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const cardsWrapper = cardsWrapperRef.current;

        if (!section || !cardsWrapper) return;

        const context = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>( ".services-how-we-work" );

            const firstCard = cards[0];
            const animatedCards = cards.slice(1);

            const getMovementDistance = () => {
                const cssValue = getComputedStyle( cardsWrapper ).getPropertyValue("--card-movement-distance");

                return parseFloat(cssValue) || 270;
            };

            gsap.set(firstCard, { y: 0, opacity: 1, force3D: true, });

            gsap.set(animatedCards, {  y: (index) => { return (index + 1) * getMovementDistance(); }, opacity: 0.2, force3D: true, });

            const animatedTabHeaders = animatedCards
                .map((card) =>
                    card.querySelector<HTMLElement>(".tab-header")
                )
                .filter(
                    (header): header is HTMLElement => header !== null
                );

            gsap.set(animatedTabHeaders, { y: 100, opacity: 0.1, zIndex: -1, force3D: true, });

            const timeline = gsap.timeline({
                defaults: { duration: 1, ease: "none", },

                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom +=1500",
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });

            animatedCards.forEach((currentCard, index) => {
                const movingCards = animatedCards.slice(index);

                const currentTabHeader =
                    currentCard.querySelector<HTMLElement>(".tab-header");

                const stageLabel = `card-${index + 2}`;

                timeline.addLabel(stageLabel);

                timeline.to(
                    movingCards,
                    {
                        y: `-=${getMovementDistance()}`,
                        duration: 1,
                        ease: "none",
                        force3D: true,
                    },
                    stageLabel
                );

                timeline.to(
                    currentCard,
                    {
                        opacity: 1,
                        duration: 0.8,
                        ease: "power1.out",
                    },
                    stageLabel
                );

                if (currentTabHeader) {
                    timeline.to(
                        currentTabHeader,
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.75,
                            ease: "power2.out",
                            force3D: true,
                        },
                        `${stageLabel}+=0.25`
                    );

                    timeline.set(
                        currentTabHeader,
                        {
                            zIndex: 2,
                        },
                        `${stageLabel}+=0.95`
                    );
                }
            });

            const refreshScrollTrigger = () => {
                ScrollTrigger.refresh();
            };

            window.addEventListener("load", refreshScrollTrigger);

            return () => {
                window.removeEventListener(
                    "load",
                    refreshScrollTrigger
                );
            };
        }, section);

        return () => {
            context.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="services-how-we-work-section">
            <div className="section services-how-we-work-inner" style={{ paddingBottom: 0 }}>
                <div className="container">
                    <div className="services-how-we-work-title">
                        <h2 className="text-sb">How We Work</h2>

                        <p className="text-18">
                            <span className="text-bd">
                                No Guesswork. No Shortcuts. No Off-The-Shelf.
                            </span>

                            <span className="text-rg">
                                Every project - regardless of service, size, or
                                industry - follows the same six-step process.
                                Because consistency in process is what produces
                                consistency in results.
                            </span>
                        </p>
                    </div>

                    <div ref={cardsWrapperRef} className="services-how-we-work-cards" >
                        {workSteps.map((step, index) => (
                            <div key={step.number} className={`services-how-we-work-${index + 1} services-how-we-work`} >
                                <div className="tab-header">
                                    <span className="text-sb text-18">
                                        {step.number}
                                    </span>
                                </div>

                                <div className="card-body">
                                    <h3 className="text-sb text-64">
                                        {step.title}
                                    </h3>

                                    <span className="text-sb h5">
                                        {step.subtitle}
                                    </span>

                                    <p className="text-18 text-rg">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}