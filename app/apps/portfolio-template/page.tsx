"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { ArrowLeft, Download, Eye, Code, Palette, Layout } from "lucide-react"

export default function PortfolioTemplate() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    title: "Full Stack Developer",
    bio: "Passionate developer with 5+ years of experience building web applications.",
    email: "john@example.com",
    github: "johndoe",
    linkedin: "johndoe",
  })

  const [selectedTheme, setSelectedTheme] = useState("dark")
  const [selectedLayout, setSelectedLayout] = useState("modern")

  const themes = [
    { id: "dark", name: "Dark Mode", bg: "bg-slate-900", text: "text-white" },
    { id: "light", name: "Light Mode", bg: "bg-white", text: "text-slate-900" },
    { id: "gradient", name: "Gradient", bg: "bg-gradient-to-br from-purple-600 to-blue-600", text: "text-white" },
  ]

  const layouts = [
    { id: "modern", name: "Modern", icon: Layout },
    { id: "minimal", name: "Minimal", icon: Code },
    { id: "creative", name: "Creative", icon: Palette },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="text-xl font-bold">Portfolio Template Builder</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Editor Panel */}
          <div className="space-y-6">
            <Card className="p-6 bg-slate-900 border-slate-800">
              <h2 className="text-2xl font-bold mb-6">Customize Your Portfolio</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-slate-800 border-slate-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Professional Title</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="bg-slate-800 border-slate-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Bio</label>
                  <Textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className="bg-slate-800 border-slate-700 min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-800 border-slate-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">GitHub</label>
                    <Input
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      className="bg-slate-800 border-slate-700"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-900 border-slate-800">
              <h3 className="text-xl font-bold mb-4">Theme</h3>
              <div className="grid grid-cols-3 gap-4">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setSelectedTheme(theme.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedTheme === theme.id ? "border-blue-500 scale-105" : "border-slate-700"
                    }`}
                  >
                    <div className={`w-full h-16 rounded ${theme.bg} mb-2`}></div>
                    <p className="text-sm">{theme.name}</p>
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-slate-900 border-slate-800">
              <h3 className="text-xl font-bold mb-4">Layout Style</h3>
              <div className="grid grid-cols-3 gap-4">
                {layouts.map((layout) => {
                  const Icon = layout.icon
                  return (
                    <button
                      key={layout.id}
                      onClick={() => setSelectedLayout(layout.id)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedLayout === layout.id ? "border-blue-500 scale-105" : "border-slate-700"
                      }`}
                    >
                      <Icon className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm">{layout.name}</p>
                    </button>
                  )
                })}
              </div>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="lg:sticky lg:top-24 h-fit">
            <Card className="p-6 bg-slate-900 border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Live Preview</h3>
                <Eye className="w-5 h-5 text-slate-400" />
              </div>

              <div
                className={`rounded-lg overflow-hidden border border-slate-700 ${
                  themes.find((t) => t.id === selectedTheme)?.bg
                }`}
              >
                <div className="p-8 min-h-[600px]">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 rounded-full bg-slate-700 mx-auto"></div>
                    <h1 className={`text-3xl font-bold ${themes.find((t) => t.id === selectedTheme)?.text}`}>
                      {formData.name}
                    </h1>
                    <p className={`text-xl ${themes.find((t) => t.id === selectedTheme)?.text} opacity-80`}>
                      {formData.title}
                    </p>
                    <p className={`max-w-md mx-auto ${themes.find((t) => t.id === selectedTheme)?.text} opacity-70`}>
                      {formData.bio}
                    </p>
                    <div className="flex gap-4 justify-center pt-4">
                      <Button variant="outline" size="sm">
                        Contact
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        View Projects
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
