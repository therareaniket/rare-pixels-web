"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";


const faqs = [
    {
        question: "How quickly do you respond to enquiries?",
        answer: "We respond to every enquiry within 24 hours - Monday to Friday. Weekend enquiries receive a response first thing Monday morning. You will always hear from a real member of the Rare Pixels team, not an automated reply."
    },

    {
        question: "Do you work with international clients?",
        answer: "Yes. We work with clients across India, the USA, the UK, and the Middle East. With studios in both Ahmedabad, India and Pennsylvania, USA - we cover multiple time zones and are experienced in working across markets. "
    },

    {
        question: "Do you work with small businesses and startups?",
        answer: "Yes. We work with both early-stage startups and established enterprise businesses. Budget and business size do not determine the quality of our work — every project receives the same level of strategy, craft, and attention. "
    },

    {
        question: " Do you sign NDAs before discussing a project?",
        answer: "Yes. If your project requires an NDA before you share details, we are happy to sign one. Simply mention this in your message and we will arrange it before the discovery call. "
    },

    {
        question: "What is the discovery call for?",
        answer: "The discovery call is a working conversation - not a sales pitch. We use it to understand your project properly, ask the questions that matter, and give you an honest view of how we would approach your brief. It is free and there is no obligation to proceed."
    },
];

export default function ContactFaqSection() {
    const [expanded, setExpanded] = useState(false);
    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => {
        if (!expanded) {
            setShowAll(true);

            setTimeout(() => {
                gsap.fromTo(
                    ".extra-faq",
                    {
                        opacity: 0,
                        y: -30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.8,
                        ease: "power3.out",
                    }
                );
            }, 50);

            setExpanded(true);
        }
        else {
            gsap.to(".extra-faq", {
                opacity: 0,
                y: -30,
                duration: 0.4,
                stagger: 0.05,
                ease: "power3.in",
                onComplete: () => {
                    setShowAll(false);
                    setExpanded(false);
                },
            });
        }
    };

    return (
        <>
            <section className="section contact-form-faq">
                <div className="container">
                    <div className="hm-faq-title">
                        <h2 className="text-sb">FAQs</h2>
                        <p className="text-18 text-rg">
                            Answers to the most common questions helping you understand how we work, what we offer, and how we can support your next project.
                        </p>
                    </div>

                    <div className="container-sm">
                        <div className={`faq-expand-wrapper ${expanded ? "expanded" : ""}`}>
                            <Accordion
                                defaultValue={["faq-1"]}
                                className="faq-accordion-wrapper"
                            >
                                {faqs.slice(0, 5).map((faq, index) =>
                                    <div className="accordion-item-wrapper" key={index}>
                                        <span className="accordion-number h6 text-sb">
                                            {index + 1}
                                        </span>

                                        <AccordionItem
                                            value={`faq-${index + 1}`}
                                            className="faq-accordion"
                                        >
                                            <AccordionTrigger className="faq-accordion-title">
                                                <h3 className="h6 text-sb text-black">
                                                    {faq.question}
                                                </h3>
                                            </AccordionTrigger>

                                            <AccordionContent className="faq-content">
                                                <p className="text-18 text-rg text-black">
                                                    {faq.answer}
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </div>
                                )}

                                {showAll &&
                                    faqs.slice(5).map((faq, index) => (
                                        <div
                                            className="accordion-item-wrapper extra-faq"
                                            key={index + 5}
                                        >
                                            <span className="accordion-number h6 text-sb">
                                                {index + 6}
                                            </span>

                                            <AccordionItem
                                                value={`faq-${index + 6}`}
                                                className="faq-accordion"
                                            >
                                                <AccordionTrigger className="faq-accordion-title">
                                                    <h3 className="h6 text-sb text-black">
                                                        {faq.question}
                                                    </h3>
                                                </AccordionTrigger>

                                                <AccordionContent className="faq-content">
                                                    <p className="text-18 text-rg text-black">
                                                        {faq.answer}
                                                    </p>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </div>
                                    ))
                                }
                            </Accordion>

                            <div className="faq-btn-wrapper-arrow">
                                {/* <button
                                    type="button"
                                    className="expand-faq"
                                    onClick={handleToggle}
                                >
                                    <Image
                                        src="/images/global/faq-down-arrow.svg"
                                        alt="faq"
                                        width={30}
                                        height={52}
                                        className={expanded ? 'rotate-180 transition-all' : 'transition-all'}
                                    />
                                </button> */}

                                <Link href="#" title="Ask Your Queries" className="link-padding site-radius-30 btn-bg-primary hm-hero-redirect-link faq-btn website-btn" >
                                    <span className="text-20 text-md text-white">
                                        Ask Your Queries
                                    </span>
                                    <Image
                                        src="/images/global/faq-mic.svg"
                                        alt="arrow-for-navigation"
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}