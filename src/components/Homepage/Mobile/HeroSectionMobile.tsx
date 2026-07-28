"use client";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import Scene3D from "@/components/3d/Scene3D";
import GlassEffect from "@/components/LiquideGlass";
import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
    {
        title: "UI/UX Design",
        description: "Frictionless experiences designed specifically for your users, not adapted from a template.",
        image: "/images/homepage/home-hero-eye-1.png",
        width: 665,
        height: 530,
        alternate: "eye-emoji",
        class: "home-eye"
    },
    {
        title: "Web & App Development",
        description: "Bespoke platforms, SaaS products and e-commerce builds engineered from the ground up for your exact business requirements.",
        image: "/images/homepage/home-hero-mind-1.png",
        width: 586,
        height: 482,
        alternate: "brain-emoji",
        class: "home-brain"
    },
    {
        title: "Brand Identity Design",
        description: "Original marks, visual systems, and brand architectures conceived from scratch and owned entirely by you. ",
        image: "/images/homepage/home-hero-heart-1.png",
        width: 450,
        height: 530,
        alternate: "heart-emoji",
        class: "home-heart"
    },
    {
        title: "Social Media Management",
        description: "Custom content strategies built around your brand voice, your audience behaviour, and your business goals.",
        image: "/images/homepage/home-hero-hand-1.png",
        width: 624,
        height: 446,
        alternate: "handshake emoji",
        class: "home-handshake"
    },
];

export default function HeroSectionMobile() {

    const [activeIndex, setActiveIndex] = useState(0)
    const [showDescription, setShowDescription] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowDescription(false);

            setTimeout(() => {
                setActiveIndex((prev) => (prev + 1) % services.length);
                setShowDescription(true);
            }, 500);
        }, 2000);

        return () => clearInterval(interval);
    })

    return (
        <>
            <section id="hero-section" className="section hm-hero-wrapper-responsive">
                <div className="container">
                    <div className="hero-wrapper">
                        <div className="scroll-effect-wrapper">
                            <div className="hero-content">
                                <div className="site-hero-discrp">
                                    <h1 className="text-sb">
                                        Building Brands People Choose First.
                                    </h1>

                                    <div className="hm-hero-desc-wrapper text-grey">
                                        <p className="text-rg text-16">From original brand identities to custom-engineered digital products conceived from scratch, built to last.</p>

                                        <p className="text-sb text-16">Creativity That Businesses Can Measure.</p>

                                        <p className="text-rg text-16">Most brands compete for attention. The memorable ones earn it. At RarePixels, we blend strategy, creativity, and technology to create digital experiences that people notice, trust, and return to. Nothing off the shelf. Nothing assembled from parts that existed before you walked in. Everything built for you. </p>
                                    </div>

                                    <div className="brand-statistics">
                                        <div className="stat-item">
                                            <h2 className="h5 text-sb">100+</h2>
                                            <p className="text-md text-grey">Brands Transformed</p>
                                        </div>
                                        <div className="stat-item">
                                            <h2 className="h5 text-sb">6000+</h2>
                                            <p className="text-md text-grey">Hours of Strategic Design</p>
                                        </div>
                                        <div className="stat-item">
                                            <h2 className="h5 text-sb">50+</h2>
                                            <p className="text-md text-grey">Digital Products Engineered </p>
                                        </div>
                                    </div>

                                    <Link href="#" title="Make it RARE" className="hero-link-cta text-md text-16">
                                        Start Your Project <span className="icon-hero-cta-arrow cta-arrow"></span>
                                    </Link>
                                </div>
                            </div>

                            <div className="element-box">
                                <Scene3D activeIndex={activeIndex} />
                            </div>

                            <div className="services-highlight-responsive">
                                {services.map((service, index) => (
                                    <div key={index} className={`hm-services-content-wrapper-mob ${activeIndex === index ? "active" : ""}`}>
                                        <div className={`services-highlight-content-mob ${activeIndex === index ? "show" : ""
                                            }`}>
                                            <GlassEffect className="dock site-radius-30">
                                                <div className="hm-services-title-mob">
                                                    <span className="text-sb text-18">{service.title}</span>
                                                </div>
                                            </GlassEffect>
                                            <p className="text-14 text-rg text-grey">{service.description}</p>
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