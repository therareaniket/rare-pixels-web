'use client';

import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import GlassEffect from "@/components/LiquideGlass";
import Image from "next/image";

export default function ServicesSectionMobile() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="services-mobile-title">
                        <h2 className="text-sb">Services</h2>

                        <p className="text-rg text-14">
                            <span> Every business has different goals. The challenge is often the same.</span>
                            <span> Standing out in a world full of choices.</span>
                        </p>
                    </div>

                    <div className="services-mobile-card-wrapper">
                        <div className="services-mobile-card services-ui-ux site-radius-10 bg-purple-shade">
                            <div className="services-art-board">
                                <Image src="/images/homepage/services-ui-ux.png" alt="services ui/ux" width={350} height={231}></Image>
                            </div>

                            <GlassEffect className="services-mobile-text-wrapper site-radius-10">
                                <h3 className="h4 text-black text-sb">CLARITY</h3>

                                <p className="text-18 text-sb text-black">UI/UX Design</p>

                                <p className="text-14 services-detail-text">
                                    <span className="text-md text-black">People do not leave because they are not interested.</span>

                                    <span className="text-rg text-black">They leave because the experience was not built for them. We design interfaces from the ground up specific to your users, their journey, and the actions your business needs them to take. </span>
                                </p>
                            </GlassEffect>
                        </div>

                        <div className="services-mobile-card services-development site-radius-10 bg-light-yellow">
                            <div className="services-art-board">
                                <Image src="/images/homepage/services-development.png" alt="services development" width={245} height={255}></Image>
                            </div>

                            <GlassEffect className="services-mobile-text-wrapper site-radius-10">
                                <h3 className="h4 text-black text-sb">MOMENTUM</h3>

                                <p className="text-18 text-sb text-black">Web & App Development</p>

                                <p className="text-14 services-detail-text">
                                    <span className="text-md text-black">A platform built for someone else&apos;s business will always limit yours. </span>

                                    <span className="text-rg text-black">We engineer every digital product from scratch bespoke platforms, web applications, and e-commerce builds designed for your exact requirements. No templates. No ceiling. </span>
                                </p>
                            </GlassEffect>
                        </div>

                        <div className="services-mobile-card servicesbrand-identity site-radius-10 bg-light-pink">
                            <div className="services-art-board">
                                <Image src="/images/homepage/services-brand-identity.png" alt="services brand identity" width={245} height={245}></Image>
                            </div>

                            <GlassEffect className="services-mobile-text-wrapper site-radius-10">
                                <h3 className="h4 text-black text-sb">PERCEPTION</h3>

                                <p className="text-18 text-sb text-black">Brand Identity Design</p>

                                <p className="text-14 services-detail-text">
                                    <span className="text-md text-black">Before people trust your business, they judge your brand. </span>

                                    <span className="text-rg text-black">We engineer every digital product from scratch bespoke platforms, web applications, and e-commerce builds designed for your exact requirements. No templates. No ceiling. </span>
                                </p>
                            </GlassEffect>
                        </div>

                        <div className="services-mobile-card services-social-media site-radius-10 bg-light-green">
                            <div className="services-art-board">
                                <Image src="/images/homepage/services-sm-management.png" alt="services social-media-management" width={315} height={315}></Image>
                            </div>

                            <GlassEffect className="services-mobile-text-wrapper site-radius-10">
                                <h3 className="h4 text-black text-sb">RELEVANCE</h3>

                                <p className="text-18 text-sb text-black">Social Media Management</p>

                                <p className="text-14 services-detail-text">
                                    <span className="text-md text-black">Attention is rented. Recall is earned.</span>

                                    <span className="text-rg text-black">We engineer every digital product from scratch bespoke platforms, web applications, and e-commerce builds designed for your exact requirements. No templates. No ceiling. </span>
                                </p>
                            </GlassEffect>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}