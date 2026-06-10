"use client"
import { useEffect, useState } from "react";
import HeroSectionMobile from "@/components/Homepage/Mobile/HeroSectionMobile";
import HeroSectionDesktop from "@/components/Homepage/Desktop/HeroSectionDesktop";

export default function Home() {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

  	useEffect(() => {
    	const handleResize = () => { setIsSmallScreen(window.innerWidth <= 479); };
    	
		window.addEventListener("resize", handleResize);
    	handleResize();
    	return () => window.removeEventListener("resize", handleResize);
  	}, []);

  return (
    <>
      	<main>
        	{isSmallScreen ? 
				<>
					{/* MOBILE COMPONENTS */}
					<HeroSectionMobile />
				</>
				: 
				<>
					{/* DESKTOP COMPONENTS */}
					<HeroSectionDesktop />
				</>
			}
      	</main>
    </>
  );
}