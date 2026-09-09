'use client';

const CDN_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS_CDN;

import PixelImageReveal from "@/components/global/PixelImageReveal";
import Image from "next/image";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSectionMobile() {

        // useLayoutEffect(() => {
    
        //     gsap.fromTo(".hm-abt-card-mobile",
        //     {
        //         opacity: 0,
        //         scale: 0.5,
        //         xPercent: 50,
        //     }, {
        //         opacity: 1,
        //         xPercent: 0,
        //         scale: 1,
        //         duration: 0.8,
        //         delay: 0.2,
        //         scrollTrigger: {
        //             trigger: ".hm-abt-card-mobile",
        //             start: "top 80%",
        //         }
        //     } );
            
        // }, []);
    
        useLayoutEffect(() => {
        // Create a GSAP Context for proper cleanup in React/Next.js
        const ctx = gsap.context(() => {
            // Target each card individually
            const cards = gsap.utils.toArray<HTMLElement>(".hm-abt-card-mobile");

            cards.forEach((card) => {
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        scale: 0.5,
                        yPercent: -50,
                    },
                    {
                        opacity: 1,
                        yPercent: 0,
                        scale: 1,
                        duration: 0.8,
                        delay: 0.1,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 70%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        });

        return () => ctx.revert(); // Clean up triggers on component unmount
    }, []);
    return (
        <>
            <section className="section" style={{ background: "#040E36", color: "white" }}>
                <div className="container">
                    <div className="abt-mobile-section">
                        <div className="abt-mobile-bg">
                            <h2 className="text-sb hm-abt-title ">Making Businesses Easier To Notice, Trust, And Remember.</h2>

                            <p className="text-16 text-rg">
                                <span>At RarePixels, we bring together strategy, creativity, and technology to create brands and digital experiences that leave a lasting impact. Everything we build is designed with purpose, shaped by insight, and aligned with business growth. Nothing generic. Nothing without intent.</span>
                                <span>Because being noticed gets you seen. Being remembered gets you chosen.</span>
                            </p>

                            <div className="hm-abt-site-logo">
                                {/* <Image src={`${CDN_URL}/images/homepage/about/rare-logo-white.png`} alt="rare-logo" width={197} height={250}></Image> */}
                                <PixelImageReveal src={`${CDN_URL}/images/homepage/about/rare-logo-white.png`} alt="rare-logo" pixelSize={15} />
                            </div>

                            <div className="hm-abt-cards-wrapper">
                                    <div className="hm-abt-card-mobile site-radius-10">
                                        <span className="hm-abt-pixel"></span>

                                        <div className="hm-abt-card-text">
                                            <h3 className="text-18 text-sb">Design That Creates Clarity</h3>

                                            <p className="text-16 text-rg ">
                                                <span>Great experiences don&apos;t happen by accident.</span>
                                                <span>We believe every interaction should feel natural, every journey should feel effortless, and every decision should help users move forward with confidence.</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="hm-abt-card-mobile site-radius-10">
                                        <span className="hm-abt-pixel"></span>

                                        <div className="hm-abt-card-text">
                                            <h3 className="text-18 text-sb">Technology Built Around Growth</h3>

                                            <p className="text-16 text-rg ">
                                                <span>Technology should support ambition, not limit it.</span>
                                                <span>From websites to digital products, we build solutions designed to perform reliably today and scale with your business tomorrow.</span>
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="hm-abt-card-mobile site-radius-10">
                                        <span className="hm-abt-pixel"></span>

                                        <div className="hm-abt-card-text">
                                            <h3 className="text-18 text-sb">Creativity With Direction</h3>

                                            <p className="text-16 text-rg ">
                                                <span>Creativity is powerful when it has a purpose.</span>
                                                <span>Every idea, design, and experience we create is guided by strategy, ensuring it contributes to a larger business objective.</span>
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="hm-abt-card-mobile site-radius-10">
                                        <span className="hm-abt-pixel"></span>

                                        <div className="hm-abt-card-text">
                                            <h3 className="text-18 text-sb">Brands People Remember</h3>

                                            <p className="text-16 text-rg ">
                                                <span>Recognition is earned through consistency.</span>
                                                <span>We help businesses create meaningful brand experiences that stay relevant, build trust, and leave a lasting impression over time.</span>
                                            </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}