"use client";

import Image from "next/image";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth", });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-primary text-white p-2 r-20 flex items-center justify-center shadow-lg pointer site-radius-10"
    >
      <Image className="back-top-pointer" src="/images/homepage/back-to-top.svg" alt="top-btn" width={24} height={24}></Image>
    </button>
  );
}