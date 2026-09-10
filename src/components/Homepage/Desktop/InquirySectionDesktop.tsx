'use client'

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";
import Link from "next/link";

export default function InquirySectionDesktop() {
    return (
        <>
            <section className="section" style={{ backgroundColor: "#FBF9E9" }}>
                <div className="container-sm">
                    <div className="inquiry-form-text-wrapper">
                        <h2 className="text-sb">Project Inquiry Form</h2>
                        <p className="text-rg text-18">Whether you&apos;re launching a new brand, designing a digital product, or scaling an existing business, we&apos;d love to hear your vision. Tell us about your project, and we&apos;ll help transform ideas into impactful digital experiences.</p>
                    </div>

                    <div className="inquiry-form-project-field">
                        <h3 className="text-rg">Hello! I&apos;m interested in (select one or more)</h3>

                        <div className="inquiry-checkbox-wrapper">
                            <div className="cnct-form-checkbox" role="group" aria-label="Project type">
                                {['UI/UX Design', 'Web & App Development', 'Brand Identity Design', 'Social Media Management', 'AI Driven Solutions'].map((option) => {
                                    const optionId = `project-${option.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

                                    return (
                                        <span className="cnct-form-checkbox-option inquiry-form-check-option" key={option}>
                                            <input type="checkbox" id={optionId} name="projectType" value={option} />
                                            <label htmlFor={optionId} className="text-rg text-18">{option}</label>
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="inquiry-form-contact-fields inquiry-form-contact-fields-desktop">
                        <h3 className="text-rg">
                            My name is
                            <input type="text" name="" id="" placeholder="enter name*" className="text-rg h6" required />

                            and I want to discuss a potential project. You can email me at
                            <input type="email" name="" id="" placeholder="enter email*" className="text-rg h6" required />

                            or reach me on
                            <input type="text" name="" id="" placeholder="your phone*" className="text-rg h6" required />
                        </h3>

                        <h3 className="text-rg inquiry-text-area-field">Here are some details about my project: <textarea name="" id="" className="text-rg h6" placeholder="my project is about...." /></h3>
                        {/* <input type="text" name="" id="" className="text-rg h3" placeholder="My project is about...." /> */}

                    </div>

                    <div className="inquiry-form-contact-fields-tablet">
                        <div className="inquiry-name-tab">
                            <h3 className="text-rg">Hello! My name is</h3>
                            <input className="text-rg h6 placeholder-text" type="text" name="" id="" placeholder="* enter name" required />
                        </div>

                        {/* <h3 className="text-rg " style={{ marginBottom: 0 }}> </h3> */}

                        <div className="inquiry-name-tab">
                            <h3 className="text-rg">and I want to discuss a potential project. You can email me at </h3>
                            <input className="text-rg h6 placeholder-text" type="email" name="" id="" placeholder="enter email* " required />
                        </div>

                        <div className="inquiry-name-tab">
                            <h3 className="text-rg">or reach me on</h3>
                            <input className="text-rg h6 placeholder-text" type="text" name="" id="" placeholder="enter phone no.* " required />
                        </div>

                        <div className="inquiry-name-tab">
                            <h3 className="text-rg">Here are some details about my project:</h3>
                            {/* <input className="text-rg h3 placeholder-text" type="text" name="" id="" placeholder="My project is about...." /> */}
                            <textarea className="text-rg h6 placeholder-text" name="" id="" placeholder="My project is about...." />
                        </div>
                    </div>

                    <Link href="#" title="make it rare" className="link-padding site-radius-30 btn-bg-primary hm-hero-redirect-link inquiry-form-link website-btn">
                        <span className="text-20 text-md text-white">Start Your Project </span>
                        <Image src="/images/global/homeHeroArrow.svg" alt="arrow-for-navigation" width={24} height={24}></Image>
                    </Link>
                </div>
            </section>
        </>
    );
}