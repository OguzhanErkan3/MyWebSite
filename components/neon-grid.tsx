"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "@/components/theme-provider"

export function NeonGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Grid properties
    const gridSize = 50
    const lineWidth = 0.5
    const primaryColor = "#ff5a51"
    const secondaryColor = "#ffe11f"

    // Animation properties
    let time = 0
    const speed = 0.0005

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)

        const alpha =
          theme === "dark" ? 0.05 + Math.sin(time + y * 0.01) * 0.05 : 0.02 + Math.sin(time + y * 0.01) * 0.02
        ctx.strokeStyle = `rgba(255, 90, 81, ${alpha})`
        ctx.lineWidth = lineWidth
        ctx.stroke()
      }

      // Draw vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)

        const alpha =
          theme === "dark" ? 0.05 + Math.sin(time + x * 0.01) * 0.05 : 0.02 + Math.sin(time + x * 0.01) * 0.02
        ctx.strokeStyle = `rgba(255, 225, 31, ${alpha})`
        ctx.lineWidth = lineWidth
        ctx.stroke()
      }

      // Animate glow points
      const numPoints = 3
      for (let i = 0; i < numPoints; i++) {
        const x = canvas.width * (0.2 + 0.6 * Math.sin(time * 0.5 + (i * Math.PI * 2) / numPoints))
        const y = canvas.height * (0.2 + 0.6 * Math.cos(time * 0.7 + (i * Math.PI * 2) / numPoints))

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 300)
        const alpha = theme === "dark" ? 0.3 : 0.1
        gradient.addColorStop(0, i % 2 === 0 ? `rgba(255, 90, 81, ${alpha})` : `rgba(255, 225, 31, ${alpha})`)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      time += speed
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      width={1920}
      height={1080}
      className={`fixed inset-0 -z-10 ${theme === "dark" ? "opacity-70" : "opacity-30"}`}
    />
  )
}
