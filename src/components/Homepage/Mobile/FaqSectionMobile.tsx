'use client';

import gsap from "gsap";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does RarePixels offer?",
    answer: "We offer a complete range of digital solutions including UI/UX design, web and app development, brand identity, and performance-focused digital experiences."
  },
  {
    question: "What industries does RarePixels work with?",
    answer: "We work with startups, growing businesses, and enterprises across SaaS, healthcare, fintech, e-commerce, real estate, education, AI, and lifestyle brands."
  },
  {
    question: "Why choose RarePixels over other creative agencies?",
    answer: "We don't believe in one-size-fits-all solutions. Every project is built from the ground up with strategy, creativity, and performance working together."
  },
  {
    question: "Do you offer both design and development services?",
    answer: "Yes. We handle everything from research and UI/UX design to custom web and app development."
  },
  {
    question: "Can RarePixels help build a brand from scratch?",
    answer: "Absolutely. We create complete brand identities, visual systems, messaging, and digital experiences."
  },
  {
    question: "Do you manage social media for businesses?",
    answer: "Yes. We create content strategies, creative assets, and campaigns that help brands grow."
  },
  {
    question: "How do you approach a new project?",
    answer: "Every project begins with understanding your business, users, and goals."
  },
  {
    question: "Can RarePixels redesign an existing website or product?",
    answer: "Yes. We redesign websites and products to improve usability, performance, and business results."
  },
  {
    question: "Do you work with businesses outside India?",
    answer: "Yes. We collaborate with businesses across multiple countries."
  },
  {
    question: "How do I get started with RarePixels?",
    answer: "Simply reach out through our contact page and we'll discuss the right approach."
  }
];

export default function FaqSectionMobile() {
  const [expanded, setExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    if (!expanded) {
      setShowAll(true);

      setTimeout(() => {
        gsap.fromTo(
          ".extra-faq",
          {
            opacity: 0,
            y: -30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
          }
        );
      }, 50);

      setExpanded(true);
    }
    else {
      gsap.to(".extra-faq", {
        opacity: 0,
        y: -30,
        duration: 0.4,
        stagger: 0.05,
        ease: "power3.in",
        onComplete: () => {
          setShowAll(false);
          setExpanded(false);
        },
      });
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="hm-faq-title">
          <h2 className="text-sb">FAQs</h2>
          <p className="text-16 text-rg">
            Answers to the most common questions helping you understand how we work,
            what we offer, and how we can support your next project.
          </p>
        </div>
          <div className={`faq-expand-wrapper ${expanded ? "expanded" : ""}`}>
            <Accordion
              defaultValue={["faq-1"]}
              className="faq-accordion-wrapper"
            >
              {faqs.slice(0, 5).map((faq, index) =>
                <div className="accordion-item-wrapper" key={index}>
                  <span className="accordion-number text-16 text-sb">
                    {index + 1}
                  </span>

                  <AccordionItem
                    value={`faq-${index + 1}`}
                    className="faq-accordion"
                  >
                    <AccordionTrigger className="faq-accordion-title">
                      <h3 className="text-16 text-sb text-black">
                        {faq.question}
                      </h3>
                    </AccordionTrigger>

                    <AccordionContent className="faq-content">
                      <p className="text-14 text-rg text-black">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              )}

              {showAll &&
                faqs.slice(5).map((faq, index) => (
                  <div
                    className="accordion-item-wrapper extra-faq"
                    key={index + 5}
                  >
                    <span className="accordion-number text-16 text-sb">
                      {index + 6}
                    </span>

                    <AccordionItem
                      value={`faq-${index + 6}`}
                      className="faq-accordion"
                    >
                      <AccordionTrigger className="faq-accordion-title">
                        <h3 className="text-16 text-sb text-black">
                          {faq.question}
                        </h3>
                      </AccordionTrigger>

                      <AccordionContent className="faq-content">
                        <p className="text-14 text-rg text-black">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                ))
              }
            </Accordion>

            <div className="faq-btn-wrapper-arrow">
              <button
                type="button"
                className="expand-faq"
                onClick={handleToggle}
              >
                <Image
                  src="/images/faq-down-arrow.svg"
                  alt="faq"
                  width={30}
                  height={52}
                  className={expanded ? 'rotate-180 transition-all' : 'transition-all'}
                />

                {/* <span className="text-12 text-primary text-rg">EXPAND</span> */}
              </button>
              <Link href="#" title="make it rare" className="link-padding site-radius-30 btn-bg-primary hm-hero-redirect-link faq-mobile-btn website-btn">
                <span className="text-20 text-md text-white">Ask Your Queries </span>
                <Image
                  src="/images/homepage/faq-mic.svg"
                  alt="arrow-for-navigation"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

      </div>
    </section>
  );
}