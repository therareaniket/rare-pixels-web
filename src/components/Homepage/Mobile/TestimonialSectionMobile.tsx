'use client';

import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialSectionMobile() {
    const swiperRef = useRef<SwiperType | null>(null);

    const handleFullscreen = (
        e: React.MouseEvent<HTMLVideoElement>
    ) => {
        const video = e.currentTarget as HTMLVideoElement & {
            webkitEnterFullscreen?: () => void;
        };
        if (video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen();
        }
        else if (video.requestFullscreen) {
            video.requestFullscreen();
        }

        video.play();
    };

    return (
        <>
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="hm-testimonial-wrapper">
                        <h2 className="text-sb">Proof Over Promises </h2>

                        <p className="text-16 text-rg text-grey">Anybody can talk about creativity. Our clients tell the story better. Behind every successful outcome is a partnership built on trust, collaboration, and shared ambition.</p>

                        <div className="testimonial-client-video-wrapper">
                            <div className="testimonial-client-video">
                                <video className="testi-clt-img-1 site-radius-10" src="/images/homepage/testimonialvideos/dummy-1.mp4" width={236} height={236} autoPlay loop playsInline muted onClick={handleFullscreen}></video>
                            </div>

                            <div className="testi-clt-img-2">
                                <video className="testi-clt-img-1 site-radius-10" src="/images/homepage/testimonialvideos/dummy-2.mp4" width={100} height={100} autoPlay loop playsInline muted onClick={handleFullscreen}></video>
                            </div>

                            <div className="testi-clt-img-3">
                                <video className="testi-clt-img-1 site-radius-10" src="/images/homepage/testimonialvideos/dummy-3.mp4" width={100} height={100} autoPlay loop playsInline muted onClick={handleFullscreen}></video>
                            </div>
                        </div>

                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1.2}
                            loop={true}
                            speed={1000}
                            autoplay={{ delay: 2500 }}
                            allowTouchMove={true}
                            grabCursor={true}
                            simulateTouch={true}
                            threshold={10}
                            resistance={true}
                            resistanceRatio={0.85}
                            shortSwipes={true}
                            longSwipes={true}
                            longSwipesRatio={0.4}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            className="testimonial-mobile-swiper"
                            breakpoints={{
                                0: { slidesPerView: 1.2 },
                            }}
                        >
                            <SwiperSlide>
                                <div className="hm-testimonial-mobile-card">
                                    <div className="text-rg text-16 hm-testimonial-card hm-testimonial-card-1">
                                        <p>Working with RarePixels over the last six months has been a consistently smooth and impressive experience. They have designed multiple digital products for us, and each one reflects deep understanding, creativity, and attention to detail. My recent visit to RarePixels left me genuinely impressed with the team, their culture, and the clarity behind their work. RarePixels has been handling all our UI/UX requirements with exceptional professionalism. Based on my experience so far, I look forward to exploring more of their services in the future.</p>
                                        <div className="testimonial-stars-mobile">
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                        </div>
                                    </div>

                                    <div className="mobile-client-review-wrapper">
                                        <div className="mobile-client-initial">
                                            <span className="text-md text-18 client-initial-1 ">SP</span>

                                            <div>
                                                <p className="text-16 text-sb">Surya Mani Prasad</p>
                                                <p className="text-16 text-rg">COO</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="hm-testimonial-mobile-card">
                                    <div className="text-rg text-16 hm-testimonial-card hm-testimonial-card-2">
                                        <p>Rarepixels enhanced our online presence with their outstanding website design and development services. From concept to launch, their team delivered a fully responsive, SEO-optimized site that boosted our traffic. Their creativity, technical expertise, and seamless collaboration made the process effortless.</p>
                                        <div className="testimonial-stars-mobile">
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                        </div>
                                    </div>

                                    <div className="mobile-client-review-wrapper">
                                        <div className="mobile-client-initial">
                                            <span className="text-md text-18 client-initial-2">ES</span>

                                            <div>
                                                <p className="text-16 text-sb">Edvin Simon</p>
                                                <p className="text-16 text-rg">Senior Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="hm-testimonial-mobile-card">
                                    <div className="text-rg text-16 hm-testimonial-card hm-testimonial-card-3">
                                        <p>The RarePixels team is indeed working in the line of their brand. I came across many teams during my professional journey but the Team RarePixels are indeed rarest RARE! I have seen them growing as a team and it&apos;s really commendable the freedom and spirit with which they enjoy working and that reflects through their creativity, makes their work very special and unique by matching the present trend & technologies.</p>
                                        <div className="testimonial-stars-mobile">
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                        </div>
                                    </div>

                                    <div className="mobile-client-review-wrapper">
                                        <div className="mobile-client-initial">
                                            <span className="text-md text-18 client-initial-3">AD</span>

                                            <div>
                                                <p className="text-16 text-sb">Ami Desai</p>
                                                <p className="text-16 text-rg">Founder</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="hm-testimonial-mobile-card">
                                    <div className="text-rg text-16 hm-testimonial-card hm-testimonial-card-4">
                                        <p>Working with RarePixels team is awesome. They are a highly professional team experts in design, development and digital marketing. They analysed and integrated our needs and translated them into proposals and results that exceeded our expectations. I highly recommend this team.</p>
                                        <div className="testimonial-stars-mobile">
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                        </div>
                                    </div>

                                    <div className="mobile-client-review-wrapper">
                                        <div className="mobile-client-initial">
                                            <span className="text-md text-18 client-initial-4">BY</span>

                                            <div>
                                                <p className="text-16 text-sb">Bernard Saint Yves</p>
                                                <p className="text-16 text-rg">Director</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="hm-testimonial-mobile-card">
                                    <div className="text-rg text-16 hm-testimonial-card hm-testimonial-card-5">
                                        <p>RarePixels has delivered their services with outstanding professionalism throughout. Their work is consistently creative, fresh, and always on time. They maintain clear and transparent communication. Every detail is handled with care and explained upfront. Truly a dependable and highly recommended team.</p>
                                        <div className="testimonial-stars-mobile">
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={20} height={20}></Image>
                                        </div>
                                    </div>

                                    <div className="mobile-client-review-wrapper">
                                        <div className="mobile-client-initial">
                                            <span className="text-md text-18 client-initial-5">CP</span>

                                            <div>
                                                <p className="text-16 text-sb">Chintan Patel</p>
                                                <p className="text-16 text-rg">Managing Director</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}