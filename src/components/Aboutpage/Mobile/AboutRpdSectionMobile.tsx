'use client';

import { useEffect } from "react";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutRpdSectionMobile() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let mobileScrollTrigger: ScrollTrigger | null = null;

        const ctx = gsap.context(() => {
            const css = getComputedStyle(document.documentElement);

            gsap.set(".rpd-mobile-card-wrapper", {
                scale: 3.5,
                opacity: 1,
                flexDirection: "row",
                transformOrigin: "bottom center"
            });

            gsap.set(".rpd-mobile-card-1", {
                width: css.getPropertyValue("--card-1-start-width").trim(),
                height: css.getPropertyValue("--card-1-start-height").trim(),
                marginTop: 0,
                x: 0,
                opacity: 1
            });

            gsap.set(".rpd-mobile-card-2", {
                width: css.getPropertyValue("--card-2-start-width").trim(),
                height: css.getPropertyValue("--card-1-start-height").trim(),
                marginTop: css.getPropertyValue("--card-2-start-mt").trim(),
                x: 0,
                opacity: 1
            });

            gsap.set(".rpd-mobile-card-3", {
                width: css.getPropertyValue("--card-3-start-width").trim(),
                height: css.getPropertyValue("--card-1-start-height").trim(),
                marginTop: css.getPropertyValue("--card-3-start-mt").trim(),
                x: 0,
                opacity: 1
            });

            gsap.set(".rpd-mobile-card-text", {
                display: "none"
            });

            const tl = gsap.timeline({
                paused: true,
                defaults: {
                    ease: "none"
                }
            });

            tl.to(".rpd-mobile-card-wrapper", {
                scale: 1,
                duration: 0.8
            });

            tl.to({}, {
                duration: 0.6
            });

            tl.addLabel("mobileCardExpansion");

            tl.to(
                ".rpd-mobile-card-1",
                {
                    width: css.getPropertyValue("--card-1-width").trim(),
                    duration: 1
                },
                "mobileCardExpansion"
            );

            tl.to(
                ".rpd-mobile-card-2",
                {
                    width: css.getPropertyValue("--card-2-width").trim(),
                    marginTop: css.getPropertyValue("--card-2-mt").trim(),
                    duration: 1
                },
                "mobileCardExpansion"
            );

            tl.to(
                ".rpd-mobile-card-3",
                {
                    width: css.getPropertyValue("--card-3-width").trim(),
                    marginTop: css.getPropertyValue("--card-3-mt").trim(),
                    duration: 1
                },
                "mobileCardExpansion"
            );


            tl.to(".rpd-mobile-card-wrapper", {
                width: "100%",
                justifyContent: "space-between",
                duration: 0.8
            });

            tl.to({}, {
                duration: 1
            });

            tl.to(".rpd-mobile-card, .rpd-mobile-card-wrapper", {
                opacity: 0,
                duration: 0.6
            });

            tl.set(".rpd-mobile-card-wrapper", {
                flexDirection: "column",
                opacity: 1
            });

            tl.set(".rpd-mobile-card", {
                width: "100%",
                height: "var(--card-1-height)",
                marginTop: 0,
                x: "-100%",
                opacity: 0
            });

            tl.set(".rpd-mobile-card-text", {
                display: "block",
                width: "100%"
            });

            tl.to(".rpd-mobile-card-1", {
                x: "0%",
                opacity: 1,
                duration: 0.7
            });

            tl.to(".rpd-mobile-card-2", {
                x: "0%",
                opacity: 1,
                duration: 0.7
            });

            tl.to(".rpd-mobile-card-3", {
                x: "0%",
                opacity: 1,
                duration: 0.7
            });

            mobileScrollTrigger = ScrollTrigger.create({
                trigger: ".rpd-mobile-section",
                start: "top top",
                end: "+=4000",
                // pin: true,
                // anticipatePin: 1,
                invalidateOnRefresh: true,

                onUpdate: (self) => {
                    gsap.to(tl, {
                        progress: self.progress,
                        duration: 0.35,
                        ease: "power1.out",
                        overwrite: true
                    });
                },
            });
        });

        return () => {
            mobileScrollTrigger?.kill(true);
            ctx.revert();
        };
    }, []);

    return (
        <>
            <section className="bg-light-black rpd-mobile-section setion" style={{ paddingBottom: 0 }}>
                <div className="rpd-mobile-inner">
                    <div className="container">
                        <div className="rpd-mobile-card-wrapper">

                            {/* Card 1 */}
                            <div className="rpd-mobile-card rpd-mobile-card-1">
                                <div className="rare-mobile-text">
                                    <span className="text-pop-sb text-white">Rare</span>
                                </div>
                                <div className="rpd-mobile-card-text">
                                    <h2 className="h5 text-sb text-white">Results Before Recognition</h2>
                                    <p className="text-16 text-rg text-white">We are not chasing awards or industry validation. We are chasing outcomes. Every project is measured by what it achieves for the business not how it looks in a portfolio.</p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="rpd-mobile-card rpd-mobile-card-2">
                                <span className="text-pop-sb text-white">Pixels</span>
                                <div className="rpd-mobile-card-text">
                                    <h3 className="h5 text-sb text-white">Precision in Every Detail</h3>
                                    <p className="text-16 text-rg text-white">We are not chasing awards or industry validation. We are chasing outcomes. Every project is measured by what it achieves for the business not how it looks in a portfolio.</p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="rpd-mobile-card rpd-mobile-card-3">
                                <span className="text-pop-sb text-white">Design</span>
                                <div className="rpd-mobile-card-text">
                                    <h3 className="h5 text-sb text-white">Precision in Every Detail</h3>
                                    <p className="text-16 text-rg text-white">We are not chasing awards or industry validation. We are chasing outcomes. Every project is measured by what it achieves for the business not how it looks in a portfolio.</p>
                                </div>
                            </div>

                        </div>

                        <Image className="rpd-pixel-left-mob" src="/images/aboutpage/about-rpd/rpd-left-pixel.svg" alt="pixel" width={71} height={90} />
                        <Image className="rpd-pixel-right-mob" src="/images/aboutpage/about-rpd/rpd-right-pixel.svg" alt="pixel" width={71} height={90} />
                    </div>
                </div>
            </section>

            <div className="abt-strip-animation bg-light-black">
                <div className="abt-rpd-strip bg-light-black">
                    <p className="h2 text-sb">Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * </p>
                </div>
            </div>
        </>
    );
}