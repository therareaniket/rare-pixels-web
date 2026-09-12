"use client"
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
import ScrollToTopButton from "@/components/global/ScrollToTopButton";
import Footer from "@/components/global/Footer";

export default function Home() {
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
		<main>
			<ReactLenis root />

			{/* DESKTOP */}
			{!isSmallScreen && (
				<div>
					<div data-theme-color="white">
						<TestimonialSectionDesktop />
					</div>

					<div data-theme-color="white">
						<AboutSectionDesktop />
					</div>

					<div data-theme-color="white">
						<ServicesSectionDesktop />
					</div>
					
					<div data-theme-color="white">
						<IndustriesSectionDesktop />
					</div>

					<div data-theme-color="white">
						<WhyChooseUsSectionDesktop />
					</div>
					
					<div data-theme-color="white">
						<ProcessSectionDesktop />
					</div>

					<div data-theme-color="white">
						<ProjectsSectionDesktop />
					</div>

					<div data-theme-color="white">
						<StatsSectionDesktop/>
					</div>

					<div data-theme-color="white">
						<BlogSectionDesktop />
					</div>

					<div data-theme-color="white">
						<FaqSectionDesktop />
					</div>

					<div data-theme-color="white">
						<InquirySectionDesktop />
					</div>

					<div data-theme-color="white">
						<Footer />
					</div>
					<ScrollToTopButton />
				</div>
			)}

			{/* MOBILE */}
			{isSmallScreen && (
				<div>
					<div data-theme-color="white">
						<TestimonialSectionMobile />
					</div>

					<div data-theme-color="white">
						<AboutSectionMobile />
					</div>

					<div data-theme-color="white">
						<ServicesSectionMobile />
					</div>

					<div data-theme-color="light-yellow">
						<IndustriesSectionMobile />
					</div>

					<div data-theme-color="white">
						<WhyChooseUsSectionMobile />
					</div>
	
					<div data-theme-color="white">
						<ProcessSectionMobile />
					</div>

					<div data-theme-color="white">
						<ProjectsSectionDesktop />
					</div>
	
					<div data-theme-color="white">
						<StatsSectionMobile />
					</div>

					<div data-theme-color="white">
						<BlogSectionMobile />
					</div>

					<div data-theme-color="white">
						<FaqSectionMobile />
					</div>
	
					<div data-theme-color="white">
						<InquirySectionMobile />
					</div>
					
					<div data-theme-color="white">
						<Footer />
					</div>
					<ScrollToTopButton />
				</div>
			)}
		</main>
	);
}