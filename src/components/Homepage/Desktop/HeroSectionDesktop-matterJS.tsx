'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import GlassEffect from "@/components/LiquideGlass";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const services = [
    {
        title: "UI/UX Design Services",
        description: "Experiences users remember and businesses benefit from",
        icon: "/images/homepage/home-hero-services-eye.png",
        alternate: "eye-emoji",
        class: "home-eye"
    },
];

export default function HeroSectionDesktop() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [showDescription, setShowDescription] = useState(true);

    const sceneRef = useRef<HTMLDivElement>(null);
    const eyeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowDescription(false);

            setTimeout(() => {
                setActiveIndex((prev) => (prev + 1) % services.length);
                setShowDescription(true);
            }, 500);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!sceneRef.current) return;

        const {
            Engine,
            Render,
            Runner,
            MouseConstraint,
            Mouse,
            Composite,
            Bodies,
            World,
            Body,
        } = Matter;

        const containerEl = sceneRef.current;
        const width = containerEl.clientWidth;
        const height = containerEl.clientHeight;

        // create engine
        const engine = Engine.create();
        const world = engine.world;

        // create renderer
        const render = Render.create({
            element: containerEl,
            engine: engine,
            options: {
                width,
                height,
                background: "transparent",
                wireframes: false,
            },
        });

        Render.run(render);

        const runner = Runner.create();
        Runner.run(runner, engine);

        // dimensions of the eye image
        const eyeWidth = 450;
        const eyeHeight = 600;

        // create the eye body (invisible — DOM image will follow it)
        const eyeBody = Bodies.rectangle(
            width / 2,
            height / 2,
            eyeWidth,
            eyeHeight,
            {
                frictionAir: 0.02,
                restitution: 0.99,
                render: {
                    visible: false,
                },
            }
        );

        // walls (invisible boundaries so the eye stays in view)
        const wallOptions = { isStatic: true, render: { visible: false } };
        const walls = [
            Bodies.rectangle(width / 2, -25, width, 50, wallOptions), // top
            Bodies.rectangle(width / 2, height + 25, width, 50, wallOptions), // bottom
            Bodies.rectangle(width + 25, height / 2, 50, height, wallOptions), // right
            Bodies.rectangle(-25, height / 2, 50, height, wallOptions), // left
        ];

        Composite.add(world, [eyeBody, ...walls]);

        // mouse control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });

        Composite.add(world, mouseConstraint);
        render.mouse = mouse;

        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: width, y: height },
        });

        // sync DOM image position/rotation with the physics body
        let animationFrameId: number;
        const updateEyePosition = () => {
            if (eyeRef.current) {
                const { x, y } = eyeBody.position;
                const angle = eyeBody.angle;
                eyeRef.current.style.transform = `translate(${x - eyeWidth / 2}px, ${y - eyeHeight / 2}px) rotate(${angle}rad)`;
            }
            animationFrameId = requestAnimationFrame(updateEyePosition);
        };
        updateEyePosition();

        // resize handling
        const handleResize = () => {
            const newWidth = containerEl.clientWidth;
            const newHeight = containerEl.clientHeight;

            render.canvas.width = newWidth;
            render.canvas.height = newHeight;
            render.options.width = newWidth;
            render.options.height = newHeight;

            Render.lookAt(render, {
                min: { x: 0, y: 0 },
                max: { x: newWidth, y: newHeight },
            });
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
            Render.stop(render);
            Runner.stop(runner);
            World.clear(world, false);
            Engine.clear(engine);
            render.canvas.remove();
            render.textures = {};
        };
    }, []);

    return (
        <>
            <section className="section hm-hero-main">
                <div className="container">
                    <div className="home-hero-wrapper-desktop">
                        <div className="hm-hero-row-1-wrapper">
                            <div className="hm-hero-text-left">
                                <h1 className="text-sb hm-hero-title">
                                    Seen.
                                    Remembered.
                                    Chosen.
                                </h1>
                                <p className="text-18 text-rg hm-hero-subtitle">Most brands compete for attention. The memorable ones earn it. At RarePixels, we blend strategy, creativity, and technology to create digital experiences that people notice, trust, and return to.</p>

                                <Link href="/" title="Let's Make it Rare" className="link-padding site-radius-30 btn-bg-primary hm-hero-redirect-link">
                                    <span className="text-20 text-white">Make It Rare</span>
                                    <Image src="/images/homepage/homeHeroArrow.svg" alt="arrow-for-navigation" width={24} height={24}></Image>
                                </Link>
                            </div>

                            <div className="home-hero-services-highlight-wrapper for-desktop">
                                <div className="hm-services-left home-hero-banner-image" ref={sceneRef} style={{ position: "absolute", bottom: 0, right:0, overflow: "hidden", width: 1500, height: 600, }} >
                                    <div ref={eyeRef} style={{position: "absolute",bottom: 0, left: 0,width: 506,height: 526, cursor: "grab", pointerEvents: "none", }} >
                                        <Image src="/images/homepage/matter-eye.png" alt="eye-element" loading="eager" width={450} height={500} />
                                    </div>
                                </div>

                                <div className="hm-services-right">
                                    {services.map((service, index) => (
                                        <div key={index} className={`hm-services-content-wrapper ${activeIndex === index ? "active" : "" }`}>
                                            <GlassEffect className="dock site-radius-30">
                                                <div className="hm-services-title">
                                                    <Image src={service.icon} alt={service.alternate} width={22} height={34}></Image>
                                                    <span className="text-sb h6">{service.title}</span>
                                                </div>
                                            </GlassEffect>

                                            <div className={`hm-services-subtitle ${activeIndex === index && showDescription ? "show" : ""
                                                }`}>
                                                <p className="text-18 text-rg">{service.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="hm-hero-row-2-wrapper">
                            <div className="hm-hero-stats-wrapper">
                                <div className="hm-hero-stats">
                                    <h2 className="text-sb text-primary">100+</h2>
                                    <p className="text-18 text-md">Brands Empowered</p>
                                </div>
                                <div className="hm-hero-stats">
                                    <h2 className="text-sb text-primary">120K+</h2>
                                    <p className="text-18 text-md">Lines of Code Crafted</p>
                                </div>
                                <div className="hm-hero-stats">
                                    <h2 className="text-sb text-primary">250+</h2>
                                    <p className="text-18 text-md">Creative Campaigns</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
