'use client';

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";


export default function WhyChooseUsSectionMobile() {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <section className="section">
                <div className="container">
                    <h2 className="text-sb">Why Choose Us</h2>

                    <p className="text-rg text-16">We focus on clarity, execution, and performance delivering work that is thoughtful, scalable, and built to create real impact.</p>

                    <div className="why-choose-us-semi-circles">
                        <div className="why-semicircle-1 why-semicircle">
                            {theme === "light" ?
                                <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-1.svg" alt="eclipse" width={71} height={71}></Image>
                                :
                                <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-dark-1.svg" alt="eclipse" width={71} height={71}></Image>
                            }
                        </div>
                        <div className="why-semicircle-2 why-semicircle">
                            {theme === "light" ?
                                <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-2.svg" alt="eclipse" width={115} height={115}></Image>
                                :
                                <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-dark-2.svg" alt="eclipse" width={115} height={115}></Image>
                            }
                        </div>
                        <div className="why-semicircle-3 why-semicircle">
                            {theme === "light" ?
                                <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-3.svg" alt="eclipse" width={159} height={159}></Image>
                                :
                                <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-dark-3.svg" alt="eclipse" width={159} height={159}></Image>
                            }
                        </div>
                        <div className="why-semicircle-4 why-semicircle">
                            {theme === "light" ?
                                <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-4.svg" alt="eclipse" width={203} height={203}></Image>
                                :
                                <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-dark-4.svg" alt="eclipse" width={203} height={203}></Image>
                            }
                        </div>
                        <div className="why-semicircle-5 why-semicircle">
                            {theme === "light" ?
                                <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-5.svg" alt="eclipse" width={248} height={248}></Image>
                                :
                                <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-dark-5.svg" alt="eclipse" width={248} height={245}></Image>
                            }
                        </div>
                        <div className="why-semicircle-6 why-semicircle">
                            {theme === "light" ?
                                <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-6.svg" alt="eclipse" width={292} height={292}></Image>
                                :
                                <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-dark-6.svg" alt="eclipse" width={292} height={292}></Image>
                            }
                        </div>
                        <div className="why-semicircle-7 why-semicircle">
                            {theme === "light" ?
                                <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-7.svg" alt="eclipse" width={334} height={334}></Image>
                                :
                                <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-dark-7.svg" alt="eclipse" width={334} height={334}></Image>
                            }
                        </div>
                        <div className="why-semicircle-8 why-semicircle">
                            {theme === "light" ?
                                <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-8.svg" alt="eclipse" width={379} height={379}></Image>
                                :
                                <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-dark-8.svg" alt="eclipse" width={379} height={379}></Image>
                            }
                        </div>
                        <div className="why-semicircle-9 why-semicircle">
                            {theme === "light" ?
                                <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-9.svg" alt="eclipse" width={424} height={424}></Image>
                                :
                                <Image src="/images/homepage/why-choose-us/semicircle-mob-svg-dark-9.svg" alt="eclipse" width={424} height={424}></Image>
                            }
                        </div>

                        <div className="why-choose-us-hand-image">
                            <Image src="/images/homepage/why-choose-us/why-choose-us-hand.png" alt="why-choose-us-hand" width={190} height={316}></Image>
                        </div>
                    </div>

                    <div className="why-choose-mob-pointer-wrapper">
                        <div className="why-pointers-mob">
                            <h3 className="text-18 text-sb">No Shortcuts, Ever</h3>

                            <p className="text-16 text-rg">We don’t rely on quick fixes or reused solutions. Every project is approached with intent, built from the ground up to match your needs and deliver long-term value.</p>
                        </div>
                        <div className="why-pointers-mob">
                            <h3 className="text-18 text-sb">Clarity Over Complexity</h3>

                            <p className="text-16 text-rg">We simplify ideas and focus on what truly matters. No unnecessary elements just clear structure, purposeful design, and decisions that improve usability.</p>
                        </div>
                        <div className="why-pointers-mob">
                            <h3 className="text-18 text-sb">Execution That Matches Vision</h3>

                            <p className="text-16 text-rg">We ensure every idea translates into the final product exactly as intended. From design to development, everything stays aligned with precision and consistency.</p>
                        </div>
                        <div className="why-pointers-mob">
                            <h3 className="text-18 text-sb">Partners, Not Vendors</h3>

                            <p className="text-16 text-rg">We work as an extension of your team, not just a service provider. Our focus is on collaboration, trust, and building relationships that go beyond project delivery.</p>
                        </div>
                        <div className="why-pointers-mob">
                            <h3 className="text-18 text-sb">Focused on Real Outcomes</h3>

                            <p className="text-16 text-rg">Our work is guided by performance. We design and build solutions that not only look good but also deliver results, scale smoothly, and evolve with your brand.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}