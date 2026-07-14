'use client';

import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
    {
        video: "/images/homepage/industries/technology-and-saas.mp4",
        title: "Technology & SaaS",
        desc1: "Complex products fail when users don't understand them.",
        desc2: "We transform powerful SaaS platforms into intuitive experiences that drive adoption, retention, and growth.",
    },

    {
        video: "/images/homepage/industries/finance.mp4",
        title: "Finance & FinTech",
        desc1: "Trust is the product before the product.",
        desc2: "We create secure, credible, and intuitive financial experiences that help users transact with confidence.",
    },

    {
        video: "/images/homepage/industries/healthcare.mp4",
        title: "Healthcare & MedTech",
        desc1: "Every second matters when people seek care.",
        desc2: "We design healthcare experiences that make information accessible, decisions easier, and journeys less stressful.",
    },

    {
        video: "/images/homepage/industries/e-commerce.mp4",
        title: "E-commerce & Retail",
        desc1: "Customers don't buy products. They buy experiences.",
        desc2: "We build shopping journeys that reduce hesitation, increase conversions, and encourage repeat purchases.",
    },

    {
        video: "/images/homepage/industries/real-estate.mp4",
        title: "Real Estate & PropTech",
        desc1: "People invest in confidence before they invest in property.",
        desc2: "We help real estate brands create digital experiences that build trust long before a site visit.",
    },

    {
        video: "/images/homepage/industries/video-pending-image.png",
        title: "Education & EdTech",
        desc1: "The best learning experiences never feel complicated.",
        desc2: "We create intuitive platforms that keep students focused on learning, not figuring out how things work.",
    },

    {
        video: "/images/homepage/industries/video-pending-image.png",
        title: "AI & Emerging Tech",
        desc1: "Innovation means little if people can't understand it.",
        desc2: "We humanize emerging technologies through experiences that make complex products easier to adopt and trust.",
    },

    {
        video: "/images/homepage/industries/video-pending-image.png",
        title: "Food & Lifestyle",
        desc1: "People remember how brands make them feel.",
        desc2: "We help food and lifestyle brands create memorable identities that drive loyalty beyond the first purchase.",
    }
];

export default function IndustriesSectionMobile() {

    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const currentVideoRef = useRef<HTMLVideoElement | null>(null);
    const nextVideoRef = useRef<HTMLVideoElement | null>(null);
    const prevIndex = useRef(0);

    useLayoutEffect(() => {
        const timer = setTimeout(() => {

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top 50px",
                end: "+=" + (industries.length * window.innerHeight),
                // pin: true,
                scrub: true,
                // markers: true,
                refreshPriority: 10,

                onUpdate: (self) => {
                    const index = Math.round(
                        self.progress * (industries.length - 1)
                    );

                    setActiveIndex(index);
                }
            });

            ScrollTrigger.refresh();

        }, 100);

        return () => {
            clearTimeout(timer);
            // industriesTrigger.kill();
        };

    }, []);

    useEffect(() => {
        gsap.fromTo(
            '.industries-title-name',
            {
                opacity: 0,
                x: 100,
            },
            {
                opacity: 1,
                x: 0,
                duration: 2,
                ease: 'power3.out',
            }
        );
    }, [activeIndex]);

    useEffect(() => {
        gsap.fromTo(
            '.industry-detailtext',
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: 'power3.out',
            }
        );
    }, [activeIndex]);

    useEffect(() => {
        if (activeIndex === prevIndex.current) return;

        const current = currentVideoRef.current;
        const next = nextVideoRef.current;

        if (!current || !next) return;

        const nextSrc = industries[activeIndex].video;

        next.src = nextSrc;
        next.load();

        next.onloadeddata = () => {

            gsap.set(current, {
                clipPath: "inset(0% 0% 0% 0%)"
            });

            const isHorizontal = activeIndex % 2 === 0;

            gsap.to(current, {
                clipPath: isHorizontal
                    ? "inset(0% 50% 0% 50%)"
                    : "inset(50% 0% 50% 0%)",
                duration: 1,
                ease: "power4.inOut",

                onComplete: () => {
                    current.src = nextSrc;
                    current.load();

                    gsap.set(current, {
                        clipPath: "inset(0% 0% 0% 0%)"
                    });

                    prevIndex.current = activeIndex;
                }
            });
        };
    }, [activeIndex]);

    return (
        <>
            <section ref={sectionRef}  className="industry-section-sticky">
                <div className="industry-section-inner">
                    <div className="container">
                        <div className="industries-text-wrapper-mobile">
                            <h2 className="text-sb">Industries We Serve</h2>

                            <p className="text-16 text-rg">
                                <span>Every industry is different.</span>
                                <span> But the need to earn trust, create memorable experiences, and stay relevant isn&apos;t.</span>
                            </p>
                        </div>

                        <div className="industries-mobile-video-wrapper">
                            <div className="industries-mobile-video">
                                <video
                                    ref={nextVideoRef}
                                    className="industries-video next-video"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />

                                <video
                                    ref={currentVideoRef}
                                    className="industries-video prev-video"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    src={industries[0].video}
                                />

                                <div className="industry-mobile-pixels">
                                    <div className="industry-mob-1 industry-pix-25"></div>
                                    <div className="industry-mob-2 industry-pix-25"></div>
                                    <div className="industry-mob-3 industry-pix-25"></div>
                                    <div className="industry-mob-4 industry-pix-15"></div>
                                    <div className="industry-mob-5 industry-pix-10"></div>
                                    <div className="industry-mob-6 industry-pix-25"></div>
                                    <div className="industry-mob-7 industry-pix-25"></div>
                                    <div className="industry-mob-8 industry-pix-15"></div>
                                    <div className="industry-mob-9 industry-pix-25"></div>
                                </div>
                            </div>

                            <div className="industry-name" key={activeIndex}>
                                <span className="text-sb"> {industries[activeIndex].title} </span>

                                <div className="text-16 text-rg">
                                    <p className="text-16">{industries[activeIndex].desc1} </p>
                                    <p className="text-16">{industries[activeIndex].desc2} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}