'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

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
        video: "/images/homepage/industries/education-industry.mp4",
        title: "Education & EdTech",
        desc1: "The best learning experiences never feel complicated.",
        desc2: "We create intuitive platforms that keep students focused on learning, not figuring out how things work.",
    },
    {
        video: "/images/homepage/industries/ai-industry.mp4",
        title: "AI & Emerging Tech",
        desc1: "Innovation means little if people can't understand it.",
        desc2: "We humanize emerging technologies through experiences that make complex products easier to adopt and trust.",
    },
    {
        video: "/images/homepage/industries/food-industry.mp4",
        title: "Food & Lifestyle",
        desc1: "People remember how brands make them feel.",
        desc2: "We help food and lifestyle brands create memorable identities that drive loyalty beyond the first purchase.",
    }
];

export default function IndustriesSectionDesktop() {

    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    return (
        <>
            <section ref={sectionRef} className="industries-section-sticky section" style={{ paddingBottom: 0 }}>
                <div className="industirs-section-inner">
                    <div className="container">
                        <div className="industries-text-title">
                            <h2 className="text-sb">Industries We Serve</h2>
                            <p className="text-rg text-18 text-grey">
                                <span>Every industry is different.</span>
                                <span>But the need to earn trust, create memorable experiences, and stay relevant isn&apos;t.</span>
                            </p>
                        </div>

                        <div className="industries-scroll-container">
                            <div ref={trackRef} className="industries-card-wrapper">
                                {industries.map((industry, index) => (
                                    <div className="industry-item" key={index}>
                                        <div className="industries-image-wrapper">
                                            <video className="industries-video prev-video" autoPlay muted loop playsInline src={industry.video} width={1000} height={600} />
                                        </div>

                                        <div className="industries-text-wrapper industry-content" >
                                            <span className="text-sb industries-title-name">
                                                {industry.title}
                                            </span>

                                            <p className="text-18 text-grey industry-detailtext">
                                                <span className="text-rg"> {industry.desc1} </span>
                                                <span className="text-rg"> {industry.desc2} </span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}