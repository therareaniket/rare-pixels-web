'use client';


const industries = [
    {
        video: "/images/homepage/industries/technology-and-saas.mp4",
        title: "Technology & SaaS",
        desc1: "Complex products fail when users don't understand them.",
        desc2: "We transform powerful SaaS platforms into intuitive experiences that drive adoption, retention, and growth.",
    },

    {
        video: "",
        title: "Finance & FinTech",
        desc1: "Trust is the product before the product.",
        desc2: "We create secure, credible, and intuitive financial experiences that help users transact with confidence.",
    },

    {
        video: "",
        title: "Healthcare & MedTech",
        desc1: "Every second matters when people seek care.",
        desc2: "We design healthcare experiences that make information accessible, decisions easier, and journeys less stressful.",
    },

    {
        video: "",
        title: "E-commerce & Retail",
        desc1: "Customers don't buy products. They buy experiences.",
        desc2: "We build shopping journeys that reduce hesitation, increase conversions, and encourage repeat purchases.",
    },

    {
        video: "",
        title: "Real Estate & PropTech",
        desc1: "People invest in confidence before they invest in property.",
        desc2: "We help real estate brands create digital experiences that build trust long before a site visit.",
    },

    {
        video: "",
        title: "Education & EdTech",
        desc1: "The best learning experiences never feel complicated.",
        desc2: "We create intuitive platforms that keep students focused on learning, not figuring out how things work.",
    },

    {
        video: "",
        title: "AI & Emerging Tech",
        desc1: "Innovation means little if people can't understand it.",
        desc2: "We humanize emerging technologies through experiences that make complex products easier to adopt and trust.",
    },

    {
        video: "",
        title: "Food & Lifestyle",
        desc1: "People remember how brands make them feel.",
        desc2: "",
    }
]
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

                                <p className="text-18 text-grey">
                                    <span className="text-rg">Complex products fail when users don&apos;t understand them.</span>
                                    <span className="text-rg">We transform powerful SaaS platforms into intuitive experiences that drive adoption, retention, and growth.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}