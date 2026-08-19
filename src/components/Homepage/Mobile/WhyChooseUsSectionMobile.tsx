'use client';

import Image from "next/image";


export default function WhyChooseUsSectionMobile() {

    return (
        <>
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <h2 className="text-sb">Why Choose Us</h2>

                    <p className="text-rg text-16">We bring together strategy, design, technology, and creativity to build experiences that are easy to use, hard to ignore, and built to perform.</p>

                    <div className="why-choose-us-semi-circles">
                        <div className="why-semicircle-1 why-semicircle">
                            <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-dark-1.svg" alt="eclipse" width={71} height={71}></Image>
                        </div>
                        <div className="why-semicircle-2 why-semicircle">
                            <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-dark-2.svg" alt="eclipse" width={115} height={115}></Image>
                        </div>
                        <div className="why-semicircle-3 why-semicircle">
                            <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-dark-3.svg" alt="eclipse" width={159} height={159}></Image>
                        </div>
                        <div className="why-semicircle-4 why-semicircle">
                            <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-dark-4.svg" alt="eclipse" width={203} height={203}></Image>
                        </div>
                        <div className="why-semicircle-5 why-semicircle">
                            <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-dark-5.svg" alt="eclipse" width={248} height={245}></Image>
                        </div>
                        <div className="why-semicircle-6 why-semicircle">
                            <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-dark-6.svg" alt="eclipse" width={292} height={292}></Image>
                        </div>
                        <div className="why-semicircle-7 why-semicircle">
                            <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-dark-7.svg" alt="eclipse" width={334} height={334}></Image>
                        </div>
                        <div className="why-semicircle-8 why-semicircle">
                            <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-dark-8.svg" alt="eclipse" width={379} height={379}></Image>
                        </div>
                        <div className="why-semicircle-9 why-semicircle">
                            <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-dark-9.svg" alt="eclipse" width={424} height={424}></Image>
                        </div>

                        <div className="why-choose-us-hand-image">
                            <Image src="/images/homepage/why-choose-us/why-choose-us-hand.png" alt="why-choose-us-hand" width={190} height={316}></Image>
                        </div>
                    </div>

                    <div className="why-choose-mob-pointer-wrapper">
                        <div className="why-pointers-mob">
                            <h3 className="text-18 text-sb">Built, Not Borrowed</h3>

                            <p className="text-16 text-rg">We don&apos;t believe in templates or recycled thinking. Every solution is created from the ground up to fit your business, your users, and your ambitions.</p>
                        </div>

                        <div className="why-pointers-mob">
                            <h3 className="text-18 text-sb">Simplicity With Purpose</h3>

                            <p className="text-16 text-rg">Great experiences feel effortless. We remove complexity, sharpen every interaction, and design with clarity at the center of every decision.</p>
                        </div>

                        <div className="why-pointers-mob">
                            <h3 className="text-18 text-sb">Ideas That Get Built</h3>

                            <p className="text-16 text-rg">A vision means little without execution. From first sketch to final launch, every detail is delivered with precision, consistency, and care.</p>
                        </div>

                        <div className="why-pointers-mob">
                            <h3 className="text-18 text-sb">Partners In The Process</h3>

                            <p className="text-16 text-rg">We work alongside you, not around you. The best outcomes come from trust, collaboration, and relationships that grow beyond a single project.</p>
                        </div>

                        <div className="why-pointers-mob">
                            <h3 className="text-18 text-sb">Measured By Impact</h3>

                            <p className="text-16 text-rg">Beautiful work is only the beginning. We create solutions that drive adoption, strengthen brands, and deliver meaningful business outcomes.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}