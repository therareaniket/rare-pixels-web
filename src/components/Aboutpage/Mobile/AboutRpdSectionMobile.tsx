'use client';

import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import Image from "next/image";

export default function AboutRpdSectionMobile() {
    return (
        <>
            <section className="section bg-light-black rpd-mobile-section">
                <div className="container">
                    <div className="rpd-mobile-card-wrapper">
                        <div className="rpd-mobile-card">
                            <Image className="rare-logo-mob" src="/images/aboutpage/about-rpd/rare.svg" alt="rare" width={115} height={48}></Image>

                            <h2 className="h5 text-sb text-white">Results Before Recognition</h2>

                            <p className="text-16 text-rg text-white">We are not chasing awards or industry validation. We are chasing outcomes. Every project is measured by what it achieves for the business not how it looks in a portfolio.</p>
                        </div>

                        <div className="rpd-mobile-card">
                            <Image className="pixels-logo-mob" src="/images/aboutpage/about-rpd/pixels.svg" alt="rare" width={136} height={48}></Image>

                            <h3 className="h5 text-sb text-white">Precision in Every Detail</h3>

                            <p className="text-16 text-rg text-white">We are not chasing awards or industry validation. We are chasing outcomes. Every project is measured by what it achieves for the business not how it looks in a portfolio.</p>
                        </div>

                        <div className="rpd-mobile-card">
                            <Image className="design-logo-mob" src="/images/aboutpage/about-rpd/design.svg" alt="rare" width={165} height={48}></Image>

                            <h3 className="h5 text-sb text-white">Precision in Every Detail</h3>

                            <p className="text-16 text-rg text-white">We are not chasing awards or industry validation. We are chasing outcomes. Every project is measured by what it achieves for the business not how it looks in a portfolio.</p>
                        </div>
                    </div>

                    <Image className="rpd-pixel-left-mob" src="/images/aboutpage/about-rpd/rpd-left-pixel.svg" alt="pixel" width={71} height={90}></Image>
                    <Image className="rpd-pixel-right-mob" src="/images/aboutpage/about-rpd/rpd-right-pixel.svg" alt="pixel" width={71} height={90}></Image>
                </div>
            </section>

            <div className="abt-strip-animation bg-light-black">
                <div className="abt-rpd-strip">
                    <p className="h2 text-sb">Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * Together, We’ll Make Waves In The World Of Design * </p>
                </div>
            </div>
        </>
    );
}