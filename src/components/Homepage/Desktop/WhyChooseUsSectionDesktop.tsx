'use client';

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

export default function WhyChooseUsSectionDesktop() {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="why-choose-us-text-wrapper">
                        <h2 className="text-sb">Why Choose Us</h2>
                        <p className="text-18 text-rg">We don&apos;t believe in shortcuts or surface-level work everything we create is carefully thought through, built with precision, and designed to perform consistently as your brand grows.</p>
                    </div>

                    <div className="container-sm">
                        <div className="why-choose-us-content-wrapper why-choose-us-for-desktop">
                            <div className="why-choose-us-pointer-wrapper">
                                <div className="why-choose-us-pointer-cards">
                                    <div className="why-choose-us-card">
                                        <h3 className="h6 text-sb">No Shortcuts, Ever</h3>

                                        <p className="text-18 text-rg">We don’t rely on quick fixes or reused solutions. Every project is approached with intent, built from the ground up to match your needs and deliver long-term value.</p>
                                    </div>
                                    <div className="why-choose-us-card">
                                        <h3 className="h6 text-sb">Clarity Over Complexity</h3>

                                        <p className="text-18 text-rg">We simplify ideas and focus on what truly matters. No unnecessary elements just clear structure, purposeful design, and decisions that improve usability.</p>
                                    </div>
                                </div>

                                <div className="why-choose-us-pointer-cards">
                                    <div className="why-choose-us-card">
                                        <h3 className="h6 text-sb">Execution That Matches Vision</h3>

                                        <p className="text-18 text-rg">We ensure every idea translates into the final product exactly as intended. From design to development, everything stays aligned with precision and consistency.</p>
                                    </div>
                                    <div className="why-choose-us-card">
                                        <h3 className="h6 text-sb">Partners, Not Vendors</h3>

                                        <p className="text-18 text-rg">We work as an extension of your team, not just a service provider. Our focus is on collaboration, trust, and building relationships that go beyond project delivery.</p>
                                    </div>
                                    <div className="why-choose-us-card">
                                        <h3 className="h6 text-sb">Focused on Real Outcomes</h3>

                                        <p className="text-18 text-rg">Our work is guided by performance. We design and build solutions that not only look good but also deliver results, scale smoothly, and evolve with your brand.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="why-choose-us-images">
                                {theme === "light" ?
                                    <Image className="why-choose-us-eclipse-1 why-choose-us-eclipse" src="/images/homepage/why-choose-us-eclipse-1.svg" alt="eclipse" width={354} height={354}></Image>
                                    :
                                    <Image className="why-choose-us-eclipse-1 why-choose-us-eclipse" src="/images/homepage/why-choose-us-eclipse-dark-1.svg" alt="eclipse" width={354} height={354}></Image>
                                }

                                {theme === "light" ?
                                    <Image className="why-choose-us-eclipse-2 why-choose-us-eclipse" src="/images/homepage/why-choose-us-eclipse-2.svg" alt="eclipse" width={490} height={490}></Image>
                                    :
                                    <Image className="why-choose-us-eclipse-2 why-choose-us-eclipse" src="/images/homepage/why-choose-us-eclipse-dark-2.svg" alt="eclipse" width={490} height={490}></Image>

                                }

                                {theme === "light" ?
                                    <Image className="why-choose-us-eclipse-3 why-choose-us-eclipse" src="/images/homepage/why-choose-us-eclipse-3.svg" alt="eclipse" width={625} height={625}></Image>
                                    :
                                    <Image className="why-choose-us-eclipse-3 why-choose-us-eclipse" src="/images/homepage/why-choose-us-eclipse-dark-3.svg" alt="eclipse" width={625} height={625}></Image>
                                }

                                {theme === "light" ?
                                    <Image className="why-choose-us-eclipse-4 why-choose-us-eclipse" src="/images/homepage/why-choose-us-eclipse-4.svg" alt="eclipse" width={760} height={760}></Image>
                                    :
                                    <Image className="why-choose-us-eclipse-4 why-choose-us-eclipse" src="/images/homepage/why-choose-us-eclipse-dark-4.svg" alt="eclipse" width={760} height={760}></Image>
                                }

                                {theme === "light" ?
                                    <Image className="why-choose-us-eclipse-5 why-choose-us-eclipse" src="/images/homepage/why-choose-us-eclipse-5.svg" alt="eclipse" width={896} height={896}></Image>
                                    :
                                    <Image className="why-choose-us-eclipse-5 why-choose-us-eclipse" src="/images/homepage/why-choose-us-eclipse-dark-5.svg" alt="eclipse" width={896} height={896}></Image>
                                }

                                {theme === "light" ?
                                    <Image className="why-choose-us-eclipse-6 why-choose-us-eclipse" src="/images/homepage/why-choose-us-eclipse-6.svg" alt="eclipse" width={1026} height={1026}></Image>
                                    :
                                    <Image className="why-choose-us-eclipse-6 why-choose-us-eclipse" src="/images/homepage/why-choose-us-eclipse-dark-6.svg" alt="eclipse" width={1026} height={1026}></Image>
                                }

                                {theme === "light" ?
                                    <Image className="why-choose-us-eclipse-7 why-choose-us-eclipse" src="/images/homepage/why-choose-us-eclipse-7.svg" alt="eclipse" width={1164} height={1164}></Image>
                                    :
                                    <Image className="why-choose-us-eclipse-7 why-choose-us-eclipse" src="/images/homepage/why-choose-us-eclipse-dark-7.svg" alt="eclipse" width={1164} height={1164}></Image>
                                }

                                {theme === "light" ?
                                    <Image className="why-choose-us-eclipse-8 why-choose-us-eclipse" src="/images/homepage/why-choose-us-eclipse-8.svg" alt="eclipse" width={1300} height={1300}></Image>
                                    :
                                    <Image className="why-choose-us-eclipse-8 why-choose-us-eclipse" src="/images/homepage/why-choose-us-eclipse-dark-8.svg" alt="eclipse" width={1300} height={1300}></Image>
                                }
                            </div>

                            <div className="why-choose-us-hand-image">
                                <Image src="/images/homepage/why-choose-us-hand.png" alt="why-choose-us-hand-image" width={412} height={684}></Image>
                            </div>
                        </div>

                        <div className="why-choose-us-tablet">
                            <div className="why-choose-us-image-wrapper">
                                {theme === "light" ?
                                    <Image className="" src="/images/homepage/why-choose-us-eclipse-1-res.svg" alt="eclipse" width={354} height={354}></Image>
                                    :
                                    <Image className="" src="/images/homepage/why-choose-us-eclipse-dark-1.svg" alt="eclipse" width={354} height={354}></Image>
                                }

                                {theme === "light" ?
                                    <Image className="" src="/images/homepage/why-choose-us-eclipse-2-res.svg" alt="eclipse" width={490} height={490}></Image>
                                    :
                                    <Image className="" src="/images/homepage/why-choose-us-eclipse-dark-2.svg" alt="eclipse" width={490} height={490}></Image>

                                }

                                {theme === "light" ?
                                    <Image className="" src="/images/homepage/why-choose-us-eclipse-res.svg" alt="eclipse" width={625} height={625}></Image>
                                    :
                                    <Image className="" src="/images/homepage/why-choose-us-eclipse-dark-3.svg" alt="eclipse" width={625} height={625}></Image>
                                }

                                {theme === "light" ?
                                    <Image className="" src="/images/homepage/why-choose-us-eclipse-4-res.svg" alt="eclipse" width={760} height={760}></Image>
                                    :
                                    <Image className="" src="/images/homepage/why-choose-us-eclipse-dark-4.svg" alt="eclipse" width={248} height={248}></Image>
                                }

                                {theme === "light" ?
                                    <Image className="" src="/images/homepage/why-choose-us-eclipse-5-res.svg" alt="eclipse" width={292} height={292}></Image>
                                    :
                                    <Image className="" src="/images/homepage/why-choose-us-eclipse-dark-5.svg" alt="eclipse" width={292} height={292}></Image>
                                }

                                {theme === "light" ?
                                    <Image className="" src="/images/homepage/why-choose-us-eclipse-6-res.svg" alt="eclipse" width={334} height={334}></Image>
                                    :
                                    <Image className="" src="/images/homepage/why-choose-us-eclipse-dark-6.svg" alt="eclipse" width={334} height={334}></Image>
                                }

                                {theme === "light" ?
                                    <Image className="" src="/images/homepage/why-choose-us-eclipse-7-res.svg" alt="eclipse" width={1164} height={1164}></Image>
                                    :
                                    <Image className="" src="/images/homepage/why-choose-us-eclipse-dark-7.svg" alt="eclipse" width={1164} height={1164}></Image>
                                }

                                {theme === "light" ?
                                    <Image className="" src="/images/homepage/why-choose-us-eclipse-8-res.svg" alt="eclipse" width={379} height={379}></Image>
                                    :
                                    <Image className="" src="/images/homepage/why-choose-us-eclipse-dark-8.svg" alt="eclipse" width={379} height={379}></Image>
                                }

                                {theme === "light" ?
                                    <Image className="" src="/images/homepage/why-choose-us-eclipse9-res.svg" alt="eclipse" width={424} height={424}></Image>
                                    :
                                    <Image className="" src="/images/homepage/why-choose-us-eclipse-dark-8.svg" alt="eclipse" width={424} height={424}></Image>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}