"use client"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
// import HeroSectionMobile from "@/components/Homepage/Mobile/HeroSectionMobile";
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
import TeamsSectionMobile from "@/components/Homepage/Mobile/TeamsSectionMobile";
import ScrollToTopButton from "@/components/ScrollToTopButton";
// import TeamsSectionDesktop from "@/components/Homepage/Desktop/TeamsSectionDesktop";

// const HeroSectionDesktop = dynamic( () => import("@/components/Homepage/Desktop/HeroSectionDesktop"), { ssr: false } );
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
// const TeamsSectionDesktop = dynamic( () => import("@/components/Homepage/Desktop/TeamsSectionDesktop"), { ssr: false } );


export default function Home() {
	const [isSmallScreen, setIsSmallScreen] = useState<boolean | null>(null);

	useEffect(() => {
		const handleResize = () => { setIsSmallScreen(window.innerWidth <= 479);};

		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	if (isSmallScreen === null) {
		return null;
	}

	return (
		<>
			<main>
				{isSmallScreen ?
					<>
						{/* MOBILE COMPONENTS */}
						{/* <HeroSectionMobile /> */}
						<TestimonialSectionMobile />
						<AboutSectionMobile />
						<ServicesSectionMobile />
						<IndustriesSectionMobile />
						<WhyChooseUsSectionMobile />
						<ProcessSectionMobile />
						<ProjectSectionMobile />
						<StatsSectionMobile />
						{/* <TeamsSectionMobile /> */}
						<BlogSectionMobile />
						<FaqSectionMobile />
						<InquirySectionMobile />
						<ScrollToTopButton />
					</>
					:
					<>
						{/* DESKTOP COMPONENTS */}
						{/* <HeroSectionDesktop /> */}
						<TestimonialSectionDesktop />
						<AboutSectionDesktop />
						<ServicesSectionDesktop />
						<IndustriesSectionDesktop />
						<WhyChooseUsSectionDesktop />
						<ProcessSectionDesktop />
						<ProjectsSectionDesktop />
						<StatsSectionDesktop/>
						{/* <TeamsSectionDesktop/> */}
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