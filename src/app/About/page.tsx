"use client";

import AboutHeroSectionDesktop from "@/components/Aboutpage/Desktop/AboutHeroSectionDesktop";
import AboutTimelineSectionDesktop from "@/components/Aboutpage/Desktop/AboutTimelineSectionDesktop";
import AboutHeroSectionMobile from "@/components/Aboutpage/Mobile/AboutHeroSectionMobile";
import AboutTimelineSectionMobile from "@/components/Aboutpage/Mobile/AboutTimelineSectionMobile";
// import ReactLenis from "lenis/react";
import { useEffect, useState } from "react";

export default function About() {
	const [isSmallScreen, setIsSmallScreen] = useState<boolean | null>(null);

	useEffect(() => {
		const handleResize = () => { setIsSmallScreen(window.innerWidth <= 479);};

		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	if (isSmallScreen === null) { return null; }

	return (
		<>
			<main>
				{/* <ReactLenis root /> */}

				{/* DESKTOP */}
				<div className="hidden min-[480px]:block">
                    <AboutHeroSectionDesktop/>
					<AboutTimelineSectionDesktop />
				</div>

				{/* MOBILE */}
				<div className="block min-[480px]:hidden">
                    <AboutHeroSectionMobile />
					<AboutTimelineSectionMobile />
				</div>
			</main>
		</>
	);
}