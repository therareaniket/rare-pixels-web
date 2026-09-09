"use client";

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import Image from "next/image";
import Link from "next/link";

export default function ContactFormSection() {
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

                                    <Link href="#" title="make it rare" className="link-padding site-radius-30 btn-bg-primary cnct-form-link website-btn">
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
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}