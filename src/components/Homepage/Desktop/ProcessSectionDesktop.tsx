'use client';

import { useEffect, useRef, useState } from "react";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";

export default function ProcessSectionDesktop() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isStickyActive, setIsStickyActive] = useState(false);

    useEffect(() => {
        let frameId: number | null = null;

        const handleScroll = () => {
            if (frameId !== null) {
                cancelAnimationFrame(frameId);
            }

            frameId = window.requestAnimationFrame(() => {
                const node = sectionRef.current;
                if (!node) return;

                const rect = node.getBoundingClientRect();
                const nextState = rect.top <= 0 && rect.bottom > 0;
                setIsStickyActive((prev) => (prev === nextState ? prev : nextState));
            });
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            if (frameId !== null) {
                cancelAnimationFrame(frameId);
            }
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <>
            <section ref={sectionRef} className={`section bg-yellowish process-section${isStickyActive ? " is-active" : ""}`}>
                <div className={`container-sm${isStickyActive ? " process-section-inner" : ""}`}>
                    <div className="process-title-wrapper">
                        <h2 className="text-sb text-black">Work Process We Follow</h2>

                        <p className="text-rg text-18 text-black">Every project flows through a defined path understanding, planning, designing, building, and refining. This ensures that every decision is intentional and every outcome is crafted with clarity and precision.</p>
                    </div>

                    <div className="process-pointers-elements-wrapper">
                        <div className="process-elements">
                            <Image src="/images/homepage/discover-elements.svg" alt="process-elements" width={347} height={348}></Image>
                        </div>

                        <div className="process-pointer-wrapper">
                            <div className="process-pointer-1 process-pointer active">
                                <div className="process-icon">
                                    <span className="icon-discover-process"></span>
                                </div>

                                <div className="process-desc active">
                                    <h3 className="h2 text-sb text-black">DISCOVER</h3>
                                    <p className="text-rg text-18 text-black">
                                        <span>Understanding the foundation</span>
                                        <span>We begin by learning about your business, goals, and audience to build a strong foundation for everything that follows.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="process-pointer-2 process-pointer">
                                <div className="process-icon">
                                    <span className="icon-strategy-process"></span>
                                </div>

                                <div className="process-desc">
                                    <h3 className="h2 text-sb text-black">STRATEGISE</h3>
                                    <p className="text-rg text-18 text-black">
                                        <span>Defining the direction</span>
                                        <span>We shape the structure, user flow, and key decisions to ensure a clear and focused path before execution begins.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="process-pointer-3 process-pointer">
                                <div className="process-icon">
                                    <span className="icon-create-process"></span>
                                </div>

                                <div className="process-desc">
                                    <h3 className="h2 text-sb text-black">CREATE</h3>
                                    <p className="text-rg text-18 text-black">
                                        <span>Designing the experience</span>
                                        <span>We craft intuitive, visually strong designs that align with your brand and deliver meaningful user experiences.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="process-pointer-4 process-pointer">
                                <div className="process-icon">
                                    <span className="icon-engineer-process"></span>
                                </div>

                                <div className="process-desc">
                                    <h3 className="h2 text-sb text-black">ENGINEER</h3>
                                    <p className="text-rg text-18 text-black">
                                        <span>Building the solution</span>
                                        <span>We develop scalable, high-performing systems where design and functionality come together seamlessly.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="process-pointer-5 process-pointer">
                                <div className="process-icon">
                                    <span className="icon-refine-process"></span>
                                </div>

                                <div className="process-desc">
                                    <h3 className="h2 text-sb text-black">REFINE</h3>
                                    <p className="text-rg text-18 text-black">
                                        <span>Understanding the foundation</span>
                                        <span>We begin by learning about your business, goals, and audience to build a strong foundation for everything that follows.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="process-pointer-6 process-pointer">
                                <div className="process-icon">
                                    <span className="icon-deliver-svg"></span>
                                </div>

                                <div className="process-desc">
                                    <h3 className="h2 text-sb text-black">DELIVER</h3>
                                    <p className="text-rg text-18 text-black">
                                        <span>Improving with precision</span>
                                        <span>We test, optimize, and fine-tune every detail to ensure the product performs smoothly and meets expectations.</span>
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