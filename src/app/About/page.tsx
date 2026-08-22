"use client";

import AboutHeroSectionDesktop from "@/components/Aboutpage/Desktop/AboutHeroSectionDesktop";
import AboutMissionVisionDesktop from "@/components/Aboutpage/Desktop/AboutMissionVisionDesktop";
import AboutOurValuesSectionDesktop from "@/components/Aboutpage/Desktop/AboutOurValuesSectionDesktop";

import AboutTeamsSectionDesktop from "@/components/Aboutpage/Desktop/AboutTeamsSectionDesktop";
import AboutTimelineSectionDesktop from "@/components/Aboutpage/Desktop/AboutTimelineSectionDesktop";
import WhyRarePixelsDesktop from "@/components/Aboutpage/Desktop/WhyRarePixelsDesktop";
import AboutHeroSectionMobile from "@/components/Aboutpage/Mobile/AboutHeroSectionMobile";
import AboutMissionVisionMobile from "@/components/Aboutpage/Mobile/AboutMissionVisionMobile";
import AboutOurValuesSectionMobile from "@/components/Aboutpage/Mobile/AboutOurValuesSectionMobile";
import AboutTeamsSectionMobile from "@/components/Aboutpage/Mobile/AboutTeamsSectionMobile";
import AboutTimelineSectionMobile from "@/components/Aboutpage/Mobile/AboutTimelineSectionMobile";
import WhyRarePixelsMobile from "@/components/Aboutpage/Mobile/WhyRarePixelsMobile";
import WhyChooseUsSectionDesktop from "@/components/Homepage/Desktop/WhyChooseUsSectionDesktop";
import WhyChooseUsSectionMobile from "@/components/Homepage/Mobile/WhyChooseUsSectionMobile";
import ReactLenis from "lenis/react";
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
				<ReactLenis root />

				{/* DESKTOP */}
				<div className="hidden min-[480px]:block">
                    <AboutHeroSectionDesktop/>
					<AboutTimelineSectionDesktop />
					<AboutMissionVisionDesktop />
					<AboutOurValuesSectionDesktop />
					<AboutTeamsSectionDesktop />
					<WhyRarePixelsDesktop />
				</div>

				{/* MOBILE */}
				<div className="block min-[480px]:hidden">
                    <AboutHeroSectionMobile />
					<AboutTimelineSectionMobile />
					<AboutMissionVisionMobile />
					<AboutOurValuesSectionMobile />
					<AboutTeamsSectionMobile />
					<WhyRarePixelsMobile />
				</div>
			</main>
		</>
	);
}