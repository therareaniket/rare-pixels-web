"use client";

import { useEffect, useRef, useState } from "react";

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


const contactSteps = [
    {
        number: "01",
        title: "We Read Every Word",
        description:
            "Your message goes directly to a senior member of the Rare Pixels team, not an inbox managed by an assistant or filtered by automation. We read every enquiry carefully before responding.",
    },
    {
        number: "02",
        title: "You Hear Back Within 24 Hours",
        description:
            "We respond to every enquiry within 24 hours, Monday to Friday, and first thing Monday morning for weekend enquiries. No automated replies. A real response from a senior member of the team.",
    },
    {
        number: "03",
        title: "We Schedule a Discovery Call",
        description:
            "If there is a potential fit, we will suggest a 30-minute discovery call where we learn more about your project, share our thinking, and give you an honest assessment. No pressure. No pitch.",
    },
    {
        number: "04",
        title: "We Send a Tailored Proposal",
        description:
            "Following the discovery call, we put together a proposal specific to your project scope, timeline, investment, and approach. Not a template. A document built around what you actually need.",
    },
];

export default function ContactWhatHappensSection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [activeStep, setActiveStep] = useState(0);
    const [isSectionVisible, setIsSectionVisible] = useState(false);

    const tabletWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSectionVisible(true);
                }
            },
            { threshold: 0.35 }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
        };
    }, []);

    // Auto-advance active step every 5 seconds once the section is visible
    useEffect(() => {
        if (!isSectionVisible) return;

        const interval = window.setInterval(() => {
            setActiveStep((prevStep) => (prevStep + 1) % contactSteps.length);
        }, 5000);

        return () => {
            window.clearInterval(interval);
        };
    }, [isSectionVisible]);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(max-width: 1199px)", () => {
            const cards = gsap.utils.toArray<HTMLDivElement>(".cnct-what-happens-tablet");

            gsap.to(".cnct-what-happens-tablet-1", {
                height: "auto",
                duration: 2,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: ".cnct-what-happens-pointer-wrapper-tablet",
                    start: "top 80%",
                    once: true,
                    invalidateOnRefresh: true,
                }
            })

            gsap.to(".cnct-what-happens-tablet-2", {
                height: "auto",
                duration: 2,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: ".cnct-what-happens-tablet-2",
                    start: "top 30%",
                    once: true,
                    invalidateOnRefresh: true,
                }
            })

            gsap.to(".cnct-what-happens-tablet-3", {
                height: "auto",
                duration: 2,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: ".cnct-what-happens-tablet-3",
                    start: "top 30%",
                    once: true,
                    invalidateOnRefresh: true,
                }
            })

            gsap.to(".cnct-what-happens-tablet-4", {
                height: "auto",
                duration: 2,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: ".cnct-what-happens-tablet-4",
                    start: "top 30%",
                    once: true,
                    invalidateOnRefresh: true,
                }
            })


            return () => {
                gsap.set(cards, {
                    clearProps: "height,transform",
                });
            };
        });

        return () => mm.revert();
    },

        {
            scope: sectionRef
        }

    );

    return (
        <section ref={sectionRef} className="section bg-light-black contact-what-happens-section">
            <div className="container">
                <div className="contact-what-happens-title">
                    <h2 className="text-sb text-white">What Happens After You Reach Out.</h2>

                    <p className="text-18 text-rg text-white">No black holes. No waiting and wondering. Here is exactly what to expect after you contact us.</p>
                </div>

                <div className="cnct-what-happens-pointer-wrapper cnct-what-happens-pointer-wrapper-desktop">
                    {contactSteps.map((step, index) => {
                        const isActive = isSectionVisible && activeStep === index;

                        return (
                            <div key={step.number} className={`cnct-what-happens cnct-what-happens-${index + 1} ${isActive ? "active" : ""}`} >
                                <span className="text-sb">{step.number}</span>

                                <div className="cnct-what-happens-text">
                                    <h3 className="text-sb text-white">{step.title}</h3>

                                    <p className="text-18 text-rg text-white">{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div ref={tabletWrapperRef} className="cnct-what-happens-pointer-wrapper-tablet">
                    <div className="cnct-what-happens-tablet cnct-what-happens-tablet-1">
                        <span className="text-sb">01</span>

                        <div className="cnct-what-happens-text-tablet">
                            <h3 className="text-sb text-white">We Read Every Word</h3>

                            <p className="text-18 text-rg text-white">Your message goes directly to a senior member of the Rare Pixels team not an inbox managed by an assistant or filtered by automation. We read every enquiry carefully before responding.</p>
                        </div>

                    </div>

                    <div className="cnct-what-happens-tablet cnct-what-happens-tablet-2">
                        <span className="text-sb">02</span>

                        <div className="cnct-what-happens-text-tablet">
                            <h3 className="text-sb text-white">You Hear Back Within 24 Hours</h3>

                            <p className="text-18 text-rg text-white">We respond to every enquiry within 24 hours, Monday to Friday, and first thing Monday morning for weekend enquiries, no automated replies. A real response from a senior member of the team.</p>
                        </div>

                    </div>

                    <div className="cnct-what-happens-tablet cnct-what-happens-tablet-3">
                        <span className="text-sb">03</span>

                        <div className="cnct-what-happens-text-tablet">
                            <h3 className="text-sb text-white">We Schedule a Discovery Call</h3>

                            <p className="text-18 text-rg text-white">If there is a potential fit, we will suggest a 30-minute discovery call where we learn more about your project, share our thinking, and give you an honest assessment. No pressure. No pitch. </p>
                        </div>

                    </div>

                    <div className="cnct-what-happens-tablet cnct-what-happens-tablet-4">
                        <span className="text-sb">04</span>

                        <div className="cnct-what-happens-text-tablet">
                            <h3 className="text-sb text-white">We Send a Tailored Proposal</h3>

                            <p className="text-18 text-rg text-white">Following the discovery call we put together a proposal specific to your project scope, timeline, investment, and approach. Not a template. A document built around what you actually need. </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}