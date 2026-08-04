'use client';

import Link from "next/link";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";

export default function BlogSectionDesktop() {
    return (
        <>
            <section className="section" style={{ paddingBottom: 0 }} >
                <div className="container">
                    <div className="hm-blog-text-wrapper">
                        <h2 className="text-sb">Our Blog</h2>

                        <p className="text-18 text-rg text-grey">A collection of thoughts, learnings, and perspectives from our work in design, technology, and building impactful digital experiences.</p>
                    </div>

                    <div className="hm-blog-wrapper">
                        <div className="hm-blog-card-left">
                            <div className="hm-blog-image site-radius-20">
                                <Image src="/images/homepage/blog-image-1.png" alt="blog-image" width={785} height={442}></Image>

                                <div className="blog-category-tag">
                                    <p className="text-16 text-sb text-white">Life at RPD</p>
                                </div>
                            </div>

                            <h3 className="text-sb blog-desk-title">RarePixels Turns 2. The Big Game Is Still Loading.</h3>

                            <div className="hm-blog-author-icon-wrapper">
                                <div className="hm-blog-author">
                                    <p className="text-18 text-rg text-dark-grey"><span>By Bina Yogesh</span> | <span>June 25, 2026</span> | <span>7 mins read</span></p>
                                </div>

                                <div className="hm-blog-social">
                                    <span className="icon-linkedin text-dark-grey"></span>

                                    <span className="icon-instagram text-dark-grey"></span>

                                    <span className="icon-threads text-dark-grey"></span>

                                    <span className="icon-facebook text-dark-grey"></span>

                                    <span className="icon-twitter text-dark-grey"></span>

                                    <span className="icon-youtube text-dark-grey"></span>
                                </div>
                            </div>

                            <p className="text-18 text-rg text-grey">Two years of ideas turning into brands. Two years of challenges turning into opportunities. Two years of helping businesses become easier to notice, trust, and remember. <Link href="#" title="go to blog" className="text-primary">Read More</Link></p>
                        </div>

                        <div className="hm-blog-card-right">
                            <div className="blog-card-right-2 section-bg-blue site-radius-20">
                                <div className="blog-card-2-text">
                                    <h3 className="text-sb text-white">Ideas to Insights</h3>

                                    <p className="text-18 text-rg text-light-grey">Thoughtful perspectives on design, development, branding, and digital strategy. Practical ideas shaped by real projects, real challenges, and real business outcomes.</p>
                                </div>

                                <Link href="#" title="View All Categories" className="hm-blog-link text-20 text-md text-white site-radius-30">View All Categories <span className="icon-hero-cta-arrow cta-arrow"></span></Link>
                            </div>

                            <div className="blog-card-right-3">
                                <div className="blog-card-3-left site-radius-20">
                                    <Image src="/images/homepage/blog-image-2.png" alt="blog-image" width={350} height={426}></Image>

                                    <div className="blog-category-tag">
                                        <p className="text-16 text-sb text-white">UI/UX Design</p>
                                    </div>
                                </div>

                                <div className="blog-card-3-right">
                                    <h3 className="text-sb blog-desk-title">Why Serious Businesses Invest in UX Masters, Not Just Creative Designers</h3>

                                    <div className="hm-blog-author-name">
                                        <p className="text-dark-grey text-18 text-rg"><span>By Bina Yogesh</span> | <span>May 29, 2026</span> | <span>7 mins read</span></p>
                                    </div>

                                    <div className="hm-blog-social-icons">
                                        <span className="icon-linkedin text-dark-grey"></span>

                                        <span className="icon-instagram text-dark-grey"></span>

                                        <span className="icon-threads text-dark-grey"></span>

                                        <span className="icon-facebook text-dark-grey"></span>

                                        <span className="icon-twitter text-dark-grey"></span>

                                        <span className="icon-youtube text-dark-grey"></span>
                                    </div>

                                    <div className="hm-blog-read-detail">
                                        <p className="text-18 text-rg">A visually attractive interface may convince users to explore your platform once. But whether they stay, engage, and return depends entirely on experience. <Link href="#" title="go to blog" className="text-primary">Read More</Link></p>
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