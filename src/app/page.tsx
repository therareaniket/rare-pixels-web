"use client"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ReactLenis } from 'lenis/react';
import { useThemeTrigger } from "@/hooks/useThemeTrigger";

import TestimonialSectionMobile from "@/components/Homepage/Mobile/TestimonialSectionMobile";
import AboutSectionMobile from "@/components/Homepage/Mobile/AboutSectionMobile";
import ServicesSectionMobile from "@/components/Homepage/Mobile/ServicesSectionMobile";
import IndustriesSectionMobile from "@/components/Homepage/Mobile/IndustriesSectionMobile";
import WhyChooseUsSectionMobile from "@/components/Homepage/Mobile/WhyChooseUsSectionMobile";
import ProcessSectionMobile from "@/components/Homepage/Mobile/ProcessSectionMobile";
import StatsSectionMobile from "@/components/Homepage/Mobile/StatsSectionMobile";
import FaqSectionMobile from "@/components/Homepage/Mobile/FaqSectionMobile";
import InquirySectionMobile from "@/components/Homepage/Mobile/InquirySectionMobile";
import BlogSectionMobile from "@/components/Homepage/Mobile/BlogSectionMobile";
import ScrollToTopButton from "@/components/global/ScrollToTopButton";


import TestimonialSectionDesktop from "@/components/Homepage/Desktop/TestimonialSectionDesktop";
import AboutSectionDesktop from "@/components/Homepage/Desktop/AboutSectionDesktop";
import ServicesSectionDesktop from "@/components/Homepage/Desktop/ServicesSectionDesktop";
import IndustriesSectionDesktop from "@/components/Homepage/Desktop/IndustriesSectionDesktop";
import WhyChooseUsSectionDesktop from "@/components/Homepage/Desktop/WhyChooseUsSectionDesktop";
import ProcessSectionDesktop from "@/components/Homepage/Desktop/ProcessSectionDesktop";
import ProjectsSectionDesktop from "@/components/Homepage/Desktop/ProjectsSectionDesktop";
import StatsSectionDesktop from "@/components/Homepage/Desktop/StatsSectionDesktop";
import BlogSectionDesktop from "@/components/Homepage/Desktop/BlogSectionDesktop";
import FaqSectionDesktop from "@/components/Homepage/Desktop/FaqSectionDesktop";
import InquirySectionDesktop from "@/components/Homepage/Desktop/InquirySectionDesktop";
import Footer from "@/components/global/Footer";


export default function Home() {
	const [isSmallScreen, setIsSmallScreen] = useState<boolean | null>(null);

	// THEME TRIGGER FUNCTION CALL
	useThemeTrigger();

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
					<div data-theme-color="white">
						<TestimonialSectionDesktop />
					</div>
	
					<div data-theme-color="navy">
						<AboutSectionDesktop />
					</div>

					<div data-theme-color="white">
						<ServicesSectionDesktop />
					</div>
					
					<div data-theme-color="light-yellow">
						<IndustriesSectionDesktop />
					</div>

					<div data-theme-color="black">
						<WhyChooseUsSectionDesktop />
					</div>
					
					<div data-theme-color="mid-yellow">
						<ProcessSectionDesktop />
					</div>

					<div data-theme-color="white">
						<ProjectsSectionDesktop />
					</div>

					<div data-theme-color="navy">
						<StatsSectionDesktop/>
					</div>

					<div data-theme-color="white">
						<BlogSectionDesktop />
					</div>

					<div data-theme-color="white">
						<FaqSectionDesktop />
					</div>

					<div data-theme-color="mid-yellow">
						<InquirySectionDesktop />
					</div>
					<ScrollToTopButton />

					<div data-theme-color="navy">
						<Footer />
					</div>
				</div>

				{/* MOBILE */}
				<div className="block min-[480px]:hidden">
					<TestimonialSectionMobile />
					<AboutSectionMobile />
					<ServicesSectionMobile />
					<IndustriesSectionMobile />
					<WhyChooseUsSectionMobile />
					<ProcessSectionMobile />
					<ProjectsSectionDesktop />
					<StatsSectionMobile />
					<BlogSectionMobile />
					<FaqSectionMobile />
					<InquirySectionMobile />
					<ScrollToTopButton />
				</div>
			</main>
		</>
	);
}