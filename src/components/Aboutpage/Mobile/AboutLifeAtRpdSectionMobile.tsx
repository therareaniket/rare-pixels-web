'use client';

import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";

export default function AboutLifeAtRpdSectionMobile () { 
    return(
        <>
            <section className="section" style={{ paddingBottom: 0 }}>
                <div className="container">
                    <div className="life-rpd-mobile-title">
                        <h2 className="text-sb text-30">Life at RarePixels</h2>

                        <p className="text-18 text-sb">Real people. Real Work. Real Culture.</p>
                    </div>

                    <div className="life-rpd-mob-card-wrapper">
                        <div className="life-rpd-mobile-card life-rpd-mobile-card-1"></div>
                        <div className="life-rpd-mobile-card life-rpd-mobile-card-2"></div>
                        <div className="life-rpd-mobile-card life-rpd-mobile-card-3"></div>
                        <div className="life-rpd-mobile-card life-rpd-mobile-card-1"></div>
                        <div className="life-rpd-mobile-card life-rpd-mobile-card-2"></div>
                        <div className="life-rpd-mobile-card life-rpd-mobile-card-4"></div>
                        <div className="life-rpd-mobile-card life-rpd-mobile-card-4"></div>
                        <div className="life-rpd-mobile-card life-rpd-mobile-card-5"></div>
                    </div>
                </div>
            </section>
        </>
    );
}