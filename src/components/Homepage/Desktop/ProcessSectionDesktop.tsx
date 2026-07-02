'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";

export default function ProcessSectionDesktop() {
    return (
        <>
            <section className="section bg-light-yellow">
                <div className="container-sm">
                    <div>
                        <div className="process-text-wrapper">
                            <h2 className="text-sb">Work Process We Follow</h2>

                            <p className="text-rg text-18">Every project flows through a defined path understanding, planning, designing, building, and refining. This ensures that every decision is intentional and every outcome is crafted with clarity and precision.</p>
                        </div>

                        <div className="process-elements-wrapper">
                            <div className="process-element-art-board">
                                <Image src="/images/homepage/discover-elements.svg" alt="process-elements" width={347} height={348}></Image>
                            </div>

                            <div className="process-pointer-wrapper">
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