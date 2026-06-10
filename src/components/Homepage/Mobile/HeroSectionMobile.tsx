"use client";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css"
import GlassEffect from "@/components/LiquideGlass";
import Image from "next/image";
import Link from "next/link";

export default function HeroSectionMobile() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="hero-content">
                        <div className="site-hero-discrp">
                            <h1 className="text-md">
                                <span>Seen.</span>
                                <span>Remembered.</span>
                                <span>Chosen.</span>
                            </h1>

                            <p>Most brands compete for attention. The memorable ones earn it. At RarePixels, we blend strategy, creativity, and technology to create digital experiences that people notice, trust, and return to.</p>
                            
                            <Link href="/about" title="Make it RARE" className="hero-link-cta text-rg">Make it Rare <span className="icon-hero-cta-arrow cta-arrow"></span></Link>
                        </div>

                        <div className="brand-statistics">
                            <div className="stat-item">
                                <h2 className="h5 text-md">100+</h2>
                                <p>Brands Empowered</p>
                            </div>

                            <div className="stat-item">
                                <h2 className="h5 text-md">120K+</h2>
                                <p>Lines of Code Crafted</p>
                            </div>

                            <div className="stat-item">
                                <h2 className="h5 text-md">250+</h2>
                                <p>Creative Campaigns</p>
                            </div>
                        </div>
                    </div>

                    <div className="element-box">
                        <Image src="/images/homepage/ui-ux-eye-mobile.png" width={424} height={225} alt=""></Image>
                    </div>

                    <GlassEffect className="dock my-hello">
                        <h3>Hello</h3>
                    </GlassEffect>
                </div>
            </section>
        </>
    )    
}