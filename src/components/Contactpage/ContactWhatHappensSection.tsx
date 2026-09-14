// "use client";

// import { useEffect, useRef, useState } from "react";

// import "@/assets/css/desktop-custom.css";
// import "@/assets/css/responsive/desktop-responsive.css";
// import "@/assets/css/mobile-custom.css";
// import "@/assets/css/responsive/mobile-responsive.css";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const contactSteps = [
//   {
//     number: "01",
//     title: "We Read Every Word",
//     description:
//       "Your message goes directly to a senior member of the Rare Pixels team, not an inbox managed by an assistant or filtered by automation. We read every enquiry carefully before responding.",
//   },
//   {
//     number: "02",
//     title: "You Hear Back Within 24 Hours",
//     description:
//       "We respond to every enquiry within 24 hours, Monday to Friday, and first thing Monday morning for weekend enquiries. No automated replies. A real response from a senior member of the team.",
//   },
//   {
//     number: "03",
//     title: "We Schedule a Discovery Call",
//     description:
//       "If there is a potential fit, we will suggest a 30-minute discovery call where we learn more about your project, share our thinking, and give you an honest assessment. No pressure. No pitch.",
//   },
//   {
//     number: "04",
//     title: "We Send a Tailored Proposal",
//     description:
//       "Following the discovery call, we put together a proposal specific to your project scope, timeline, investment, and approach. Not a template. A document built around what you actually need.",
//   },
// ];

// export default function ContactWhatHappensSection() {
// 	const sectionRef = useRef<HTMLElement | null>(null);
// 	const [activeStep, setActiveStep] = useState(0);
// 	const [isSectionVisible, setIsSectionVisible] = useState(false);

// 	// Trigger section visibility when it enters the viewport
// 	useEffect(() => {
// 		const section = sectionRef.current;
// 		if (!section) return;

// 		const observer = new IntersectionObserver(
// 		([entry]) => {
// 			if (entry.isIntersecting) {
// 			setIsSectionVisible(true);
// 			}
// 		},
// 		{ threshold: 0.35 }
// 		);

// 		observer.observe(section);

// 		return () => {
// 		observer.disconnect();
// 		};
// 	}, []);

// 	// Auto-advance active step every 5 seconds once the section is visible
// 	useEffect(() => {
// 		if (!isSectionVisible) return;

// 		const interval = window.setInterval(() => {
// 		setActiveStep((prevStep) => (prevStep + 1) % contactSteps.length);
// 		}, 5000);

// 		return () => {
// 		window.clearInterval(interval);
// 		};
// 	}, [isSectionVisible]);

// 	if (window.innerWidth < 1200) {
// 		useGSAP(() => {
// 			gsap.fromTo(".cnct-what-happens", { height: "calc(100% - 120px)" }, { height: "100%", scrollTrigger: { trigger: ".ccnct-what-happens", start: "top 30%", end: "top top" } });
// 		})
// 	}
	



// 	return (
// 		<section ref={sectionRef} className="section bg-light-black contact-what-happens-section">
// 			<div className="container">
// 				<div className="contact-what-happens-title">
// 					<h2 className="text-sb text-white"> What Happens After You Reach Out.</h2>

// 					<p className="text-18 text-rg text-white">No black holes. No waiting and wondering. Here is exactly what to expect after you contact us.</p>
// 				</div>

// 				<div className="cnct-what-happens-pointer-wrapper">
// 				{contactSteps.map((step, index) => {
// 					// The step is only active if the section is visible AND it matches the current active step index
// 					const isActive = isSectionVisible && activeStep === index;

// 					return (
// 						<div key={step.number} className={`cnct-what-happens cnct-what-happens-${index + 1} ${isActive ? "active" : ""}`} >
// 							<span className="text-sb">{step.number}</span>

// 							<div className="cnct-what-happens-text">
// 								<h3 className="text-sb text-white">{step.title}</h3>

// 								<p className="text-18 text-rg text-white">{step.description}</p>
// 							</div>
// 						</div>
// 					);
// 				})}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }





"use client";

import { useEffect, useRef, useState } from "react";

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const contactSteps = [
  {
    number: "01",
    title: "We Read Every Word",
    description:
      "Your message goes directly to a senior member of the Rare Pixels team, not an inbox managed by an assistant or filtered by automation. We read every enquiry carefully before responding.",
  },
  {
    number: "02",
    title: "You Hear Back Within 24 Hours",
    description:
      "We respond to every enquiry within 24 hours, Monday to Friday, and first thing Monday morning for weekend enquiries. No automated replies. A real response from a senior member of the team.",
  },
  {
    number: "03",
    title: "We Schedule a Discovery Call",
    description:
      "If there is a potential fit, we will suggest a 30-minute discovery call where we learn more about your project, share our thinking, and give you an honest assessment. No pressure. No pitch.",
  },
  {
    number: "04",
    title: "We Send a Tailored Proposal",
    description:
      "Following the discovery call, we put together a proposal specific to your project scope, timeline, investment, and approach. Not a template. A document built around what you actually need.",
  },
];

export default function ContactWhatHappensSection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [activeStep, setActiveStep] = useState(0);
    const [isSectionVisible, setIsSectionVisible] = useState(false);

    // Trigger section visibility when it enters the viewport
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSectionVisible(true);
                }
            },
            { threshold: 0.35 }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
        };
    }, []);

    // Auto-advance active step every 5 seconds once the section is visible
    useEffect(() => {
        if (!isSectionVisible) return;

        const interval = window.setInterval(() => {
            setActiveStep((prevStep) => (prevStep + 1) % contactSteps.length);
        }, 5000);

        return () => {
            window.clearInterval(interval);
        };
    }, [isSectionVisible]);

    // Correct implementation of useGSAP with responsive matching
    useGSAP(() => {
        const mm = gsap.matchMedia();

        // Target screens smaller than 1200px
        mm.add("(max-width: 1199px)", () => {
            gsap.fromTo(
                ".cnct-what-happens", 
                { height: "calc(100% - 120px)" }, 
                { 
                    height: "100%", 
                    scrollTrigger: { 
                        trigger: ".cnct-what-happens-section", 
                        start: "top 30%", 
                        end: "top top",
                        scrub: true 
                    } 
                }
            );
        });

        return () => mm.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section bg-light-black contact-what-happens-section">
            <div className="container">
                <div className="contact-what-happens-title">
                    <h2 className="text-sb text-white">What Happens After You Reach Out.</h2>

                    <p className="text-18 text-rg text-white">No black holes. No waiting and wondering. Here is exactly what to expect after you contact us.</p>
                </div>

                <div className="cnct-what-happens-pointer-wrapper">
                {contactSteps.map((step, index) => {
                    const isActive = isSectionVisible && activeStep === index;

                    return (
                        <div key={step.number} className={`cnct-what-happens cnct-what-happens-${index + 1} ${isActive ? "active" : ""}`} >
                            <span className="text-sb">{step.number}</span>

                            <div className="cnct-what-happens-text">
                                <h3 className="text-sb text-white">{step.title}</h3>

                                <p className="text-18 text-rg text-white">{step.description}</p>
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
        </section>
    );
}