"use client";

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";

export default function ContactWhatHappensSection() {
    return (
        <>
            <section className="section bg-light-black">
                <div className="container">
                    <div className="contact-what-happens-title">
                        <h2 className="text-sb text-white">What Happens After You Reach Out.</h2>
                        <p className="text-18 text-rg text-white">No black holes. No waiting and wondering. Here is exactly what to expect after you contact us. </p>
                    </div>

                    <div className="cnct-what-happens-pointer-wrapper">
                        <div className="cnct-what-happens cnct-what-happens-1 active">
                            <span className="text-sb">01</span>

                            <div className="cnct-what-happens-text">
                                <h3 className="text-sb text-white">We Read Every Word</h3>

                                <p className="text-18 text-rg text-white">Your message goes directly to a senior member of the Rare Pixels team not an inbox managed by an assistant or filtered by automation. We read every enquiry carefully before responding.</p>
                            </div>
                        </div>

                        <div className="cnct-what-happens cnct-what-happens-2">
                            <span className="text-sb">02</span>

                            <div className="cnct-what-happens-text">
                                <h3 className="text-sb text-white">You Hear Back Within 24 Hours</h3>

                                <p className="text-18 text-rg text-white"> We respond to every enquiry within 24 hours, Monday to Friday, and first thing Monday morning for weekend enquiries, no automated replies. A real response from a senior member of the team.</p>
                            </div>
                        </div>

                        <div className="cnct-what-happens cnct-what-happens-3">
                            <span className="text-sb">03</span>

                            <div className="cnct-what-happens-text">
                                <h3 className="text-sb text-white">We Schedule a Discovery Call</h3>

                                <p className="text-18 text-rg text-white">If there is a potential fit, we will suggest a 30-minute discovery call where we learn more about your project, share our thinking, and give you an honest assessment. No pressure. No pitch. </p>
                            </div>
                        </div>

                        <div className="cnct-what-happens cnct-what-happens-4">
                            <span className="text-sb">04</span>

                            <div className="cnct-what-happens-text">
                                <h3 className="text-sb text-white">We Send a Tailored Proposal</h3>

                                <p className="text-18 text-rg text-white">Following the discovery call we put together a proposal specific to your project scope, timeline, investment, and approach. Not a template. A document built around what you actually need. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}