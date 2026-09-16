import Image from "next/image";

export default function ServicesHero() {
    return(
        <>
            <section className="section text-white" style={{ backgroundColor: "black" }}>
                <div className="container">
                    <div className="serv-hero-wrapper">
                        <div className="serv-hero-contn">
                            <div className="serv-hero-ttl">
                                <h1 className="text-sb">We Build <span className="serv-hero-span">Experiences </span> 
                                That Businesses Choose First Worldwide</h1>
                            </div>

                            <div className="serv-hero-subttl">
                                <p className="text-18">It has stood the test of time and proceeds Elevate your brand with RarePixels Design everything from strategy to advertising & scale.</p>
                            </div>

                            <div className="serv-hero-stats">
                                <div className="serv-stat">
                                    <span className="h2 text-sb">100+ <Image src="/images/servicespage/herosection/serv-brand-svg.svg" alt="growth-graph" width={32} height={32}/></span>

                                    <p className="text-18 text-md">Brands Transformed</p>
                                </div>

                                <div className="serv-stat">
                                    <span className="h2 text-sb">50+ <Image src="/images/servicespage/herosection/serv-clock-svg.svg" alt="time-clock" width={32} height={32}/></span>
                                    
                                    <p className="text-18 text-md">Bespoke Digital Products Engineered</p>
                                </div>
                            </div>
                        </div>

                        <div className="serv-hero-vid"></div>
                    </div>
                </div>
            </section>
        </>
    )
}