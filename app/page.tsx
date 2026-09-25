"use client"

import { useEffect, useState } from "react"
import { ArrowDownRight, ArrowUpRight, Command, Mail, Github, Linkedin, Instagram } from "lucide-react"
import { siteData } from "@/lib/site-data"

const toolbox = ["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "Trading"]

export default function HomePage() {
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("top")
  const [cursor, setCursor] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const loaderTimer = window.setTimeout(() => setIsLoading(false), 1400)
    const sections = ["top", "about", "work", "contact"]
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: "-35% 0px -55%" },
    )
    sections.forEach((id) => { const section = document.getElementById(id); if (section) observer.observe(section) })
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setPaletteOpen(true) }
      if (event.key === "Escape") setPaletteOpen(false)
    }
    const handlePointerMove = (event: PointerEvent) => setCursor({ x: event.clientX, y: event.clientY })
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("pointermove", handlePointerMove)
    return () => { window.clearTimeout(loaderTimer); observer.disconnect(); window.removeEventListener("keydown", handleKeyDown); window.removeEventListener("pointermove", handlePointerMove) }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <div className={`site-loader ${isLoading ? "is-visible" : "is-hidden"}`} aria-hidden={!isLoading}>
        <div className="loader-topline"><span>B. HARISH RAJ</span><span>PORTFOLIO / 2026</span></div>
        <div className="loader-center"><span className="loader-count">{isLoading ? "00" : "100"}</span><span className="loader-percent">%</span></div>
        <div className="loader-bar"><span /></div>
        <p>INITIALISING EXPERIENCE</p>
      </div>
      <main className="portfolio-shell">
      <span className="cursor-orb" style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }} aria-hidden="true" />
      <a className="skip-link" href="#content">Skip to content</a>

      <header className="site-nav">
        <a href="#top" className="brand-mark">B. HARISH RAJ</a>
        <nav aria-label="Main navigation" className="nav-links">
          {[["ABOUT", "about"], ["WORK", "work"], ["CONTACT", "contact"]].map(([label, id]) => (
            <button className={activeSection === id ? "is-active" : ""} onClick={() => scrollTo(id)} key={id}>{label}</button>
          ))}
        </nav>
        <button className="command-button" onClick={() => setPaletteOpen(true)} aria-label="Open command palette">
          <Command size={13} /> K
        </button>
      </header>

      <section id="top" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-meta"><span>// FINANCE × CODE</span><span>INDIA, 2026</span></div>
        <div className="hero-title-wrap">
          <p className="eyebrow"><i /> INITIALISING</p>
          <h1 id="hero-title"><span>HARISH</span><strong>RAJ</strong></h1>
          <span className="drag-label">[ BUILDING IN PUBLIC ]</span>
        </div>
        <div className="hero-bottom">
          <p>CA student &amp; developer, building at the intersection of finance, technology and creativity.<br />Based in India. Curious by default.</p>
          <button className="lime-link" onClick={() => scrollTo("about")}>✦ Explore <ArrowDownRight size={17} /></button>
        </div>
        <div className="hero-number">01<span>/04</span></div>
      </section>

      <div id="content">
        <section id="about" className="content-section about-section reveal" aria-labelledby="about-title">
          <div className="section-kicker">01 / ABOUT</div>
          <div className="section-main">
            <h2 id="about-title">A hybrid mind<br /><em>with range.</em></h2>
            <div className="section-copy">
              <p className="lead">I move between balance sheets and browser tabs, turning ideas into useful things.</p>
              <p>{siteData.bio.split("\n\n")[0]}</p>
              <button className="text-link" onClick={() => scrollTo("contact")}>MORE ABOUT ME <ArrowUpRight size={15} /></button>
            </div>
          </div>
        </section>

        <section className="toolbox-section reveal" aria-labelledby="toolbox-title">
          <div className="section-kicker">02 / TOOLBOX</div>
          <div className="toolbox-inner">
            <h2 id="toolbox-title">The daily<br /><em>stack.</em></h2>
            <div className="toolbox-grid">
              {toolbox.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}
            </div>
          </div>
        </section>

        <section id="work" className="content-section work-section reveal" aria-labelledby="work-title">
          <div className="section-kicker">03 / SELECTED WORK</div>
          <div className="section-main work-heading">
            <h2 id="work-title">Things I’ve<br /><em>shipped.</em></h2>
            <p>Selected projects from the lab.<br />More experiments in progress.</p>
          </div>
          <div className="project-list">
            {siteData.projects.slice(0, 5).map((project, index) => (
              <a className="project-row" href={project.link || project.repo || "#"} target="_blank" rel="noreferrer" key={project.title}>
                <span className="project-index">0{index + 1}</span>
                <span className="project-name">{project.title}</span>
                <span className="project-tags">{project.tags?.slice(0, 2).join(" / ")}</span>
                <ArrowUpRight size={18} />
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section reveal" aria-labelledby="contact-title">
          <div className="section-kicker">04 / CONTACT</div>
          <h2 id="contact-title">Let&apos;s make<br /><em>something.</em></h2>
          <a className="contact-email" href={`mailto:${siteData.email}`}>{siteData.email} <ArrowUpRight size={22} /></a>
          <div className="contact-footer">
            <span>© 2026 — B. HARISH RAJ</span>
            <div className="social-links">
              <a href={`mailto:${siteData.email}`} aria-label="Email"><Mail size={15} /></a>
              <a href="https://github.com/harishraj" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} /></a>
              <a href="https://instagram.com/dhe.mad.biker" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={15} /></a>
            </div>
            <span>MADE WITH INTENT</span>
          </div>
        </section>
      </div>

      {paletteOpen && <div className="palette-backdrop" role="presentation" onClick={() => setPaletteOpen(false)}>
        <div className="palette" role="dialog" aria-modal="true" aria-labelledby="palette-title" onClick={(event) => event.stopPropagation()}>
          <p id="palette-title">QUICK NAVIGATION</p>
          {[["ABOUT", "about"], ["WORK", "work"], ["CONTACT", "contact"]].map(([label, id]) => <button key={id} onClick={() => { setPaletteOpen(false); scrollTo(id) }}>{label}<ArrowUpRight size={15} /></button>)}
        </div>
      </div>}
    </main>
    </>
  )
}
