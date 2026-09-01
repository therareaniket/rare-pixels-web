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

        const ctx = gsap.context(() => {
            const css = getComputedStyle(document.documentElement);

            gsap.set(".rpd-mobile-card-wrapper", {
                scale: 2,
                transformOrigin: "center center"
            });

            gsap.set(".rpd-mobile-card-text", {
                opacity: 0,
                y: 40
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".rpd-mobile-section",
                    start: "top top",
                    end: "+=6000",
                    scrub: 2,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });

            tl.to(".rpd-mobile-card-wrapper", {
                scale: 1,
                ease: "none"
            }, 0)

            .fromTo(".rpd-mobile-card-1",
                { width: css.getPropertyValue("--card-1-start-width") },
                { width: css.getPropertyValue("--card-1-width") }, 1
            )

            .fromTo(".rpd-mobile-card-2",
                {
                    width: css.getPropertyValue("--card-2-start-width"),
                    marginTop: css.getPropertyValue("--card-2-start-mt")
                },
                {
                    width: css.getPropertyValue("--card-2-width"),
                    marginTop: css.getPropertyValue("--card-2-mt")
                }, 1
            )

            .fromTo(".rpd-mobile-card-3",
                {
                    width: css.getPropertyValue("--card-3-start-width"),
                    marginTop: css.getPropertyValue("--card-3-start-mt")
                },
                {
                    width: css.getPropertyValue("--card-3-width"),
                    marginTop: css.getPropertyValue("--card-3-mt")
                }, 1
            )

            .to(".rpd-mobile-card, .rpd-mobile-card-wrapper", {
                opacity: 0,
                duration: 1.0
            }, 2)

            .set(".rpd-mobile-card-wrapper", {
                flexDirection: 'column',
                opacity: 1
            }, 3)

            .set(".rpd-mobile-card", {
                width: "100%",
                marginTop: 0
            }, 3)

            .fromTo(".rpd-mobile-card-1",
                { x: "-100%", opacity: 0 },
                { x: "0%", opacity: 1, immediateRender: false }, 4.3
            )
            .to(".rpd-mobile-card-1 .rpd-mobile-card-text", {
                opacity: 1,
                y: 0
            }, 4)

            .fromTo(".rpd-mobile-card-2",
                { x: "-100%", opacity: 0 },
                { x: "0%", opacity: 1, immediateRender: false }, 5.3
            )
            .to(".rpd-mobile-card-2 .rpd-mobile-card-text", {
                opacity: 1,
                y: 0
            }, 5)

            .fromTo(".rpd-mobile-card-3",
                { x: "-100%", opacity: 0 },
                { x: "0%", opacity: 1, immediateRender: false }, 6.3
            )
            .to(".rpd-mobile-card-3 .rpd-mobile-card-text", {
                opacity: 1,
                y: 0
            }, 6);
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section className="bg-light-black rpd-mobile-section">
                <div className="rpd-mobile-inner">
                    <div className="container">
                        <div className="rpd-mobile-card-wrapper">
                            
                            {/* Card 1 */}
                            <div className="rpd-mobile-card rpd-mobile-card-1">
                                <div className="rare-mobile-text">
                                    <Image className="rare-logo-mob" src="/images/aboutpage/about-rpd/rare.svg" alt="rare" width={34} height={43} />
                                    <span className="text-pop-sb text-white">are</span>
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
                <div className="abt-rpd-strip">
                    <p className="h2 text-sb">Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * </p>
                </div>
            </div>
        </>
    );
}