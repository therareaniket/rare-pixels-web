'use client';

import '@/assets/css/desktop-custom.css';
import '@/assets/css/responsive/desktop-responsive.css';

export default function AboutLifeAtRpdSectionDesktop() {

    return (
        <section className="section life-at-rpd-section" style={{ paddingBottom: 0 }}>
            <div className="life-at-rpd-inner">
                <div className="container">
                    <div className="abt-life-rpd-desktop-title">
                        <h2 className="text-sb text-80">
                            Life at RarePixels
                        </h2>

                        <h3 className="text-sb h2">
                            Real people. Real Work. Real Culture.
                        </h3>
                    </div>

                    <div className="life-at-rpd-desktop-card-wrapper desktop">
                        <div className="rpd-card-col-1 rpd-card-col">
                            <div className="rpd-card rpd-card-1" />
                            <div className="rpd-card rpd-card-2" />
                        </div>

                        <div className="rpd-card-col-2 rpd-card-col">
                            <div className="rpd-card rpd-card-3" />
                            <div className="rpd-card rpd-card-4" />
                            <div className="rpd-card rpd-card-5" />
                        </div>

                        <div className="rpd-card-col-3 rpd-card-col">
                            <div className="rpd-card rpd-card-6" />
                            <div className="rpd-card rpd-card-7" />
                            <div className="rpd-card rpd-card-8" />
                        </div>
                    </div>

                    <div className="life-at-rpd-desktop-card-wrapper tablet">
                        <div className="rpd-card-col-1 rpd-card-col">
                            <div className="rpd-card rpd-card-1" />
                            <div className="rpd-card rpd-card-2" />
                            <div className="rpd-card rpd-card-3" />
                            <div className="rpd-card rpd-card-7" />
                        </div>

                        <div className="rpd-card-col-2 rpd-card-col">
                            <div className="rpd-card rpd-card-4" />
                            <div className="rpd-card rpd-card-5" />
                            <div className="rpd-card rpd-card-6" />
                            <div className="rpd-card rpd-card-8" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}