"use client";

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactFormSection() {
    const [fileName, setFileName] = useState("");

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="contact-form-wrapper">
                        <div className="contact-form-left">
                            <h2 className="text-sb">Every Great Project Starts With One Conversation. </h2>

                            <p className="text-rg text-18 cnct-form-left-text">Whether you have a fully formed brief or just an idea you cannot get out of your head we want to hear it. We respond to every enquiry within 24 hours, across every time zone. No lengthy questionnaires. No automated replies. A real person from the Rare Pixels team will read your message and come back to you with an honest, considered response. </p>

                            <h3 className="text-sb h5">We respond within 24 hours guaranteed. </h3>

                            <div className="cnct-prefer-to-talk">
                                <div className="cnct-prefer-left">
                                    <div className="contact-prefer-title">
                                        <h4 className="h2 text-sb">Prefer to Talk First? <span className="text-sun-rg">Skip the form. </span></h4>
                                    </div>

                                    <p className="text-18 text-rg">Book a free 30-minute discovery call directly in our calendar and we will come prepared with questions, ideas, and an honest assessment of how we can help. </p>

                                    <Link href="#" title="Book A Call" className="link-padding site-radius-30 btn-bg-primary cnct-form-link website-btn">
                                        <span className="text-20 text-md text-white">Book A Call </span>
                                        <Image src="/images/global/homeHeroArrow.svg" alt="arrow-for-navigation" width={24} height={24}></Image>
                                    </Link>
                                </div>

                                <div className="cnct-prefer-right">
                                    <Image src="/images/contactpage/contactform/prefer-call.svg" alt="skip-the-form" width={208} height={219} ></Image>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-right">
                            <span className="h3 text-rg">Hello! My name is <input type="text" placeholder="your full name" /></span>
                            <span className="h3 text-rg">and I want to discuss a potential project.</span>
                            <span className="h3 text-rg">You can email me at <input type="email" name="" id="" placeholder=" your@email.com" /></span>
                            <span className="h3 text-rg">or reach me on  <input type="number" name="" id="" placeholder="your phone" /> </span>

                            <div className="cnct-form-select-interest">
                                <h5 className="text-rg h3">I’m interested in (select one or more)</h5>

                                <div className="cnct-form-checkbox" role="group" aria-label="Project type">
                                    {['Website', 'Mobile App', 'Desktop App', 'UX/UI Design', 'Visual Design'].map((option) => {
                                        const optionId = `project-${option.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

                                        return (
                                            <span className="cnct-form-checkbox-option" key={option}>
                                                <input type="checkbox" id={optionId} name="projectType" value={option} />
                                                <label htmlFor={optionId} className="text-rg h5">{option}</label>
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="cnct-project-detail">
                                <span className="h3 text-rg">Here are some details about my project</span>
                                <input className="h3 text-rg" type="text" name="" id="" placeholder="My project is about...." />
                            </div>

                            <div className="cnct-upload-file">
                                <input
                                    type="file"
                                    id="myfile"
                                    name="myfile"
                                    className="cnct-upload-input"
                                    onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
                                />
                                <label htmlFor="myfile" className="cnct-upload-button">
                                    <span className="cnct-upload-label-text text-rg h5">{fileName || "Attach Your Document"}</span>
                                    <Image src="/images/contactpage/contactform/attach-icon.svg" alt="attach-icon" width={32} height={32}></Image>
                                </label>
                            </div>

                            <button className="link-padding site-radius-30 btn-bg-primary cnct-right-link website-btn">
                                <span className="text-20 text-md text-white">Submit </span>
                                <Image src="/images/global/homeHeroArrow.svg" alt="arrow-for-navigation" width={24} height={24}></Image>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}