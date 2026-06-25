'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import GlassEffect from "@/components/LiquideGlass";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
            <section id="hero-section" className="section hm-hero-main">
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

                                <Link href="/" title="make it rare" className="link-padding site-radius-30 btn-bg-primary hm-hero-redirect-link">
                                    <span className="text-20 text-md text-white">Start Your Project </span>
                                    <Image src="/images/homepage/homeHeroArrow.svg" alt="arrow-for-navigation" width={24} height={24}></Image>
                                </Link>
                            </div>

                            <div className="home-hero-services-highlight-wrapper for-desktop">
                                {/* <div className="hm-services-left home-hero-banner-image">
                                    <Scene3D activeIndex={activeIndex} />
                                </div> */}

                                <div className="hm-services-right">
                                    {services.map((service, index) => (
                                        <div key={index} className={`hm-services-content-wrapper ${activeIndex === index ? "active" : ""}`}>
                                            <GlassEffect className="dock site-radius-30">
                                                <div className="hm-services-title">
                                                    <span className="text-sb h6">{service.title}</span>
                                                </div>
                                            </GlassEffect>

                                            <div className={`hm-services-subtitle ${activeIndex === index ? "show" : ""
                                                }`}>
                                                <p className="text-18 text-rg text-grey">{service.description}</p>
                                            </div>
                                        </div>
                                    ))}
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

                    <div className="home-hero-wrapper-tablet">
                        <div className="hm-hero-row-1-wrapper">
                            <div className="hm-hero-text-left">
                                <h1 className="text-sb hm-hero-title">
                                    Building Brands People Choose First.
                                </h1>

                                <div className="hm-hero-paragraph-wrapper">
                                    <p className="text-18 text-rg">From original brand identities to custom-engineered digital products conceived from scratch, built to last.</p>

                                    <p className="text-18 text-sb">Creativity That Businesses Can Measure.</p>

                                    <p className="text-rg text-18">Most brands compete for attention. The memorable ones earn it. At RarePixels, we blend strategy, creativity, and technology to create digital experiences that people notice, trust, and return to. Nothing off the shelf. Nothing assembled from parts that existed before you walked in. Everything built for you. </p>
                                </div>

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

                                <Link href="/" title="make it rare" className="link-padding site-radius-30 btn-bg-primary hm-hero-redirect-link">
                                    <span className="text-20 text-md text-white">Start Your Project </span>
                                    <Image src="/images/homepage/homeHeroArrow.svg" alt="arrow-for-navigation" width={24} height={24}></Image>
                                </Link>
                            </div>

                            <div className="home-hero-services-highlight-wrapper for-tablet">
                                <div className="hm-services-left">
                                    <div className="home-hero-banner-image">
                                        <Image className="" src="/images/homepage/eye-image-for-tablet.png" loading="eager" draggable={false} alt={services[activeIndex].title} width={281} height={224}></Image>
                                    </div>
                                </div>

                                <div className="hm-services-right">
                                    <div className="hm-services-content-wrapper">
                                        <GlassEffect className="site-radius-30">
                                            <div className="hm-services-title">
                                                👁️
                                                <span className="text-md h6">UI/UX Design Services</span>
                                            </div>
                                        </GlassEffect>

                                        <div className="hm-services-paragraph">
                                            <p className="text-18 text-rg">Experiences users remember and businesses benefit from</p>
                                        </div>
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