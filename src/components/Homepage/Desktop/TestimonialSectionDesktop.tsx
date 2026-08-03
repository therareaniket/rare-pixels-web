'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";


const videos = [
    "/images/homepage/testimonialvideos/dummy-1.mp4",
    "/images/homepage/testimonialvideos/dummy-2.mp4",
    "/images/homepage/testimonialvideos/dummy-3.mp4",
]

export default function TestimonialSectionDesktop() {
    const [selectVideo, setSelectVideo] = useState<string | null>(null);
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);

    const [isTransitioning, setIsTransitioning] = useState(false);

    const mainVideoRef = useRef<HTMLVideoElement>(null);
    const video2Ref = useRef<HTMLVideoElement>(null);
    const video3Ref = useRef<HTMLVideoElement>(null);

    const handleFullscreen = (src: string) => {
        setSelectVideo(src);
    };

    useEffect(() => {
        if (selectVideo) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectVideo]);

    useEffect(() => {
        const videoRefs = [
            mainVideoRef,
            video2Ref,
            video3Ref,
        ];

        if (selectVideo) {
            document.body.style.overflow = "hidden";

            swiperRef.current?.autoplay?.stop();

            videoRefs.forEach((ref) => {
                ref.current?.pause();
            });
        } else {
            document.body.style.overflow = "";

            swiperRef.current?.autoplay?.start();

            videoRefs.forEach((ref) => {
                ref.current?.play().catch(() => { });
            });
        }
    }, [selectVideo]);

    return (
        <>
            <section className="section hm-testimonial-section">
                <div className="container">
                    <div className="hm-testimonial-txt-wrapper">
                        <div className="hm-testimonial-left-text">
                            <h2 className="text-sb">Proof Over Promises</h2>

                            <p className="text-18 text-rg text-grey">Anybody can talk about creativity. Our clients tell the story better. Behind every successful outcome is a partnership built on trust, collaboration, and shared ambition.</p>
                        </div>
                    </div>

                    <div className="testimonial-review-wrapper">
                        <div className="testimonial-review-video-wrapper">
                            <div className="testimonialreview-main testimonial-image">
                                <video
                                    className={`testimonial-video site-radius-20 ${isTransitioning ? "video-fade" : ""
                                        }`}
                                    // src="/images/homepage/testimonialvideos/dummy-1.mp4"
                                    src={videos[activeVideoIndex]}
                                    ref={mainVideoRef}
                                    width={480}
                                    height={480}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    // onClick={handleFullscreen}
                                    onClick={() => handleFullscreen(videos[activeVideoIndex])}
                                >
                                </video>

                                {/* <Image className="minimize-btn" src="/images/homepage/testimonialvideos/minimize.svg" alt="minimize" width={24} height={24}></Image> */}
                                <Image className="minimize-btn" onMouseDown={() => handleFullscreen(videos[activeVideoIndex])} src="/images/homepage/testimonialvideos/minimize-svg.svg" alt="minimize" width={30} height={30}></Image>
                            </div>

                            <div className="testimonial-image-2 testimonial-image">
                                <video
                                    className={`testimonial-video site-radius-20 ${isTransitioning ? "video-fade" : ""
                                        }`}
                                    ref={video2Ref}
                                    src={videos[(activeVideoIndex + 1) % videos.length]}
                                    width={200}
                                    height={200}
                                    // onClick={handleFullscreen}
                                    onClick={() => handleFullscreen(videos[(activeVideoIndex + 1) % videos.length])}
                                >
                                </video>

                                <Image className="minimize-btn minimize-btn-small" onMouseDown={() => handleFullscreen(videos[(activeVideoIndex + 1) % videos.length])} src="/images/homepage/testimonialvideos/minimize-svg.svg" alt="minimize" width={24} height={24}></Image>
                            </div>

                            <div className="testimonial-image-3 testimonial-image">
                                <video
                                    className={`testimonial-video site-radius-20 ${isTransitioning ? "video-fade" : ""
                                        }`}
                                    ref={video3Ref}
                                    src={videos[(activeVideoIndex + 2) % videos.length]}
                                    width={130}
                                    height={130}
                                    onClick={() => handleFullscreen(videos[(activeVideoIndex + 2) % videos.length])}
                                >
                                </video>

                                <Image className="minimize-btn minimize-btn-small" onMouseDown={() => handleFullscreen(videos[(activeVideoIndex + 2) % videos.length])} src="/images/homepage/testimonialvideos/minimize-svg.svg" alt="minimize" width={24} height={24}></Image>
                            </div>
                        </div>

                        <div className="testimonial-cards-wrapper">
                            <Swiper modules={[Autoplay]}
                                spaceBetween={30}
                                slidesPerView={2}
                                loop={true}
                                speed={2200}
                                autoplay={{ delay: 3000 }}
                                onSlideChange={() => {
                                    setIsTransitioning(true);

                                    setTimeout(() => {
                                        setActiveVideoIndex((prev) => (prev + 1) % videos.length);
                                        setIsTransitioning(false);
                                    }, 500);
                                }}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                className="testimonial-swiper-wrapper"
                                breakpoints={{
                                    0: { slidesPerView: 1.2, spaceBetween: 20 },
                                    768: { slidesPerView: 1.6, spaceBetween: 20 },
                                    1024: { slidesPerView: 1.5 },
                                    1200: { slidesPerView: 1.6, spaceBetween: 20 },
                                    1360: { slidesPerView: 2, spaceBetween: 30 }
                                }}>
                                <SwiperSlide>
                                    <div className="tesctimonial-card testimonial-card-1">
                                        <div className="text-18 text-rg testimonial-client-text testimonial-text-1 site-radius-20">
                                            <p>Working with RarePixels over the last six months has been a consistently smooth and impressive experience. They have designed multiple digital products for us, and each one reflects deep understanding, creativity, and attention to detail. My recent visit to RarePixels left me genuinely impressed with the team, their culture, and the clarity behind their work. RarePixels has been handling all our UI/UX requirements with exceptional professionalism. Based on my experience so far, I look forward to exploring more of their services in the future.</p>

                                            <div className="testimonial-stars">
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                            </div>
                                        </div>
                                        <div className="client-review-wrapper">
                                            <div className="client-initital">
                                                <span className="h6 text-md client-initial-1">SP</span>

                                                <div className="client-name-designation">
                                                    <p className="text-18 text-sb">Surya Mani Prasad</p>
                                                    <p className="text-18 text-rg">COO</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="tesctimonial-card testimonial-card-2">
                                        <div className="text-18 text-rg testimonial-client-text testimonial-text-2 site-radius-20">
                                            <p>Rarepixels enhanced our online presence with their outstanding website design and development services. From concept to launch, their team delivered a fully responsive, SEO-optimized site that boosted our traffic. Their creativity, technical expertise, and seamless collaboration made the process effortless.</p>
                                            <div className="testimonial-stars">
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                            </div>
                                        </div>
                                        <div className="client-review-wrapper">
                                            <div className="client-initital">
                                                <span className="h6 text-md client-initial-2">ES</span>

                                                <div className="client-name-designation">
                                                    <p className="text-18 text-sb">Edvin Simon</p>
                                                    <p className="text-18 text-rg">Senior Manager</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="tesctimonial-card testimonial-card-3">
                                        <div className="text-18 text-rg testimonial-client-text testimonial-text-3 site-radius-20">
                                            <p>The RarePixels team is indeed working in the line of their brand. I came across many teams during my professional journey but the Team RarePixels are indeed rarest RARE! I have seen them growing as a team and it&apos;s really commendable the freedom and spirit with which they enjoy working and that reflects through their creativity, makes their work very special and unique by matching the present trend & technologies.</p>
                                            <div className="testimonial-stars">
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                            </div>
                                        </div>
                                        <div className="client-review-wrapper">
                                            <div className="client-initital">
                                                <span className="h6 text-md client-initial-3">AD</span>

                                                <div className="client-name-designation">
                                                    <p className="text-18 text-sb">Ami Desai</p>
                                                    <p className="text-18 text-rg">Founder</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="tesctimonial-card testimonial-card-4">
                                        <div className="text-18 text-rg testimonial-client-text testimonial-text-4 site-radius-20">
                                            <p>Working with RarePixels team is awesome. They are a highly professional team experts in design, development and digital marketing. They analysed and integrated our needs and translated them into proposals and results that exceeded our expectations. I highly recommend this team.</p>
                                            <div className="testimonial-stars">
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                            </div>
                                        </div>
                                        <div className="client-review-wrapper">
                                            <div className="client-initital">
                                                <span className="h6 text-md client-initial-4">BY</span>

                                                <div className="client-name-designation">
                                                    <p className="text-18 text-sb">Bernard Saint Yves</p>
                                                    <p className="text-18 text-rg">Director</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="tesctimonial-card testimonial-card-5">
                                        <div className="text-18 text-rg testimonial-client-text testimonial-text-5 site-radius-20">
                                            <p>RarePixels has delivered their services with outstanding professionalism throughout. Their work is consistently creative, fresh, and always on time. They maintain clear and transparent communication. Every detail is handled with care and explained upfront. Truly a dependable and highly recommended team.</p>
                                            <div className="testimonial-stars">
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                                <Image src="/images/homepage/testimonial-star.svg" alt="testimonial-review-star" width={24} height={24}></Image>
                                            </div>
                                        </div>
                                        <div className="client-review-wrapper">
                                            <div className="client-initital">
                                                <span className="h6 text-md client-initial-5">CP</span>

                                                <div className="client-name-designation">
                                                    <p className="text-18 text-sb">Chintan Patel</p>
                                                    <p className="text-18 text-rg">Managing Director</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            {selectVideo && (
                <div
                    className="video-overlay"
                    onClick={() => setSelectVideo(null)}
                >
                    <video
                        src={selectVideo}
                        className="video-fullscreen"
                        loop
                        autoPlay
                        controls
                        onClick={(e) => e.stopPropagation()}
                    >
                    </video>
                    <button
                        className="video-close-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectVideo(null);
                        }}
                    >
                        <span>✕</span>
                    </button>
                </div>
            )}
        </>
    );
}
