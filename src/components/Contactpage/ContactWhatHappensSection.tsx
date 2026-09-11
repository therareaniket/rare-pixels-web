"use client";

import { useEffect, useRef, useState } from "react";

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";

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
  const pointerWrapperRef = useRef<HTMLDivElement | null>(null);

  const [activeStep, setActiveStep] = useState(0);
  const [isResponsive, setIsResponsive] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1199px)");

    const handleBreakpointChange = () => {
      const responsive = mediaQuery.matches;

      setIsResponsive(responsive);
      setIsSectionVisible(false);
      setActiveStep(0);
    };

    handleBreakpointChange();

    mediaQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      mediaQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  useEffect(() => {
    if (isResponsive) return;

    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      setIsSectionVisible(false);
    };
  }, [isResponsive]);

  useEffect(() => {
    if (isResponsive || !isSectionVisible) return;

    const interval = window.setInterval(() => {
      setActiveStep((previousStep) => {
        return (previousStep + 1) % contactSteps.length;
      });
    }, 10000);

    return () => {
      window.clearInterval(interval);
    };
  }, [isResponsive, isSectionVisible]);

  useEffect(() => {
    if (!isResponsive) return;

    const pointerWrapper = pointerWrapperRef.current;

    if (!pointerWrapper) return;

    let isEffectActive = true;

    const contactItems = Array.from(
      pointerWrapper.querySelectorAll<HTMLElement>(".cnct-what-happens")
    );

    contactItems.forEach((item) => {
      item.style.overflow = "hidden";
      item.classList.remove("is-expanding", "is-expanded");
    });

    const observer = new IntersectionObserver(
      async (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || !isEffectActive) continue;

          const item = entry.target as HTMLElement;

          observer.unobserve(item);

          if (document.fonts?.ready) {
            await document.fonts.ready;
          }

          if (!isEffectActive) return;

          const collapsedHeight = item.getBoundingClientRect().height;

          item.style.height = "max-content";

          const expandedHeight = item.scrollHeight;

          item.style.height = `${collapsedHeight}px`;
          item.style.overflow = "hidden";

          item.getBoundingClientRect();

          item.classList.add("is-expanding");

          const animation = item.animate(
            [
              {
                height: `${collapsedHeight}px`,
              },
              {
                height: `${expandedHeight}px`,
              },
            ],
            {
              duration: 2200,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "forwards",
            }
          );

          animation.onfinish = () => {
            if (!isEffectActive) return;

            item.classList.remove("is-expanding");
            item.classList.add("is-expanded");

            item.style.height = "max-content";
            item.style.overflow = "visible";
          };
        }
      },
      {
        threshold: 0.85,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    contactItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      isEffectActive = false;

      observer.disconnect();

      contactItems.forEach((item) => {
        item.getAnimations().forEach((animation) => {
          animation.cancel();
        });

        item.classList.remove("is-expanding", "is-expanded");
        item.style.removeProperty("height");
        item.style.removeProperty("overflow");
      });
    };
  }, [isResponsive]);

  const handleStepClick = (index: number) => {
    if (isResponsive) return;

    setActiveStep(index);
  };

  return (
    <section
      ref={sectionRef}
      className="section bg-light-black contact-what-happens-section"
    >
      <div className="container">
        <div className="contact-what-happens-title">
          <h2 className="text-sb text-white">
            What Happens After You Reach Out.
          </h2>

          <p className="text-18 text-rg text-white">
            No black holes. No waiting and wondering. Here is exactly what to
            expect after you contact us.
          </p>
        </div>

        <div
          ref={pointerWrapperRef}
          className={`cnct-what-happens-pointer-wrapper ${isSectionVisible ? "items-visible" : ""
            }`}
        >
          {contactSteps.map((step, index) => {
            const isActive = !isResponsive && activeStep === index;

            return (
              <div
                key={step.number}
                onClick={() => handleStepClick(index)}
                className={`cnct-what-happens cnct-what-happens-${index + 1
                  } ${isActive ? "active" : ""}`}
              >
                <span className="text-sb">{step.number}</span>

                <div className="cnct-what-happens-text">
                  <h3 className="text-sb text-white">{step.title}</h3>

                  <p className="text-18 text-rg text-white">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}