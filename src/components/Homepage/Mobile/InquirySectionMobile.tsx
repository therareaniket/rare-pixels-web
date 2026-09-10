'use client';

import Link from "next/link";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import Image from "next/image";
import Footer from "@/components/global/Footer";

export default function InquirySectionMobile() {
    return (
        <>
            <section className="section" style={{ backgroundColor: "#FBF9E9" }}>
                <div className="container">
                    <h2 className="text-sb">Project Inquiry Form</h2>

                    <p className="text-rg text-16">Whether you&apos;re launching a new brand, designing a digital product, or scaling an existing business, we&apos;d love to hear your vision. Tell us about your project, and we&apos;ll help transform ideas into impactful digital experiences.</p>

                    <div className="inquiry-form-mob-wrapper">
                        <div className="inquiry-form-mob-interests">
                            <h3 className="h5 text-rg">Hello! I’m interested in (select one or more)</h3>

                            <div className="inqury-form-mob-fields">
                                <div className="cnct-form-checkbox" role="group" aria-label="Project type">
                                    {['UI/UX Design', 'Web & App Development', 'Brand Identity Design', 'Social Media Management', 'AI Driven Solutions'].map((option) => {
                                        const optionId = `project-${option.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

                                        return (
                                            <span className="cnct-form-checkbox-option" key={option}>
                                                <input type="checkbox" id={optionId} name="projectType" value={option} />
                                                <label htmlFor={optionId} className="text-rg text-18">{option}</label>
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="inquiry-form-mob-name">
                            <h3 className="text-rg h5">My name is</h3>
                            <input className="text-rg text-18 inquiry-form-enter-field" type="text" name="" id="" placeholder="your full name*" />
                        </div>

                        {/* <h3 className="text-rg h5">and I want to discuss a potential project. </h3> */}

                        <div className="inquiry-form-mob-email">
                            <h3 className="text-rg h5">and I want to discuss a potential project. You can email me at </h3>
                            <input className="text-rg text-18 inquiry-form-enter-field" type="email" name="" id="" placeholder="your@email.com*" />
                        </div>

                        <div className="inquiry-form-mob-phone">
                            <h3 className="text-rg h5">or reach me on</h3>
                            <input className="text-rg text-18 inquiry-form-enter-field" type="number" name="" id="" placeholder="your phone*" />
                        </div>

                        <div className="inquiry-form-mob-subject">
                            <h3 className="text-rg h5">Here are some details about my project:</h3>
                            <textarea className="text-rg text-18 inquiry-form-enter-field" name="" id="" placeholder="my project is about...." />
                        </div>
                    </div>

                    <Link href="#" title="make it rare" className="link-padding site-radius-30 btn-bg-primary hm-hero-redirect-link inquiry-form-link website-btn">
                        <span className="text-20 text-md text-white">Start Your Project </span>
                        <Image src="/images/global/homeHeroArrow.svg" alt="arrow-for-navigation" width={24} height={24}></Image>
                    </Link>
                </div>
            </section>

            {/* <Footer /> */}
        </>
    );
}