'use client'

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import Image from "next/image";
import Link from "next/link";

export default function InquirySectionDesktop() {
    return (
        <>
            <section className="section section-yellow-background">
                <div className="container-sm">
                    <div className="inquiry-form-text-wrapper">
                        <h2 className="text-sb">Project Inquiry Form</h2>
                        <p className="text-rg text-18">Whether you&apos;re launching a new brand, designing a digital product, or scaling an existing business, we&apos;d love to hear your vision. Tell us about your project, and we&apos;ll help transform ideas into impactful digital experiences.</p>
                    </div>

                    <div className="inquiry-form-contact-fields inquiry-form-contact-fields-desktop">
                        <h3 className="text-rg">
                            Hello! My name is
                            <input type="text" name="" id="" placeholder="enter name" className="text-rg h3" />

                            and I want to discuss a potential project. You can email me at
                            <input type="email" name="" id="" placeholder="enter email" />

                            or reach me on
                            <input type="text" name="" id="" placeholder="your phone" className="text-rg h3" />
                        </h3>

                        <h3 className="text-rg">Here are some details about my project:</h3>
                        <input type="text" name="" id="" className="text-rg h3" placeholder="My project is about...." />
                    </div>

                    <div className="inquiry-form-contact-fields-tablet">
                        <div className="inquiry-name-tab">
                            <h3 className="text-rg">Hello! My name is</h3>
                            <input className="text-rg h3 placeholder-text" type="text" name="" id="" placeholder="enter name" />
                        </div>

                        <h3 className="text-rg " style={{ marginBottom: 0 }}>and I want to discuss a potential project. </h3>

                        <div className="inquiry-name-tab">
                            <h3 className="text-rg">You can email me at </h3>
                            <input className="text-rg h3 placeholder-text" type="email" name="" id="" placeholder="enter email" />
                        </div>

                        <div className="inquiry-name-tab">
                            <h3 className="text-rg">or reach me on</h3>
                            <input className="text-rg h3 placeholder-text" type="text" name="" id="" placeholder="enter phone no." />
                        </div>

                        <div className="inquiry-name-tab">
                            <h3 className="text-rg">Here are some details about my project:</h3>
                            <input className="text-rg h3 placeholder-text" type="text" name="" id="" placeholder="My project is about...." />
                        </div>
                    </div>

                    <div className="inquiry-form-project-field">
                        <h3 className="text-rg">I&apos;m interested in (select one or more)</h3>

                        <div className="inquiry-checkbox-wrapper">
                            <div className="inquiry-box-col">
                                <div className="inquiry-form-desktop-select-project">
                                    <input type="checkbox" id="uiux" name="uiux" value="ui-ux" />
                                    <label htmlFor="uiux" className="text-rg h4">UI/UX Design</label>
                                </div>

                                <div className="inquiry-form-desktop-select-project">
                                    <input type="checkbox" name="webdevelopment" id="webdevelopment" />
                                    <label htmlFor="webdevelopment" className="text-rg h4">Web & App Development</label>
                                </div>

                                <div className="inquiry-form-desktop-select-project">
                                    <input type="checkbox" name="aidrivendev" id="aidrivendev" />
                                    <label htmlFor="aidrivendev" className="text-rg h4">AI Driven Solutions</label>
                                </div>
                            </div>

                            <div className="inquiry-box-col">
                                <div className="inquiry-form-desktop-select-project">
                                    <input type="checkbox" name="socialmedia" id="socialmedia" />
                                    <label htmlFor="socialmedia" className="text-rg h4">Social Media Management</label>
                                </div>

                                <div className="inquiry-form-desktop-select-project">
                                    <input type="checkbox" name="brandidentity" id="brandidentity" />
                                    <label htmlFor="brandidentity" className="text-rg h4">Brand Identity Design</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link href="#" title="make it rare" className="link-padding site-radius-30 btn-bg-primary hm-hero-redirect-link inquiry-form-link">
                        <span className="text-20 text-md text-white">Start Your Project </span>
                        <Image src="/images/homepage/homeHeroArrow.svg" alt="arrow-for-navigation" width={24} height={24}></Image>
                    </Link>
                </div>
            </section>
        </>
    );
}