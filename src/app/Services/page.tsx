import Footer from "@/components/global/Footer";
import ServicesHero from "@/components/Servicespage/ServicesHero";
import "@/assets/css/desktop-custom.css";
import ServicesWhyBusinessChooseRare from "@/components/Servicespage/ServicesWhyBusinessChooseRare";
import ScrollToTopButton from "@/components/global/ScrollToTopButton";
import ServicesFaqSection from "@/components/Servicespage/ServicesFaqSection";
import ServicesHowWeWorkSection from "@/components/Servicespage/ServicesHowWeWorkSection";
import ReactLenis from "lenis/react";

export default function Services() {
    return (
        <>
			<ReactLenis root />

            <ServicesHero />

            <ServicesHowWeWorkSection />

            <ServicesWhyBusinessChooseRare />

            <ServicesFaqSection />

            <Footer />

            <ScrollToTopButton />
        </>
    )
}