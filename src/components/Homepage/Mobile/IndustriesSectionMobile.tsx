'use client';

import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import Image from "next/image";

export default function IndustriesSectionMobile() {
    return (
        <>
            <section className="section" style={{paddingTop:0}}>
                <div className="container">
                    <div className="industries-text-wrapper-mobile">
                        <h2 className="text-sb">Industries We Serve</h2>

                        <p className="text-14 text-rg">
                            <span>Every industry is different.</span>
                            <span> But the need to earn trust, create memorable experiences, and stay relevant isn&apos;t.</span>
                        </p>
                    </div>

                    <div className="industries-mobile-video-wrapper">
                        <div className="industries-mobile-video">
                            <Image src="/images/homepage/industry-image-1.webp" alt="industry image" width={424} height={428}></Image>

                            <div className="industry-mobile-pixels">
                                <div className="industry-mob-1 industry-pix-25"></div>
                                <div className="industry-mob-2 industry-pix-25"></div>
                                <div className="industry-mob-3 industry-pix-25"></div>
                                <div className="industry-mob-4 industry-pix-15"></div>
                                <div className="industry-mob-5 industry-pix-10"></div>
                                <div className="industry-mob-6 industry-pix-25"></div>
                                <div className="industry-mob-7 industry-pix-25"></div>
                                <div className="industry-mob-8 industry-pix-15"></div>
                                <div className="industry-mob-9 industry-pix-25"></div>
                            </div>
                        </div>

                        <div className="industry-name">
                            <span className="text-sb">Technology & SaaS</span>

                            <div className="text-18 text-rg">
                                <p>Complex products fail when user&apos;s understand them.</p>
                                <p>We transform powerful SaaS platforms into intuitive experiences that drive adoption, retention, and growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}