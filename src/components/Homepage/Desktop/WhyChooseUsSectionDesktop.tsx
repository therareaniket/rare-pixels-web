'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CDN_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS_CDN;

// Static center point & radius outside component scope
const CX = 649;
const CY = 649;
const RADIUS = 800;

export default function WhyChooseUsSectionDesktop() {
    const clipPathRef1 = useRef<SVGPathElement | null>(null); // For lines 1,3,5,7 (clockwise)
    const clipPathRef2 = useRef<SVGPathElement | null>(null); // For lines 2,4,6 (counter-clockwise)
    const sectionRef = useRef<HTMLElement | null>(null);
    const handImageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        // if (handImageRef.current) {
        //     gsap.set(handImageRef.current, { scale: 3, opacity: 0, transformOrigin: "center center" });
        // }

        // Clockwise wedge generator (fixed angle math + full circle guard)
        const getClockwisePath = (progress: number) => {
            if (progress <= 0.0001) return "";
            if (progress >= 0.999) {
                // Full circle wedge covering the entire bounding box safely
                return `M ${CX - RADIUS} ${CY - RADIUS} H ${CX + RADIUS} V ${CY + RADIUS} H ${CX - RADIUS} Z`;
            }

            // Convert degrees to radians: start angle ~160 deg (PI - 20 deg)
            const startAngle = ((180 - 20) * Math.PI) / 180;
            const endAngle = startAngle + progress * 2 * Math.PI;

            const x1 = CX + RADIUS * Math.cos(startAngle);
            const y1 = CY + RADIUS * Math.sin(startAngle);
            const x2 = CX + RADIUS * Math.cos(endAngle);
            const y2 = CY + RADIUS * Math.sin(endAngle);

            const largeArcFlag = progress > 0.5 ? 1 : 0;

            return `M ${CX} ${CY} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${RADIUS} ${RADIUS} 0 ${largeArcFlag} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;
        };

        // Counter-clockwise half-circle wedge generator (3 o'clock to 9 o'clock)
        const getCounterClockwisePath = (progress: number) => {
            if (progress <= 0.0001) return "";

            const startAngle = 0; // 3 o'clock
            const endAngle = startAngle - progress * Math.PI; // Counter-clockwise towards 9 o'clock

            const x1 = CX + RADIUS * Math.cos(startAngle);
            const y1 = CY + RADIUS * Math.sin(startAngle);
            const x2 = CX + RADIUS * Math.cos(endAngle);
            const y2 = CY + RADIUS * Math.sin(endAngle);

            const largeArcFlag = 0; // Always small arc for half circle

            return `M ${CX} ${CY} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${RADIUS} ${RADIUS} 0 ${largeArcFlag} 0 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;
        };

        const animationTarget1 = { progress: 0 };
        const animationTarget2 = { progress: 0 };

        const ctx = gsap.context(() => {
            // Clockwise animation (Lines 1, 3, 5, 7)
            gsap.to(animationTarget1, {
                progress: 1,
                duration: 6,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    once: true,
                },
                onUpdate: () => {
                    if (clipPathRef1.current) {
                        clipPathRef1.current.setAttribute(
                            "d",
                            getClockwisePath(animationTarget1.progress)
                        );
                    }
                },
            });

            // Counter-clockwise animation (Lines 2, 4, 6)
            gsap.to(animationTarget2, {
                progress: 1,
                duration: 6,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    once: true,
                },
                onUpdate: () => {
                    if (clipPathRef2.current) {
                        clipPathRef2.current.setAttribute(
                            "d",
                            getCounterClockwisePath(animationTarget2.progress)
                        );
                    }
                },
            });


            if (handImageRef.current) {
                gsap.fromTo(handImageRef.current, 
                    {
                        scale: 3,
                        opacity: 0,
                    },{
                    scale: 1,
                    opacity: 1,
                    duration: 3, // Matches the path animation duration
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                        once: true,
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section why-choose-us-desktop">
            <div className="container">
                <div className="why-choose-us-text-wrapper">
                    <h2 className="text-sb">Why Choose Us</h2>
                    <p className="text-18 text-rg">
                        We bring together strategy, design, technology, and creativity to build experiences that are easy to use, hard to ignore, and built to perform.
                    </p>
                </div>

                <div className="container-sm wc-container-wrapper">
                    <div className="why-choose-us-content-wrapper why-choose-us-for-desktop">
                        <div className="why-choose-us-pointer-wrapper">
                            <div className="why-choose-us-pointer-cards">
                                <div className="why-choose-us-card why-choose-us-card-1">
                                    <h3 className="h6 text-sb">Built, Not Borrowed</h3>
                                    <p className="text-18 text-rg">
                                        We don&apos;t believe in templates or recycled thinking. Every solution is created from the ground up to fit your business, your users, and your ambitions.
                                    </p>
                                </div>

                                <div className="why-choose-us-card why-choose-us-card-2">
                                    <h3 className="h6 text-sb">Simplicity With Purpose</h3>
                                    <p className="text-18 text-rg">
                                        Great experiences feel effortless. We remove complexity, sharpen every interaction, and design with clarity at the center of every decision.
                                    </p>
                                </div>
                            </div>

                            <div className="why-choose-us-pointer-cards">
                                <div className="why-choose-us-card why-choose-us-card-3">
                                    <h3 className="h6 text-sb">Ideas That Get Built</h3>
                                    <p className="text-18 text-rg">
                                        A vision means little without execution. From first sketch to final launch, every detail is delivered with precision, consistency, and care.
                                    </p>
                                </div>

                                <div className="why-choose-us-card why-choose-us-card-4">
                                    <h3 className="h6 text-sb">Partners In The Process</h3>
                                    <p className="text-18 text-rg">
                                        We work alongside you, not around you. The best outcomes come from trust, collaboration, and relationships that grow beyond a single project.
                                    </p>
                                </div>

                                <div className="why-choose-us-card why-choose-us-card-5">
                                    <h3 className="h6 text-sb">Measured By Impact</h3>
                                    <p className="text-18 text-rg">
                                        Beautiful work is only the beginning. We create solutions that drive adoption, strengthen brands, and deliver meaningful business outcomes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="why-choose-us-image-wrapper">
                            <Image ref={handImageRef} src={`${CDN_URL}/images/homepage/why-choose-us/why-choose-us-hand.png`}  alt="why-choose-us-hand-image"  width={412}  height={684}  className="why-choose-hand" />
                            
                            <div className="wc-svg-lines-wrapper">
                                <svg width="1300" height="761" viewBox="0 0 1300 761" fill="none" xmlns="http://www.w3.org/2000/svg" className="wc-bg-lines">
                                    <defs>
                                        <clipPath id="clockwise-clip">
                                            <path ref={clipPathRef1} d="" />
                                        </clipPath>
                                        
                                        <clipPath id="counter-clockwise-clip">
                                            <path ref={clipPathRef2} d="" />
                                        </clipPath>
                                    </defs>

                                    {/* Lines 1,3,5,7 - Clockwise animation */}
                                    <g clipPath="url(#clockwise-clip)">
                                        <path className="line-1" d="M649 404C784.31 404 894 513.69 894 649C894 689.356 884.242 727.432 866.958 761H863.577C881.093 727.511 891 689.412 891 649C891 515.347 782.653 407 649 407C515.347 407 407 515.347 407 649C407 689.412 416.907 727.511 434.423 761H431.042C413.758 727.432 404 689.356 404 649C404 513.69 513.69 404 649 404Z"/>
                                        <path className="line-3" d="M649 269C858.868 269 1029 439.132 1029 649C1029 687.983 1023.13 725.595 1012.22 761H1009.08C1020.08 725.617 1026 688 1026 649C1026 440.789 857.211 272 649 272C440.789 272 272 440.789 272 649C272 688 277.922 725.617 288.916 761H285.776C274.872 725.595 269 687.983 269 649C269 439.132 439.132 269 649 269Z"/>
                                        <path className="line-5" d="M651 138C934.322 138 1164 367.678 1164 651C1164 688.758 1159.92 725.564 1152.18 761H1149.1C1156.89 725.573 1161 688.766 1161 651C1161 369.335 932.665 141 651 141C369.335 141 141 369.335 141 651C141 688.766 145.107 725.573 152.896 761H149.822C142.08 725.564 138 688.758 138 651C138 367.678 367.678 138 651 138Z"/>
                                        <path className="line-7" d="M650 0C1008.99 0 1300 291.015 1300 650C1300 687.842 1296.77 724.929 1290.56 761H1287.51C1293.75 724.935 1297 687.847 1297 650C1297 292.672 1007.33 3 650 3C292.672 3 3 292.672 3 650C3 687.847 6.25086 724.935 12.4863 761H9.44043C3.234 724.929 0 687.842 0 650C0 291.015 291.015 0 650 0Z"/>
                                    </g>

                                    {/* Lines 2,4,6 - Counter-clockwise animation */}
                                    <g clipPath="url(#counter-clockwise-clip)">
                                        <path className="line-2" d="M648.5 336C821.089 336 961 475.911 961 648.5C961 688.159 953.612 726.093 940.138 761H936.918C950.529 726.131 958 688.188 958 648.5C958 477.568 819.432 339 648.5 339C477.568 339 339 477.568 339 648.5C339 688.188 346.471 726.131 360.082 761H356.862C343.388 726.093 336 688.159 336 648.5C336 475.911 475.911 336 648.5 336Z"/>
                                        <path className="line-4" d="M649 201C896.424 201 1097 401.576 1097 649C1097 687.674 1092.1 725.203 1082.89 761H1079.79C1089.06 725.216 1094 687.685 1094 649C1094 403.233 894.767 204 649 204C403.233 204 204 403.233 204 649C204 687.685 208.938 725.216 218.215 761H215.114C205.901 725.203 201 687.674 201 649C201 401.576 401.576 201 649 201Z"/>
                                        <path className="line-6" d="M650 68C971.43 68 1232 328.57 1232 650C1232 687.959 1228.36 725.068 1221.42 761H1218.37C1225.34 725.075 1229 687.964 1229 650C1229 330.227 969.773 71 650 71C330.227 71 71 330.227 71 650C71 687.964 74.6566 725.075 81.6318 761H78.5752C71.6363 725.068 68 687.959 68 650C68 328.57 328.57 68 650 68Z"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}