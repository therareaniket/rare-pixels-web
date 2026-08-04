'use client';

import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import Image from "next/image";
import Link from "next/link";

export default function BlogSectionMobile() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="hm-mob-blog-title">
                        <h2 className="text-sb">Our Blog</h2>

                        <p className="text-rg text-16">A collection of thoughts, learnings, and perspectives from our work in design, technology, and building impactful digital experiences.</p>
                    </div>

                    <div className="hm-blog-mobile-wrapper">
                        <div className="hm-blog-mobile-card-1">
                            <div className="hm-blog-image-mob">
                                <Image src="/images/homepage/blog-image-1.png" alt="blog-image" width={424} height={250}></Image>
                            </div>

                            <h3 className="text-sb">RarePixels Turns 2. The Big Game Is Still Loading.</h3>

                            <p className="text-14 text-rg text-dark-grey hm-blog-mob-author"><span>By Bina Yogesh</span> | <span>May 29, 2026</span> | <span>7 mins read</span></p>

                            <p className="text-rg text-16">Two years of ideas turning into brands. Two years of challenges turning into opportunities. Two years of helping businesses become easier to notice, trust, and remember. <Link href="#" title="read more" className="text-primary">Read More</Link></p>
                        </div>

                        <div className="hm-blog-mob-hr"></div>

                        <div className="hm-blog-mobile-card-2">
                            <div className="hm-blog-image-mob">
                                <Image src="/images/homepage/blog-image-2.png" alt="blog-image" width={444} height={250}></Image>
                            </div>

                            <h3 className="text-sb">Why Serious Businesses Invest in UX Masters, Not Just Creative Designers.</h3>

                            <p className="text-14 text-rg text-dark-grey hm-blog-mob-author"><span>By Bina Yogesh</span> | <span>May 29, 2026</span> | <span>7 mins read</span></p>

                            <p className="text-rg text-16">A visually attractive interface may convince users to explore your platform once. But whether they stay, engage, and return depends entirely on experience. <Link href="#" title="read more" className="text-primary">Read More</Link></p>

                        </div>

                        <div className="hm-blog-mob-hr"></div>

                        <div className="hm-blog-mobile-card-3 section-bg-blue site-radius-20">
                            <h3 className="text-sb text-white">Ideas to Insights</h3>

                            <p className="text-rg text-light-grey">Thoughtful perspectives on design, development, branding, and digital strategy. Practical ideas shaped by real projects, real challenges, and real business outcomes.</p>

                            <Link href="#" title="View All Categories" className="hm-mob-blog-link text-16 text-md text-white site-radius-10">View All Categories <span className="icon-hero-cta-arrow cta-arrow"></span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}