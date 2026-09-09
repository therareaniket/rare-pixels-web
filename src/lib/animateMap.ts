import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const animateMap = (
  mapContainer: HTMLDivElement | null,
  triggerElement: HTMLElement | string
) => {
  if (!mapContainer) return;

		const countries = gsap.utils.toArray<SVGPathElement>( mapContainer.querySelectorAll(".map-country-fill"));
		countries.forEach((country) => { country.setAttribute("fill", "transparent"); });

		gsap.set(countries, { opacity: 0, scale: 0.4, transformOrigin: "50% 50%",});

  		ScrollTrigger.create({ trigger: triggerElement, start: "top 80%", once: true,

		onEnter: () => {
			gsap.delayedCall(1, () => {
				const tl = gsap.timeline();

				countries.forEach((country) => {
				const fillColor = country.dataset.fill;

					tl.to(country, { opacity: 1, scale: 1, duration: 0.05, ease: "back.out(2.2)",
						onStart: () => {
							if (fillColor) {
								country.setAttribute("fill", fillColor);
								country.setAttribute("stroke", "transparent");
								country.setAttribute("stroke-width", "0.083871");
							}
						},
					});
				});
			});
		},
	});
};



  		