"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart as CustomRadarChart } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

gsap.registerPlugin(ScrollTrigger)

const chartData = [
  { month: "Tech & SaaS", desktop: 8 },
  { month: "FinTech", desktop: 6 },
  { month: "Healthcare", desktop: 8 },
  { month: "E-commerce", desktop: 10 },
  { month: "Real Estate", desktop: 7 },
  { month: "Education", desktop: 8 },
  { month: "AI Emerging", desktop: 9 },
  { month: "Food", desktop: 7 },
]

const chartConfig = {
  desktop: {
    label: "Solution",
    color: "#ED0180",
  },
} satisfies ChartConfig

export default function RadarChart() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      once: true,
      onEnter: () => setIsInView(true),
    })

    return () => {
      trigger.kill()
    }
  }, [])

  return (
    <Card className="impact-1">
      <CardContent className="pb-0 flex items-center justify-center">
        <div ref={containerRef} className="custom-pie-wrapper">
          <ChartContainer config={chartConfig} className="custom-radar-container">
            <CustomRadarChart data={chartData}>
              {/* <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <PolarAngleAxis dataKey="month" /> */}
              <PolarGrid />
              <Radar
                key={isInView ? "in-view" : "hidden"}
                dataKey="desktop"
                fill="var(--color-desktop)"
                fillOpacity={0.6}
                dot={{ r: 4, fillOpacity: 1, fill: "#Ed0180" }}
                isAnimationActive={isInView}
                animationDuration={2000}
                animationEasing="ease-out"
              />
            </CustomRadarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}