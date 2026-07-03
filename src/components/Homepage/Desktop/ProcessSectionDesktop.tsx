'use client';

import { useRef } from "react";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSectionDesktop() {

    const sectionRef = useRef<HTMLElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const titleWrapperRef = useRef<HTMLDivElement | null>(null);
    const elementsRef = useRef<HTMLDivElement | null>(null);
    const pointerWrapperRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (
            !sectionRef.current ||
            !containerRef.current ||
            !titleWrapperRef.current ||
            !elementsRef.current ||
            !pointerWrapperRef.current
        ) return;

        gsap.set(elementsRef.current, { display: "block", opacity: 0, scale: 0.8 });

        const pointers = gsap.utils.toArray<HTMLElement>(".process-pointer");
        const elements = gsap.utils.toArray<HTMLElement>(".process-elements-art-board img");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top -50px",
                end: `+=${window.innerHeight * 4}`,
                pin: true,
                scrub: 1.2,
                invalidateOnRefresh: true,
            }
        });

        gsap.set(pointers, { opacity: 0.5 });
        if (pointers[0]) {
            gsap.set(pointers[0], { opacity: 1 });
        }

        gsap.set(elements, { autoAlpha: 0, display: "none" });
        if (elements[0]) {
            gsap.set(elements[0], { autoAlpha: 1, display: "block" });
        }

        tl.to(containerRef.current, {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "100%",
            duration: 1
        }, 0)

            .to(titleWrapperRef.current, {
                marginLeft: "0px",
                marginRight: "auto",
                textAlign: "left",
                duration: 0.8,
                ease: "power2.inOut"
            }, 0)

            .to(pointers, {
                marginLeft: "0px",
                transform: "translateX(0)",
                stagger: 0.02,
                duration: 0.8,
                ease: "power2.inOut"
            }, 0)

            .to(elementsRef.current, {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "back.out(1.4)"
            }, 0.2);

        pointers.forEach((pointer, index) => {
            const currentDesc = pointer.querySelector(".process-desc");
            const currentP = pointer.querySelector(".process-desc p");
            const currentElement = elements[index];
            const prevElement = index > 0 ? elements[index - 1] : null;
            if (!currentP || !currentDesc || !currentElement) return;

            const stepStartTime = 1.0 + index * 1.0;
            if (index > 0) {
                const prevPointer = pointers[index - 1];
                const prevDesc = prevPointer.querySelector(".process-desc");
                const prevP = prevPointer.querySelector(".process-desc p");

                if (prevP && prevDesc) {
                    tl.to(prevP, { display: "none", height: 0, opacity: 0, duration: 0.4 }, stepStartTime)
                        .to(prevPointer, { opacity: 0.5, duration: 1 }, stepStartTime)
                        .call(() => {
                            prevPointer.classList.remove("active");
                            prevDesc.classList.remove("active");
                        }, undefined, stepStartTime);
                }

                if (prevElement) {
                    tl.to(prevElement, { autoAlpha: 0, display: "none", duration: 0.2 }, stepStartTime)
                        .to(currentElement, { autoAlpha: 1, display: "block", duration: 0.4 }, stepStartTime +
                            0.1);
                }

                tl.to(currentP, {
                    display: "flex", height: "auto", opacity: 1, paddingTop: "20px", duration: 0.6
                }, stepStartTime + 0.1)
                    .to(pointer, { opacity: 1, duration: 0.6 }, stepStartTime + 0.1)
                    .call(() => {
                        pointer.classList.add("active");
                        currentDesc.classList.add("active");
                    }, undefined, stepStartTime + 0.1);
            }
            tl.to({}, { duration: 1 });
        });

    }, { scope: sectionRef });

    return (
        <>
            <section ref={sectionRef} className="section bg-light-yellow">
                <div className="container-sm">
                    <div ref={containerRef}>
                        <div ref={titleWrapperRef} className="process-text-wrapper">
                            <h2 className="text-sb">Work Process We Follow</h2>

                            <p className="text-rg text-18">Every project flows through a defined path understanding, planning, designing, building, and refining. This ensures that every decision is intentional and every outcome is crafted with clarity and precision.</p>
                        </div>

                        <div className="process-elements-wrapper">
                            <div ref={elementsRef} className="process-element-art-board">
                                <Image src="/images/homepage/discover-elements.svg" alt="process-elements" width={347} height={348}></Image>
                            </div>

                            <div ref={pointerWrapperRef} className="process-pointer-wrapper">
                                <div className="process-pointer">
                                    <div className="process-pointer-svg site-radius-20">
                                        <span className="icon-discover-process"></span>
                                    </div>

                                    <div className="process-pointer-text-wrapper">
                                        <h2 className="text-sb">DISCOVER</h2>

                                        <p className="text-rg text-18">
                                            <span>Understanding the foundation</span>
                                            <span>We begin by learning about your business, goals, and audience to build a strong foundation for everything that follows.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="process-pointer">
                                    <div className="process-pointer-svg site-radius-20">
                                        <span className="icon-strategy-process"></span>
                                    </div>

                                    <div className="process-pointer-text-wrapper">
                                        <h2 className="text-sb">STRATEGISE</h2>

                                        <p className="text-rg text-18">
                                            <span>Defining the direction</span>
                                            <span>We shape the structure, user flow, and key decisions to ensure a clear and focused path before execution begins.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="process-pointer">
                                    <div className="process-pointer-svg site-radius-20">
                                        <span className="icon-create-process"></span>
                                    </div>

                                    <div className="process-pointer-text-wrapper">
                                        <h2 className="text-sb">CREATE</h2>

                                        <p className="text-rg text-18">
                                            <span>Designing the experience</span>
                                            <span>We craft intuitive, visually strong designs that align with your brand and deliver meaningful user experiences.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="process-pointer">
                                    <div className="process-pointer-svg site-radius-20">
                                        <span className="icon-engineer-process"></span>
                                    </div>

                                    <div className="process-pointer-text-wrapper">
                                        <h2 className="text-sb">ENGINEER</h2>

                                        <p className="text-rg text-18">
                                            <span>Building the solution</span>
                                            <span>We develop scalable, high-performing systems where design and functionality come together seamlessly.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="process-pointer">
                                    <div className="process-pointer-svg site-radius-20">
                                        <span className="icon-refine-process"></span>
                                    </div>

                                    <div className="process-pointer-text-wrapper">
                                        <h2 className="text-sb">REFINE</h2>

                                        <p className="text-rg text-18">
                                            <span>Improving with precision</span>
                                            <span>We test, optimize, and fine-tune every detail to ensure the product performs smoothly and meets expectations.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="process-pointer">
                                    <div className="process-pointer-svg site-radius-20">
                                        <span className="icon-deliver-svg"></span>
                                    </div>

                                    <div className="process-pointer-text-wrapper">
                                        <h2 className="text-sb">DELIVER</h2>

                                        <p className="text-rg text-18">
                                            <span>Launching with confidence</span>
                                            <span>We finalize, deploy, and ensure everything is ready to go live built to perform, scale, and support your growth.</span>
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