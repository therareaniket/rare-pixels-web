"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.getElementById("first-section");

      if (firstSection) {
        const firstSectionHeight = firstSection.offsetHeight;

        setShowButton(window.scrollY > firstSectionHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button onClick={scrollToTop} className={`fixed bottom-6 right-6 z-50
                  bg-primary text-white p-2
                  flex items-center justify-center
                  shadow-lg site-radius-10
                  transition-transform transition-opacity
                  duration-500 ease-out
                  ${showButton ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"}}`}>
      <Image className="back-top-pointer" src="/images/global/back-to-top.svg" alt="top-btn" width={24} height={24}></Image>
    </button>
  );
}