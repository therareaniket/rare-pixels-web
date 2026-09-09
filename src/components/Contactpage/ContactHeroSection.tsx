"use client";

import Image from "next/image";
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";


export default function ContactHeroSection() {
    return (
        <>
            <section className="contact-hero-section">
                <div className="container">
                    <div className="contact-hero-wrapper">
                        <h1 className="contact-hero-title text-sb">Start Your Design & Development Project</h1>

                        <div className="contact-hero-image">
                            <Image src="/images/contactpage/contacthero/contact-hero-image.svg" alt="contact-hero" width={560} height={485}></Image>
                        </div>

                        <Image className="cnct-hero-bg-image" src="/images/contactpage/contacthero/contact-hero-bg.svg" alt="contact-hero" width={1920} height={585}></Image>
                        <Image className="cnct-hero-bg-image-for-mobile" src="/images/contactpage/contacthero/cnct-ng-line-svg-for-mobile.svg" alt="contact-hero" width={1920} height={585}></Image>
                    </div>
                </div>
            </section>
        </>
    );
}