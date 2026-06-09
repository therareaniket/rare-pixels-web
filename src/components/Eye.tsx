"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import "../assets/custom.css"

export default function Eye() {
  const containerRef = useRef<HTMLDivElement>(null)
  const pupilRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current
      const pupil = pupilRef.current
      if (!container || !pupil) return

      const rect = container.getBoundingClientRect()

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      let deltaX = e.clientX - centerX
      let deltaY = e.clientY - centerY

      // ✅ Limit movement to 20px radius
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      const maxRadius = 20;

      if (distance > maxRadius) {
        const angle = Math.atan2(deltaY, deltaX)
        deltaX = Math.cos(angle) * maxRadius
        deltaY = Math.sin(angle) * maxRadius
      }

      pupil.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px)) scale(1.15)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="eye-container" ref={containerRef}>
        <Image src="/images/eye.png" alt="eye-for-element" width={1000} height={530} />

    
        <div className="extra-black-drop" ref={pupilRef}>
            <Image src="/images/fullPupil.png" alt="eye-for-element" width={322} height={322}  />
        </div>
    </div>
  )
}