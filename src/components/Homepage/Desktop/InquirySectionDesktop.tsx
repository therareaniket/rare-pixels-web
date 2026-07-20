'use client'

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import GlassEffect from "@/components/LiquideGlass";
import Image from "next/image";
import Link from "next/link";

export default function InquirySectionDesktop() {
    return (
        <>
            <section className="section bg-light-yellow">
                <div className="container-sm">
                    <div className="inquiry-form-text-wrapper">
                        <h2 className="text-sb text-black">Project Inquiry Form</h2>
                        <p className="text-rg text-18 text-black">Whether you&apos;re launching a new brand, designing a digital product, or scaling an existing business, we&apos;d love to hear your vision. Tell us about your project, and we&apos;ll help transform ideas into impactful digital experiences.</p>
                    </div>

                    <div className="inquiry-form-contact-fields inquiry-form-contact-fields-desktop">
                        <h3 className="text-rg text-black">
                            Hello! My name is
                            <input type="text" name="" id="" placeholder="your full name" className="text-rg h3" />

                            and I want to discuss a potential project. You can email me at
                            <input type="email" name="" id="" placeholder="your@email.com" />

                            or reach me on
                            <input type="text" name="" id="" placeholder="your phone" className="text-rg h3" />
                        </h3>

                        <h3 className="text-rg text-black">Here are some details about my project:</h3>
                        <input type="text" name="" id="" className="text-rg h3" placeholder="My project is about...." />
                    </div>

                    <div className="inquiry-form-contact-fields-tablet">
                        <div className="inquiry-name-tab">
                            <h3 className="text-rg">Hello! My name is</h3>
                            <input className="text-rg h3" type="text" name="" id="" placeholder="your full name" />
                        </div>

                        <h3 className="text-rg">and I want to discuss a potential project. </h3>

                        <div className="inquiry-name-tab">
                            <h3 className="text-rg">You can email me at </h3>
                            <input className="text-rg h3" type="email" name="" id="" placeholder="your@email.com " />
                        </div>

                        <div className="inquiry-name-tab">
                            <h3 className="text-rg">or reach me on</h3>
                            <input className="text-rg h3" type="text" name="" id="" placeholder="your phone" />
                        </div>

                        <div className="inquiry-name-tab">
                            <h3 className="text-rg">Here are some details about my project:</h3>
                            <input className="text-rg h3" type="text" name="" id="" placeholder="My project is about...." />
                        </div>
                    </div>

                    <div className="inquiry-form-project-field">
                        <h3 className="text-rg  text-black">I&apos;m interested in (select one or more)</h3>

                        <div className="inquiry-checkbox-wrapper">
                            <GlassEffect className="site-radius-30">
                                <div className="inquiry-form-desktop-select-project">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="" className="text-rg h4 text-black">UI/UX Design</label>
                                </div>
                            </GlassEffect>

                            <GlassEffect className="site-radius-30">
                                <div className="inquiry-form-desktop-select-project">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="" className="text-rg h4 text-black">Web & App Development</label>
                                </div>
                            </GlassEffect>

                            <GlassEffect className="site-radius-30">
                                <div className="inquiry-form-desktop-select-project">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="" className="text-rg h4 text-black">Brand Identity Design</label>
                                </div>
                            </GlassEffect>

                            <GlassEffect className="site-radius-30">
                                <div className="inquiry-form-desktop-select-project">
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="" className="text-rg h4 text-black">Social Media Management</label>
                                </div>
                            </GlassEffect>
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