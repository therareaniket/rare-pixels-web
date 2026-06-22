'use client';

import Image from "next/image";



export default function IndustriesSectionDesktop() {
    return (
        <>
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="industries-text-title">
                        <h2 className="text-sb">Industries We Serve</h2>
                        <p className="text-rg text-18">We partner with brands across diverse industries, delivering tailored solutions that adapt, perform, and scale in every space.</p>
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
                            <span className="text-sb">Real Estate & PropTech</span>

                            <p className="text-18 text-md">We create digital experiences that elevate real estate brands from property showcases to high converting platforms that build trust and drive inquiries.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}