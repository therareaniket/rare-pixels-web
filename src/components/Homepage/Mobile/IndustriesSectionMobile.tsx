'use client';

import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesSectionMobile() {

    const sectionRef = useRef<HTMLElement | null>(null);
    const sliderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const section = sectionRef.current;

        if (!slider || !section) return;

        const totalScroll =
            slider.scrollWidth - slider.parentElement!.clientWidth;

        const tween = gsap.to(slider, {
            x: -totalScroll,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top 0",
                end: `+=${totalScroll}`,
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true,
            },
        });

        ScrollTrigger.refresh();

        return () => {
            tween.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <>
            <section ref={sectionRef} className="section industries-section-mobile">
                <div className="container">
                    <div className="industries-mobile-wrapper">
                        <div className="industries-mobile-text">
                            <h2 className="text-sb">Industries We Serve</h2>

                            <p className="text-16 text-rg">
                                <span>Every industry is different.</span>
                                <span> But the need to earn trust, create memorable experiences, and stay relevant isn&apos;t.</span>
                            </p>
                        </div>

                        <div className="industries-mobile-card-wrapper" ref={sliderRef}>
                            <div className="industries-mobile-card">
                                <div className="industries-mobile-video">
                                    <video className="industries-mobile-vd" src="/images/homepage/industries/technology-and-saas.mp4" autoPlay playsInline muted loop width={424} height={428}></video>

                                    <Image className="industries-mobile-pixel-1" src="/images/homepage/industries/industries-pixel-mobile-1.svg" alt="pixel" width={75} height={75}></Image>
                                    <Image className="industries-mobile-pixel-2" src="/images/homepage/industries/industries-pixel-mobile-2.svg" alt="pixel" width={65} height={50}></Image>
                                    <Image className="industries-mobile-pixel-3" src="/images/homepage/industries/industries-pixel-mobile-3.svg" alt="pixel" width={25} height={25}></Image>
                                </div>

                                <div className="industries-mobile-card-text">
                                    <h3 className="text-sb">Technology & SaaS</h3>

                                    <p className="text-rg text-16">
                                        <span className="text-sb">Complex products deserve experiences that feel simple.</span>
                                        <span>Complex products fail when users don&apos;t understand them.</span>
                                        <span>We transform powerful SaaS platforms into intuitive experiences that drive adoption, retention, and growth.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="industries-mobile-card">
                                <div className="industries-mobile-video">
                                    <video className="industries-mobile-vd" src="/images/homepage/industries/finance.mp4" autoPlay playsInline muted loop width={424} height={428}></video>

                                    <Image className="industries-mobile-pixel-1" src="/images/homepage/industries/industries-pixel-mobile-1.svg" alt="pixel" width={75} height={75}></Image>
                                    <Image className="industries-mobile-pixel-2" src="/images/homepage/industries/industries-pixel-mobile-2.svg" alt="pixel" width={65} height={50}></Image>
                                    <Image className="industries-mobile-pixel-3" src="/images/homepage/industries/industries-pixel-mobile-3.svg" alt="pixel" width={25} height={25}></Image>
                                </div>

                                <div className="industries-mobile-card-text">
                                    <h3 className="text-sb">Finance & FinTech</h3>

                                    <p className="text-rg text-16">
                                        <span className="text-sb">Trust isn&apos;t optional when every click involves confidence.</span>
                                        <span>Trust is the product before the product.</span>
                                        <span>We create secure, credible, and intuitive financial experiences that help users transact with confidence.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="industries-mobile-card">
                                <div className="industries-mobile-video">
                                    <video className="industries-mobile-vd" src="/images/homepage/industries/healthcare.mp4" autoPlay playsInline muted loop width={424} height={428}></video>

                                    <Image className="industries-mobile-pixel-1" src="/images/homepage/industries/industries-pixel-mobile-1.svg" alt="pixel" width={75} height={75}></Image>
                                    <Image className="industries-mobile-pixel-2" src="/images/homepage/industries/industries-pixel-mobile-2.svg" alt="pixel" width={65} height={50}></Image>
                                    <Image className="industries-mobile-pixel-3" src="/images/homepage/industries/industries-pixel-mobile-3.svg" alt="pixel" width={25} height={25}></Image>
                                </div>

                                <div className="industries-mobile-card-text">
                                    <h3 className="text-sb">Healthcare & MedTech</h3>

                                    <p className="text-rg text-16">
                                        <span className="text-sb">When people need clarity most, every interaction matters.</span>
                                        <span>Every second matters when people seek care.</span>
                                        <span>We design healthcare experiences that make information accessible, decisions easier, and journeys less stressful.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="industries-mobile-card">
                                <div className="industries-mobile-video">
                                    <video className="industries-mobile-vd" src="/images/homepage/industries/e-commerce.mp4" autoPlay playsInline muted loop width={424} height={428}></video>

                                    <Image className="industries-mobile-pixel-1" src="/images/homepage/industries/industries-pixel-mobile-1.svg" alt="pixel" width={75} height={75}></Image>
                                    <Image className="industries-mobile-pixel-2" src="/images/homepage/industries/industries-pixel-mobile-2.svg" alt="pixel" width={65} height={50}></Image>
                                    <Image className="industries-mobile-pixel-3" src="/images/homepage/industries/industries-pixel-mobile-3.svg" alt="pixel" width={25} height={25}></Image>
                                </div>

                                <div className="industries-mobile-card-text">
                                    <h3 className="text-sb">E-commerce & Retail</h3>

                                    <p className="text-rg text-16">
                                        <span className="text-sb">The shortest path from browsing to buying wins.</span>
                                        <span>Customers don&apos;t buy products. They buy experiences.</span>
                                        <span>We build shopping journeys that reduce hesitation, increase conversions, and encourage repeat purchases.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="industries-mobile-card">
                                <div className="industries-mobile-video">
                                    <video className="industries-mobile-vd" src="/images/homepage/industries/real-estate.mp4" autoPlay playsInline muted loop width={424} height={428}></video>

                                    <Image className="industries-mobile-pixel-1" src="/images/homepage/industries/industries-pixel-mobile-1.svg" alt="pixel" width={75} height={75}></Image>
                                    <Image className="industries-mobile-pixel-2" src="/images/homepage/industries/industries-pixel-mobile-2.svg" alt="pixel" width={65} height={50}></Image>
                                    <Image className="industries-mobile-pixel-3" src="/images/homepage/industries/industries-pixel-mobile-3.svg" alt="pixel" width={25} height={25}></Image>
                                </div>

                                <div className="industries-mobile-card-text">
                                    <h3 className="text-sb">Real Estate & PropTech</h3>

                                    <p className="text-rg text-16">
                                        <span className="text-sb">Properties attract attention. Experiences create decisions.</span>
                                        <span>People invest in confidence before they invest in property.</span>
                                        <span>We help real estate brands create digital experiences that build trust long before a site visit.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="industries-mobile-card">
                                <div className="industries-mobile-video">
                                    <video className="industries-mobile-vd" src="/images/homepage/industries/education-industry.mp4" autoPlay playsInline muted loop width={424} height={428}></video>

                                    <Image className="industries-mobile-pixel-1" src="/images/homepage/industries/industries-pixel-mobile-1.svg" alt="pixel" width={75} height={75}></Image>
                                    <Image className="industries-mobile-pixel-2" src="/images/homepage/industries/industries-pixel-mobile-2.svg" alt="pixel" width={65} height={50}></Image>
                                    <Image className="industries-mobile-pixel-3" src="/images/homepage/industries/industries-pixel-mobile-3.svg" alt="pixel" width={25} height={25}></Image>
                                </div>

                                <div className="industries-mobile-card-text">
                                    <h3 className="text-sb">Education & EdTech</h3>

                                    <p className="text-rg text-16">
                                        <span className="text-sb">Learning works best when technology stays out of the way.</span>
                                        <span>Complex products fail when users don&apos;t understand them.</span>
                                        <span>We transform powerful SaaS platforms into intuitive experiences that drive adoption, retention, and growth.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="industries-mobile-card">
                                <div className="industries-mobile-video">
                                    <video className="industries-mobile-vd" src="/images/homepage/industries/ai-industry.mp4" autoPlay playsInline muted loop width={424} height={428}></video>

                                    <Image className="industries-mobile-pixel-1" src="/images/homepage/industries/industries-pixel-mobile-1.svg" alt="pixel" width={75} height={75}></Image>
                                    <Image className="industries-mobile-pixel-2" src="/images/homepage/industries/industries-pixel-mobile-2.svg" alt="pixel" width={65} height={50}></Image>
                                    <Image className="industries-mobile-pixel-3" src="/images/homepage/industries/industries-pixel-mobile-3.svg" alt="pixel" width={25} height={25}></Image>
                                </div>

                                <div className="industries-mobile-card-text">
                                    <h3 className="text-sb">AI & Emerging Tech</h3>

                                    <p className="text-rg text-16">
                                        <span className="text-sb">The future moves fast. Great experiences help people keep up.</span>
                                        <span>CInnovation means little if people can&apos;t understand it.</span>
                                        <span>We humanize emerging technologies through experiences that make complex products easier to adopt and trust.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="industries-mobile-card">
                                <div className="industries-mobile-video">
                                    <video className="industries-mobile-vd" src="/images/homepage/industries/food-industry.mp4" autoPlay playsInline muted loop width={424} height={428}></video>

                                    <Image className="industries-mobile-pixel-1" src="/images/homepage/industries/industries-pixel-mobile-1.svg" alt="pixel" width={75} height={75}></Image>
                                    <Image className="industries-mobile-pixel-2" src="/images/homepage/industries/industries-pixel-mobile-2.svg" alt="pixel" width={65} height={50}></Image>
                                    <Image className="industries-mobile-pixel-3" src="/images/homepage/industries/industries-pixel-mobile-3.svg" alt="pixel" width={25} height={25}></Image>
                                </div>

                                <div className="industries-mobile-card-text">
                                    <h3 className="text-sb">Food & Lifestyle</h3>

                                    <p className="text-rg text-16">
                                        <span className="text-sb">Great brands satisfy long before the first purchase.</span>
                                        <span>People remember how brands make them feel.</span>
                                        <span>We help food and lifestyle brands create memorable identities that drive loyalty beyond the first purchase.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}