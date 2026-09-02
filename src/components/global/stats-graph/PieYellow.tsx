import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Pie, PieChart } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig, } from "@/components/ui/chart"

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const chartData = [
  { browser: "Web / Digital", visitors: 8, fill: "var(--color-chrome)" },
  { browser: "UI / UX", visitors: 6, fill: "var(--color-safari)" },
  { browser: "Product", visitors: 5, fill: "var(--color-firefox)" },
  { browser: "Branding", visitors: 4, fill: "var(--color-edge)" },
  { browser: "Strategy", visitors: 4, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    // label: "Chrome",
    color: "#E8DB7D",
  },
  safari: {
    // label: "Safari",
    color: "#E8DB7D",
  },
  firefox: {
    // label: "Firefox",
    color: "#E8DB7D",
  },
  edge: {
    // label: "Edge",
    color: "#E8DB7D",
  },
  other: {
    // label: "Other",
    color: "#E8DB7D",
  },
} satisfies ChartConfig

export default function PieYellow() {
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
          <ChartContainer config={chartConfig} className="custom-pie-container">
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Pie
                key={isInView ? "in-view" : "hidden"}
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                /* Percentages allow pie radii to scale dynamically with container size */
                innerRadius="50%"
                outerRadius="90%"
                paddingAngle={2}
                cornerRadius={2}
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