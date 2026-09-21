import ContactFaqSection from "@/components/Contactpage/ContactFaqSection";
import ContactFormSection from "@/components/Contactpage/ContactFormSection";
import ContactHeroSection from "@/components/Contactpage/ContactHeroSection";
import ContactWhatHappensSection from "@/components/Contactpage/ContactWhatHappensSection";
import Footer from "@/components/global/Footer";
import ScrollToTopButton from "@/components/global/ScrollToTopButton";
import ReactLenis from "lenis/react";


export default function Contact() {
    return(
        <>
			<ReactLenis root />

            <ContactHeroSection />
            
            <ContactFormSection />
            
            <ContactWhatHappensSection />
            
            <ContactFaqSection />
            
            <Footer />

            <ScrollToTopButton />
        </>
    );
}