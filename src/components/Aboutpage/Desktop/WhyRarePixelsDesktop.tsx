'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import GlassEffect from "@/components/global/LiquideGlass";
import Image from "next/image";

export default function WhyRarePixelsDesktop() {
    return (
        <>
            <section className="section section-bg-blue">
                <div className="container">
                    <div className="why-rare-title-desktop">
                        <h2 className="text-sb text-white">Why You Would Love To Work At RarePixels</h2>

                        <p className="text-rg text-18 text-light-grey">A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one.</p>
                    </div>

                    <div className="why-rare-desktop-content">

                        <div className="abt-why-rare-desktop-pointers">
                            <div className="why-rare-point why-rare-point-1">
                                <GlassEffect className="site-radius-20">
                                    <div className="why-rare-pointers why-rare-pointers-1">
                                        <span className="why-rare-pixel"></span>

                                        <div className="why-rare-desc why-rare-desc-1">
                                            <h3 className="text-sb h6">Creative, Chill Environment</h3>

                                            <p className="text-rg text-18 text-white">We take the work seriously not ourselves. Our studio is built on creative freedom, good energy, and a culture where ideas flow without ego getting in the way.</p>
                                        </div>
                                    </div>
                                </GlassEffect>
                            </div>

                            <div className="why-rare-point why-rare-point-2">
                                <GlassEffect className="site-radius-20">
                                    <div className="why-rare-pointers why-rare-pointers-2">
                                        <span className="why-rare-pixel"></span>

                                        <div className="why-rare-desc why-rare-desc-2">
                                            <h3 className="text-sb h6">Trust Over Timelines</h3>

                                            <p className="text-rg text-18 text-white">We hire people we believe in, then let them do their thing. No micromanagement, no hand-holding just clear goals and the autonomy to reach them your way.</p>
                                        </div>
                                    </div>
                                </GlassEffect>
                            </div>

                            <div className="why-rare-point why-rare-point-3">
                                <GlassEffect className="site-radius-20">
                                    <div className="why-rare-pointers why-rare-pointers-3">
                                        <span className="why-rare-pixel"></span>

                                        <div className="why-rare-desc why-rare-desc-3">
                                            <h3 className="text-sb h6">Ideas Over Hierarchy</h3>

                                            <p className="text-rg text-18 text-white">The best idea wins, regardless of who it comes from. Whether you&apos;re a junior designer or a senior strategist, your voice has weight here.</p>
                                        </div>
                                    </div>
                                </GlassEffect>
                            </div>

                            <div className="why-rare-point why-rare-point-4 ">
                                <GlassEffect className="site-radius-20">
                                    <div className="why-rare-pointers why-rare-pointers-4 glass">
                                        <span className="why-rare-pixel"></span>

                                        <div className="why-rare-desc why-rare-desc-4">
                                            <h3 className="text-sb h6">People Before Processes</h3>

                                            <p className="text-rg text-18 text-white">Systems exist to support people, not the other way around. We adapt, we listen, and we make sure the humans on our team always come first.</p>
                                        </div>
                                    </div>
                                </GlassEffect>
                            </div>
                        </div>

                        <div className="why-rare-desktop-tree-image">
                            <Image src="/images/aboutpage/abt-why-rare/rare-tree.svg" alt="rare-tree" width={525} height={500}></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}