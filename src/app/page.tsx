"use client"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ReactLenis } from 'lenis/react';

import TestimonialSectionMobile from "@/components/Homepage/Mobile/TestimonialSectionMobile";
import AboutSectionMobile from "@/components/Homepage/Mobile/AboutSectionMobile";
import ServicesSectionMobile from "@/components/Homepage/Mobile/ServicesSectionMobile";
import IndustriesSectionMobile from "@/components/Homepage/Mobile/IndustriesSectionMobile";
import WhyChooseUsSectionMobile from "@/components/Homepage/Mobile/WhyChooseUsSectionMobile";
import ProcessSectionMobile from "@/components/Homepage/Mobile/ProcessSectionMobile";
import ProjectSectionMobile from "@/components/Homepage/Mobile/ProjectSectionMobile";
import StatsSectionMobile from "@/components/Homepage/Mobile/StatsSectionMobile";
import FaqSectionMobile from "@/components/Homepage/Mobile/FaqSectionMobile";
import InquirySectionMobile from "@/components/Homepage/Mobile/InquirySectionMobile";
import BlogSectionMobile from "@/components/Homepage/Mobile/BlogSectionMobile";
import ScrollToTopButton from "@/components/global/ScrollToTopButton";


const TestimonialSectionDesktop = dynamic( () => import("@/components/Homepage/Desktop/TestimonialSectionDesktop"), { ssr: false } );
const AboutSectionDesktop = dynamic( () => import("@/components/Homepage/Desktop/AboutSectionDesktop"), { ssr: false } );
const ServicesSectionDesktop = dynamic( () => import("@/components/Homepage/Desktop/ServicesSectionDesktop"), { ssr: false } );
const IndustriesSectionDesktop = dynamic( () => import("@/components/Homepage/Desktop/IndustriesSectionDesktop"), { ssr: false } );
const WhyChooseUsSectionDesktop = dynamic( () => import("@/components/Homepage/Desktop/WhyChooseUsSectionDesktop"), { ssr: false } );
const ProcessSectionDesktop = dynamic( () => import("@/components/Homepage/Desktop/ProcessSectionDesktop"), { ssr: false } );
const ProjectsSectionDesktop = dynamic( () => import("@/components/Homepage/Desktop/ProjectsSectionDesktop"), { ssr: false } );
const StatsSectionDesktop = dynamic( () => import("@/components/Homepage/Desktop/StatsSectionDesktop"), { ssr: false } );
const BlogSectionDesktop = dynamic( () => import("@/components/Homepage/Desktop/BlogSectionDesktop"), { ssr: false } );
const FaqSectionDesktop = dynamic( () => import("@/components/Homepage/Desktop/FaqSectionDesktop"), { ssr: false } );
const InquirySectionDesktop = dynamic( () => import("@/components/Homepage/Desktop/InquirySectionDesktop"), { ssr: false } );


export default function Home() {
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

				{isSmallScreen ?
					<>
						{/* MOBILE COMPONENTS */}
						<TestimonialSectionMobile />
						<AboutSectionMobile />
						<ServicesSectionMobile />
						<IndustriesSectionMobile />
						<WhyChooseUsSectionMobile />
						<ProcessSectionMobile />
						<ProjectSectionMobile />
						<StatsSectionMobile />
						<BlogSectionMobile />
						<FaqSectionMobile />
						<InquirySectionMobile />
						<ScrollToTopButton />
					</>
					:
					<>
						{/* DESKTOP COMPONENTS */}
						<TestimonialSectionDesktop />
						<AboutSectionDesktop />
						<ServicesSectionDesktop />
						<IndustriesSectionDesktop />
						<WhyChooseUsSectionDesktop />
						<ProcessSectionDesktop />
						<ProjectsSectionDesktop />
						<StatsSectionDesktop/>
						<BlogSectionDesktop />
						<FaqSectionDesktop />
						<InquirySectionDesktop />
						<ScrollToTopButton />
					</>
				}
			</main>
		</>
	);
}