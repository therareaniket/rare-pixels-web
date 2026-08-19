"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin( ScrollTrigger, SplitText );

export default function AnimatedCopy({ children, colorInitial="#dddddd", colorAccent="#ED0180", colorFinal="#000000", animateOn="scroll", delay=0, duration=2 }) {
    const containerRef = useRef(null);
    const splitRefs = useRef([]);
    const lastScrollProgress = useRef(0);
    const colorTransitionTimers = useRef(new Map());
    const completedChars = useRef(new Set());

    useGSAP( () => {
        if (!containerRef.current) return;
            splitRefs.current = [];
            lastScrollProgress.current = 0;
            colorTransitionTimers.current.clear();
            completedChars.current.clear();

            let elements = [];
            if (containerRef.current.hasAttribute("data-copy-wrapper")) {
                elements = Array.from(containerRef.current.children);
            } else {
                elements = [containerRef.current];
            }

            elements.forEach((element) => {
                const wordSplit = SplitText.create(element, {
                    type: "words",
                    wordsClass: "word",
                });

                const charSplit = SplitText.create(wordSplit.words, {
                    type: "chars",
                    charsClass: "char",
                });

                splitRefs.current.push({wordSplit, charSplit});
            });


            const allChars = splitRefs.current.flatMap(({charSplit}) => charSplit.chars );
            gsap.set ( allChars, { color: colorInitial });

            // Hero-style sections (or anything above the fold) have no scroll
            // distance to trigger against, so play the wave once on mount instead.
            if (animateOn === "load") {
                const totalChars = allChars.length;
                const charFlashDuration = 0.1;   // gray -> pink
                const charSettleDuration = 0.35; // pink -> black

                // The last character's own animation must still fit inside
                // `duration`, so only the time before it starts is up for grabs
                // to spread across every character.
                const availableSpread = Math.max(duration - (charFlashDuration + charSettleDuration), 0);
                const staggerAmount = totalChars > 1 ? availableSpread / (totalChars - 1) : 0;

                allChars.forEach((char, index) => {
                    gsap.timeline({ delay: delay + index * staggerAmount })
                        .to(char, {
                            color: colorAccent,
                            duration: charFlashDuration,
                            ease: "none",
                        })
                        .to(char, {
                            color: colorFinal,
                            duration: charSettleDuration,
                            ease: "none",
                        });
                });

                return;
            }


            const scheduleFinalTransition = (char, index) => {
                if (colorTransitionTimers.current.has(index)) {
                    clearTimeout(colorTransitionTimers.current.get(index));
                }
                
                const timer = setTimeout(() => {
                    if (!completedChars.current.has(index)) {
                        gsap.to (char, {
                            duration: 1,
                            ease: "none",
                            color: colorFinal,
                            onComplete: () => {
                                completedChars.current.add(index);
                            },
                        });
                    }
                    colorTransitionTimers.current.delete(index);
                }, 100);

                colorTransitionTimers.current.set(index, timer);
            };


            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top 90%",
                end: "top 60%",
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const totalChars = allChars.length;
                    const isScrollingDown = progress >= lastScrollProgress.current;
                    const currentCharIndex = Math.floor(progress * totalChars);

                    allChars.forEach((char, index) => {
                        if (!isScrollingDown && index >= currentCharIndex) {
                            if (colorTransitionTimers.current.has(index)) {
                                clearTimeout(colorTransitionTimers.current.get(index));
                                colorTransitionTimers.current.delete(index);
                            }
                            completedChars.current.delete(index);
                            gsap.set(char, { color: colorInitial });
                            return; 
                        }

                        if (completedChars.current.has(index)) { return; }

                        if (index <= currentCharIndex) {
                            gsap.set(char, { color: colorAccent });
                            if (!colorTransitionTimers.current.has(index)) {
                                scheduleFinalTransition(char, index);
                            }
                        }
                    });

                    lastScrollProgress.current = progress;
                },
            });


    },  {
        scope: containerRef, dependencies: [colorInitial, colorAccent, colorFinal, animateOn, delay, duration]
    });

    if (React.Children.count(children) === 1) {
        return React.cloneElement(children, { ref: containerRef });
    }
    

    return  <div ref={containerRef} data-copy-wrapper="true"> 
                {children}
            </div>;
}