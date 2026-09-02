import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Pie, PieChart } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig, } from "@/components/ui/chart"

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const chartData = [
  { browser: "Web / Digital", visitors: 100, fill: "var(--color-chrome)" },
  { browser: "UI / UX", visitors: 100, fill: "var(--color-safari)" },
  { browser: "Product", visitors: 95, fill: "var(--color-firefox)" },
  { browser: "Branding", visitors: 100, fill: "var(--color-edge)" },
  { browser: "Strategy", visitors: 100, fill: "var(--color-other)" },
  { browser: "Strategy", visitors: 100, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    // label: "Chrome",
    color: "#CDC9C4",
  },
  safari: {
      // label: "Safari",
      color: "#CDC9C4",
},
firefox: {
    // label: "Firefox",
    color: "rgba(205, 201, 196, 0.5)",
  },
  edge: {
    // label: "Edge",
    color: "#CDC9C4",
  },
  other: {
    // label: "Other",
    color: "#CDC9C4",
  },
} satisfies ChartConfig



export default function PieGray() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const trigger = ScrollTrigger.create({
        trigger: element,
        start: "top 80%", // Triggers when the top of the chart hits 80% down the viewport
        once: true, // Only trigger the animation once
        onEnter: () => setIsInView(true),
    })

    return () => {
      trigger.kill() // Cleanup on unmount
    }
  }, [])

  return (
    <Card className="impact-1 flex flex-col">
      <CardContent className="flex-1 pb-0 flex items-center justify-center">
        <div ref={containerRef} className="custom-pie-wrapper">
          <ChartContainer config={chartConfig}  className="custom-pie-container">
            <PieChart>
              {/* <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} /> */}
              <Pie
                /* Force re-render key when in view to ensure Recharts triggers its entry animation cleanly */
                key={isInView ? "in-view" : "hidden"}
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius="50%"
                paddingAngle={3}
                isAnimationActive={isInView}
                animationDuration={2000}
                animationEasing="ease-out"
              />
            </PieChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}