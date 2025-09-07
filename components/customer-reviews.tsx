"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import type { CustomerReview } from "@/lib/site-data"

type Props = {
  reviews: CustomerReview[]
}

export function CustomerReviews({ reviews }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 4000) // Move every 4 seconds

    return () => clearInterval(interval)
  }, [reviews.length])

  const translateX = -(currentIndex * 100)

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>

      <div
        ref={containerRef}
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {reviews.map((review, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <Card className="group relative overflow-hidden bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-600/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 hover:border-slate-500/60 animate-float mx-auto max-w-2xl">
              <CardContent className="p-8 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-slate-600/50 group-hover:text-slate-500/70 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" />

                <div className="flex items-start gap-6">
                  {review.avatar && (
                    <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-slate-600/50 group-hover:ring-slate-500/70 transition-all duration-500 animate-pulse-glow">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={`${review.name} avatar`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                      />
                    </div>
                  )}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <h4 className="font-bold text-white text-lg group-hover:text-blue-300 transition-all duration-500 transform group-hover:translate-x-1">
                        {review.name}
                      </h4>
                      <div className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400 transition-all duration-500 hover:scale-125 animate-twinkle"
                            style={{
                              animationDelay: `${i * 200 + index * 100}ms`,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-blue-300 font-medium bg-blue-500/10 px-3 py-1 rounded-full inline-block transition-all duration-500 group-hover:bg-blue-500/20 group-hover:scale-105 animate-bounce-subtle">
                      {review.role}
                    </p>

                    <blockquote className="text-slate-300 leading-relaxed italic group-hover:text-slate-200 transition-all duration-700 transform group-hover:translate-x-2">
                      "{review.content}"
                    </blockquote>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 transition-all duration-700 group-hover:opacity-100 pointer-events-none"></div>
                <div className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none animate-border-glow"></div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-blue-500 scale-125 shadow-lg shadow-blue-500/50"
                : "bg-slate-600 hover:bg-slate-500"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
