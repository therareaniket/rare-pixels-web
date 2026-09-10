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
    };

    handleBreakpointChange();

    mediaQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      mediaQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  useEffect(() => {
    if (isResponsive) return;

    const interval = window.setInterval(() => {
      setActiveStep((previousStep) => {
        return (previousStep + 1) % contactSteps.length;
      });
    }, 10000);

    return () => {
      window.clearInterval(interval);
    };
  }, [isResponsive]);

  useEffect(() => {
    if (!isResponsive) return;

    const pointerWrapper = pointerWrapperRef.current;

    if (!pointerWrapper) return;

    let isEffectActive = true;

    const contactItems = Array.from(
      pointerWrapper.querySelectorAll<HTMLElement>(".cnct-what-happens"),
    );

    setIsSectionVisible(false);

    contactItems.forEach((item) => {
      item.getAnimations().forEach((animation) => {
        animation.cancel();
      });

      item.style.height = "120px";
      item.style.overflow = "hidden";
    });

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting || !isEffectActive) return;

        observer.unobserve(pointerWrapper);

        if (document.fonts?.ready) {
          await document.fonts.ready;
        }

        if (!isEffectActive) return;

        setIsSectionVisible(true);

        contactItems.forEach((item, index) => {
          item.getAnimations().forEach((animation) => {
            animation.cancel();
          });

          item.style.height = "max-content";
          item.style.overflow = "hidden";

          const expandedHeight = item.scrollHeight;

          item.style.height = "120px";
          item.style.overflow = "hidden";

          const animation = item.animate(
            [
              {
                height: "120px",
              },
              {
                height: `${expandedHeight}px`,
              },
            ],
            {
              duration: 1200,
              delay: 200 + index * 450,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "none",
            },
          );

          animation.onfinish = () => {
            if (!isEffectActive) return;

            item.style.height = "max-content";
            item.style.overflow = "visible";
          };
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -20% 0px",
      },
    );

    observer.observe(pointerWrapper);

    return () => {
      isEffectActive = false;

      observer.disconnect();

      contactItems.forEach((item) => {
        item.getAnimations().forEach((animation) => {
          animation.cancel();
        });

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
    <section className="section bg-light-black contact-what-happens-section">
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
          className={`cnct-what-happens-pointer-wrapper ${
            isSectionVisible ? "items-visible" : ""
          }`}
        >
          {contactSteps.map((step, index) => {
            const isActive = !isResponsive && activeStep === index;

            return (
              <div
                key={step.number}
                onClick={() => handleStepClick(index)}
                className={`cnct-what-happens cnct-what-happens-${
                  index + 1
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