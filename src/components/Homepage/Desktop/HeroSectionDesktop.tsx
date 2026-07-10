'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import GlassEffect from "@/components/LiquideGlass";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), {
    ssr: false,
})

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

export default function HeroSectionDesktop() {

    const [activeIndex, setActiveIndex] = useState(0)
    const [showDescription, setShowDescription] = useState(true);
    const [isTablet, setIsTablet] = useState(false);
    const scrollTrackRef = useRef<HTMLDivElement>(null);
    const lastIndexRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const trackEl = scrollTrackRef.current;
            if (!trackEl) return;

            const rect = trackEl.getBoundingClientRect();
            const totalScrollable = trackEl.offsetHeight - window.innerHeight;

            // How far we've scrolled into the track, clamped between 0 and totalScrollable
            const scrolled = Math.min(
                Math.max(-rect.top, 0),
                totalScrollable
            );

            const progress = totalScrollable > 0 ? scrolled / totalScrollable : 0;
            // progress 0 -> 1 mapped across services.length equal parts
            let index = Math.floor(progress * services.length);
            if (index >= services.length) index = services.length - 1;
            if (index < 0) index = 0;

            if (index !== lastIndexRef.current) {
                lastIndexRef.current = index;
                setShowDescription(false);
                setTimeout(() => {
                    setActiveIndex(index);
                    setShowDescription(true);
                }, 200);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    // useEffect for Services to show single or all 4
    useEffect(() => {
        const update = () => setIsTablet(window.innerWidth <= 991);

        update();
        window.addEventListener("resize", update);

        return () => window.removeEventListener("resize", update);
    }, []);

    return (
        <>
            <section id="hero-section" ref={scrollTrackRef} className="section hm-hero-main hm-hero-scroll-track">
                <div className="hm-hero-sticky-inner">
                    <div className="container">
                        <div className="home-hero-wrapper-desktop">
                            <div className="hm-hero-row-1-wrapper">
                                <div className="hm-hero-text-left">
                                    <h1 className="text-sb hm-hero-title">
                                        Building Brands People Choose First.
                                    </h1>

                                    <div className="hm-hero-paragraph-wrapper text-grey">
                                        <p className="text-18 text-rg">From original brand identities to custom-engineered digital products conceived from scratch, built to last.</p>

                                        <p className="text-18 text-sb">Creativity That Businesses Can Measure.</p>

                                        <p className="text-rg text-18">Most brands compete for attention. The memorable ones earn it. At RarePixels, we blend strategy, creativity, and technology to create digital experiences that people notice, trust, and return to. Nothing off the shelf. Nothing assembled from parts that existed before you walked in. Everything built for you. </p>
                                    </div>

                                    <Link href="#" title="make it rare" className="link-padding site-radius-30 btn-bg-primary hm-hero-redirect-link">
                                        <span className="text-20 text-md text-white">Start Your Project </span>
                                        <Image src="/images/homepage/homeHeroArrow.svg" alt="arrow-for-navigation" width={24} height={24}></Image>
                                    </Link>
                                </div>

                                <div className="home-hero-services-highlight-wrapper for-desktop">
                                    <div className="hm-services-left home-hero-banner-image">
                                        <Scene3D activeIndex={activeIndex} />
                                    </div>

                                    <div className="hm-services-right">
                                        {/* {services.map((service, index) => (
                                            <div key={index} className={`hm-services-content-wrapper ${activeIndex === index ? "active" : ""}`}>
                                                <GlassEffect className="dock site-radius-30">
                                                    <div className="hm-services-title">
                                                        <span className="text-sb h6">{service.title}</span>
                                                    </div>
                                                </GlassEffect>

                                                <div className={`hm-services-subtitle ${activeIndex === index && showDescription ? "show" : ""
                                                    }`}>
                                                    <p className="text-18 text-rg text-grey">{service.description}</p>
                                                </div>
                                            </div>
                                        ))} */}

                                        {services.map((service, index) => {
                                            if (isTablet && index !== activeIndex) return null;

                                            return (
                                                <div
                                                    key={index}
                                                    className={`hm-services-content-wrapper ${
                                                        activeIndex === index ? "active" : ""
                                                    }`}
                                                >
                                                    <GlassEffect className="dock site-radius-30">
                                                        <div className="hm-services-title">
                                                            <span className="text-sb h6">{service.title}</span>
                                                        </div>
                                                    </GlassEffect>

                                                    <div
                                                        className={`hm-services-subtitle ${
                                                            activeIndex === index && showDescription ? "show" : ""
                                                        }`}
                                                    >
                                                        <p className="text-18 text-rg text-grey">
                                                            {service.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="hm-hero-row-2-wrapper">
                                <div className="hm-hero-stats-wrapper">
                                    <div className="hm-hero-stats">
                                        <h2 className="text-sb text-primary">100+</h2>
                                        <p className="text-18 text-md">Brands Transformed</p>
                                    </div>
                                    <div className="hm-hero-stats">
                                        <h2 className="text-sb text-primary">6000+</h2>
                                        <p className="text-18 text-md">Hours of Strategic Design</p>
                                    </div>
                                    <div className="hm-hero-stats">
                                        <h2 className="text-sb text-primary">50+</h2>
                                        <p className="text-18 text-md">Digital Products Engineered </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}