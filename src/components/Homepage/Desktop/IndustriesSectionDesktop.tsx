'use client';

export default function IndustriesSectionDesktop() {
    return (
        <>
            <section className="industries-section-sticky">
                <div className="industirs-section-inner">
                    <div className="container">
                        <div className="industries-text-title">
                            <h2 className="text-sb">Industries We Serve</h2>
                            <p className="text-rg text-18 text-grey">
                                <span>Every industry is different.</span>
                                <span> But the need to earn trust, create memorable experiences, and stay relevant isn&apos;t.</span>
                            </p>
                        </div>

                        <div className="industries-card-wrapper">
                            <div className="industries-image-wrapper">
                                <video className="industries-videos" src="/images/homepage/industries/technology-and-saas.mp4" autoPlay muted playsInline loop width={1000} height={600}></video>

                                <div className="industry-detail-pixels-1">
                                    <div className="indus-box-1 indus-box-50"></div>
                                    <div className="indus-box-2 indus-box-50"></div>
                                    <div className="indus-box-3 indus-box-50"></div>
                                    <div className="indus-box-4 indus-box-40"></div>
                                    <div className="indus-box-5 indus-box-30"></div>
                                </div>

                                <div className="industry-detail-pixels-2">
                                    <div className="indus-box-6 indus-box-50"></div>
                                    <div className="indus-box-7 indus-box-50"></div>
                                    <div className="indus-box-8 indus-box-30"></div>
                                </div>

                                <div className="industry-detail-pixels-3">
                                    <div className="indus-box-9 indus-box-50"></div>
                                </div>

                            </div>

                            <div className="industries-text-wrapper">
                                <span className="text-sb industries-title-name">Technology & SaaS</span>
                                {/* <span className="text-sb industries-title-name">Finance & FinTech</span> */}
                                {/* <span className="text-sb industries-title-name">Healthcare & MedTech</span> */}
                                {/* <span className="text-sb industries-title-name">E-commerce & Retail</span> */}
                                {/* <span className="text-sb industries-title-name">Real Estate & PropTech</span> */}
                                {/* <span className="text-sb industries-title-name">Education & EdTech</span> */}
                                {/* <span className="text-sb industries-title-name">AI & Emerging Tech</span> */}
                                {/* <span className="text-sb industries-title-name">Food & Lifestyle</span> */}

                                <p className="text-18 text-grey">
                                    <span className="text-rg">Complex products fail when users don&apos;t understand them.</span>
                                    <span className="text-rg">We transform powerful SaaS platforms into intuitive experiences that drive adoption, retention, and growth.</span>

                                    {/* <span className="text-rg">Trust is the product before the product.</span>
                                    <span className="text-rg">We create secure, credible, and intuitive financial experiences that help users transact with confidence.</span> */}

                                    {/* <span className="text-rg">Every second matters when people seek care.</span>
                                    <span className="text-rg">We design healthcare experiences that make information accessible, decisions easier, and journeys less stressful.</span> */}

                                    {/* <span className="text-rg">Customers do&apos;t buy products. They buy experiences.</span>
                                    <span className="text-rg">We build shopping journeys that reduce hesitation, increase conversions, and encourage repeat purchases.</span> */}

                                    {/* <span className="text-rg">People invest in confidence before they invest in property.</span>
                                    <span className="text-rg">We help real estate brands create digital experiences that build trust long before a site visit.</span> */}

                                    {/* <span className="text-rg">The best learning experiences never feel complicated.</span>
                                    <span className="text-rg">We create intuitive platforms that keep students focused on learning, not figuring out how things work.</span> */}

                                    {/* <span className="text-rg">Innovation means little if people can&apos;t understand it.</span>
                                    <span className="text-rg">We humanize emerging technologies through experiences that make complex products easier to adopt and trust.</span> */}

                                    {/* <span className="text-rg">People remember how brands make them feel.</span>
                                    <span className="text-rg">We help food and lifestyle brands create memorable identities that drive loyalty beyond the first purchase.</span> */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}