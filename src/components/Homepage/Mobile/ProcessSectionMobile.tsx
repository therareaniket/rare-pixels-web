// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Image from "next/image";

// export default function ProcessSectionMobile() {

//     const sectionRef = useRef<HTMLElement>(null);

//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         const cards = gsap.utils.toArray<HTMLElement>(".process-card-mobile");

//         const activeLine = document.querySelector(".process-vertical-line-active") as HTMLElement

//         const setActive = (activeIndex: number) => {
//             cards.forEach((card, i) => {
//                 const content = card.querySelector("p");
//                 const tick = card.querySelector(".process-mobile-tick");

//                 const isLastCard = i === cards.length - 1;
//                 const isOpen = isLastCard ? true : i >= activeIndex;
//                 const isCompleted = i < activeIndex;
//                 const isLastCompleted = activeIndex >= cards.length;

//                 card.classList.toggle("active", isOpen);
//                 card.classList.toggle("completed", !isOpen);

//                 gsap.to(content, {
//                     opacity: 1,
//                     y: isOpen ? 0 : 20,
//                     duration: 1,
//                     overwrite: true,
//                 });

//                 gsap.to(tick, {
//                     opacity: isLastCard
//                         ? (isLastCompleted ? 1 : 0)
//                         : (isCompleted ? 1 : 0),
//                     scale: isLastCard
//                         ? (isLastCompleted ? 1 : 0.5)
//                         : (isCompleted ? 1 : 0.5),
//                     duration: 0.3,
//                     overwrite: true,
//                 });

//             });

//             const progress = activeIndex / cards.length;

//             gsap.to(activeLine, {
//                 height: `${progress * 90}%`,
//                 duration: 2,
//                 overwrite: true,
//             });
//         };

//         cards.forEach((card) => {
//             card.classList.add("active");
//         });

//         ScrollTrigger.create({
//             trigger: sectionRef.current,
//             start: "top top",
//             end: "+=4100",
//             // pin: true,
//             scrub: 2,

//             onUpdate: (self) => {
//                 const activeIndex = Math.min(
//                     cards.length,
//                     Math.floor(self.progress * (cards.length + 1))
//                 );

//                 setActive(activeIndex);
//             },
//         });

//         return () => {
//             ScrollTrigger.getAll().forEach((st) => st.kill());
//         };
//     }, []);

//     return (
//         <>
//             <section ref={sectionRef} className="section process-section-sticky" style={{ backgroundColor: "#FBF9E9", color: "black" }}>
//                 <div className="process-section-inner">
//                     <div className="container">

//                         <h2 className="text-sb">Work Process We Follow</h2>

//                         <p className="text-16 text-rg">Every project flows through a defined path understanding, planning, designing, building, and refining. This ensures that every decision is intentional and every outcome is crafted with clarity and precision.</p>

//                         <div className="process-section-mobile-wrapper">

//                             <div className="process-vertical-line"></div>
//                             <div className="process-vertical-line-active"></div>

//                             <div className="process-card-mobile">
//                                 <div className="process-mob-icon">
//                                     <span className="icon-discover-process"></span>
//                                 </div>

//                                 <div className="process-card-mob-text">
//                                     <div className="process-title-text">
//                                         <h3 className="h2 text-sb text-upper-case">Discover</h3>
//                                         <div className="process-mobile-tick">
//                                             <Image src="/images/homepage/process/process-completed-tick.svg" alt="process-tick" width={16} height={12}></Image>
//                                         </div>
//                                     </div>

//                                     <p className="text-16 text-rg">
//                                         <span>Every meaningful solution begins with understanding.</span>
//                                         <span>We take time to understand your business, your users, and the challenges standing in the way of growth. The better the questions, the better the outcome.</span>
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="process-card-mobile">
//                                 <div className="process-mob-icon">
//                                     <span className="icon-strategy-process"></span>
//                                 </div>

//                                 <div className="process-card-mob-text">
//                                     <div className="process-title-text">
//                                         <h3 className="h2 text-sb text-upper-case">Strategize</h3>
//                                         <div className="process-mobile-tick">
//                                             <Image src="/images/homepage/process/process-completed-tick.svg" alt="process-tick" width={16} height={12}></Image>
//                                         </div>
//                                     </div>

//                                     <p className="text-16 text-rg">
//                                         <span>Direction creates momentum.</span>
//                                         <span>Ideas become impactful when backed by clarity. We bring together research, insights, and business goals to build a roadmap that gives every decision a purpose.</span>
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="process-card-mobile">
//                                 <div className="process-mob-icon">
//                                     <span className="icon-create-process"></span>
//                                 </div>

//                                 <div className="process-card-mob-text">
//                                     <div className="process-title-text">
//                                         <h3 className="h2 text-sb text-upper-case">Create</h3>
//                                         <div className="process-mobile-tick">
//                                             <Image src="/images/homepage/process/process-completed-tick.svg" alt="process-tick" width={16} height={12}></Image>
//                                         </div>
//                                     </div>

//                                     <p className="text-16 text-rg ">
//                                         <span>Creativity with intention.</span>
//                                         <span>We design experiences, identities, and interactions that feel intuitive, leave an impression, and make your brand impossible to overlook.</span>
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="process-card-mobile">
//                                 <div className="process-mob-icon">
//                                     <span className="icon-engineer-process"></span>
//                                 </div>

//                                 <div className="process-card-mob-text">
//                                     <div className="process-title-text">
//                                         <h3 className="h2 text-sb text-upper-case">Engineer</h3>
//                                         <div className="process-mobile-tick">
//                                             <Image src="/images/homepage/process/process-completed-tick.svg" alt="process-tick" width={16} height={12}></Image>
//                                         </div>
//                                     </div>

//                                     <p className="text-16 text-rg">
//                                         <span>Built for the real world.</span>
//                                         {/* <span>We develop scalable, high-performing systems where design and functionality come together seamlessly.</span> */}
//                                         <span>We develop scalable, high-performing systems where design and functionality come together seamlessly, ensuring your digital presence remains visually compelling and architecturally robust.</span>
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="process-card-mobile">
//                                 <div className="process-mob-icon">
//                                     <span className="icon-refine-process"></span>
//                                 </div>

//                                 <div className="process-card-mob-text">
//                                     <div className="process-title-text">
//                                         <h3 className="h2 text-sb text-upper-case">Refine</h3>

//                                         <div className="process-mobile-tick">
//                                             <Image src="/images/homepage/process/process-completed-tick.svg" alt="process-tick" width={16} height={12}></Image>
//                                         </div>
//                                     </div>

//                                     <p className="text-16 text-rg">
//                                         <span>The details shape the experience.</span>
//                                         {/* <span>We test, improve, and fine-tune every interaction because the smallest refinements often make the biggest difference.</span> */}
//                                         <span>We test, improve, and carefully fine-tune every single interaction because the smallest refinements often make the biggest difference.</span>
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="process-card-mobile">
//                                 <div className="process-mob-icon">
//                                     <span className="icon-deliver-svg"></span>
//                                 </div>

//                                 <div className="process-card-mob-text">
//                                     <div className="process-title-text">
//                                         <h3 className="h2 text-sb text-upper-case">Deliver</h3>

//                                         <div className="process-mobile-tick">
//                                             <Image src="/images/homepage/process/process-completed-tick.svg" alt="process-tick" width={16} height={12}></Image>
//                                         </div>
//                                     </div>

//                                     <p className="text-16 text-rg">
//                                         <span>Launch is where the journey expands.</span>
//                                         <span>We deliver solutions with precision and stay invested in their growth, ensuring they continue to create value as your business evolves.</span>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }



'use client';

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

export default function ProcessSectionMobile() {

    useGSAP(() => {
        gsap.set(".procs-card-ttl img", { opacity: 0 });

        gsap.fromTo(".procs-mob-card-1", 
            { height: "35px" }, 
            { height: "175px", duration: 0.8, ease: "power3.inOut", scrollTrigger: { trigger: ".process-section-mobile", start: "top 200px", end: "top top" } }
        );

        gsap.fromTo(".procs-mob-card-2", 
            { height: "35px" }, 
            { height: "175px", duration: 0.8, ease: "power3.inOut", delay: 0.5, scrollTrigger: { trigger: ".process-section-mobile", start: "top -100px", end: "top -300px" } }
        );

        gsap.fromTo(".procs-mob-card-3", 
            { height: "35px" }, 
            { height: "175px", duration: 0.8, ease: "power3.inOut", delay: 0.5, scrollTrigger: { trigger: ".process-section-mobile", start: "top -300px",  end: "top -500px" } }
        );

        gsap.fromTo(".procs-mob-card-4", 
            { height: "35px" }, 
            { height: "175px", duration: 0.8, ease: "power3.inOut", delay: 0.5, scrollTrigger: { trigger: ".process-section-mobile", start: "top -500px",  end: "top -700px" } }
        );
        
        gsap.fromTo(".procs-mob-card-5", 
            { height: "35px" }, 
            { height: "150px", duration: 0.8, ease: "power3.inOut", delay: 0.5, scrollTrigger: { trigger: ".process-section-mobile", start: "top -700px",  end: "top -900px"} }
        );

        gsap.fromTo(".procs-mob-card-6", 
            { height: "35px" },
            { height: "175px", duration: 0.8, ease: "power3.inOut", delay: 0.5, scrollTrigger: { trigger: ".process-section-mobile", start: "top -900px",  end: "top -1100px"} }
        );

        gsap.to(".procs-mob-card-1 .procs-card-ttl img", { opacity: 1, delay: 1, duration: 0.5,  scrollTrigger: { trigger: ".process-section-mobile", start: "top 200px", }  })
        gsap.to(".procs-mob-card-2 .procs-card-ttl img", { opacity: 1, delay: 1, duration: 0.5,  scrollTrigger: { trigger: ".process-section-mobile", start: "top -100px", }  })
        gsap.to(".procs-mob-card-3 .procs-card-ttl img", { opacity: 1, delay: 1, duration: 0.5,  scrollTrigger: { trigger: ".process-section-mobile", start: "top -300px", }  })
        gsap.to(".procs-mob-card-4 .procs-card-ttl img", { opacity: 1, delay: 1, duration: 0.5,  scrollTrigger: { trigger: ".process-section-mobile", start: "top -500px", }  })
        gsap.to(".procs-mob-card-5 .procs-card-ttl img", { opacity: 1, delay: 1, duration: 0.5,  scrollTrigger: { trigger: ".process-section-mobile", start: "top -700px", }  })
        gsap.to(".procs-mob-card-6 .procs-card-ttl img", { opacity: 1, delay: 1, duration: 0.5,  scrollTrigger: { trigger: ".process-section-mobile", start: "top -900px", }  })
        
    })

    return(
        <>
            <section className="section process-section-mobile" style={{ backgroundColor: "#FBF9E9", color: "black" }}>
                <div className="container">
                    <div className="procs-mob-titles">
                        <h2 className="text-sb">Work Process We Follow</h2>

                        <p className="text-16 text-rg">Every project flows through a defined path understanding, planning, designing, building, and refining. This ensures that every decision is intentional and every outcome is crafted with clarity and precision.</p>
                    </div>

                    <div className="procs-mob-cards-wrapper">
                        <div className="procs-mob-card procs-mob-card-1">
                            <div className="procs-mob-icon">
                                <span className="icon-discover-process"></span>
                            </div>

                            <div className="procs-mob-card-info">
                                <div className="procs-card-ttl">
                                    <h3 className="h2 text-sb text-upper-case">Discover</h3>

                                    <Image src="/images/homepage/process/process-completed-tick.svg" alt="process-tick" width={16} height={12}></Image>
                                </div>

                                <p className="text-16 text-rg procs-card-subttl">
                                    <span>Every Meaningful Solutions begins with understanding.</span>
                                    <span>We take time to understand your business, your users, and the challenges standing in the way of growth. The better the questions, the better the outcome.</span>
                                </p>
                            </div>
                        </div>

                        <div className="procs-mob-card procs-mob-card-2">
                            <div className="procs-mob-icon">
                                <span className="icon-strategy-process"></span>
                            </div>

                            <div className="procs-mob-card-info">
                                <div className="procs-card-ttl">
                                    <h3 className="h2 text-sb text-upper-case">Strategize</h3>

                                    <Image src="/images/homepage/process/process-completed-tick.svg" alt="process-tick" width={16} height={12}></Image>
                                </div>

                                <p className="text-16 text-rg procs-card-subttl">
                                    <span>Direction creates momentum.</span>
                                    <span>Ideas become impactful when backed by clarity. We bring together research, insights, and business goals to build a roadmap that gives every decision a purpose.</span>
                                </p>
                            </div>
                        </div>

                        <div className="procs-mob-card procs-mob-card-3">
                            <div className="procs-mob-icon">
                                <span className="icon-create-process"></span>
                            </div>

                            <div className="procs-mob-card-info">
                                <div className="procs-card-ttl">
                                    <h3 className="h2 text-sb text-upper-case">Create</h3>

                                    <Image src="/images/homepage/process/process-completed-tick.svg" alt="process-tick" width={16} height={12}></Image>
                                </div>

                                <p className="text-16 text-rg procs-card-subttl">
                                    <span>Creativity with intention.</span>
                                    <span>We design experiences, distinct visual identities, and seamless digital interactions that elevate your presence, leave a lasting impression, and ensure your brand is truly impossible to overlook.</span>
                                </p>
                            </div>
                        </div>

                        <div className="procs-mob-card procs-mob-card-4">
                            <div className="procs-mob-icon">
                                <span className="icon-engineer-process"></span>
                            </div>

                            <div className="procs-mob-card-info">
                                <div className="procs-card-ttl">
                                    <h3 className="h2 text-sb text-upper-case">Engineer</h3>

                                    <Image src="/images/homepage/process/process-completed-tick.svg" alt="process-tick" width={16} height={12}></Image>
                                </div>

                                <p className="text-16 text-rg procs-card-subttl">
                                    <span>Built for the real world.</span>
                                    <span>We develop scalable, high-performing systems where design and functionality come together seamlessly, ensuring your digital presence remains visually compelling and architecturally robust.</span>
                                </p>
                            </div>
                        </div>

                        <div className="procs-mob-card procs-mob-card-5">
                            <div className="procs-mob-icon">
                                <span className="icon-refine-process"></span>
                            </div>

                            <div className="procs-mob-card-info">
                                <div className="procs-card-ttl">
                                    <h3 className="h2 text-sb text-upper-case">Refine</h3>

                                    <Image src="/images/homepage/process/process-completed-tick.svg" alt="process-tick" width={16} height={12}></Image>
                                </div>

                                <p className="text-16 text-rg procs-card-subttl">
                                    <span>The details shape the experience.</span>
                                    <span>We test, improve, and carefully fine-tune every single interaction because the smallest refinements often make the biggest difference.</span>
                                </p>
                            </div>
                        </div>

                        <div className="procs-mob-card procs-mob-card-6">
                            <div className="procs-mob-icon">
                                <span className="icon-deliver-svg"></span>
                            </div>

                            <div className="procs-mob-card-info">
                                <div className="procs-card-ttl">
                                    <h3 className="h2 text-sb text-upper-case">Deliver</h3>

                                    <Image src="/images/homepage/process/process-completed-tick.svg" alt="process-tick" width={16} height={12}></Image>
                                </div>

                                <p className="text-16 text-rg procs-card-subttl">
                                    <span>Launch is where the journey expands.</span>
                                    <span>We deliver solutions with precision and stay invested in their growth, ensuring they continue to create value as your business evolves.</span>
                                </p>
                            </div>
                        </div>


                        <span className="line-vertical"></span>
                        <span className="line-vertical-hide"></span>
                    </div>
                </div>
            </section>
        </>
    )
}