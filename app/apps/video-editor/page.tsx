"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Upload, Play, Pause, Scissors, Download, Volume2, Sparkles } from "lucide-react"

export default function VideoEditor() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration] = useState(120)

  const timeline = [
    { id: 1, type: "video", name: "Intro.mp4", start: 0, duration: 30, color: "bg-blue-600" },
    { id: 2, type: "video", name: "Main.mp4", start: 30, duration: 60, color: "bg-purple-600" },
    { id: 3, type: "audio", name: "Background.mp3", start: 0, duration: 90, color: "bg-green-600" },
  ]

  const effects = [
    { name: "Fade In", icon: Sparkles },
    { name: "Fade Out", icon: Sparkles },
    { name: "Zoom", icon: Sparkles },
    { name: "Blur", icon: Sparkles },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="text-xl font-bold">Web Video Editor</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-[1fr_300px] gap-6">
          {/* Main Editor */}
          <div className="space-y-6">
            {/* Preview */}
            <Card className="p-6 bg-slate-900 border-slate-800">
              <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 text-slate-600" />
                  <p className="text-slate-500">Video Preview</p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4">
                <Button onClick={() => setIsPlaying(!isPlaying)} size="icon" className="bg-blue-600 hover:bg-blue-700">
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>
                <div className="flex-1">
                  <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={(e) => setCurrentTime(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-slate-400 mt-1">
                    <span>
                      {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, "0")}
                    </span>
                    <span>
                      {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <Button size="icon" variant="outline">
                  <Volume2 className="w-5 h-5" />
                </Button>
              </div>
            </Card>

            {/* Timeline */}
            <Card className="p-6 bg-slate-900 border-slate-800">
              <h3 className="text-lg font-bold mb-4">Timeline</h3>
              <div className="space-y-2">
                {timeline.map((clip) => (
                  <div key={clip.id} className="relative h-12 bg-slate-800 rounded">
                    <div
                      className={`absolute h-full ${clip.color} rounded flex items-center px-3 text-sm font-medium`}
                      style={{
                        left: `${(clip.start / duration) * 100}%`,
                        width: `${(clip.duration / duration) * 100}%`,
                      }}
                    >
                      {clip.name}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upload */}
            <Card className="p-6 bg-slate-900 border-slate-800">
              <h3 className="text-lg font-bold mb-4">Media</h3>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Upload className="w-4 h-4 mr-2" />
                Upload Media
              </Button>
            </Card>

            {/* Effects */}
            <Card className="p-6 bg-slate-900 border-slate-800">
              <h3 className="text-lg font-bold mb-4">Effects</h3>
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

            {/* Tools */}
            <Card className="p-6 bg-slate-900 border-slate-800">
              <h3 className="text-lg font-bold mb-4">Tools</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Scissors className="w-4 h-4 mr-2" />
                  Split Clip
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Add Transition
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
