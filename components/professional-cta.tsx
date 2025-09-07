"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Instagram } from "lucide-react"
import { siteData } from "@/lib/site-data"

export function ProfessionalCTA() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Main CTA Text */}
        <div className="space-y-6 mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Ready to take{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-gradient-shift">
                your
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-white/20 to-gray-300/20 rounded-full animate-pulse"></div>
            </span>
            <br />
            digital presence to the <br />
            next level?
          </h2>

          <p
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            Reach out to me today and let's discuss how I can help you achieve your goals.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <Button
            size="lg"
            className="px-8 py-4 text-lg font-semibold bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-black transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 group"
            onClick={() => (window.location.href = `mailto:${siteData.email}`)}
          >
            Let's get in touch
            <svg
              className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>

        {/* Contact Details */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <a
            href={`mailto:${siteData.email}`}
            className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer hover:scale-105"
          >
            <Mail className="h-8 w-8 text-white mb-3 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-300 text-sm hover:text-white transition-colors duration-300">{siteData.email}</p>
          </a>

          <a
            href="https://instagram.com/dhe.mad.biker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer hover:scale-105"
          >
            <Instagram className="h-8 w-8 text-white mb-3 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold text-white mb-2">Instagram</h3>
            <p className="text-gray-300 text-sm hover:text-white transition-colors duration-300">@dhe.mad.biker</p>
          </a>

          <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group">
            <MapPin className="h-8 w-8 text-white mb-3 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-300 text-sm">{siteData.location || "India"}</p>
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 animate-fade-in-up"
          style={{ animationDelay: "800ms" }}
        >
          <p className="text-gray-400 mb-4 md:mb-0">Copyright © 2024 {siteData.name}</p>

          <div className="flex space-x-6">
            <a
              href={`mailto:${siteData.email}`}
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="h-5 w-5 text-white group-hover:text-black" />
            </a>
            <a
              href="https://instagram.com/dhe.mad.biker"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 group"
            >
              <Instagram className="h-5 w-5 text-white group-hover:text-black" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
