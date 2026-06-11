'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import GlassEffect from "@/components/LiquideGlass";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
    {
        title: "UI/UX Design Services",
        description: "Experiences users remember and businesses benefit from",
        image: "/images/homepage/home-hero-eye-1.png",
        width: 665,
        height: 530,
        icon: "/images/homepage/home-hero-services-eye.png",
        alternate: "eye-emoji",
        class: "home-eye"
    },
    {
        title: "Custom Web & App Development",
        description: "Built to perform today and scale tomorrow",
        image: "/images/homepage/home-hero-mind-1.png",
        width: 586,
        height: 482,
        icon: "/images/homepage/home-hero-services-brain.png",
        alternate: "brain-emoji",
        class: "home-brain"
    },
    {
        title: "Brand Identity Design",
        description: "Distinct identities with lasting impact",
        image: "/images/homepage/home-hero-heart-1.png",
        width: 450,
        height: 530,
        icon: "/images/homepage/home-hero-services-heart.png",
        alternate: "heart-emoji",
        class: "home-heart"
    },
    {
        title: "Social Media Management Services",
        description: "Keeping your brand relevant, visible, and valued",
        image: "/images/homepage/home-hero-hand-1.png",
        width: 624,
        height: 446,
        icon: "/images/homepage/home-hero-services-handshake.png",
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
            <section className="section hm-hero-main">
                <div className="container">
                    <div className="home-hero-wrapper-desktop">
                        <div className="hm-hero-row-1-wrapper">
                            <div className="hm-hero-text-left">
                                <h1 className="text-md hm-hero-title">
                                    Seen.
                                    Remembered.
                                    Chosen.
                                </h1>
                                <p className="text-18 text-rg hm-hero-subtitle">Most brands compete for attention. The memorable ones earn it. At RarePixels, we blend strategy, creativity, and technology to create digital experiences that people notice, trust, and return to.</p>

                                <Link href="/" title="make it rare" className="link-padding site-radius-30 btn-bg-primary hm-hero-redirect-link">
                                    <span className="text-20 text-white">Make It Rare</span>
                                    <Image src="/images/homepage/homeHeroArrow.svg" alt="arrow-for-navigation" width={24} height={24}></Image>
                                </Link>
                            </div>

                            <div className="home-hero-services-highlight-wrapper for-desktop">
                                <div className="hm-services-left home-hero-banner-image">
                                    <Image key={activeIndex} className={services[activeIndex].class} src={services[activeIndex].image} loading="eager" draggable={false} alt={services[activeIndex].title} width={services[activeIndex].width} height={services[activeIndex].height}></Image>
                                </div>
                                <div className="hm-services-right">
                                    {services.map((service, index) => (
                                        <div key={index} className={`hm-services-content-wrapper ${activeIndex === index ? "active" : ""
                                            }`}
                                        >
                                            <GlassEffect className="dock site-radius-30">
                                                <div className="hm-services-title">
                                                    <Image src={service.icon} alt={service.alternate} width={22} height={34}></Image>
                                                    <span className="text-md h6">{service.title}</span>
                                                </div>
                                            </GlassEffect>

                                            <div className={`hm-services-subtitle ${activeIndex === index ? "show" : ""
                                                }`}>
                                                <p className="text-18 text-rg">{service.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="home-hero-services-highlight-wrapper for-tablet">
                                <div className="hm-services-left">
                                    <div className="home-hero-banner-image">
                                        <Image className="" src="/images/homepage/eye-image-for-tablet.png" loading="eager" draggable={false} alt={services[activeIndex].title} width={281} height={224}></Image>
                                    </div>
                                </div>
                                <div className="hm-services-right">
                                    <div className="hm-services-content-wrapper"
                                    >
                                        <GlassEffect>
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

                        <div className="hm-hero-row-2-wrapper">
                            <div className="hm-hero-stats-wrapper">
                                <div className="hm-hero-stats">
                                    <h2 className="text-md text-primary">100+</h2>
                                    <p className="text-18 text-rg">Brands Empowered</p>
                                </div>
                                <div className="hm-hero-stats">
                                    <h2 className="text-md text-primary">120K+</h2>
                                    <p className="text-18 text-rg">Lines of Code Crafted</p>
                                </div>
                                <div className="hm-hero-stats">
                                    <h2 className="text-md text-primary">250+</h2>
                                    <p className="text-18 text-rg">Creative Campaigns</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}