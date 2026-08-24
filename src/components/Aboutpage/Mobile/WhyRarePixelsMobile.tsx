'use client';

import GlassEffect from "@/components/global/LiquideGlass";
import Image from "next/image";

export default function WhyRarePixelsMobile() {
    return (
        <>
            <section className="section section-bg-blue">
                <div className="container">
                    <h2 className="text-sb text-white">Why you would Love to work at RarePixels</h2>

                    <p className="text-16 text-rg text-light-grey">A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one.</p>

                    <div className="why-rare-mobile-tree">
                        <Image src="/images/aboutpage/abt-why-rare/rare-tree.svg" alt="rare-tree" width={525} height={500}></Image>
                    </div>

                    <div className="abt-why-rare-desktop-pointers">
                        <div className="why-rare-point why-rare-point-1">
                            <GlassEffect className="site-radius-210">
                                <div className="why-rare-pointers why-rare-pointers-1">
                                    <span className="why-rare-pixel"></span>

                                    <div className="why-rare-desc why-rare-desc-1">
                                        <h3 className="text-sb text-18">Creative, Chill Environment</h3>

                                        <p className="text-rg text-16 text-white">We take the work seriously not ourselves. Our studio is built on creative freedom, good energy, and a culture where ideas flow without ego getting in the way.</p>
                                    </div>
                                </div>
                            </GlassEffect>
                        </div>

                        <div className="why-rare-point why-rare-point-2">
                            <GlassEffect className="site-radius-10">
                                <div className="why-rare-pointers why-rare-pointers-2">
                                    <span className="why-rare-pixel"></span>

                                    <div className="why-rare-desc why-rare-desc-2">
                                        <h3 className="text-sb text-18">Trust Over Timelines</h3>

                                        <p className="text-rg text-16 text-white">We hire people we believe in, then let them do their thing. No micromanagement, no hand-holding just clear goals and the autonomy to reach them your way.</p>
                                    </div>
                                </div>
                            </GlassEffect>
                        </div>

                        <div className="why-rare-point why-rare-point-3">
                            <GlassEffect className="site-radius-10">
                                <div className="why-rare-pointers why-rare-pointers-3">
                                    <span className="why-rare-pixel"></span>

                                    <div className="why-rare-desc why-rare-desc-3">
                                        <h3 className="text-sb text-18">Ideas Over Hierarchy</h3>

                                        <p className="text-rg text-16 text-white">The best idea wins, regardless of who it comes from. Whether you&apos;re a junior designer or a senior strategist, your voice has weight here.</p>
                                    </div>
                                </div>
                            </GlassEffect>
                        </div>

                        <div className="why-rare-point why-rare-point-4">
                            <GlassEffect className="site-radius-10">
                                <div className="why-rare-pointers why-rare-pointers-4">
                                    <span className="why-rare-pixel"></span>

                                    <div className="why-rare-desc why-rare-desc-4">
                                        <h3 className="text-sb text-18">People Before Processes</h3>

                                        <p className="text-rg text-16 text-white">Systems exist to support people, not the other way around. We adapt, we listen, and we make sure the humans on our team always come first.</p>
                                    </div>
                                </div>
                            </GlassEffect>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}