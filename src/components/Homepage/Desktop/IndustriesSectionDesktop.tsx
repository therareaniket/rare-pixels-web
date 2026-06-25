'use client';

import Image from "next/image";



export default function IndustriesSectionDesktop() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="industries-text-title">
                        <h2 className="text-sb">Industries We Serve</h2>
                        <p className="text-rg text-18 text-grey">
                            <span>Every industry is different.</span>
                            <span> But the need to earn trust, create memorable experiences, and stay relevant isn&apos;t.</span>
                        </p>
                    </div>

                    <div className="industries-card-wrapper">
                        <div className="industries-image-wrapper">
                            <Image src="/images/homepage/industry-image-1.webp" alt="industry-image" width={1000} height={600}></Image>

                            <div className="industry-detail-pixels-1">
                                <div className="indus-box-1 indus-box-50"></div>
                                <div className="indus-box-2 indus-box-50"></div>
                                <div className="indus-box-3 indus-box-50"></div>
                                <div className="indus-box-4 indus-box-40"></div>
                                <div className="indus-box-5 indus-box-30"></div>
                            </div>

                            <div className="industry-detail-pixels-2">
                                <div className="indus-box-6 indus-box-50"></div>
                                <div className="indus-box-7 indus-box-50"></div>
                                <div className="indus-box-8 indus-box-30"></div>
                            </div>

                            <div className="industry-detail-pixels-3">
                                <div className="indus-box-9 indus-box-50"></div>
                            </div>

                        </div>
                        <div className="industries-text-wrapper">
                            <span className="text-sb industries-title-name">Technology & SaaS</span>

                            <p className="text-18 text-grey">
                                <span className="text-rg">Complex products fail when users don&apos;t understand them.</span>
                                <span className="text-rg">We transform powerful SaaS platforms into intuitive experiences that drive adoption, retention, and growth.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}