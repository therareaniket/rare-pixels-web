"use client";

import AboutFaqSectionDesktop from "@/components/Aboutpage/Desktop/AboutFaqSectionDesktop";
import AboutHeroSectionDesktop from "@/components/Aboutpage/Desktop/AboutHeroSectionDesktop";
import AboutMissionVisionDesktop from "@/components/Aboutpage/Desktop/AboutMissionVisionDesktop";
import AboutOurValuesSectionDesktop from "@/components/Aboutpage/Desktop/AboutOurValuesSectionDesktop";
import AboutRpdSectionDesktop from "@/components/Aboutpage/Desktop/AboutRpdSectionDesktop";

import AboutTeamsSectionDesktop from "@/components/Aboutpage/Desktop/AboutTeamsSectionDesktop";
import WhyRarePixelsDesktop from "@/components/Aboutpage/Desktop/WhyRarePixelsDesktop";
import AboutFaqSectionMobile from "@/components/Aboutpage/Mobile/AboutFaqSectionMobile";
import AboutMissionVisionMobile from "@/components/Aboutpage/Mobile/AboutMissionVisionMobile";
import AboutOurValuesSectionMobile from "@/components/Aboutpage/Mobile/AboutOurValuesSectionMobile";
import AboutTeamsSectionMobile from "@/components/Aboutpage/Mobile/AboutTeamsSectionMobile";
import WhyRarePixelsMobile from "@/components/Aboutpage/Mobile/WhyRarePixelsMobile";
import ReactLenis from "lenis/react";
import { useEffect, useState } from "react";
import AboutRpdSectionMobile from "../../components/Aboutpage/Mobile/AboutRpdSectionMobile";
import AboutLifeAtRpdSectionDesktop from "@/components/Aboutpage/Desktop/AboutLifeAtRpdSectionDesktop";
import AboutLifeAtRpdSectionMobile from "@/components/Aboutpage/Mobile/AboutLifeAtRpdSectionMobile";
import ScrollToTopButton from "@/components/global/ScrollToTopButton";
import Footer from "@/components/global/Footer";
import { useThemeTrigger } from "@/hooks/useThemeTrigger";
import AboutTimeline from "@/components/Aboutpage/Desktop/TimelineSection";
import AboutTimelineMobile from "@/components/Aboutpage/Mobile/AbouTimelineMobiles";
import AboutTeamDesktop from "@/components/Aboutpage/Desktop/AboutTeamsDesktop";

export default function About() {
	const [isSmallScreen, setIsSmallScreen] = useState<boolean | null>(null);

	useEffect(() => {
		const handleResize = () => { setIsSmallScreen(window.innerWidth <= 479); };
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useThemeTrigger(isSmallScreen);
	
	if (isSmallScreen === null) { return null; }

	return (
		<>
			<main>
				<ReactLenis root />

				{/* DESKTOP */}
				<div className="hidden min-[480px]:block">					
					<div data-theme-color="white">
						<AboutHeroSectionDesktop />
					</div>
					
					<div data-theme-color="white">
						{/* <AboutTimelineSectionDesktop /> */}
						<AboutTimeline />
					</div>
					
					<div data-theme-color="white">
						<AboutMissionVisionDesktop />
					</div>
	
					<div data-theme-color="white">
						<AboutRpdSectionDesktop />
					</div>

					<div data-theme-color="white">
						<AboutOurValuesSectionDesktop />
					</div>
	
					<div data-theme-color="white">
						<AboutTeamsSectionDesktop />
					</div>
	
					<div data-theme-color="white">
						<WhyRarePixelsDesktop />
					</div>
		
					<div data-theme-color="white">
						<AboutLifeAtRpdSectionDesktop />
					</div>
	
					<div data-theme-color="white">
						<AboutFaqSectionDesktop />
					</div>

					<div data-theme-color="white">
						<Footer />
					</div>
					
					<ScrollToTopButton />
				</div>

				{/* MOBILE */}
				<div className="block min-[480px]:hidden">
					<div data-theme-color="white">
						{/* <AboutHeroSectionMobile /> */}
						<AboutHeroSectionDesktop />
					</div>

					<div data-theme-color="white">
						{/* <AboutTimelineSectionMobile /> */}
						<AboutTimelineMobile />
					</div>
	
					<div data-theme-color="white">
						<AboutMissionVisionMobile />
					</div>
	
					<div data-theme-color="white">
						<AboutRpdSectionMobile />
					</div>

					<div data-theme-color="white">
						<AboutOurValuesSectionMobile />
					</div>
		
					<div data-theme-color="white">
						<AboutTeamsSectionMobile />
					</div>
	
					<div data-theme-color="white">
						<WhyRarePixelsMobile />
					</div>
	
					<div data-theme-color="white">
						<AboutLifeAtRpdSectionMobile />
					</div>
	
					<div data-theme-color="white">
						<AboutFaqSectionMobile />
					</div>

					<div data-theme-color="white">
						<Footer />
					</div>
					
					<ScrollToTopButton />
				</div>
			</main>
		</>
	);
}