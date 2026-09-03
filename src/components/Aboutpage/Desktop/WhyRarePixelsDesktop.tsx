'use client';

import "@/assets/css/desktop-custom.css";
import "@/assets/css/responsive/desktop-responsive.css";
import GlassEffect from "@/components/global/LiquideGlass";
import Image from "next/image";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyRarePixelsDesktop() {

    useLayoutEffect(() => {

        const mm = gsap.matchMedia();

        mm.add("(min-width: 1200px)", () => {
            const points = gsap.utils.toArray(
                ".tree-section-desktop .why-rare-point"
            );

            gsap.set("#treeReveal", {
                attr: {
                    y: 500,
                    height: 0,
                },
            });

            gsap.set(points, {
                autoAlpha: 0,
                y: 0,
            });

            gsap.set(".tree-section-desktop .card-reveal", {
                xPercent: 0,
            });

            const tl = gsap.timeline({
                paused: true,
            });

            tl.to("#treeReveal", {
                attr: {
                    y: 0,
                    height: 500,
                },
                duration: 5,
                ease: "none",
            });

            tl.to({}, {
                duration: 2,
            });

            tl.set(".why-rare-point-1", {
                autoAlpha: 1,
                y: 0,
            });

            tl.to(".why-rare-point-1 .card-reveal", {
                xPercent: -100,
                duration: 4,
                ease: "power2.inOut",
            });

            tl.set(".why-rare-point-2", {
                autoAlpha: 1,
                y: 0,
            });

            tl.to(".why-rare-point-2 .card-reveal", {
                xPercent: 100,
                duration: 4,
                ease: "power2.inOut",
            });

            tl.set(".why-rare-point-3", {
                autoAlpha: 1,
                y: 0,
            });

            tl.to(".why-rare-point-3 .card-reveal", {
                xPercent: -100,
                duration: 4,
                ease: "power2.inOut",
            });

            tl.set(".why-rare-point-4", {
                autoAlpha: 1,
                y: 0,
            });

            tl.to(".why-rare-point-4 .card-reveal", {
                xPercent: 100,
                duration: 4,
                ease: "power2.inOut",
            });

            let highestProgress = 0;

            const desktopTrigger = ScrollTrigger.create({
                trigger: ".tree-section-desktop",
                start: "top 40%",
                end: "+=3000",
                onUpdate: (self) => {
                    if (self.progress > highestProgress) {
                        highestProgress = self.progress;
                        gsap.to(tl, {
                            progress: highestProgress,
                            duration: 0.3,
                            ease: "power1.out",
                            overwrite: true,
                        });
                    }
                },
            });

            return () => {
                desktopTrigger.kill();
                tl.kill();
            };
        });

mm.add("(max-width: 1199px)", () => {
    const tree = ".tree-section-desktop .tree-reveal";
    const points = ".tree-section-desktop .why-rare-point";

    gsap.set(tree, {
        clipPath: "inset(100% 0 0 0)",
    });

    gsap.set(points, {
        y: 200,
        autoAlpha: 0,
    });

    const treeAnimation = gsap.to(tree, {
        clipPath: "inset(0% 0 0 0)",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".why-rare-desktop-tree-image",
            start: "top 80%",
            toggleActions: "play none none none",
        },
    });

    const pointsAnimation = gsap.to(points, {
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".tree-section-desktop .abt-why-rare-desktop-pointers",
            start: "top 80%",
            toggleActions: "play none none none",
        },
    });

    return () => {
        treeAnimation.scrollTrigger?.kill();
        pointsAnimation.scrollTrigger?.kill();
        treeAnimation.kill();
        pointsAnimation.kill();
    };
});

        return () => mm.revert();


    }, []);

    return (
        <>
            <section className="section section-bg-blue tree-section-desktop">
                <div className="tree-section-inner">
                    <div className="container">
                        <div className="why-rare-title-desktop">
                            <h2 className="text-sb text-white">Why You Would Love To Work At RarePixels</h2>

                            <p className="text-rg text-18 text-light-grey">A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one.</p>
                        </div>

                        <div className="why-rare-desktop-content">
                            <div className="abt-why-rare-desktop-pointers">
                                <div className="why-rare-point why-rare-point-1">
                                    <div className="card-reveal"></div>

                                    <GlassEffect className="site-radius-20">
                                        <div className="why-rare-pointers why-rare-pointers-1">
                                            <span className="why-rare-pixel"></span>

                                            <div className="why-rare-desc why-rare-desc-1">
                                                <h3 className="text-sb h6">Creative, Chill Environment</h3>

                                                <p className="text-rg text-18 text-white">We take the work seriously not ourselves. Our studio is built on creative freedom, good energy, and a culture where ideas flow without ego getting in the way.</p>
                                            </div>
                                        </div>
                                    </GlassEffect>
                                </div>

                                <div className="why-rare-point why-rare-point-2">
                                    <div className="card-reveal"></div>

                                    <GlassEffect className="site-radius-20">
                                        <div className="why-rare-pointers why-rare-pointers-2">
                                            <span className="why-rare-pixel"></span>

                                            <div className="why-rare-desc why-rare-desc-2">
                                                <h3 className="text-sb h6">Trust Over Timelines</h3>

                                                <p className="text-rg text-18 text-white">We hire people we believe in, then let them do their thing. No micromanagement, no hand-holding just clear goals and the autonomy to reach them your way.</p>
                                            </div>
                                        </div>
                                    </GlassEffect>
                                </div>

                                <div className="why-rare-point why-rare-point-3">
                                    <div className="card-reveal"></div>

                                    <GlassEffect className="site-radius-20">
                                        <div className="why-rare-pointers why-rare-pointers-3">
                                            <span className="why-rare-pixel"></span>

                                            <div className="why-rare-desc why-rare-desc-3">
                                                <h3 className="text-sb h6">Ideas Over Hierarchy</h3>

                                                <p className="text-rg text-18 text-white">The best idea wins, regardless of who it comes from. Whether you&apos;re a junior designer or a senior strategist, your voice has weight here.</p>
                                            </div>
                                        </div>
                                    </GlassEffect>
                                </div>

                                <div className="why-rare-point why-rare-point-4 ">
                                    <div className="card-reveal"></div>

                                    <GlassEffect className="site-radius-20">
                                        <div className="why-rare-pointers why-rare-pointers-4 glass">
                                            <span className="why-rare-pixel"></span>

                                            <div className="why-rare-desc why-rare-desc-4">
                                                <h3 className="text-sb h6">People Before Processes</h3>

                                                <p className="text-rg text-18 text-white">Systems exist to support people, not the other way around. We adapt, we listen, and we make sure the humans on our team always come first.</p>
                                            </div>
                                        </div>
                                    </GlassEffect>
                                </div>
                            </div>

                            <div className="why-rare-desktop-tree-image">
                                <div className="tree-reveal-desktop">
                                    <svg className="tree-svg" width="525" height="500" viewBox="0 0 525 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_3765_6680)">
                                            <path d="M257.248 433.207C253.739 455.71 246.098 477.04 234.528 496.654L234.531 496.651C250.5 477.5 253.313 472.767 256.446 463.149L257.159 460.953L262.475 435L267.844 460.953L268.561 463.149C271.695 472.763 282 489 290.478 496.654C278.911 477.043 271.271 455.713 267.755 433.207C266.338 424.112 265.618 414.848 265.612 405.667C265.602 390.182 267.605 374.708 271.57 359.677C276.44 341.229 284.163 323.773 294.52 307.788L294.587 307.683L295.039 307.089L295.122 306.997C297.341 304.525 299.775 302.214 302.357 300.126C312.221 292.166 324.093 287.466 336.692 286.538C338.227 286.423 339.791 286.366 341.329 286.366C352.39 286.366 363.256 289.318 372.757 294.905C381.773 300.206 400.26 314.02 400.26 314.02C394.403 303.94 386.028 295.525 375.871 289.55C365.384 283.385 353.441 280.128 341.336 280.128C339.664 280.128 337.963 280.188 336.269 280.315C335.186 280.392 334.071 280.503 332.858 280.652L313.979 284.367L326.058 271.208L328.297 269.18C328.609 268.897 328.921 268.614 329.23 268.332L329.428 268.157C339.046 260.031 349.565 252.89 360.693 246.932L360.734 246.909L361.021 246.77C375.097 240.239 390.13 237.872 405.617 236.928C425.576 235.711 457.5 243.465 457.5 243.465C443.277 236.047 427.41 231.703 411.407 230.867C409.474 230.766 407.512 230.715 405.579 230.715C391.413 230.715 377.559 233.349 364.403 238.545L348.473 244.837L355.368 232.072L356.209 230.124C358.005 225.961 359.568 221.636 360.855 217.263C366.6 197.776 367.005 177.221 362.062 157.601C362.062 157.601 363.492 194.43 354.884 215.518C347.495 233.619 338.794 251.158 324.335 264.353L324.195 264.477C323.265 265.278 322.319 266.11 321.31 267.016L321.192 267.121L320.909 267.378C313.246 274.281 306.103 281.889 299.673 289.989C298.513 291.451 297.341 292.979 296.188 294.524L287.555 309.994L285.169 293.888L284.806 291.829C277.959 252.979 284.704 214.139 299.934 177.59C320.622 127.942 386.336 80.8963 386.336 80.8963C351.912 97.8567 323.39 124.151 303.714 157.112L297.278 170.719L292.835 157.792L292.195 155.85C286.863 139.719 284.141 122.93 284.105 105.957C284.055 84.3952 291.332 40.0064 291.332 40.0064C282.484 60.7262 277.847 83.445 277.902 105.929C277.956 129.429 282.86 152.224 292.478 173.681L292.752 174.295L292.765 178.216L292.494 178.833C283.554 199.123 278.112 220.581 276.319 242.613C274.478 265.268 276.554 287.952 282.494 310.026L282.656 310.626L282.204 314.239L281.898 314.783C276.29 324.758 270.268 342.631 268.554 347.871L262.475 366.471L257.159 350.061L256.443 347.868C252 334.26 245.767 317.446 241.611 311.055L241.251 310.502L240.611 306.711L240.77 306.072C246.079 284.599 247.758 262.592 245.755 240.665C243.805 219.313 238.417 198.507 229.745 178.829L229.474 178.213L229.487 174.288L229.764 173.675C239.379 152.23 244.283 129.435 244.337 105.922C244.391 83.4291 239.754 60.7103 230.907 40C230.907 40 238.191 84.4079 238.137 105.951C238.095 122.927 235.375 139.713 230.047 155.844L225.394 169.938L219.576 158.863L218.528 157.109C198.852 124.151 170.33 97.8567 135.899 80.8931C135.899 80.8931 203.884 138.127 222.302 177.587C238.573 212.455 243.984 250.895 237.949 288.753L235.512 304.032L227.929 293.313L225.327 289.998C218.897 281.898 211.751 274.287 204.088 267.378L203.891 267.194L203.7 267.029C202.601 266.047 201.677 265.236 200.795 264.477L200.655 264.353C186.193 251.152 175.632 234.265 170.107 215.518C164.718 197.226 162.935 157.601 162.935 157.601C157.989 177.225 158.393 197.782 164.139 217.266C165.412 221.597 166.976 225.926 168.785 230.13L175.967 246.808L162.565 239.327L160.591 238.545C147.438 233.349 133.587 230.715 119.418 230.715C117.485 230.715 115.523 230.766 113.59 230.867C97.5833 231.703 81.7168 236.047 67.5 243.465C67.5 243.465 99.4273 234.551 119.38 236.928C134.785 238.765 149.899 240.239 163.982 246.77L164.024 246.789L164.307 246.932C175.419 252.881 185.938 260.018 195.572 268.154L195.782 268.341C196.059 268.599 196.34 268.853 196.623 269.11L214.439 287.323C214.439 287.323 199.082 280.481 189.473 280.319C187.798 280.29 186.107 280.131 184.435 280.131C172.33 280.131 160.387 283.392 149.899 289.554C139.746 295.525 131.367 303.94 125.507 314.023C125.507 314.023 147.32 286.617 184.441 286.366C185.98 286.357 187.543 286.423 189.078 286.538C201.677 287.466 213.55 292.166 223.417 300.13C224.987 301.401 226.493 302.742 227.894 304.115L228.009 304.226L228.627 304.966L228.716 305.1C239.965 321.803 248.283 340.165 253.433 359.674C257.398 374.683 259.404 390.166 259.392 405.683C259.392 414.852 258.669 424.112 257.248 433.207Z" fill="url(#paint0_linear_3765_6680)" fillOpacity="0.5" />
                                            <path d="M462.773 140.82H440.93V162.669H462.773V140.82Z" fill="#C6D9C6" />
                                            <path d="M512.284 104.41H494.811V121.888H512.284V104.41Z" fill="#C6D9C6" />
                                            <path d="M525.001 214.156H491.896V247.268H525.001V214.156Z" fill="#C6D9C6" />
                                            <path d="M409.588 123.344H383.725V149.207H409.588V123.344Z" fill="#ED0180" />
                                            <path d="M443 202H431V214H443V202Z" fill="#C6D9C6" />
                                            <path d="M447 311H428V330H447V311Z" fill="#2F3C6E" />
                                            <path d="M422.1 281.219H416.309V287.011H422.1V281.219Z" fill="#ED0180" />
                                            <path d="M316.436 88.4141H307.6V97.2525H316.436V88.4141Z" fill="#CDC9C4" />
                                            <path d="M136 128H121V143H136V128Z" fill="#ED0180" />
                                            <path d="M398.652 184.891H389.588V193.963H398.652V184.891Z" fill="#2F3C6E" />
                                            <path d="M100 279H76V303H100V279Z" fill="#2F3C6E" />
                                            <path d="M171.678 317.43H159.373V329.741H171.678V317.43Z" fill="#2F3C6E" />
                                            <path d="M217.397 88.4141H208.561V97.2525H217.397V88.4141Z" fill="#ED0180" />
                                            <path d="M180.574 60.4141H166.576V74.4153H180.574V60.4141Z" fill="#E8DB7D" />
                                            <path d="M359.869 60.4141H373.867V74.4153H359.869V60.4141Z" fill="#CDC9C4" />
                                            <path d="M142.999 26.5273H113.541V55.9919H142.999V26.5273Z" fill="#E8DB7D" />
                                            <path d="M397.445 26.5273H426.902V55.9919H397.445V26.5273Z" fill="#CDC9C4" />
                                            <path d="M242.443 0H224.764V17.6831H242.443V0Z" fill="#E8DB7D" />
                                            <path d="M298.001 0H315.68V17.6831H298.001V0Z" fill="#CDC9C4" />
                                            <path d="M504.589 114.543L454.267 152.123L509.862 229.689L507.029 231.725L449.436 151.372L502.507 111.75L504.589 114.543Z" fill="#C6D9C6" />
                                            <path d="M234.819 10.0878L173.85 69.5782L127.408 42.7667L129.135 39.7551L173.298 65.2509L232.394 7.59375L234.819 10.0878Z" fill="#E8DB7D" />
                                            <path d="M305.625 10.0878L366.594 69.5782L413.035 42.7667L411.308 39.7551L367.145 65.2509L308.05 7.59375L305.625 10.0878Z" fill="#CDC9C4" />
                                            <path d="M76.9623 165.18H102.926V191.092H76.9623V165.18Z" fill="#ED0180" />
                                            <path d="M18.1116 122H38.8809V142.728H18.1116V122Z" fill="#ED0180" />
                                            <path d="M2.99921 252.152H42.3457V291.422H2.99921V252.152Z" fill="#ED0180" />
                                            <path d="M27.26 134.018L87.0741 178.586L20.9928 270.577L24.361 272.989L92.8145 177.694L29.735 130.707L27.26 134.018Z" fill="#ED0180" />
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_3765_6680" x1="262.5" y1="356" x2="262.5" y2="507.5" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#2F3C6E" />
                                                <stop offset="1" stopColor="#040E36" />
                                            </linearGradient>
                                            <clipPath id="clip0_3765_6680">
                                                <rect id="treeReveal" x="0" y="500" width="525" height="0" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                <div className="tree-reveal">
                                    <Image src="/images/aboutpage/abt-why-rare/rare-tree.svg" alt="rare-tree" width={525} height={500}></Image>
                                </div>

                                {/* <Image src="/images/aboutpage/abt-why-rare/rare-tree.svg" alt="rare-tree" width={525} height={500}></Image> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}