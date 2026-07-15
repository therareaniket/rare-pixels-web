'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqSectionDesktop() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="hm-faq-title">
                        <h2 className="text-sb">FAQs</h2>

                        <p className="text-18 text-rg">Answers to the most common questions helping you understand how we work, what we offer, and how we can support your next project.</p>
                    </div>

                    <div className="container-sm">
                        <Accordion defaultValue={["faq-1"]} className="faq-accordion-wrapper">
                            <div className="accordion-item-wrapper">
                                <span className="accordion-number h6 text-sb">1</span>
                                <AccordionItem value="faq-1" className="faq-accordion">
                                    <AccordionTrigger className="faq-accordion-title"><h3 className="h6 text-sb text-black">What services does RarePixels offer?</h3></AccordionTrigger>
                                    <AccordionContent className="faq-content">
                                        <p className="text-18 text-rg text-black">
                                            We offer a complete range of digital solutions including UI/UX design, web and app development, brand identity, and performance-focused digital experiences. Our approach combines design, development, and strategy into one seamless system.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </div>

                            <div className="accordion-item-wrapper">
                                <span className="accordion-number h6 text-sb">2</span>
                                <AccordionItem value="faq-2" className="faq-accordion">
                                    <AccordionTrigger className="faq-accordion-title"><h3 className="h6 text-sb text-black">What industries does RarePixels work with?</h3></AccordionTrigger>
                                    <AccordionContent className="faq-content">
                                        <p className="text-18 text-rg text-black">
                                            We work with startups, growing businesses, and enterprises across SaaS, healthcare, fintech, e-commerce, real estate, education, AI, and lifestyle brands.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </div>

                            <div className="accordion-item-wrapper">
                                <span className="accordion-number h6 text-sb">3</span>
                                <AccordionItem value="faq-3" className="faq-accordion">
                                    <AccordionTrigger className="faq-accordion-title"><h3 className="h6 text-sb text-black">Why choose RarePixels over other creative agencies?</h3></AccordionTrigger>
                                    <AccordionContent className="faq-content">
                                        <p className="text-18 text-rg text-black">
                                            We don&apos;t believe in one-size-fits-all solutions. Every project is built from the ground up with strategy, creativity, and performance working together.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </div>

                            <div className="accordion-item-wrapper">
                                <span className="accordion-number h6 text-sb">4</span>
                                <AccordionItem value="faq-4" className="faq-accordion">
                                    <AccordionTrigger className="faq-accordion-title"><h3 className="h6 text-sb text-black">Do you offer both design and development services?</h3></AccordionTrigger>
                                    <AccordionContent className="faq-content">
                                        <p className="text-18 text-rg text-black">
                                            Yes. We handle everything from research and UI/UX design to custom web and app development, ensuring every product is designed and built under one roof.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </div>

                            <div className="accordion-item-wrapper">
                                <span className="accordion-number h6 text-sb">5</span>
                                <AccordionItem value="faq-5" className="faq-accordion">
                                    <AccordionTrigger className="faq-accordion-title"><h3 className="h6 text-sb text-black">Can RarePixels help build a brand from scratch?</h3></AccordionTrigger>
                                    <AccordionContent className="faq-content">
                                        <p className="text-18 text-rg text-black">
                                            Absolutely. We create complete brand identities, visual systems, messaging, and digital experiences that help businesses stand out from day one.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </div>

                            <div className="accordion-item-wrapper">
                                <span className="accordion-number h6 text-sb">6</span>
                                <AccordionItem value="faq-6" className="faq-accordion">
                                    <AccordionTrigger className="faq-accordion-title"><h3 className="h6 text-sb text-black">Do you manage social media for businesses?</h3></AccordionTrigger>
                                    <AccordionContent className="faq-content">
                                        <p className="text-18 text-rg text-black">
                                            Yes. We create content strategies, creative assets, and campaigns that help brands stay relevant, grow their audience, and build meaningful engagement.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </div>

                            <div className="accordion-item-wrapper">
                                <span className="accordion-number h6 text-sb">7</span>
                                <AccordionItem value="faq-7" className="faq-accordion">
                                    <AccordionTrigger className="faq-accordion-title"><h3 className="h6 text-sb text-black">How do you approach a new project?</h3></AccordionTrigger>
                                    <AccordionContent className="faq-content">
                                        <p className="text-18 text-rg text-black">
                                            Every project begins with understanding your business, users, and goals. From there, we strategise, create, build, refine, and deliver solutions designed for long-term impact.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </div>

                            <div className="accordion-item-wrapper">
                                <span className="accordion-number h6 text-sb">8</span>
                                <AccordionItem value="faq-8" className="faq-accordion">
                                    <AccordionTrigger className="faq-accordion-title"><h3 className="h6 text-sb text-black">Can RarePixels redesign an existing website or product?</h3></AccordionTrigger>
                                    <AccordionContent className="faq-content">
                                        <p className="text-18 text-rg text-black">
                                            Yes. Whether you need a visual refresh or a complete digital transformation, we redesign websites and products to improve usability, performance, and business results.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </div>

                            <div className="accordion-item-wrapper">
                                <span className="accordion-number h6 text-sb">9</span>
                                <AccordionItem value="faq-9" className="faq-accordion">
                                    <AccordionTrigger className="faq-accordion-title"><h3 className="h6 text-sb text-black">Do you work with businesses outside India?</h3></AccordionTrigger>
                                    <AccordionContent className="faq-content">
                                        <p className="text-18 text-rg text-black">
                                            Yes. We collaborate with businesses across multiple countries, delivering digital solutions remotely while maintaining clear communication throughout every project.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </div>

                            <div className="accordion-item-wrapper">
                                <span className="accordion-number h6 text-sb">10</span>
                                <AccordionItem value="faq-10" className="faq-accordion">
                                    <AccordionTrigger className="faq-accordion-title"><h3 className="h6 text-sb text-black">How do I get started with RarePixels?</h3></AccordionTrigger>
                                    <AccordionContent className="faq-content">
                                        <p className="text-18 text-rg text-black">
                                            Simply reach out through our contact page. We&apos;ll understand your goals, discuss the right approach, and recommend a solution that fits your business.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </div>
                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    );
}