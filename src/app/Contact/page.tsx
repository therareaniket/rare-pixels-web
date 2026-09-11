import ContactFaqSection from "@/components/Contactpage/ContactFaqSection";
import ContactFormSection from "@/components/Contactpage/ContactFormSection";
import ContactHeroSection from "@/components/Contactpage/ContactHeroSection";
import ContactWhatHappensSection from "@/components/Contactpage/ContactWhatHappensSection";
import Footer from "@/components/global/Footer";
import ScrollToTopButton from "@/components/global/ScrollToTopButton";


export default function Contact() {
    return(
        <>
            <ContactHeroSection />
            
            <ContactFormSection />
            
            <ContactWhatHappensSection />
            
            <ContactFaqSection />
            
            <Footer />

            <ScrollToTopButton />
        </>
    );
}