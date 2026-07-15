'use client';

import Image from "next/image";

export default function BlogSectionDesktop() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="hm-blog-text-wrapper">
                        <h2 className="text-sb">Our Blog</h2>

                        <p className="text-rg text-18">A collection of thoughts, learnings, and perspectives from our work in design, technology, and building impactful digital experiences.</p>
                    </div>

                    <div className="hm-blog-card-wrapper">
                        <div className="hm-blog-card">
                            <div className="hm-blog-left">
                                <Image className="site-radius-20" src="/images/homepage/blog-image-1.png" alt="blog-image" width={560} height={240}></Image>
                            </div>

                            <div className="hm-blog-right">
                                <div className="hm-blog-publisher-name"><p className="text-18 text-rg">By Bina yogesh | May 29, 2026</p></div>

                                <h3 className="text-sb">RarePixels Turns 2. The Big Game Is Still Loading.</h3>

                            </div>
                                {/* <div className="hm-blog-detail-text">
                                    <p className="text-18 text-rg">Two years of ideas turning into brands. Two years of challenges turning into opportunities. Two years of helping businesses become easier to notice, trust, and remember. Read More</p>
                                </div> */}
                        </div>

                        <div className="hm-blog-card">
                            <div className="hm-blog-left"></div>

                            <div className="hm-blog-right"></div>
                        </div>

                        <div className="hm-blog-card">
                            <div className="hm-blog-left"></div>

                            <div className="hm-blog-right"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}