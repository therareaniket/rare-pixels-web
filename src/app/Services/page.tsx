import Footer from "@/components/global/Footer";
import ServicesHero from "@/components/Servicespage/ServicesHero";
import "@/assets/css/desktop-custom.css";
import ServicesWhyBusinessChooseRare from "@/components/Servicespage/ServicesWhyBusinessChooseRare";
import ScrollToTopButton from "@/components/global/ScrollToTopButton";
import ServicesFaqSection from "@/components/Servicespage/ServicesFaqSection";

export default function Services() {
    return (
        <>
            <ServicesHero />

            <ServicesWhyBusinessChooseRare />

            <ServicesFaqSection />

            <Footer />

            <ScrollToTopButton />
        </>
    )
}