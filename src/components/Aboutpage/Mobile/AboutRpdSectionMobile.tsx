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
                            <div className="rare-mobile-text">
                                <Image className="rare-logo-mob" src="/images/aboutpage/about-rpd/rare.svg" alt="rare" width={34} height={43}></Image>
                                <span className="text-pop-sb text-white">are</span>
                            </div>

                            <h2 className="h5 text-sb text-white">Results Before Recognition</h2>

                            <p className="text-16 text-rg text-white">We are not chasing awards or industry validation. We are chasing outcomes. Every project is measured by what it achieves for the business not how it looks in a portfolio.</p>
                        </div>

                        <div className="rpd-mobile-card">
                            <span className="text-pop-sb text-white">Pixels</span>

                            <h3 className="h5 text-sb text-white">Precision in Every Detail</h3>

                            <p className="text-16 text-rg text-white">We are not chasing awards or industry validation. We are chasing outcomes. Every project is measured by what it achieves for the business not how it looks in a portfolio.</p>
                        </div>

                        <div className="rpd-mobile-card">
                            <span className="text-pop-sb text-white">Design</span>

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