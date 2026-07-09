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
    const elementWrapperRef = useRef<HTMLDivElement | null>(null);

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
        const elements = gsap.utils.toArray<HTMLElement>(".process-element");

        console.log("Pointers:", pointers.length);
        console.log("Elements:", elements.length);

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

            .to(pointerWrapperRef.current, {
                marginLeft: "auto",
                duration: 0.9,
                ease: "power2.inOut"
            }, 0)

            .to(pointers, {
                translateX: 0,
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
            const currentDesc = pointer.querySelector(".process-pointer-text-wrapper");
            const currentP = pointer.querySelector(".process-pointer-text-wrapper p");
            const currentElement = elements[index];
            const prevElement = index > 0 ? elements[index - 1] : null;
            if (!currentP || !currentDesc || !currentElement) return;

            const stepStartTime = 1.0 + index * 1.0;
            if (index > 0) {
                const prevPointer = pointers[index - 1];
                const prevDesc = prevPointer.querySelector(".process-pointer-text-wrapper");
                const prevP = prevPointer.querySelector(".process-pointer-text-wrapper p");

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
            <section ref={sectionRef} className="section bg-light-yellow process-section">
                <div className="container-sm">
                    <div ref={containerRef}>
                        <div ref={titleWrapperRef} className="process-text-wrapper">
                            <h2 className="text-sb">Work Process We Follow</h2>

                            <p className="text-rg text-18">Every great outcome starts with understanding. We move from insight to execution through a process designed to reduce guesswork, improve collaboration, and build solutions that perform.</p>
                        </div>

                        <div ref={elementWrapperRef} className="process-elements-wrapper">
                            <div ref={elementsRef} className="process-element-art-board">
                                <Image className="process-element" src="/images/homepage/discover-elements.svg" alt="process-elements" width={347} height={348}></Image>
                                <Image className="process-element" src="/images/homepage/strategies-elements.svg" alt="process-elements" width={332} height={344}></Image>
                                <Image className="process-element" src="/images/homepage/create-elements.svg" alt="process-elements" width={292} height={350}></Image>
                                <Image className="process-element" src="/images/homepage/refine-elements.svg" alt="process-elements" width={347} height={348}></Image>
                                <Image className="process-element" src="/images/homepage/engineer-elements.svg" alt="process-elements" width={317} height={350}></Image>
                                <Image className="process-element" src="/images/homepage/deliver-elements.svg" alt="process-elements" width={341} height={338}></Image>
                            </div>

                            <div ref={pointerWrapperRef} className="process-pointer-wrapper active">
                                <div className="process-pointer-1 process-pointer active">
                                    <div className="process-pointer-svg site-radius-20">
                                        <span className="icon-discover-process"></span>
                                    </div>

                                    <div className="process-pointer-text-wrapper">
                                        <h2 className="text-sb">DISCOVER</h2>

                                        <p className="text-rg text-18">
                                            <span>Every meaningful solution begins with understanding.</span>
                                            <span>We take time to understand your business, your users, and the challenges standing in the way of growth. The better the questions, the better the outcome.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="process-pointer-2 process-pointer">
                                    <div className="process-pointer-svg site-radius-20">
                                        <span className="icon-strategy-process"></span>
                                    </div>

                                    <div className="process-pointer-text-wrapper">
                                        <h2 className="text-sb">STRATEGISE</h2>

                                        <p className="text-rg text-18">
                                            <span>Direction creates momentum.</span>
                                            <span>Ideas become impactful when backed by clarity. We bring together research, insights, and business goals to build a roadmap that gives every decision a purpose.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="process-pointer-3 process-pointer">
                                    <div className="process-pointer-svg site-radius-20">
                                        <span className="icon-create-process"></span>
                                    </div>

                                    <div className="process-pointer-text-wrapper">
                                        <h2 className="text-sb">CREATE</h2>

                                        <p className="text-rg text-18">
                                            <span>Creativity with intention.</span>
                                            <span>We design experiences, identities, and interactions that feel intuitive, leave an impression, and make your brand impossible to overlook.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="process-pointer-4 process-pointer">
                                    <div className="process-pointer-svg site-radius-20">
                                        <span className="icon-engineer-process"></span>
                                    </div>

                                    <div className="process-pointer-text-wrapper">
                                        <h2 className="text-sb">ENGINEER</h2>

                                        <p className="text-rg text-18">
                                            <span>Built for the real world.</span>
                                            <span>From websites to digital products, we develop solutions that are scalable, reliable, and engineered to perform long after launch.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="process-pointer-5 process-pointer">
                                    <div className="process-pointer-svg site-radius-20">
                                        <span className="icon-refine-process"></span>
                                    </div>

                                    <div className="process-pointer-text-wrapper">
                                        <h2 className="text-sb">REFINE</h2>

                                        <p className="text-rg text-18">
                                            <span>The details shape the experience.</span>
                                            <span>We test, improve, and fine-tune every interaction because the smallest refinements often make the biggest difference.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="process-pointer-6 process-pointer">
                                    <div className="process-pointer-svg site-radius-20">
                                        <span className="icon-deliver-svg"></span>
                                    </div>

                                    <div className="process-pointer-text-wrapper">
                                        <h2 className="text-sb">DELIVER</h2>

                                        <p className="text-rg text-18">
                                            <span>Launch is where the journey expands.</span>
                                            <span>We deliver solutions with precision and stay invested in their growth, ensuring they continue to create value as your business evolves.</span>
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