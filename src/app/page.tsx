"use client"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import HeroSectionMobile from "@/components/Homepage/Mobile/HeroSectionMobile";
import TestimonialSectionMobile from "@/components/Homepage/Mobile/TestimonialSectionMobile";
import AboutSectionMobile from "@/components/Homepage/Mobile/AboutSectionMobile";
import ServicesSectionMobile from "@/components/Homepage/Mobile/ServicesSectionMobile";

const HeroSectionDesktop = dynamic(
	() => import("@/components/Homepage/Desktop/HeroSectionDesktop"),
	{ ssr: false }
);
const TestimonialSectionDesktop = dynamic(
	() => import("@/components/Homepage/Desktop/TestimonialSectionDesktop"),
	{ ssr: false }
);
const AboutSectionDesktop = dynamic(
	() => import("@/components/Homepage/Desktop/AboutSectionDesktop"),
	{ ssr: false }
);

const ServicesSectionDesktop = dynamic(
	() => import("@/components/Homepage/Desktop/ServicesSectionDesktop"),
	{ ssr: false }
);

// const IndustriesSectionDesktop = dynamic(
// 	() => import("@/components/Homepage/Desktop/IndustriesSectionDesktop"),
// 	{ ssr: false }
// );

export default function Home() {
	const [isSmallScreen, setIsSmallScreen] = useState<boolean | null>(null);

	useEffect(() => {
		const handleResize = () => { setIsSmallScreen(window.innerWidth <= 479); };

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
						<HeroSectionMobile />
						<TestimonialSectionMobile />
						<AboutSectionMobile />
						<ServicesSectionMobile />
					</>
					:
					<>
						{/* DESKTOP COMPONENTS */}
						<HeroSectionDesktop />
						<TestimonialSectionDesktop />
						<AboutSectionDesktop />
						<ServicesSectionDesktop />
						{/* <IndustriesSectionDesktop /> */}
					</>
				}
			</main>
		</>
	);
}