// 'use client';

// import "@/assets/css/desktop-custom.css";
// import "@/assets/css/responsive/desktop-responsive.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import { useLayoutEffect, useRef } from "react";

// const CDN_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS_CDN;

// gsap.registerPlugin(ScrollTrigger);

// const industries = [
//     {
//         video: `${CDN_URL}/images/homepage/industries/technology-and-saas.mp4`,
//         title: "Technology & SaaS",
//         desc1: "The best software makes sense at a glance and feels natural from the start.",
//         desc2: "We design intuitive SaaS platforms that improve adoption, reduce friction, and keep users coming back.",
//         desc3: "Complex products deserve experiences that feel simple.",

//     },
//     {
//         video: `${CDN_URL}/images/homepage/industries/finance.mp4`,
//         title: "Finance & FinTech",
//         desc1: "Financial decisions begin with credibility, long before transactions happen.",
//         desc2: "We create secure, intuitive digital experiences that inspire confidence and simplify complex financial journeys.",
//         desc3: "Trust isn't optional when every click involves confidence.",

//     },
//     {
//         video: `${CDN_URL}/images/homepage/industries/healthcare.mp4`,
//         title: "Healthcare & MedTech",
//         desc1: "Healthcare experiences should reduce uncertainty, not create it.",
//         desc2: "We design patient-first platforms that make information accessible, interactions seamless, and care easier to navigate.",
//         desc3: "When people need clarity most, every interaction matters.",

//     },
//     {
//         video: `${CDN_URL}/images/homepage/industries/e-commerce.mp4`,
//         title: "E-commerce & Retail",
//         desc1: "Every unnecessary click is a missed opportunity.",
//         desc2: "We build shopping experiences that remove friction, increase confidence, and turn visitors into loyal customers.",
//         desc3: "The shortest path from browsing to buying wins.",

//     },
//     {
//         video: `${CDN_URL}/images/homepage/industries/real-estate.mp4`,
//         title: "Real Estate & PropTech",
//         desc1: "People invest in confidence before they invest in property.",
//         desc2: "We craft digital experiences that showcase value, build trust, and encourage meaningful enquiries.",
//         desc3: "Properties attract attention. Experiences create decisions.",

//     },
//     {
//         video: `${CDN_URL}/images/homepage/industries/education-industry.mp4`,
//         title: "Education & EdTech",
//         desc1: "Great learning platforms feel effortless for every learner.",
//         desc2: "We design engaging educational experiences that improve accessibility, participation, and long-term engagement.",
//         desc3: "Learning works best when technology stays out of the way.",

//     },
//     {
//         video: `${CDN_URL}/images/homepage/industries/ai-industry.mp4`,
//         title: "AI & Emerging Tech",
//         desc1: "Innovation succeeds when people know how to use it.",
//         desc2: "We simplify advanced technologies through intuitive interfaces that make innovation feel approachable.",
//         desc3: "The future moves fast. Great experiences help people keep up.",

//     },
//     {
//         video: `${CDN_URL}/images/homepage/industries/food-industry.mp4`,
//         title: "Food & Lifestyle",
//         desc1: "People remember experiences before they remember products.",
//         desc2: "We create brands and digital experiences that spark curiosity, build loyalty, and keep customers coming back.",
//         desc3: "Great brands satisfy long before the first purchase.",

//     }
// ];

// export default function IndustriesSectionDesktop() {

//     const sectionRef = useRef<HTMLElement | null>(null);
//     const trackRef = useRef<HTMLDivElement | null>(null);

//     useLayoutEffect(() => {
//         const section = sectionRef.current;
//         const track = trackRef.current;

//         if (!section || !track) return;

//         const ctx = gsap.context(() => {
//             const container =
//                 section.querySelector<HTMLDivElement>(
//                     ".industries-scroll-container"
//                 );

//             if (!container) return;

//             const cards = gsap.utils.toArray<HTMLDivElement>(".industry-item");

//             const getScrollDistance = () =>
//                 track.scrollWidth - container.offsetWidth;

//             const getSnapPoints = () =>
//                 cards.map((el) => (
//                     el.offsetLeft +
//                     el.offsetWidth / 2 -
//                     container.offsetWidth / 2
//                 ));

//             const horizontalTween = gsap.to(track, {
//                 x: () => -getScrollDistance(),
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: section,
//                     start: "top top",
//                     end: () => `+=${getScrollDistance() + window.innerHeight}`,
//                     pin: true,
//                     scrub: 0.3,
//                     anticipatePin: 1,
//                     invalidateOnRefresh: true,

//                     onUpdate: () => {
//                         gsap.to(section, {
//                             duration: 0.5,
//                             overwrite: true,
//                         });
//                     },

//                     snap: {
//                         snapTo: (progress: number) => {
//                             const points = getSnapPoints();
//                             const max = getScrollDistance();

//                             const currentX = progress * max;

//                             let index = points.findIndex(point => point > currentX);

//                             if (index === -1) index = points.length - 1;

//                             const direction =
//                                 horizontalTween.scrollTrigger?.direction ?? 1;

//                             return direction > 0
//                                 ? points[index] / max
//                                 : points[Math.max(0, index - 1)] / max;
//                         },
//                         delay: 0,
//                         duration: 0.3,
//                         ease: "power1.out",
//                     },
//                 },
//             });

//         }, section);

//         return () => ctx.revert();
//     }, []);

//     return (
//         <>
//             <section ref={sectionRef} className="industries-section-sticky section industries-section">
//                 <div className="industirs-section-inner">
//                     <div className="container">
//                         <div className="industries-text-title">
//                             <h2 className="text-sb">Industries We Serve</h2>
//                             <p className="text-rg text-18">
//                                 <span>Every industry is different.</span>
//                                 <span>But the need to earn trust, create memorable experiences, and stay relevant isn&apos;t.</span>
//                             </p>
//                         </div>

//                         <div className="industries-scroll-container">
//                             <div ref={trackRef} className="industries-card-wrapper">
//                                 {industries.map((industry, index) => (
//                                     <div className="industry-item" key={index}>
//                                         <div className="industries-image-wrapper">
//                                             {/* <video className="industries-video prev-video" autoPlay playsInline muted loop preload="auto" webkit-playsinline="true" src={industry.video} width={1000} height={600} /> */}
//                                             <div className="industries-video prev-video"/>

//                                             <Image className="industries-desktop-pixel-1" src={`${CDN_URL}/images/homepage/industries/industries-pixel-desktop-1.svg`} alt="desktop pixel" width={170} height={150}></Image>
//                                             <Image className="industries-desktop-pixel-2" src={`${CDN_URL}/images/homepage/industries/industries-pixel-desktop-2.svg`} alt="desktop pixel" width={132} height={100}></Image>
//                                             <Image className="industries-desktop-pixel-3" src={`${CDN_URL}/images/homepage/industries/industries-pixel-desktop-3.svg`} alt="desktop pixel" width={50} height={50}></Image>
//                                         </div>

//                                         <div className="industries-text-wrapper industry-content" >
//                                             <span className="text-sb industries-title-name">
//                                                 {industry.title}
//                                             </span>

//                                             <p className="text-18 industry-detailtext">
//                                                 <span className="text-sb">{industry.desc3}</span>
//                                                 <span className="text-rg"> {industry.desc1} </span>
//                                                 <span className="text-rg"> {industry.desc2} </span>
//                                             </p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }



































// UPDATED CODE FOR THEME CHANGE BUT ALL THE INDUSTRIES ARE NOT VISIBLE ON SCROLL


// 'use client';

// import "@/assets/css/desktop-custom.css";
// import "@/assets/css/responsive/desktop-responsive.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import { useLayoutEffect, useRef } from "react";

// const CDN_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS_CDN;

// gsap.registerPlugin(ScrollTrigger);

// const industries = [
//     {
//         themeColor: "light-yellow", // Theme for Card 1
//         video: `${CDN_URL}/images/homepage/industries/technology-and-saas.mp4`,
//         title: "Technology & SaaS",
//         desc1: "The best software makes sense at a glance and feels natural from the start.",
//         desc2: "We design intuitive SaaS platforms that improve adoption, reduce friction, and keep users coming back.",
//         desc3: "Complex products deserve experiences that feel simple.",
//     },
//     {
//         themeColor: "navy", // Theme for Card 2
//         video: `${CDN_URL}/images/homepage/industries/finance.mp4`,
//         title: "Finance & FinTech",
//         desc1: "Financial decisions begin with credibility, long before transactions happen.",
//         desc2: "We create secure, intuitive digital experiences that inspire confidence and simplify complex financial journeys.",
//         desc3: "Trust isn't optional when every click involves confidence.",
//     },
//     {
//         themeColor: "mid-yellow", // Theme for Card 3
//         video: `${CDN_URL}/images/homepage/industries/healthcare.mp4`,
//         title: "Healthcare & MedTech",
//         desc1: "Healthcare experiences should reduce uncertainty, not create it.",
//         desc2: "We design patient-first platforms that make information accessible, interactions seamless, and care easier to navigate.",
//         desc3: "When people need clarity most, every interaction matters.",
//     },
//     {
//         themeColor: "black", // Theme for Card 4
//         video: `${CDN_URL}/images/homepage/industries/e-commerce.mp4`,
//         title: "E-commerce & Retail",
//         desc1: "Every unnecessary click is a missed opportunity.",
//         desc2: "We build shopping experiences that remove friction, increase confidence, and turn visitors into loyal customers.",
//         desc3: "The shortest path from browsing to buying wins.",
//     },
//     {
//         themeColor: "white",
//         video: `${CDN_URL}/images/homepage/industries/real-estate.mp4`,
//         title: "Real Estate & PropTech",
//         desc1: "People invest in confidence before they invest in property.",
//         desc2: "We craft digital experiences that showcase value, build trust, and encourage meaningful enquiries.",
//         desc3: "Properties attract attention. Experiences create decisions.",
//     },
//     {
//         themeColor: "light-yellow",
//         video: `${CDN_URL}/images/homepage/industries/education-industry.mp4`,
//         title: "Education & EdTech",
//         desc1: "Great learning platforms feel effortless for every learner.",
//         desc2: "We design engaging educational experiences that improve accessibility, participation, and long-term engagement.",
//         desc3: "Learning works best when technology stays out of the way.",
//     },
//     {
//         themeColor: "navy",
//         video: `${CDN_URL}/images/homepage/industries/ai-industry.mp4`,
//         title: "AI & Emerging Tech",
//         desc1: "Innovation succeeds when people know how to use it.",
//         desc2: "We simplify advanced technologies through intuitive interfaces that make innovation feel approachable.",
//         desc3: "The future moves fast. Great experiences help people keep up.",
//     },
//     {
//         themeColor: "mid-yellow",
//         video: `${CDN_URL}/images/homepage/industries/food-industry.mp4`,
//         title: "Food & Lifestyle",
//         desc1: "People remember experiences before they remember products.",
//         desc2: "We create brands and digital experiences that spark curiosity, build loyalty, and keep customers coming back.",
//         desc3: "Great brands satisfy long before the first purchase.",
//     }
// ];

// export default function IndustriesSectionDesktop() {
//     const sectionRef = useRef<HTMLElement | null>(null);
//     const trackRef = useRef<HTMLDivElement | null>(null);

// useLayoutEffect(() => {
//     const section = sectionRef.current;
//     const track = trackRef.current;

//     if (!section || !track) return;

//     let currentIndex = 0;
//     let isAnimating = false;

//     const ctx = gsap.context(() => {
//         const container = section.querySelector<HTMLDivElement>(".industries-scroll-container");
//         if (!container) return;

//         const cards = gsap.utils.toArray<HTMLDivElement>(".industry-item");
        
//         // Calculate item distance + gap (150px gap from CSS)
//         const getItemDistance = () => {
//             if (cards.length < 2) return cards[0]?.offsetWidth || 0;
//             return cards[1].offsetLeft - cards[0].offsetLeft;
//         };

//         const updateTheme = (index: number) => {
//             const theme = cards[index]?.getAttribute("data-card-theme");
//             if (theme) document.body.setAttribute("data-theme", theme);
//         };

//         const scrollToCard = (index: number) => {
//             const clampedIndex = Math.max(0, Math.min(cards.length - 1, index));
//             if (clampedIndex === currentIndex && isAnimating) return;

//             isAnimating = true;
//             currentIndex = clampedIndex;
//             updateTheme(currentIndex);

//             const targetX = currentIndex * getItemDistance();

//             gsap.to(track, {
//                 x: -targetX,
//                 duration: 0.8,
//                 ease: "power2.out",
//                 onComplete: () => {
//                     // Prevent rapid wheel triggers during transition
//                     setTimeout(() => {
//                         isAnimating = false;
//                     }, 200);
//                 }
//             });
//         };

//         // Pin the section while handling cards manually
//         const ST = ScrollTrigger.create({
//             trigger: section,
//             start: "top top",
//             end: () => `+=${cards.length * 100}vh`,
//             pin: true,
//             anticipatePin: 1,
//             onEnter: () => updateTheme(currentIndex),
//             onEnterBack: () => updateTheme(currentIndex),
//         });

//         // Wheel event interceptor to force strictly 1 card per scroll gesture
//         const handleWheel = (e: WheelEvent) => {
//             const isPinned = ST.isActive;
            
//             if (!isPinned) return;

//             // Allow normal scroll out at limits
//             if (e.deltaY > 0 && currentIndex === cards.length - 1) return;
//             if (e.deltaY < 0 && currentIndex === 0) return;

//             e.preventDefault();
//             e.stopPropagation();

//             if (isAnimating) return;

//             if (e.deltaY > 0) {
//                 scrollToCard(currentIndex + 1);
//             } else if (e.deltaY < 0) {
//                 scrollToCard(currentIndex - 1);
//             }
//         };

//         window.addEventListener("wheel", handleWheel, { passive: false });

//         return () => {
//             window.removeEventListener("wheel", handleWheel);
//         };
//     }, section);

//     return () => ctx.revert();
// }, []);

//     return (
//         <section ref={sectionRef} className="industries-section-sticky section industries-section">
//             <div className="industirs-section-inner">
//                 <div className="container">
//                     <div className="industries-text-title">
//                         <h2 className="text-sb">Industries We Serve</h2>
//                         <p className="text-rg text-18">
//                             <span>Every industry is different.</span>
//                             <span>But the need to earn trust, create memorable experiences, and stay relevant isn&apos;t.</span>
//                         </p>
//                     </div>

//                     <div className="industries-scroll-container">
//                         <div ref={trackRef} className="industries-card-wrapper">
//                             {industries.map((industry, index) => (
//                                 <div 
//                                     className="industry-item" 
//                                     key={index}
//                                     data-card-theme={industry.themeColor}
//                                 >
//                                     <div className="industries-image-wrapper">
//                                         <div className="industries-video prev-video"/>
//                                         <Image className="industries-desktop-pixel-1" src={`${CDN_URL}/images/homepage/industries/industries-pixel-desktop-1.svg`} alt="desktop pixel" width={170} height={150} />
//                                         <Image className="industries-desktop-pixel-2" src={`${CDN_URL}/images/homepage/industries/industries-pixel-desktop-2.svg`} alt="desktop pixel" width={132} height={100} />
//                                         <Image className="industries-desktop-pixel-3" src={`${CDN_URL}/images/homepage/industries/industries-pixel-desktop-3.svg`} alt="desktop pixel" width={50} height={50} />
//                                     </div>

//                                     <div className="industries-text-wrapper industry-content">
//                                         <span className="text-sb industries-title-name">
//                                             {industry.title}
//                                         </span>
//                                         <p className="text-18 industry-detailtext">
//                                             <span className="text-sb">{industry.desc3}</span>
//                                             <span className="text-rg"> {industry.desc1} </span>
//                                             <span className="text-rg"> {industry.desc2} </span>
//                                         </p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }











































'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

const CDN_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS_CDN;

gsap.registerPlugin(ScrollTrigger);

const industries = [
    {
        theme: "navy",
        video: `${CDN_URL}/images/homepage/industries/technology-and-saas.mp4`,
        title: "Technology & SaaS",
        desc1: "The best software makes sense at a glance and feels natural from the start.",
        desc2: "We design intuitive SaaS platforms that improve adoption, reduce friction, and keep users coming back.",
        desc3: "Complex products deserve experiences that feel simple.",
    },
    {
        theme: "white",
        video: `${CDN_URL}/images/homepage/industries/finance.mp4`,
        title: "Finance & FinTech",
        desc1: "Financial decisions begin with credibility, long before transactions happen.",
        desc2: "We create secure, intuitive digital experiences that inspire confidence and simplify complex financial journeys.",
        desc3: "Trust isn't optional when every click involves confidence.",
    },
    {
        theme: "light-yellow",
        video: `${CDN_URL}/images/homepage/industries/healthcare.mp4`,
        title: "Healthcare & MedTech",
        desc1: "Healthcare experiences should reduce uncertainty, not create it.",
        desc2: "We design patient-first platforms that make information accessible, interactions seamless, and care easier to navigate.",
        desc3: "When people need clarity most, every interaction matters.",
    },
    {
        theme: "mid-yellow",
        video: `${CDN_URL}/images/homepage/industries/e-commerce.mp4`,
        title: "E-commerce & Retail",
        desc1: "Every unnecessary click is a missed opportunity.",
        desc2: "We build shopping experiences that remove friction, increase confidence, and turn visitors into loyal customers.",
        desc3: "The shortest path from browsing to buying wins.",
    },
    {
        theme: "black",
        video: `${CDN_URL}/images/homepage/industries/real-estate.mp4`,
        title: "Real Estate & PropTech",
        desc1: "People invest in confidence before they invest in property.",
        desc2: "We craft digital experiences that showcase value, build trust, and encourage meaningful enquiries.",
        desc3: "Properties attract attention. Experiences create decisions.",
    },
    {
        theme: "navy",
        video: `${CDN_URL}/images/homepage/industries/education-industry.mp4`,
        title: "Education & EdTech",
        desc1: "Great learning platforms feel effortless for every learner.",
        desc2: "We design engaging educational experiences that improve accessibility, participation, and long-term engagement.",
        desc3: "Learning works best when technology stays out of the way.",
    },
    {
        theme: "white",
        video: `${CDN_URL}/images/homepage/industries/ai-industry.mp4`,
        title: "AI & Emerging Tech",
        desc1: "Innovation succeeds when people know how to use it.",
        desc2: "We simplify advanced technologies through intuitive interfaces that make innovation feel approachable.",
        desc3: "The future moves fast. Great experiences help people keep up.",
    },
    {
        theme: "light-yellow",
        video: `${CDN_URL}/images/homepage/industries/food-industry.mp4`,
        title: "Food & Lifestyle",
        desc1: "People remember experiences before they remember products.",
        desc2: "We create brands and digital experiences that spark curiosity, build loyalty, and keep customers coming back.",
        desc3: "Great brands satisfy long before the first purchase.",
    }
];

export default function IndustriesSectionDesktop() {

    const sectionRef = useRef<HTMLElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;

        if (!section || !track) return;

        const ctx = gsap.context(() => {
            const container =
                section.querySelector<HTMLDivElement>(
                    ".industries-scroll-container"
                );

            if (!container) return;

            const cards = gsap.utils.toArray<HTMLDivElement>(".industry-item");

            const getScrollDistance = () =>
                track.scrollWidth - container.offsetWidth;

            const getSnapPoints = () =>
                cards.map((el) => (
                    el.offsetLeft +
                    el.offsetWidth / 2 -
                    container.offsetWidth / 2
                ));

            const horizontalTween = gsap.to(track, {
                x: () => -getScrollDistance(),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${getScrollDistance() + window.innerHeight}`,
                    pin: true,
                    scrub: 0.3,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,

                    onUpdate: () => {
                        gsap.to(section, {
                            duration: 0.5,
                            overwrite: true,
                        });
                    },

                    snap: {
                        snapTo: (progress: number) => {
                            const points = getSnapPoints();
                            const max = getScrollDistance();

                            const currentX = progress * max;

                            let index = points.findIndex(point => point > currentX);

                            if (index === -1) index = points.length - 1;

                            const direction =
                                horizontalTween.scrollTrigger?.direction ?? 1;

                            return direction > 0
                                ? points[index] / max
                                : points[Math.max(0, index - 1)] / max;
                        },
                        delay: 0,
                        duration: 0.3,
                        ease: "power1.out",
                    },
                },
            });

            cards.forEach((card) => {
                const theme = card.getAttribute("data-theme-color");
                
                ScrollTrigger.create({
                    trigger: card,
                    containerAnimation: horizontalTween,
                    start: "left 50%",
                    end: "right 50%",
                    onEnter: () => {
                        if (theme) document.body.setAttribute("data-theme", theme);
                    },
                    onEnterBack: () => {
                        if (theme) document.body.setAttribute("data-theme", theme);
                    },
                });
            });

        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={sectionRef} className="industries-section-sticky section industries-section">
                <div className="industirs-section-inner">
                    <div className="container">
                        <div className="industries-text-title">
                            <h2 className="text-sb">Industries We Serve</h2>
                            <p className="text-rg text-18">
                                <span>Every industry is different.</span>
                                <span>But the need to earn trust, create memorable experiences, and stay relevant isn&apos;t.</span>
                            </p>
                        </div>

                        <div className="industries-scroll-container">
                            <div ref={trackRef} className="industries-card-wrapper">
                                {industries.map((industry, index) => (
                                    <div 
                                        className="industry-item" 
                                        key={index} 
                                        data-theme-color={industry.theme}
                                    >
                                        <div className="industries-image-wrapper">
                                            <div className="industries-video prev-video"/>

                                            <Image className="industries-desktop-pixel-1" src={`${CDN_URL}/images/homepage/industries/industries-pixel-desktop-1.svg`} alt="desktop pixel" width={170} height={150}></Image>
                                            <Image className="industries-desktop-pixel-2" src={`${CDN_URL}/images/homepage/industries/industries-pixel-desktop-2.svg`} alt="desktop pixel" width={132} height={100}></Image>
                                            <Image className="industries-desktop-pixel-3" src={`${CDN_URL}/images/homepage/industries/industries-pixel-desktop-3.svg`} alt="desktop pixel" width={50} height={50}></Image>
                                        </div>

                                        <div className="industries-text-wrapper industry-content" >
                                            <span className="text-sb industries-title-name">
                                                {industry.title}
                                            </span>

                                            <p className="text-18 industry-detailtext">
                                                <span className="text-sb">{industry.desc3}</span>
                                                <span className="text-rg"> {industry.desc1} </span>
                                                <span className="text-rg"> {industry.desc2} </span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}