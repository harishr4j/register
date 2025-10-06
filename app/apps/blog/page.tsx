"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    excerpt:
      "Learn how to build modern web applications with the latest features of Next.js including Server Components and App Router.",
    author: "B. Harish Raj",
    date: "2025-01-15",
    tags: ["Next.js", "React", "Web Development"],
    image: "/nextjs-blog-coding.jpg",
  },
  {
    id: 2,
    title: "Mastering TypeScript for React",
    excerpt:
      "Discover best practices for using TypeScript in React applications to build type-safe and maintainable code.",
    author: "B. Harish Raj",
    date: "2025-01-10",
    tags: ["TypeScript", "React", "Programming"],
    image: "/typescript-code.png",
  },
  {
    id: 3,
    title: "Building Scalable APIs with Node.js",
    excerpt: "A comprehensive guide to creating robust and scalable REST APIs using Node.js and Express.",
    author: "B. Harish Raj",
    date: "2025-01-05",
    tags: ["Node.js", "API", "Backend"],
    image: "/nodejs-api-server.jpg",
  },
]

export default function BlogPlatform() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Tech Blog</h1>
          <p className="text-xl text-white/70">Insights on Web Development & Technology</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedPost(post.id)}
            >
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-3">{post.title}</h2>
                <p className="text-white/70 mb-4">{post.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
