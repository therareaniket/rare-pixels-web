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

    return (
        <>
            <section className="section" style={{paddingTop: 0}}>
                <div className="container">
                    <div className="hm-testimonial-wrapper">
                        <h2 className="text-sb">Proof Over Promises </h2>

                        <p className="text-14 text-rg text-grey">Anybody can talk about creativity. Our clients tell the story better. Behind every successful outcome is a partnership built on trust, collaboration, and shared ambition.</p>

                        <div className="testimonial-client-video-wrapper">
                            <div className="testimonial-client-video">
                                <Image className="testi-clt-img-1" src="/images/homepage/bernard-image.webp" alt="hm-testimonial-image" width={236} height={236}></Image>
                            </div>

                            <Image className="testi-clt-img-2" src="/images/homepage/eric-image.webp" alt="hm-testimonial-image" width={100} height={100}></Image>
                            <Image className="testi-clt-img-3" src="/images/homepage/client-3.webp" alt="hm-testimonial-image" width={100} height={100}></Image>
                        </div>

                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1.3}
                            loop={true}
                            speed={2000}
                            autoplay={{ delay: 2000, disableOnInteraction: true }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            className="testimonial-mobile-swiper"

                            breakpoints={{
                                0: { slidesPerView: 1 },
                                460: { slidesPerView: 1.2 }
                            }}
                        >
                            <SwiperSlide>
                                <div className="hm-testimonial-mobile-card">
                                    <p className="text-rg text-14 hm-testimonial-card hm-testimonial-card-1">Working with RarePixels over the last six months has been a consistently smooth and impressive experience. They have designed multiple digital products for us, and each one reflects deep understanding, creativity, and attention to detail. My recent visit to RarePixels left me genuinely impressed with the team, their culture, and the clarity behind their work. RarePixels has been handling all our UI/UX requirements with exceptional professionalism. Based on my experience so far, I look forward to exploring more of their services in the future.</p>

                                    <div className="mobile-client-review-wrapper">
                                        <div className="mobile-client-initial">
                                            <span className="text-md text-18 client-initial-1 ">SP</span>

                                            <div>
                                                <p className="text-18 text-rg">Surya Mani Prasad</p>
                                                <p className="text-14 text-rg">COO</p>
                                            </div>
                                        </div>

                                        <div className="mobile-review-rating-wrapper">
                                            <span className="text-rg text-14">5.0</span>

                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={16} height={16}></Image>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="hm-testimonial-mobile-card">
                                    <p className="text-rg text-14 hm-testimonial-card hm-testimonial-card-2"> Rarepixels enhanced our online presence with their outstanding website design and development services. From concept to launch, their team delivered a fully responsive, SEO-optimized site that boosted our traffic. Their creativity, technical expertise, and seamless collaboration made the process effortless.</p>

                                    <div className="mobile-client-review-wrapper">
                                        <div className="mobile-client-initial">
                                            <span className="text-md text-18 client-initial-2">ES</span>

                                            <div>
                                                <p className="text-18 text-rg">Edvin Simon</p>
                                                <p className="text-14 text-rg">Senior Manager</p>
                                            </div>
                                        </div>

                                        <div className="mobile-review-rating-wrapper">
                                            <span className="text-rg text-14">5.0</span>

                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={16} height={16}></Image>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="hm-testimonial-mobile-card">
                                    <p className="text-rg text-14 hm-testimonial-card hm-testimonial-card-3">The RarePixels team is indeed working in the line of their brand. I came across many teams during my professional journey but the Team RarePixels are indeed rarest RARE! I have seen them growing as a team and it&apos;s really commendable the freedom and spirit with which they enjoy working and that reflects through their creativity, makes their work very special and unique by matching the present trend & technologies.</p>

                                    <div className="mobile-client-review-wrapper">
                                        <div className="mobile-client-initial">
                                            <span className="text-md text-18 client-initial-3">AD</span>

                                            <div>
                                                <p className="text-18 text-rg">Ami Desai</p>
                                                <p className="text-14 text-rg">Founder</p>
                                            </div>
                                        </div>

                                        <div className="mobile-review-rating-wrapper">
                                            <span className="text-rg text-14">5.0</span>

                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={16} height={16}></Image>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="hm-testimonial-mobile-card">
                                    <p className="text-rg text-14 hm-testimonial-card hm-testimonial-card-4">Working with RarePixels team is awesome. They are a highly professional team experts in design, development and digital marketing. They analysed and integrated our needs and translated them into proposals and results that exceeded our expectations. I highly recommend this team.</p>

                                    <div className="mobile-client-review-wrapper">
                                        <div className="mobile-client-initial">
                                            <span className="text-md text-18 client-initial-4">BY</span>

                                            <div>
                                                <p className="text-18 text-rg">Bernard Saint Yves</p>
                                                <p className="text-14 text-rg">Director</p>
                                            </div>
                                        </div>

                                        <div className="mobile-review-rating-wrapper">
                                            <span className="text-rg text-14">5.0</span>

                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={16} height={16}></Image>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="hm-testimonial-mobile-card">
                                    <p className="text-rg text-14 hm-testimonial-card hm-testimonial-card-5">RarePixels has delivered their services with outstanding professionalism throughout. Their work is consistently creative, fresh, and always on time. They maintain clear and transparent communication. Every detail is handled with care and explained upfront. Truly a dependable and highly recommended team.</p>

                                    <div className="mobile-client-review-wrapper">
                                        <div className="mobile-client-initial">
                                            <span className="text-md text-18 client-initial-5">CP</span>

                                            <div>
                                                <p className="text-18 text-rg">Chintan Patel</p>
                                                <p className="text-14 text-rg">Managing Director</p>
                                            </div>
                                        </div>

                                        <div className="mobile-review-rating-wrapper">
                                            <span className="text-rg text-14">5.0</span>

                                            <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={16} height={16}></Image>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        <div className="tst-swiper-arrow-wrapper">
                            <div
                                className="testimonial-swiper-left testimonial-swiper-arrow"
                                role="button"
                                tabIndex={0}
                                onClick={() => swiperRef.current?.slidePrev()}
                            >
                                <svg className="testimonial-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_2178_856" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <rect x="24" y="24" width="24" height="24" transform="rotate(-180 24 24)" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_2178_856)">
                                        <path className="testimonial-arrow" d="M9 6L3 12L9 18L10.4 16.6L6.8 13L21 13V11L6.8 11L10.4 7.4L9 6Z" fill="white" />
                                    </g>
                                </svg>
                            </div>
                            <div
                                className="testimonial-swiper-right testimonial-swiper-arrow"
                                role="button"
                                tabIndex={0}
                                onClick={() => swiperRef.current?.slideNext()}
                            >
                                <svg className="testimonial-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_2178_853" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <rect width="24" height="24" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_2178_853)">
                                        <path className="testimonial-arrow" d="M15 18L21 12L15 6L13.6 7.4L17.2 11H3V13H17.2L13.6 16.6L15 18Z" fill="white" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}