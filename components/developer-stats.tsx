"use client"

import { useEffect, useState } from "react"

interface StatItemProps {
  value: string
  label: string
  delay: number
}

function StatItem({ value, label, delay }: StatItemProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`text-center transition-all duration-700 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 animate-pulse-glow"></div>
        <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-600/40 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-slate-500/60 group-hover:bg-gradient-to-br group-hover:from-slate-700/80 group-hover:to-slate-800/80">
          <div className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift text-sm">
            {value}
          </div>
          <div className="text-slate-400 mt-2 text-sm md:text-base font-medium group-hover:text-slate-300 transition-colors duration-300">
            {label}
          </div>
        </div>
      </div>
    </div>
  )
}

export function DeveloperStats() {
  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl"></div>
      <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-twinkle"></div>
      <div
        className="absolute top-8 right-8 w-1 h-1 bg-blue-400 rounded-full animate-twinkle"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-purple-300 rounded-full animate-twinkle"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-4 right-4 w-1 h-1 bg-blue-300 rounded-full animate-twinkle"
        style={{ animationDelay: "0.5s" }}
      ></div>

      <div className="relative bg-gradient-to-r from-slate-800/30 to-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:border-slate-500/50">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          Journey as a Developer
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <StatItem value="2+" label="Years Experience" delay={200} />
          <StatItem value="100+" label="Projects Completed" delay={400} />
          <StatItem value="100%" label="Customer Rating" delay={600} />
          <StatItem value="100+" label="Happy Clients" delay={800} />
        </div>
      </div>
    </div>
  )
}
