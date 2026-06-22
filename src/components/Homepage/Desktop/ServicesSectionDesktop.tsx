'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import GlassEffect from "@/components/LiquideGlass";
import Image from "next/image";

export default function ServicesSectionDesktop() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="hm-services-title-wrapper">
                        <div className="services-title">
                            <h2 className="text-sb">Services</h2>
                        </div>

                        <div className="services-subtitle">
                            <p className="text-18 text-rg">Every business has different goals. The challenge is often the same.</p>
                            <p className="text-18 text-rg">Standing out in a world full of choices.</p>
                        </div>
                    </div>

                    <div className="services-card-wrapper">
                        <div className="services-card services-ui-ux site-radius-20 bg-purple-shade">
                            <div className="services-art-board">
                                <Image src="/images/homepage/services-ui-ux.png" alt="ui-ux service" width={386} height={255}></Image>
                            </div>
                            <GlassEffect className="site-radius-20 services-text">
                                <h3 className="text-sb text-black">CLARITY</h3>

                                <span className="h6 text-sb text-black">UI/UX Design</span>

                                <div className="services-detail-text">
                                    <p className="text-md text-18 text-black">People do not leave because they are not interested.</p>

                                    <p className="text-18 text-rg text-black">They leave because the experience was not built for them. We design interfaces from the ground up specific to your users, their journey, and the actions your business needs them to take. </p>
                                </div>
                            </GlassEffect>
                        </div>

                        <div className="services-card services-development site-radius-20 bg-light-yellow">
                            <div className="services-art-board">
                                <Image src="/images/homepage/services-development.png" alt="development service" width={270} height={282}></Image>
                            </div>
                            <GlassEffect className="site-radius-20 services-text">
                                <h3 className="text-sb text-black">MOMENTUM</h3>

                                <span className="h6 text-sb text-black">Web & App Development</span>

                                <div className="services-detail-text">
                                    <p className="text-md text-18 text-black">A platform built for someone else&apos;s business will always limit yours. </p>

                                    <p className="text-18 text-rg text-black">We engineer every digital product from scratch bespoke platforms, web applications, and e-commerce builds designed for your exact requirements. No templates. No ceiling. </p>
                                </div>
                            </GlassEffect>
                        </div>

                        <div className="services-card services-brand-identity site-radius-20 bg-light-pink">
                            <div className="services-art-board">
                                <Image src="/images/homepage/services-brand-identity.png" alt="brand service" width={270} height={270}></Image>
                            </div>
                            <GlassEffect className="site-radius-20 services-text">
                                <h3 className="text-sb text-black">PERCEPTION</h3>

                                <span className="h6 text-sb text-black">Brand Identity Design</span>

                                <div className="services-detail-text">
                                    <p className="text-md text-18 text-black">Before people trust your business, they judge your brand. </p>

                                    <p className="text-18 text-rg text-black">We build identities from first principles original marks, bespoke visual systems, and brand architectures conceived entirely for you. Not reskinned. Not recycled. Distinctly yours.</p>
                                </div>
                            </GlassEffect>

                        </div>

                        <div className="services-card services-social-media site-radius-20 bg-light-green">
                            <div className="services-art-board">
                                <Image src="/images/homepage/services-sm-management.png" alt="social-media services" width={346} height={346}></Image>
                            </div>
                            <GlassEffect className="site-radius-20 services-text">
                                <h3 className="text-sb text-black">RELEVANCE</h3>

                                <span className="h6 text-sb text-black">Social Media Management</span>

                                <div className="services-detail-text">
                                    <p className="text-md text-18 text-black">Attention is rented. Recall is earned.</p>

                                    <p className="text-18 text-rg text-black">We help brands stay worth remembering with content strategies built around your specific voice, your audience&apos;s behaviour, and the platforms where they actually spend their time.</p>
                                </div>
                            </GlassEffect>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 