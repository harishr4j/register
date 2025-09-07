"use client"

import { useState } from "react"
import { Section } from "@/components/section"
import { SimpleProjectCard } from "@/components/simple-project-card"
import { CustomerReviews } from "@/components/customer-reviews"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { siteData } from "@/lib/site-data"
import { Mail, Instagram, GraduationCap, Code2 } from "lucide-react"
import { DeveloperStats } from "@/components/developer-stats"
import { ProfessionalCTA } from "@/components/professional-cta"
import { AboutMeSection } from "@/components/about-me-section"

export default function HomePage() {
  const [activeView, setActiveView] = useState<"ca-student" | "developer" | null>(null)

  console.log("[v0] siteData.projects:", siteData.projects)
  console.log("[v0] siteData.projects.length:", siteData.projects.length)

  return (
    <main className="font-sans">
      {!activeView && (
        <div className="min-h-screen flex flex-col justify-center items-center bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-particle-float"></div>
            <div
              className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-twinkle"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-particle-float"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-twinkle"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-particle-float"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute top-16 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-twinkle"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute bottom-40 left-16 w-24 h-24 bg-green-400 rounded-full animate-particle-float blur-sm"
              style={{ animationDelay: "2.5s" }}
            ></div>
          </div>

          <div className="text-center space-y-8 z-10 px-4">
            <div className="space-y-2">
              <p className="text-white/60 text-sm uppercase tracking-wider animate-slide-in-left">Intro</p>
              <h1
                className="text-5xl md:text-7xl font-bold text-white animate-zoom-in hover:animate-neon-glow transition-all duration-300 cursor-default drop-shadow-2xl"
                style={{
                  animationDelay: "200ms",
                  textShadow: "0 0 20px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(0, 0, 0, 0.6)",
                }}
              >
                {"B.Harish Raj"}
              </h1>
              <p
                className="text-xl md:text-2xl text-white/80 animate-slide-in-right drop-shadow-lg"
                style={{
                  animationDelay: "400ms",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
                }}
              >
                CA Student by day, Developer by night
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <Button
                onClick={() => setActiveView("ca-student")}
                className="px-8 py-4 text-lg font-semibold bg-white text-black hover:bg-gray-200 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-white/25 group min-w-[160px] hover-glow-intense hover-magnetic"
              >
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 group-hover:animate-elastic-bounce" />
                  <span>CA </span>
                </div>
              </Button>

              <Button
                onClick={() => setActiveView("developer")}
                className="px-8 py-4 text-lg font-semibold bg-black text-white border-2 border-white hover:bg-white hover:text-black rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-white/25 group min-w-[160px] hover-glow-intense hover-magnetic"
              >
                <div className="flex items-center gap-3">
                  <Code2 className="h-5 w-5 group-hover:animate-spin-slow" />
                  <span>Developer</span>
                </div>
              </Button>
            </div>
          </div>

          <div
            className="absolute bottom-8 text-center text-white/60 text-sm animate-flip-in"
            style={{ animationDelay: "800ms" }}
          >
            © 2025 B.Harish Raj. All rights reserved.
          </div>
        </div>
      )}

      {activeView && (
        <>
          <SiteHeader />
          <Section id="navigation" title="">
            <div className="flex justify-center mb-8">
              <Button
                onClick={() => setActiveView(null)}
                variant="outline"
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg border-white text-white hover:bg-white hover:text-black hover-magnetic animate-slide-in-left"
              >
                ← Back to Main
              </Button>
            </div>
          </Section>
        </>
      )}

      {activeView === "ca-student" && (
        <div className="animate-slide-in-left">
          <AboutMeSection />

          <Section id="skills" title="My Skills">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {siteData.caSkills.map((skill, index) => (
                <div
                  key={skill}
                  className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-600/40 rounded-lg p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-slate-500/60 group hover-glow-intense animate-zoom-in stagger-${(index % 8) + 1}`}
                >
                  <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 group-hover:animate-pulse-text">
                    {skill}
                  </h3>
                </div>
              ))}
            </div>
          </Section>
        </div>
      )}

      {activeView === "developer" && (
        <div className="animate-slide-in-right">
          <div className="min-h-screen flex flex-col justify-center items-center bg-black relative overflow-hidden">
            {/* Background particles */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-particle-float"></div>
              <div
                className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-twinkle"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-particle-float"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-twinkle"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            <div className="text-center space-y-8 z-10 px-4 max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide animate-fade-in-up">
                DYNAMIC WEB DEVELOPER
              </h1>

              <p
                className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                Hi! I'm B.Harish Raj, a Next.js Developer based in India.
              </p>

              <Button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 text-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded-lg transition-all duration-300 hover:scale-105 group animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                <span className="flex items-center gap-2">
                  Show my work
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Button>
            </div>
          </div>

          <Section id="developer-stats" title="">
            <DeveloperStats />
          </Section>

          <Section id="projects" title="Highlights of My Recent Projects">
            <p className="text-slate-400 text-center mb-8 text-lg animate-fade-in-up">
              A showcase of my recent work and contributions
            </p>
            {siteData.projects.length === 0 ? (
              <p className="text-slate-500">Projects coming soon.</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {siteData.projects.map((project, index) => (
                  <div
                    key={project.title}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <SimpleProjectCard
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      image={project.image}
                      link={project.link}
                      repo={project.repo}
                    />
                  </div>
                ))}
              </div>
            )}
          </Section>

          <ProfessionalCTA />
        </div>
      )}

      {!activeView && (
        <>
          <div className="animate-flip-in">
            <Section id="reviews" title="What People Say">
              <CustomerReviews reviews={siteData.reviews} />
            </Section>
          </div>

          <Section id="contact" title="Contact">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:border-slate-500/50 hover-glow-intense animate-fade-in-up">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 transition-all duration-300 hover:bg-slate-700/50 hover-magnetic animate-slide-in-left stagger-1">
                  <Mail className="h-5 w-5 text-blue-400 animate-bounce-subtle" aria-hidden="true" />
                  <span className="text-slate-300">
                    Reach me at{" "}
                    <span className="font-medium text-white hover:animate-pulse-text">{siteData.email}</span>
                  </span>
                </div>
                {siteData.instagramHandle ? (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 transition-all duration-300 hover:bg-slate-700/50 hover-magnetic animate-slide-in-right stagger-2">
                    <Instagram className="h-5 w-5 text-pink-400 animate-wave" aria-hidden="true" />
                    <span className="text-slate-300">
                      Instagram:{" "}
                      <span className="font-medium text-white hover:animate-pulse-text">
                        @{siteData.instagramHandle}
                      </span>
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          </Section>
        </>
      )}

      <Footer />
    </main>
  )
}
