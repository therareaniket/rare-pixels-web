'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";

export default function WhyChooseUsSectionDesktop() {

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="why-choose-us-text-wrapper">
                        <h2 className="text-sb">Why Choose Us</h2>
                        <p className="text-18 text-rg">We bring together strategy, design, technology, and creativity to build experiences that are easy to use, hard to ignore, and built to perform.</p>
                    </div>

                    <div className="container-sm">
                        <div className="why-choose-us-content-wrapper why-choose-us-for-desktop">
                            <div className="why-choose-us-pointer-wrapper">
                                <div className="why-choose-us-pointer-cards">
                                    <div className="why-choose-us-card why-choose-us-card-1">
                                        <h3 className="h6 text-sb">Built, Not Borrowed</h3>

                                        <p className="text-18 text-rg">We don&apos;t believe in templates or recycled thinking. Every solution is created from the ground up to fit your business, your users, and your ambitions.</p>
                                    </div>

                                    <div className="why-choose-us-card why-choose-us-card-2">
                                        <h3 className="h6 text-sb">Simplicity With Purpose</h3>

                                        <p className="text-18 text-rg">Great experiences feel effortless. We remove complexity, sharpen every interaction, and design with clarity at the center of every decision.</p>
                                    </div>
                                </div>

                                <div className="why-choose-us-pointer-cards">
                                    <div className="why-choose-us-card why-choose-us-card-3">
                                        <h3 className="h6 text-sb">Ideas That Get Built</h3>

                                        <p className="text-18 text-rg">A vision means little without execution. From first sketch to final launch, every detail is delivered with precision, consistency, and care.</p>
                                    </div>

                                    <div className="why-choose-us-card why-choose-us-card-4">
                                        <h3 className="h6 text-sb">Partners In The Process</h3>

                                        <p className="text-18 text-rg">We work alongside you, not around you. The best outcomes come from trust, collaboration, and relationships that grow beyond a single project.</p>
                                    </div>

                                    <div className="why-choose-us-card why-choose-us-card-5">
                                        <h3 className="h6 text-sb">Measured By Impact</h3>

                                        <p className="text-18 text-rg">Beautiful work is only the beginning. We create solutions that drive adoption, strengthen brands, and deliver meaningful business outcomes.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="why-choose-us-image-wrapper">
                                <div className="why-choose-us-images">
                                    <Image className="why-choose-us-eclipse-1 why-choose-us-eclipse" src="/images/homepage/why-choose-us/why-choose-us-eclipse-dark-1.svg" alt="eclipse" width={354} height={354}></Image>
                                    <Image className="why-choose-us-eclipse-2 why-choose-us-eclipse" src="/images/homepage/why-choose-us/why-choose-us-eclipse-dark-2.svg" alt="eclipse" width={490} height={490}></Image>                                    
                                    <Image className="why-choose-us-eclipse-3 why-choose-us-eclipse" src="/images/homepage/why-choose-us/why-choose-us-eclipse-dark-3.svg" alt="eclipse" width={625} height={625}></Image>                                    
                                    <Image className="why-choose-us-eclipse-4 why-choose-us-eclipse" src="/images/homepage/why-choose-us/why-choose-us-eclipse-dark-4.svg" alt="eclipse" width={760} height={760}></Image>                                    
                                    <Image className="why-choose-us-eclipse-5 why-choose-us-eclipse" src="/images/homepage/why-choose-us/why-choose-us-eclipse-dark-5.svg" alt="eclipse" width={896} height={896}></Image>                                    
                                    <Image className="why-choose-us-eclipse-6 why-choose-us-eclipse" src="/images/homepage/why-choose-us/why-choose-us-eclipse-dark-6.svg" alt="eclipse" width={1026} height={1026}></Image>                                    
                                    <Image className="why-choose-us-eclipse-7 why-choose-us-eclipse" src="/images/homepage/why-choose-us/why-choose-us-eclipse-dark-7.svg" alt="eclipse" width={1164} height={1164}></Image>                                    
                                    <Image className="why-choose-us-eclipse-8 why-choose-us-eclipse" src="/images/homepage/why-choose-us/why-choose-us-eclipse-dark-8.svg" alt="eclipse" width={1300} height={1300}></Image>                                    
                                </div>

                                <div className="why-choose-us-hand-image">
                                    <Image src="/images/homepage/why-choose-us/why-choose-us-hand.png" alt="why-choose-us-hand-image" width={412} height={684}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}