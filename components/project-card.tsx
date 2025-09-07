"use client"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

type Props = {
  title: string
  description: string
  tags?: string[]
  image?: string
  link?: string
  repo?: string
}

export function ProjectCard({ title, description, tags, image, link, repo }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getPlaceholderImage = () => {
    const projectType = tags?.[0]?.toLowerCase() || "project"
    const width = 600
    const height = 400
    return `/placeholder.svg?height=${height}&width=${width}&query=${encodeURIComponent(`${projectType} ${title} interface dashboard`)}`
  }

  return (
    <Card
      ref={cardRef}
      className={`group relative overflow-hidden bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-600/40 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 hover:border-slate-500/60 animate-float ${
        isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || getPlaceholderImage()}
          alt={`${title} project screenshot`}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 transition-all duration-500 group-hover:opacity-100 animate-pulse-glow"></div>

        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-twinkle opacity-0 group-hover:opacity-100"></div>
        <div
          className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-twinkle opacity-0 group-hover:opacity-100"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-twinkle opacity-0 group-hover:opacity-100"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-4 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-twinkle opacity-0 group-hover:opacity-100"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <CardHeader className="relative">
        <CardTitle className="text-lg font-bold text-white group-hover:text-blue-300 transition-all duration-500 group-hover:translate-x-1 animate-pulse-text">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-200 transition-all duration-500 group-hover:translate-x-1">
          {description}
        </p>

        {tags && tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((t, index) => (
              <Badge
                key={t}
                variant="secondary"
                className="bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/40 hover:border-blue-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 animate-bounce-subtle cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease ${index * 100}ms`,
                }}
              >
                {t}
              </Badge>
            ))}
          </div>
        ) : null}

        {link && (
          <Link
            href={link}
            target="_blank"
            className="text-blue-300 hover:text-blue-500 transition-colors duration-300"
          >
            Visit Project
          </Link>
        )}

        {repo && (
          <Link
            href={repo}
            target="_blank"
            className="text-blue-300 hover:text-blue-500 transition-colors duration-300"
          >
            View Repository
          </Link>
        )}
      </CardContent>

      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 transition-all duration-700 group-hover:opacity-100 pointer-events-none animate-gradient-shift"></div>
      <div className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none animate-border-glow"></div>

      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-700 animate-spin-slow"></div>
    </Card>
  )
}
