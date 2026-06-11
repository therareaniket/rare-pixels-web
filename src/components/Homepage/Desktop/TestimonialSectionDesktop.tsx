'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TestimonialSectionDesktop() {

    return (
        <>
            <section className="hm-testimonial-section">
                <div className="container">
                    <div className="hm-testimonial-txt-wrapper">
                        <div className="hm-testimonial-left-text">
                            <h2 className="text-md">Voices Behind the Work</h2>

                            <p className="text-18 text-rg">Every project tells a story shaped through collaboration and creativity. Here’s what our clients have to say about the experiences we build.</p>
                        </div>


                        <div className="testimonial-stats-wrapper">
                            <div className="testimonial-stats-1 testimonial-stats">
                                <h3 className="h2 text-sb text-primary">3X</h3>
                                <p className="h6 text-md">ROI Impact</p>
                            </div>

                            <div className="testimonial-stats-2 testimonial-stats">
                                <h3 className="h2 text-sb text-primary">100%</h3>
                                <p className="h6 text-md">Client Satisfaction Rate</p>
                            </div>

                            <div className="testimonial-stats-3 testimonial-stats">
                                <h3 className="h2 text-sb text-primary">95%</h3>
                                <p className="h6 text-md">Projects Delivered On Time</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-review-wrapper">
                        <div className="testimonial-review-video-wrapper">
                            <div className="testimonialreview-main">
                                <Image src="/images/homepage/testimonial-image-1-1.webp" alt="testimonial-image" width={480} height={480} loading="lazy"></Image>
                            </div>

                            <Image className="testimonial-image-2" src="/images/homepage/testimonial-image-2-2.webp" alt="testimonial-image" width={200} height={200} loading="lazy"></Image>

                            <Image className="testimonial-image-3" src="/images/homepage/testimonial-image-3.webp" alt="testimonial-image" width={130} height={130} loading="lazy"></Image>
                        </div>

                        <div className="testimonial-cards-wrapper">
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={2}
                                loop={true}
                                speed={5000}
                                autoplay={{ delay: 0, disableOnInteraction: false }}
                                className="testimonial-swiper-wrapper"
                            >
                                <SwiperSlide>
                                    <div className="tesctimonial-card testimonial-card-1">
                                        <p className="text-18 text-rg testimonial-client-text testimonial-text-1 site-radius-20">Working with RarePixels over the last six months has been a consistently smooth and impressive experience. They have designed multiple digital products for us, and each one reflects deep understanding, creativity, and attention to detail. My recent visit to RarePixels left me genuinely impressed with the team, their culture, and the clarity behind their work. RarePixels has been handling all our UI/UX requirements with exceptional professionalism. Based on my experience so far, I look forward to exploring more of their services in the future.
                                        </p>
                                        <div className="client-review-wrapper">
                                            <div className="client-initital">
                                                <span className="h6 text-md text-white">SP</span>

                                                <div className="client-name-designation">
                                                    <p className="h6 text-md">Surya Mani Prasad</p>
                                                    <p className="text-18 text-rg">COO</p>
                                                </div>
                                            </div>

                                            <div className="client-rating">
                                                <span className="text-14 text-rg">5.0</span>
                                                <Image className="testimonial-star" src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={16} height={16}></Image>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="tesctimonial-card testimonial-card-1">
                                        <p className="text-18 text-rg testimonial-client-text testimonial-text-2 site-radius-20">Rarepixels enhanced our online presence with their outstanding website design and development services. From concept to launch, their team delivered a fully responsive, SEO-optimized site that boosted our traffic. Their creativity, technical expertise, and seamless collaboration made the process effortless.
                                        </p>
                                        <div className="client-review-wrapper">
                                            <div className="client-initital">
                                                <span className="h6 text-md text-white">ES</span>

                                                <div className="client-name-designation">
                                                    <p className="h6 text-md">Edvin Simon</p>
                                                    <p className="text-18 text-rg">Senior Manager</p>
                                                </div>
                                            </div>

                                            <div className="client-rating">
                                                <span className="text-14 text-rg">5.0</span>
                                                <Image className="testimonial-star" src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={16} height={16}></Image>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="tesctimonial-card testimonial-card-1">
                                        <p className="text-18 text-rg testimonial-client-text testimonial-text-3 site-radius-20">The RarePixels team is indeed working in the line of their brand. I came across many teams during my professional journey but the Team RarePixels are indeed rarest RARE! I have seen them growing as a team and it&apos;s really commendable the freedom and spirit with which they enjoy working and that reflects through their creativity, makes their work very special and unique by matching the present trend & technologies.
                                        </p>
                                        <div className="client-review-wrapper">
                                            <div className="client-initital">
                                                <span className="h6 text-md text-white">AD</span>

                                                <div className="client-name-designation">
                                                    <p className="h6 text-md">Ami Desai</p>
                                                    <p className="text-18 text-rg">Founder</p>
                                                </div>
                                            </div>

                                            <div className="client-rating">
                                                <span className="text-14 text-rg">5.0</span>
                                                <Image className="testimonial-star" src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={16} height={16}></Image>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="tesctimonial-card testimonial-card-1">
                                        <p className="text-18 text-rg testimonial-client-text testimonial-text-4 site-radius-20">Working with RarePixels team is awesome. They are a highly professional team experts in design, development and digital marketing. They analysed and integrated our needs and translated them into proposals and results that exceeded our expectations. I highly recommend this team.</p>
                                        <div className="client-review-wrapper">
                                            <div className="client-initital">
                                                <span className="h6 text-md text-white">BY</span>

                                                <div className="client-name-designation">
                                                    <p className="h6 text-md">Bernard Saint Yves</p>
                                                    <p className="text-18 text-rg">Director</p>
                                                </div>
                                            </div>

                                            <div className="client-rating">
                                                <span className="text-14 text-rg">5.0</span>
                                                <Image className="testimonial-star" src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={16} height={16}></Image>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="tesctimonial-card testimonial-card-1">
                                        <p className="text-18 text-rg testimonial-client-text testimonial-text-5 site-radius-20">RarePixels has delivered their services with outstanding professionalism throughout. Their work is consistently creative, fresh, and always on time. They maintain clear and transparent communication. Every detail is handled with care and explained upfront. Truly a dependable and highly recommended team.
                                        </p>
                                        <div className="client-review-wrapper">
                                            <div className="client-initital">
                                                <span className="h6 text-md text-white">CP</span>

                                                <div className="client-name-designation">
                                                    <p className="h6 text-md">Chintan Patel</p>
                                                    <p className="text-18 text-rg">Managing Director</p>
                                                </div>
                                            </div>

                                            <div className="client-rating">
                                                <span className="text-14 text-rg">5.0</span>
                                                <Image className="testimonial-star" src="/images/homepage/testimonial-star.svg" alt="testimonial-star" width={16} height={16}></Image>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <div className="testimonial-swiper-wrapper">
                                    <div className="testimonial-swiper-left testimonial-swiper-arrow">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_2178_856" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect x="24" y="24" width="24" height="24" transform="rotate(-180 24 24)" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_2178_856)">
                                                <path className="testimonial-arrow" d="M9 6L3 12L9 18L10.4 16.6L6.8 13L21 13V11L6.8 11L10.4 7.4L9 6Z" fill="white" />
                                            </g>
                                        </svg>

                                    </div>
                                    <div  className="testimonial-swiper-right testimonial-swiper-arrow">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_2178_853" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_2178_853)">
                                                <path className="testimonial-arrow" d="M15 18L21 12L15 6L13.6 7.4L17.2 11H3V13H17.2L13.6 16.6L15 18Z" fill="white" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}