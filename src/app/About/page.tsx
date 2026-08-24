"use client";

import AboutFaqSectionDesktop from "@/components/Aboutpage/Desktop/AboutFaqSectionDesktop";
import AboutHeroSectionDesktop from "@/components/Aboutpage/Desktop/AboutHeroSectionDesktop";
import AboutMissionVisionDesktop from "@/components/Aboutpage/Desktop/AboutMissionVisionDesktop";
import AboutOurValuesSectionDesktop from "@/components/Aboutpage/Desktop/AboutOurValuesSectionDesktop";
import AboutRpdSectionDesktop from "@/components/Aboutpage/Desktop/AboutRpdSectionDesktop";

import AboutTeamsSectionDesktop from "@/components/Aboutpage/Desktop/AboutTeamsSectionDesktop";
import AboutTimelineSectionDesktop from "@/components/Aboutpage/Desktop/AboutTimelineSectionDesktop";
import WhyRarePixelsDesktop from "@/components/Aboutpage/Desktop/WhyRarePixelsDesktop";
import AboutFaqSectionMobile from "@/components/Aboutpage/Mobile/AboutFaqSectionMobile";
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
import AboutRpdSectionMobile from "../../components/Aboutpage/Mobile/AboutRpdSectionMobile";
import AboutLifeAtRpdSectionDesktop from "@/components/Aboutpage/Desktop/AboutLifeAtRpdSectionDesktop";
import AboutLifeAtRpdSectionMobile from "@/components/Aboutpage/Mobile/AboutLifeAtRpdSectionMobile";
import ScrollToTopButton from "@/components/global/ScrollToTopButton";

export default function About() {
	const [isSmallScreen, setIsSmallScreen] = useState<boolean | null>(null);

	useEffect(() => {
		const handleResize = () => { setIsSmallScreen(window.innerWidth <= 479); };

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
					<AboutHeroSectionDesktop />
					<AboutTimelineSectionDesktop />
					<AboutMissionVisionDesktop />
					<AboutRpdSectionDesktop />
					<AboutOurValuesSectionDesktop />
					<AboutTeamsSectionDesktop />
					<WhyRarePixelsDesktop />
					<AboutLifeAtRpdSectionDesktop />
					<AboutFaqSectionDesktop />
					<ScrollToTopButton />
				</div>

				{/* MOBILE */}
				<div className="block min-[480px]:hidden">
					<AboutHeroSectionMobile />
					<AboutTimelineSectionMobile />
					<AboutMissionVisionMobile />
					<AboutRpdSectionMobile />
					<AboutOurValuesSectionMobile />
					<AboutTeamsSectionMobile />
					<WhyRarePixelsMobile />
					<AboutLifeAtRpdSectionMobile />
					<AboutFaqSectionMobile />
					<ScrollToTopButton />
				</div>
			</main>
		</>
	);
}