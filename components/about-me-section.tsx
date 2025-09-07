"use client"

import { useRef, useEffect, useState } from "react"
import { Code2, TrendingUp, Palette } from "lucide-react"

export function AboutMeSection() {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "💻 Technical",
      icon: <Code2 className="h-6 w-6" />,
      description:
        "Proficient in modern web technologies including React, Next.js, TypeScript, JavaScript, Node.js, and Python, with hands-on experience in building scalable applications. Skilled in working with databases like MongoDB and PostgreSQL, designing responsive UIs using Tailwind CSS, and managing projects with Git and version control.",
      skills: [
        "React & Next.js",
        "TypeScript & JavaScript",
        "Node.js & Python",
        "MongoDB & PostgreSQL",
        "Tailwind CSS",
        "Git & Version Control",
      ],
    },
    {
      title: "📈 Financial & Trading",
      icon: <TrendingUp className="h-6 w-6" />,
      description:
        "Strong foundation in financial analysis, market research, and trading strategies. Experienced in portfolio management, technical analysis, and fundamental analysis, with a focus on risk management and making data-driven decisions in financial markets.",
      skills: [
        "Financial Analysis",
        "Market Research",
        "Trading Strategies",
        "Portfolio Management",
        "Technical Analysis",
        "Risk Management",
      ],
    },
    {
      title: "🎨 Creative & Content",
      icon: <Palette className="h-6 w-6" />,
      description:
        "Creative expertise in video editing, photo editing, and content creation for digital platforms. Skilled in producing engaging gaming content and social media strategies, with professional experience using Adobe Premiere Pro and Photoshop to deliver high-quality visuals.",
      skills: [
        "Video Editing",
        "Photo Editing",
        "Content Creation",
        "Gaming Content",
        "Adobe Premiere Pro",
        "Adobe Photoshop",
      ],
    },
  ]

  return (
    <section ref={ref} className="relative min-h-screen bg-black py-20 overflow-hidden">
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-2 h-2 bg-white rounded-full mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left Column - Multi-Talented Professional */}
          <div
            className={`space-y-6 transition-all duration-800 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Multi-Talented Professional</h3>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                I'm a CA student with a passion for technology and creativity. My journey spans across multiple domains
                - from mastering financial concepts to building innovative web applications, analyzing market trends as
                a trader, and creating engaging gaming content.
              </p>

              <p>
                As a web developer, I specialize in modern technologies like React, Next.js, and TypeScript. My trading
                experience has sharpened my analytical skills and risk management abilities. Through content creation
                and editing, I've developed a keen eye for visual storytelling and audience engagement.
              </p>

              <p>
                This unique combination of financial knowledge, technical expertise, market understanding, and creative
                skills allows me to approach projects from multiple perspectives and deliver comprehensive solutions.
              </p>
            </div>
          </div>

          {/* Right Column - Project Experience */}
          <div
            className={`space-y-6 transition-all duration-800 delay-400 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Project Experience & Collaboration</h3>

            <div className="text-gray-300 leading-relaxed">
              <p>
                I have worked on multiple projects and also assisted others in building their projects, receiving highly
                positive feedback for my contributions.
              </p>
            </div>

            {/* Additional visual elements */}
            <div className="mt-12 space-y-4">
              <div
                className={`flex items-center space-x-4 transition-all duration-600 delay-600 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-gray-400">Collaborative approach</span>
              </div>

              <div
                className={`flex items-center space-x-4 transition-all duration-600 delay-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-gray-400">Positive client feedback</span>
              </div>

              <div
                className={`flex items-center space-x-4 transition-all duration-600 delay-800 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-gray-400">Multi-domain expertise</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mb-16 transition-all duration-800 delay-600 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Areas of Expertise🚀</h3>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-600/40 rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-slate-500/60 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${800 + categoryIndex * 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-400">{category.icon}</div>
                  <h4 className="text-xl font-bold text-white">{category.title}</h4>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">{category.description}</p>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`flex items-center gap-2 transition-all duration-400 ${
                        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                      }`}
                      style={{ transitionDelay: `${1000 + categoryIndex * 200 + skillIndex * 100}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
