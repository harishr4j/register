"use client"

import Link from "next/link"
import { siteData } from "@/lib/site-data"
import { Button } from "@/components/ui/button"
import { Constellation } from "@/components/constellation"
import { Code, Gavel, Link2, ArrowRight } from "lucide-react"
import { useMemo } from "react"

function Icon({ name }: { name?: "gavel" | "code" | "link" }) {
  if (name === "gavel") return <Gavel className="mr-2 h-4 w-4" />
  if (name === "code") return <Code className="mr-2 h-4 w-4" />
  return <Link2 className="mr-2 h-4 w-4" />
}

export function IntroHero() {
  const buttons = useMemo(() => siteData.heroButtons?.slice(0, 2) || [], [])

  const rolesLine =
    siteData.roles && siteData.roles.length === 2
      ? `${siteData.roles[0]} by day, ${siteData.roles[1]} by night`
      : siteData.role || siteData.tagline

  return (
    <section className="relative mx-auto flex min-h-[90svh] max-w-6xl flex-col items-center justify-center px-4 text-center overflow-hidden">
      <Constellation />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 animate-in fade-in-50 duration-1000">
        <div className="mb-4 animate-in slide-in-from-top-4 duration-800">
          <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-black/60 border border-white/20 rounded-full backdrop-blur-sm">
            DYNAMIC WEB DEVELOPER
          </span>
        </div>

        <h1 className="text-balance text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl animate-in slide-in-from-bottom-4 duration-1000 delay-200">
          {siteData.name}
        </h1>

        <div className="mt-6 animate-in slide-in-from-bottom-4 duration-1000 delay-400">
          <p className="inline-block rounded-full px-6 py-2 text-lg font-semibold text-black bg-white shadow-lg">
            {rolesLine}
          </p>
        </div>

        <p className="mt-6 max-w-3xl text-xl text-slate-300 leading-relaxed animate-in slide-in-from-bottom-4 duration-1000 delay-600">
          {siteData.tagline}
        </p>

        <div className="mt-10 animate-in slide-in-from-bottom-4 duration-1000 delay-800">
          <Button
            asChild
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25"
          >
            <Link href="#navigation">
              <span className="relative z-10 flex items-center gap-2">
                Show my work
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Link>
          </Button>
        </div>

        {buttons.length > 0 ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-in slide-in-from-bottom-4 duration-1000 delay-1000">
            {buttons.map((b, index) => (
              <Button
                key={b.label}
                asChild
                variant="outline"
                className="rounded-full border-slate-600 bg-slate-800/50 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-slate-700/50 hover:border-slate-500"
                style={{ animationDelay: `${1200 + index * 100}ms` }}
              >
                <Link href={b.href}>
                  <Icon name={b.icon} />
                  {b.label}
                </Link>
              </Button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block animate-in slide-in-from-right-4 duration-1000 delay-1400">
        <div className="space-y-4 text-right">
          <div className="text-sm text-slate-400 font-medium">My tech stack</div>
          {["Next.js", "TypeScript", "React", "Node.js"].map((tech, index) => (
            <div
              key={tech}
              className="bg-slate-800/60 backdrop-blur-sm border border-slate-600/40 rounded-lg px-4 py-2 text-white font-medium transition-all duration-300 hover:bg-slate-700/60 hover:border-slate-500/60"
              style={{ animationDelay: `${1600 + index * 100}ms` }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      <p className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-500 animate-in fade-in-50 duration-1000 delay-2000">
        © {new Date().getFullYear()} {siteData.name}. All rights reserved.
      </p>
    </section>
  )
}
