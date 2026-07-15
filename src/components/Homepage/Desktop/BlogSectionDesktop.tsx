'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function BlogSectionDesktop() {
    const [activeIndex, setActiveIndex] = useState(0);

    const blogs = [
        {
            image: "/images/homepage/blog-image-1.png",
            category: "Life at RPD",
            author: "Bina yogesh",
            date: "May 29, 2026",
            title: "RarePixels Turns 2. The Big Game Is Still Loading.",
            description:
                "Two years of ideas turning into brands. Two years of challenges turning into opportunities. Two years of helping businesses become easier to notice, trust, and remember."
        },
        {
            image: "/images/homepage/blog-image-2.png",
            category: "UI/UX Design",
            author: "Bina yogesh",
            date: "May 29, 2026",
            title: "Why Serious Businesses Invest in UX Masters, Not Just Creative Designers",
            description:
                "A visually attractive interface may convince users to explore your platform once. But whether they stay, engage, and return depends entirely on experience."
        },
        {
            image: "/images/homepage/blog-image-3.png",
            category: "Branding",
            author: "Bina yogesh",
            date: "May 29, 2026",
            title: "Trending Reels vs Real Branding: What Businesses Might Get Wrong in 2026",
            description:
                "Branding works through repetition of values, voice, visuals, and experience. It shows up not just on social media, but on websites, products, onboarding, support, and communication."
        }
    ];

    return (
        <section className="section">
            <div className="container">
                <div className="hm-blog-card-wrapper">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className={`hm-blog-card ${activeIndex === index ? 'active' : ''}`}
                            onMouseEnter={() => setActiveIndex(index)}
                        >
                            <div className="hm-blog-left">
                               <Image src={blog.image} alt='' width={560} height={300}></Image> 

                               <div className="blog-category-tag">
                                    <p className='text-sb text-14 text-white'>{blog.category}</p>
                               </div>
                            </div>

                            <div className="hm-blog-right">
                                <div className="hm-blog-publisher-name">
                                    <p className="text-18 text-rg text-light-grey">
                                        <span>{blog.author}</span>
                                        <span> | </span>
                                        <span>{blog.date}</span>
                                    </p>
                                </div>

                                <div className="rarepixels-title-and-text">
                                    <h3 className="text-sb">{blog.title}</h3>

                                    <div className="hm-blog-detail-text">
                                        <p className="text-18 text-rg blog-text-black">
                                            {blog.description}{' '}
                                            <span className="text-primary">
                                                Read More
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}