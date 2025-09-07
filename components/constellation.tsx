"use client"

import { useEffect, useRef } from "react"

export function Constellation() {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    const DPR = Math.min(2, window.devicePixelRatio || 1)

    const points = Array.from({ length: 80 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0008,
      vy: (Math.random() - 0.5) * 0.0008,
      size: Math.random() * 2 + 0.5,
      pulse: Math.random() * Math.PI * 2,
    }))

    function resize() {
      const { clientWidth, clientHeight } = canvas
      canvas.width = Math.floor(clientWidth * DPR)
      canvas.height = Math.floor(clientHeight * DPR)
      ctx.scale(DPR, DPR)
    }

    function step() {
      const { width, height } = canvas
      const time = Date.now() * 0.001

      // Clear with subtle fade effect
      ctx.fillStyle = "rgba(15, 23, 42, 0.05)"
      ctx.fillRect(0, 0, width, height)

      ctx.fillStyle = "rgba(59, 130, 246, 0.08)"
      for (let i = 0; i < 100; i++) {
        const x = ((i * 97) % width) + ((i * 13) % 7)
        const y = ((i * 61) % height) + ((i * 17) % 7)
        const pulse = Math.sin(time + i * 0.1) * 0.5 + 0.5
        ctx.globalAlpha = 0.3 + pulse * 0.2
        ctx.beginPath()
        ctx.arc(x, y, 0.8, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1

      const screenW = canvas.clientWidth
      const screenH = canvas.clientHeight

      for (const p of points) {
        p.x += p.vx
        p.y += p.vy
        p.pulse += 0.02

        if (p.x < 0 || p.x > 1) p.vx *= -1
        if (p.y < 0 || p.y > 1) p.vy *= -1

        const px = p.x * screenW
        const py = p.y * screenH
        const pulseFactor = Math.sin(p.pulse) * 0.3 + 0.7

        // Glow effect
        ctx.shadowColor = "rgba(59, 130, 246, 0.6)"
        ctx.shadowBlur = 8 * pulseFactor
        ctx.fillStyle = `rgba(147, 197, 253, ${0.8 * pulseFactor})`

        ctx.beginPath()
        ctx.arc(px, py, p.size * pulseFactor, 0, Math.PI * 2)
        ctx.fill()

        // Reset shadow
        ctx.shadowBlur = 0
      }

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i]
          const b = points[j]
          const dx = (a.x - b.x) * screenW
          const dy = (a.y - b.y) * screenH
          const dist = Math.hypot(dx, dy)

          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.4
            const gradient = ctx.createLinearGradient(a.x * screenW, a.y * screenH, b.x * screenW, b.y * screenH)
            gradient.addColorStop(0, `rgba(59, 130, 246, ${alpha})`)
            gradient.addColorStop(0.5, `rgba(147, 51, 234, ${alpha * 0.8})`)
            gradient.addColorStop(1, `rgba(59, 130, 246, ${alpha})`)

            ctx.strokeStyle = gradient
            ctx.lineWidth = 1.5
            ctx.shadowColor = "rgba(59, 130, 246, 0.3)"
            ctx.shadowBlur = 3

            ctx.beginPath()
            ctx.moveTo(a.x * screenW, a.y * screenH)
            ctx.lineTo(b.x * screenW, b.y * screenH)
            ctx.stroke()

            ctx.shadowBlur = 0
          }
        }
      }

      raf = requestAnimationFrame(step)
    }

    const onResize = () => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      resize()
    }

    onResize()
    step()
    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <canvas ref={ref} className="h-full w-full" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>
    </div>
  )
}
