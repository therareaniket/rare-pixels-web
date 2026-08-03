'use client';

import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const videos = [
    "/images/homepage/testimonialvideos/dummy-1.mp4",
    "/images/homepage/testimonialvideos/dummy-2.mp4",
    "/images/homepage/testimonialvideos/dummy-3.mp4",
]

export default function TestimonialSectionMobile() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [selectVideo, setSelectVideo] = useState<string | null>(null);
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);

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
            <section className="section" style={{ paddingTop: '70px' }}>
                <div className="container">
                    <div className="hm-testimonial-wrapper">
                        <h2 className="text-sb">Proof Over Promises </h2>

                        <p className="text-16 text-rg text-grey">Anybody can talk about creativity. Our clients tell the story better. Behind every successful outcome is a partnership built on trust, collaboration, and shared ambition.</p>

                        <div className="testimonial-client-video-wrapper">
                            <div className="testimonial-client-video">
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

                            <div className="testi-clt-img-2">
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

                            <div className="testi-clt-img-3">
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