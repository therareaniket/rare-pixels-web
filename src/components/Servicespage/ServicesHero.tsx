"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function ServicesHero() {
    const dockRef = useRef<HTMLHeadingElement | null>(null);

    // useLayoutEffect(() => {
    //     const dock = dockRef.current;

    //     if (!dock) return;

    //     const ctx = gsap.context(() => {
    //         const items = gsap.utils.toArray<HTMLElement>(dock.querySelectorAll(".dock-item"));

    //         if (!items.length) return;

    //         const maxScale = 1.5;
    //         const influenceRadius = 360;
    //         const animationDuration = 0.6;

    //         const horizontalSpread = 90;
    //         const verticalLift = 50;

    //         let animationFrame: number | null = null;

    //         gsap.set(items, { transformOrigin: "80% 120%", force3D: true, });

    //         const updateDock = (clientX: number) => {
    //             const dockRect = dock.getBoundingClientRect();
    //             const pointerX = clientX - dockRect.left;

    //             items.forEach((item) => {
    //                 const itemCenter = item.offsetLeft + item.offsetWidth / 2;

    //                 const distance = itemCenter - pointerX;
    //                 const absoluteDistance = Math.abs(distance);

    //                 let scale = 1;
    //                 let x = 0;
    //                 let y = 0;

    //                 if (absoluteDistance < influenceRadius) {
    //                     const normalizedDistance = distance / influenceRadius;

    //                     const curveAngle = normalizedDistance * (Math.PI / 2);

    //                     const curveStrength = Math.cos(curveAngle);

    //                     scale = 1 + (maxScale - 1) * curveStrength;
    //                     x = Math.sin(curveAngle) * horizontalSpread * curveStrength;
    //                     y = -verticalLift * curveStrength;
    //                 }

    //                 gsap.to(item, {
    //                     x,
    //                     y,
    //                     scale,
    //                     duration: animationDuration,
    //                     ease: "power3.out",
    //                     overwrite: "auto",
    //                 });
    //             });
    //         };

    //         const handlePointerMove = (
    //             event: PointerEvent
    //         ) => {
    //             if (animationFrame !== null) {
    //                 cancelAnimationFrame(animationFrame);
    //             }

    //             animationFrame = requestAnimationFrame(() => {
    //                 updateDock(event.clientX);
    //                 animationFrame = null;
    //             });
    //         };

    //         const handlePointerLeave = () => {
    //             if (animationFrame !== null) {
    //                 cancelAnimationFrame(animationFrame);
    //                 animationFrame = null;
    //             }

    //             gsap.to(items, {
    //                 x: 0,
    //                 y: 0,
    //                 scale: 1,
    //                 duration: 0.4,
    //                 ease: "power3.out",
    //                 overwrite: "auto",
    //             });
    //         };

    //         dock.addEventListener(
    //             "pointermove",
    //             handlePointerMove
    //         );

    //         dock.addEventListener(
    //             "pointerleave",
    //             handlePointerLeave
    //         );

    //         return () => {
    //             if (animationFrame !== null) {
    //                 cancelAnimationFrame(animationFrame);
    //             }

    //             dock.removeEventListener(
    //                 "pointermove",
    //                 handlePointerMove
    //             );

    //             dock.removeEventListener(
    //                 "pointerleave",
    //                 handlePointerLeave
    //             );
    //         };
    //     }, dock);

    //     return () => ctx.revert();
    // }, []);

    useLayoutEffect(() => {
        const dock = dockRef.current;

        if (!dock) return;

        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray<HTMLElement>(dock.querySelectorAll(".dock-item"));

            if (!items.length) return;

            const maxScale = 1.1;
            const influenceRadius = 360;
            const animationDuration = 0.6;

            const horizontalSpread = 90;
            const verticalLift = 50;

            let animationFrame: number | null = null;

            gsap.set(items, { transformOrigin: "80% 120%", force3D: true, });

            const updateDock = (clientX: number) => {
                const dockRect = dock.getBoundingClientRect();
                const pointerX = clientX - dockRect.left;

                items.forEach((item) => {
                    const itemCenter = item.offsetLeft + item.offsetWidth / 2;

                    const distance = itemCenter - pointerX;
                    const absoluteDistance = Math.abs(distance);

                    let scale = 1;
                    let x = 0;
                    let y = 0;

                    if (absoluteDistance < influenceRadius) {
                        const normalizedDistance = distance / influenceRadius;

                        const curveAngle = normalizedDistance * (Math.PI / 2);

                        const curveStrength = Math.cos(curveAngle);

                        scale = 1 + (maxScale - 1) * curveStrength;
                        x = Math.sin(curveAngle) * horizontalSpread * curveStrength;
                        y = -verticalLift * curveStrength;
                    }

                    gsap.to(item, {
                        x,
                        y,
                        scale,
                        duration: animationDuration,
                        ease: "power3.out",
                        overwrite: "auto",
                    });
                });
            };

            const handlePointerMove = (
                event: PointerEvent
            ) => {
                if (animationFrame !== null) {
                    cancelAnimationFrame(animationFrame);
                }

                animationFrame = requestAnimationFrame(() => {
                    updateDock(event.clientX);
                    animationFrame = null;
                });
            };

            const handlePointerLeave = () => {
                if (animationFrame !== null) {
                    cancelAnimationFrame(animationFrame);
                    animationFrame = null;
                }

                gsap.to(items, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: "power3.out",
                    overwrite: "auto",
                });
            };

            dock.addEventListener(
                "pointermove",
                handlePointerMove
            );

            dock.addEventListener(
                "pointerleave",
                handlePointerLeave
            );

            return () => {
                if (animationFrame !== null) {
                    cancelAnimationFrame(animationFrame);
                }

                dock.removeEventListener(
                    "pointermove",
                    handlePointerMove
                );

                dock.removeEventListener(
                    "pointerleave",
                    handlePointerLeave
                );
            };
        }, dock);

        return () => ctx.revert();
    }, []);

    return (
        <section id="first-section" className="services-hero-section section text-white" style={{ backgroundColor: "black" }} >
            <div className="container">
                <div className="serv-hero-wrapper">
                    <div className="serv-hero-contn">
                        <div className="serv-hero-ttl">
                            <h1 className="text-sb">We Build <span className="serv-hero-span">Experiences </span> That Businesses Choose First Worldwide</h1>
                        </div>

                        <div className="serv-hero-subttl">
                            <p className="text-18">It has stood the test of time and proceeds Elevate your brand with RarePixels Design everything from strategy to advertising & scale.</p>
                        </div>

                        <div className="serv-hero-stats">
                            <div className="serv-stat">
                                <span className="h2 text-sb">100+ <Image src="/images/servicespage/herosection/serv-brand-svg.svg" alt="growth-graph" width={32} height={32} /></span>

                                <p className="text-18 text-md">Brands Transformed</p>
                            </div>

                            <div className="serv-stat">
                                <span className="h2 text-sb">50+ <Image src="/images/servicespage/herosection/serv-clock-svg.svg" alt="time-clock" width={32} height={32} /></span>

                                <p className="text-18 text-md">Bespoke Digital Products Engineered</p>
                            </div>
                        </div>
                    </div>

                    <div className="serv-hero-vid"></div>
                </div>
            </div>

            <div className="services-strip-animation bg-light-black">
                <div className="services-strip bg-light-black">
                    <h3 ref={dockRef} className="text-sb services-dock">
                        <span className="dock-item h4">UXUI Design</span>
                        <span className="dock-item dock-star">*</span>

                        <span className="dock-item h4">Branding</span>
                        <span className="dock-item dock-star">*</span>

                        <span className="dock-item h4">Digital Marketing</span>
                        <span className="dock-item dock-star">*</span>

                        <span className="dock-item h4">Development</span>
                        <span className="dock-item dock-star">*</span>

                        <span className="dock-item h4">Strategy</span>
                        <span className="dock-item dock-star">*</span>

                        <span className="dock-item h4">UXUI Design</span>
                        <span className="dock-item dock-star">*</span>

                        <span className="dock-item h4">Branding</span>
                        <span className="dock-item dock-star">*</span>

                        <span className="dock-item h4"> Digital Marketing </span>
                        <span className="dock-item dock-star">*</span>

                        <span className="dock-item h4">Development</span>
                        <span className="dock-item dock-star">*</span>
                    </h3>

                    {/* <div ref={dockRef} className="services-dock">
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-windmill.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-label.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-keyframe.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-diamond.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-lightning.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-sparkle.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-star.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-wobble.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/3d-cone.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-windmill.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-label.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-keyframe.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-diamond.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-lightning.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-sparkle.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-star.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-wobble.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/3d-cone.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-windmill.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-label.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-keyframe.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-diamond.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-lightning.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-sparkle.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-star.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/2d-wobble.webp" alt="" width="50" height="50"></Image>
                        <Image className="dock-item" src="/images/servicespage/herosection/3d-cone.webp" alt="" width="50" height="50"></Image>
                    </div> */}
                </div>
            </div>
        </section>
    );
}