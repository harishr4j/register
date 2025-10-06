"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { ArrowLeft, ImageIcon, Calendar, BarChart3, Users, Download } from "lucide-react"

export default function ContentStudio() {
  const [caption, setCaption] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState(1)

  const templates = [
    { id: 1, name: "Instagram Post", size: "1080x1080", color: "bg-gradient-to-br from-purple-500 to-pink-500" },
    { id: 2, name: "Story", size: "1080x1920", color: "bg-gradient-to-br from-blue-500 to-cyan-500" },
    { id: 3, name: "YouTube Thumbnail", size: "1280x720", color: "bg-gradient-to-br from-red-500 to-orange-500" },
    { id: 4, name: "Twitter Post", size: "1200x675", color: "bg-gradient-to-br from-sky-500 to-blue-500" },
  ]

  const scheduledPosts = [
    { id: 1, platform: "Instagram", time: "Today, 6:00 PM", status: "scheduled" },
    { id: 2, platform: "Twitter", time: "Tomorrow, 10:00 AM", status: "scheduled" },
    { id: 3, platform: "YouTube", time: "Dec 10, 3:00 PM", status: "draft" },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="text-xl font-bold">Content Creation Studio</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_350px] gap-8">
          {/* Main Content Area */}
          <div className="space-y-6">
            {/* Templates */}
            <Card className="p-6 bg-slate-900 border-slate-800">
              <h2 className="text-2xl font-bold mb-4">Choose Template</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedTemplate === template.id ? "border-blue-500 scale-105" : "border-slate-700"
                    }`}
                  >
                    <div className={`w-full aspect-square rounded ${template.color} mb-2`}></div>
                    <p className="font-semibold text-sm">{template.name}</p>
                    <p className="text-xs text-slate-400">{template.size}</p>
                  </button>
                ))}
              </div>
            </Card>

            {/* Editor */}
            <Card className="p-6 bg-slate-900 border-slate-800">
              <h2 className="text-2xl font-bold mb-4">Design Canvas</h2>
              <div className="aspect-square bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <ImageIcon className="w-16 h-16 mx-auto mb-4 text-slate-600" />
                  <p className="text-slate-500">Your design appears here</p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                    <ImageIcon className="w-4 h-4 mr-2" />
                    Upload Image
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Caption</label>
                  <Textarea
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Write your caption here..."
                    className="bg-slate-800 border-slate-700 min-h-[100px]"
                  />
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Post
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Save Draft
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Analytics */}
            <Card className="p-6 bg-slate-900 border-slate-800">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Analytics
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-slate-400">Engagement Rate</span>
                    <span className="text-sm font-semibold">8.5%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-slate-400">Reach</span>
                    <span className="text-sm font-semibold">12.5K</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Scheduled Posts */}
            <Card className="p-6 bg-slate-900 border-slate-800">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Scheduled
              </h3>
              <div className="space-y-3">
                {scheduledPosts.map((post) => (
                  <div key={post.id} className="p-3 bg-slate-800 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm">{post.platform}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          post.status === "scheduled" ? "bg-green-600" : "bg-slate-600"
                        }`}
                      >
                        {post.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{post.time}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Team */}
            <Card className="p-6 bg-slate-900 border-slate-800">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Team
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 bg-slate-800 rounded">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold">
                    BH
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">B. Harish Raj</p>
                    <p className="text-xs text-slate-400">Admin</p>
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
