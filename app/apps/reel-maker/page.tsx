"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Sparkles, Music, Type, Sticker, Download, Play } from "lucide-react"

export default function ReelMaker() {
  const [selectedTemplate, setSelectedTemplate] = useState(1)

  const templates = [
    { id: 1, name: "Trending Dance", category: "Music", thumbnail: "bg-gradient-to-br from-pink-500 to-purple-500" },
    { id: 2, name: "Product Showcase", category: "Business", thumbnail: "bg-gradient-to-br from-blue-500 to-cyan-500" },
    { id: 3, name: "Travel Vlog", category: "Lifestyle", thumbnail: "bg-gradient-to-br from-orange-500 to-red-500" },
    { id: 4, name: "Tutorial", category: "Education", thumbnail: "bg-gradient-to-br from-green-500 to-teal-500" },
    { id: 5, name: "Food Recipe", category: "Food", thumbnail: "bg-gradient-to-br from-yellow-500 to-orange-500" },
    { id: 6, name: "Fitness Routine", category: "Health", thumbnail: "bg-gradient-to-br from-red-500 to-pink-500" },
  ]

  const trendingSounds = [
    { id: 1, name: "Summer Vibes", artist: "DJ Cool", uses: "2.5M" },
    { id: 2, name: "Chill Beats", artist: "Lo-Fi Master", uses: "1.8M" },
    { id: 3, name: "Energetic Pop", artist: "Pop Star", uses: "3.2M" },
  ]

  const effects = [
    { name: "Glitch", icon: Sparkles },
    { name: "Zoom", icon: Sparkles },
    { name: "Blur", icon: Sparkles },
    { name: "Color Pop", icon: Sparkles },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="text-xl font-bold">Reel Maker Pro</h1>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
            <Download className="w-4 h-4 mr-2" />
            Export Reel
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Main Area */}
          <div className="space-y-6">
            {/* Templates */}
            <Card className="p-6 bg-slate-900 border-slate-800">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-pink-500" />
                Trending Templates
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`group relative overflow-hidden rounded-lg border-2 transition-all ${
                      selectedTemplate === template.id ? "border-pink-500 scale-105" : "border-slate-700"
                    }`}
                  >
                    <div className={`aspect-[9/16] ${template.thumbnail} flex items-center justify-center`}>
                      <Play className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-3 bg-slate-800">
                      <p className="font-semibold text-sm">{template.name}</p>
                      <p className="text-xs text-slate-400">{template.category}</p>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Preview */}
            <Card className="p-6 bg-slate-900 border-slate-800">
              <h2 className="text-2xl font-bold mb-4">Preview</h2>
              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  <div className="aspect-[9/16] bg-slate-800 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 mx-auto mb-4 text-slate-600" />
                      <p className="text-slate-500">Your reel preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Sounds */}
            <Card className="p-6 bg-slate-900 border-slate-800">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Music className="w-5 h-5 text-pink-500" />
                Trending Sounds
              </h3>
              <div className="space-y-3">
                {trendingSounds.map((sound) => (
                  <div
                    key={sound.id}
                    className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm">{sound.name}</span>
                      <Button size="sm" variant="ghost">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-slate-400">{sound.artist}</p>
                    <p className="text-xs text-pink-500 mt-1">{sound.uses} uses</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Effects */}
            <Card className="p-6 bg-slate-900 border-slate-800">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                Effects
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {effects.map((effect) => {
                  const Icon = effect.icon
                  return (
                    <Button key={effect.name} variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                      <Icon className="w-5 h-5" />
                      <span className="text-xs">{effect.name}</span>
                    </Button>
                  )
                })}
              </div>
            </Card>

            {/* Text & Stickers */}
            <Card className="p-6 bg-slate-900 border-slate-800">
              <h3 className="text-lg font-bold mb-4">Add Elements</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Type className="w-4 h-4 mr-2" />
                  Add Text
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Sticker className="w-4 h-4 mr-2" />
                  Add Sticker
                </Button>
              </div>
            </Card>

            {/* AI Suggestions */}
            <Card className="p-6 bg-gradient-to-br from-pink-900/20 to-purple-900/20 border-pink-500/30">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-500" />
                AI Suggestions
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                Based on trending content, we suggest adding upbeat music and quick transitions for maximum engagement!
              </p>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                Apply AI Edits
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
