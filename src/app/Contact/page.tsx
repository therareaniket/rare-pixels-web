import ContactFaqSection from "@/components/Contactpage/ContactFaqSection";
import ContactFormSection from "@/components/Contactpage/ContactFormSection";
import ContactHeroSection from "@/components/Contactpage/ContactHeroSection";
import ContactWhatHappensSection from "@/components/Contactpage/ContactWhatHappensSection";


export default function Contact() {
    return(
        <>
            <ContactHeroSection />
            <ContactFormSection />
            <ContactWhatHappensSection />
            <ContactFaqSection />
        </>
    );
}