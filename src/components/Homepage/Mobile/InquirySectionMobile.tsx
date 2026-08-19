'use client';

import Link from "next/link";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";

export default function InquirySectionMobile() {
    return (
        <>
            <section className="section-yellow-background section">
                <div className="container">
                    <h2 className="text-sb">Project Inquiry Form</h2>

                    <p className="text-rg text-16">Whether you&apos;re launching a new brand, designing a digital product, or scaling an existing business, we&apos;d love to hear your vision. Tell us about your project, and we&apos;ll help transform ideas into impactful digital experiences.</p>

                    <div className="inquiry-form-mob-wrapper">
                        <div className="inquiry-form-mob-name">
                            <h3 className="text-rg h5">Hello! My name is</h3>
                            <input className="text-rg h5 inquiry-form-enter-field" type="text" name="" id="" placeholder="your full name" />
                        </div>

                        <h3 className="text-rg h5">and I want to discuss a potential project. </h3>

                        <div className="inquiry-form-mob-email">
                            <h3 className="text-rg h5">You can email me at </h3>
                            <input className="text-rg h5  inquiry-form-enter-field" type="email" name="" id="" placeholder="your@email.com" />
                        </div>

                        <div className="inquiry-form-mob-phone">
                            <h3 className="text-rg h5">or reach me on</h3>
                            <input className="text-rg h5  inquiry-form-enter-field" type="number" name="" id="" placeholder="your phone" />
                        </div>

                        <div className="inquiry-form-mob-subject">
                            <h3 className="text-rg h5">Here are some details about my project:</h3>
                            <input className="text-rg h5  inquiry-form-enter-field" type="text" name="" id="" placeholder="My project is about...." />
                        </div>

                        <div className="inquiry-form-mob-interests">
                            <h3 className="h5 text-rg">I’m interested in (select one or more)</h3>

                            <div className="inqury-form-mob-fields">
                                <div className="inquiry-mob-field">
                                    <input type="checkbox" name="uiux" id="uiux" className="inquiry-form-input" />

                                    <label htmlFor="uiux" className="text-rg text-18">UI/UX Design</label>
                                </div>

                                <div className="inquiry-mob-field">
                                    <input type="checkbox" name="webdevelopment" id="webdevelopment" className="inquiry-form-input" />

                                    <label htmlFor="webdevelopment" className="text-rg text-18">Web & App Development</label>
                                </div>

                                <div className="inquiry-mob-field">
                                    <input type="checkbox" name="brandidentity" id="brandidentity" className="inquiry-form-input" />

                                    <label htmlFor="brandidentity" className="text-rg text-18">Brand Identity Design</label>
                                </div>

                                <div className="inquiry-mob-field">
                                    <input type="checkbox" name="socialmedia" id="socialmedia" className="inquiry-form-input" />

                                    <label htmlFor="socialmedia" className="text-rg text-18">Social Media Management</label>
                                </div>

                                <div className="inquiry-mob-field">
                                    <input type="checkbox" name="aidrivendev" id="aidrivendev" className="inquiry-form-input" />

                                    <label htmlFor="aidrivendev" className="text-rg text-18">AI Driven Solution</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link href="#" title="Make it RARE" className="website-btn inquiry-mob-cta-link text-md">
                        Start Your Project <span className="icon-hero-cta-arrow cta-arrow"></span>
                    </Link>
                </div>
            </section>
        </>
    );
}