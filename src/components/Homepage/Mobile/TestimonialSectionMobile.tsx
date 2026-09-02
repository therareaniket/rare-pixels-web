'use client';

import "@/assets/css/mobile-custom.css";
import "@/assets/css/responsive/mobile-responsive.css";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const CDN_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_ASSETS_CDN;

const videos = [
    `${CDN_URL}/images/homepage/testimonialvideos/dummy-1.mp4`,
    `${CDN_URL}/images/homepage/testimonialvideos/dummy-2.mp4`,
    `${CDN_URL}/images/homepage/testimonialvideos/dummy-3.mp4`,
]

export default function TestimonialSectionMobile() {
    const [selectVideo, setSelectVideo] = useState<string | null>(null);
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);

    const [isTransitioning, setIsTransitioning] = useState(false);

    const pixelBlocks = useMemo(() => Array.from({ length: 320 }), []);
    const createPixelDelays = useCallback((count: number) =>
        Array.from({ length: count }, () => `${(Math.random() * 0.8).toFixed(3)}s`)
        , []);

    const [pixelDelays, setPixelDelays] = useState(() =>
        createPixelDelays(pixelBlocks.length)
    );

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
        if (selectVideo) {
            document.body.style.overflow = "hidden";

            swiperRef.current?.autoplay?.stop();

            mainVideoRef.current?.pause();
            video2Ref.current?.pause();
            video3Ref.current?.pause();
        } else {
            document.body.style.overflow = "";

            swiperRef.current?.autoplay?.start();

            mainVideoRef.current?.play().catch(() => { });
        }
    }, [selectVideo]);

    useEffect(() => {
        if (!selectVideo && mainVideoRef.current) {
            mainVideoRef.current.play().catch(() => { });
        }
    }, [activeVideoIndex, selectVideo]);

    useEffect(() => {
        if (selectVideo) return;

        const interval = setInterval(() => {
            setPixelDelays(createPixelDelays(pixelBlocks.length));
            setIsTransitioning(true);

            setActiveVideoIndex((prev) => (prev + 1) % videos.length);

            setTimeout(() => {
                setIsTransitioning(false);
            }, 800);
        }, 6000);

        return () => clearInterval(interval);
    }, [selectVideo, createPixelDelays, pixelBlocks.length]);

    return (
        <>
            <section id="first-section" className="section testimonial-section" style={{ paddingTop: '90px' }}>
                <div className="container">
                    <div className="hm-testimonial-wrapper">
                        <div className="hm-testimonial-mob-text">
                            <h2 className="text-sb">Proof Over Promises </h2>

                            <p className="text-16 text-rg">Anybody can talk about creativity. Our clients tell the story better. Behind every successful outcome is a partnership built on trust, collaboration, and shared ambition.</p>
                        </div>

                        <div className="testimonial-client-video-wrapper">
                            <div className="testimonial-client-video">
                                <video className="testimonial-video site-radius-10" ref={mainVideoRef} width={480} height={480} autoPlay muted loop playsInline preload="true" webkit-playsinline="true" onClick={() => handleFullscreen(videos[activeVideoIndex])}></video>

                                {isTransitioning && (
                                    <div className="pixel-overlay">
                                        {pixelBlocks.map((_, index) => (
                                            <div
                                                key={index}
                                                className="pixel-block"
                                                style={{
                                                    animationDelay: pixelDelays[index],
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}

                                <Image className="minimize-btn" onMouseDown={() => handleFullscreen(videos[activeVideoIndex])} src={`${CDN_URL}/images/homepage/testimonialvideos/minimize-svg.svg`} alt="minimize" width={30} height={30}></Image>
                            </div>
                        </div>

                        <Swiper modules={[Autoplay]} spaceBetween={20} slidesPerView={1.2} loop={true} speed={2200} autoplay={{ delay: 4000 }} allowTouchMove={true} grabCursor={true} simulateTouch={true} threshold={10} resistance={true} resistanceRatio={0.85} shortSwipes={true} longSwipes={true} longSwipesRatio={0.4}
                            onSwiper={(swiper) => { swiperRef.current = swiper; }}
                            className="testimonial-mobile-swiper"
                            breakpoints={{ 0: { slidesPerView: 1.2 }, }} >

                            <SwiperSlide>
                                <div className="hm-testimonial-mobile-card">
                                    <div className="text-rg text-16 hm-testimonial-card hm-testimonial-card-1">
                                        <p className="text-16 text-rg">Working with RarePixels over the last six months has been a consistently smooth and impressive experience. They have designed multiple digital products for us, and each one reflects deep understanding, creativity, and attention to detail. My recent visit to RarePixels left me genuinely impressed with the team, their culture, and the clarity behind their work. RarePixels has been handling all our UI/UX requirements with exceptional professionalism. Based on my experience so far, I look forward to exploring more of their services in the future.</p>
                                        
                                        <div className="testimonial-stars">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <Image key={index} src={`${CDN_URL}/images/homepage/testimonialvideos/testimonial-star.svg`} alt="testimonial-review-star" width={24} height={24}></Image>
                                            ))}
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
                                        <p className="text-16 text-rg">Rarepixels enhanced our online presence with their outstanding website design and development services. From concept to launch, their team delivered a fully responsive, SEO-optimized site that boosted our traffic. Their creativity, technical expertise, and seamless collaboration made the process effortless.</p>
                                        <div className="testimonial-stars">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <Image key={index} src={`${CDN_URL}/images/homepage/testimonialvideos/testimonial-star.svg`} alt="testimonial-review-star" width={24} height={24}></Image>
                                            ))}
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
                                        <p className="text-16 text-rg">The RarePixels team is indeed working in the line of their brand. I came across many teams during my professional journey but the Team RarePixels are indeed rarest RARE! I have seen them growing as a team and it&apos;s really commendable the freedom and spirit with which they enjoy working and that reflects through their creativity, makes their work very special and unique by matching the present trend & technologies.</p>
                                        <div className="testimonial-stars">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <Image key={index} src={`${CDN_URL}/images/homepage/testimonialvideos/testimonial-star.svg`} alt="testimonial-review-star" width={24} height={24}></Image>
                                            ))}
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
                                        <p className="text-16 text-rg">Working with RarePixels team is awesome. They are a highly professional team experts in design, development and digital marketing. They analysed and integrated our needs and translated them into proposals and results that exceeded our expectations. I highly recommend this team.</p>
                                        <div className="testimonial-stars">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <Image key={index} src={`${CDN_URL}/images/homepage/testimonialvideos/testimonial-star.svg`} alt="testimonial-review-star" width={24} height={24}></Image>
                                            ))}
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
                                        <p className="text-16 text-rg">RarePixels has delivered their services with outstanding professionalism throughout. Their work is consistently creative, fresh, and always on time. They maintain clear and transparent communication. Every detail is handled with care and explained upfront. Truly a dependable and highly recommended team.</p>
                                        <div className="testimonial-stars">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <Image key={index} src={`${CDN_URL}/images/homepage/testimonialvideos/testimonial-star.svg`} alt="testimonial-review-star" width={24} height={24}></Image>
                                            ))}
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
                <div className="video-overlay" onClick={() => setSelectVideo(null)} >
                    <video src={selectVideo} className="video-fullscreen" loop autoPlay controls onClick={(e) => e.stopPropagation()}></video>
                    <button className="video-close-btn" onClick={(e) => {
                            e.stopPropagation();
                            setSelectVideo(null);
                        }}>
                            
                        <span>✕</span>
                    </button>
                </div>
            )}
        </>
    );
}