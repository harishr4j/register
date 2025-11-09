// Simple, centralized data model for your site.
// Update these placeholders with your real information and the UI will update.

export type SocialLinks = {
  github?: string
  linkedin?: string
  twitter?: string
  email?: string // plain email, not mailto
  website?: string
  instagram?: string // add Instagram to social links
}

export type Project = {
  title: string
  description: string
  tags?: string[]
  link?: string // live link
  repo?: string // code repo
  image?: string // project image/screenshot
}

export type HeroButton = {
  label: string
  href: string
  icon?: "gavel" | "code" | "link"
}

export type CustomerReview = {
  name: string
  role: string
  content: string
  rating: number
  avatar?: string
}

export type SiteData = {
  name: string
  role: string
  tagline: string
  location?: string
  bio: string
  email: string
  socials: SocialLinks
  skills: string[]
  projects: Project[]
  roles?: string[] // optional: e.g., ["Lawyer", "Developer"]
  heroButtons?: HeroButton[] // 2 buttons shown in the intro
  instagramHandle?: string
  reviews: CustomerReview[]
  caSkills: string[]
  developerSkills: string[]
}

export const siteData: SiteData = {
  name: "B. Harish Raj",
  role: "Student",
  tagline: "Tech | Gamer | Trader | Reel Creator | CA in progress | Big goals, bigger hustle",
  // Note: location optional. Leave undefined if you'd like to hide it.
  location: undefined,
  bio: "I'm a CA student with a passion for technology and creativity. My journey spans across multiple domains - from mastering financial concepts to building innovative web applications, analyzing market trends as a trader, and creating engaging gaming content.\n\nAs a web developer, I specialize in modern technologies like React, Next.js, and TypeScript. My trading experience has sharpened my analytical skills and risk management abilities. Through content creation and editing, I've developed a keen eye for visual storytelling and audience engagement.\n\nThis unique combination of financial knowledge, technical expertise, market understanding, and creative skills allows me to approach projects from multiple perspectives and deliver comprehensive solutions.",
  email: "harishrajracer@icloud.com",
  instagramHandle: "dhe.mad.biker",
  socials: {
    // Fill more later if you want
    // website: "https://instagram.com/dhe.mad.biker",
    // email: "harishrajracer@icloud.com",
    // instagram: "https://instagram.com/dhe.mad.biker", // store IG handle link
  },
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Trading",
    "Chart Analysis",
    "Gaming",
    "Content Creation",
    "Finance",
    "CA Journey",
  ],
  caSkills: ["Web Development", "Trading & Chart Analysis", "Content Creation", "Video Editing"],
  developerSkills: [
    "HTML & CSS",
    "JavaScript & TypeScript",
    "React & Next.js",
    "Node.js",
    "Database Management",
    "API Development",
  ],
  projects: [
    {
      title: "React Task Manager",
      description:
        "A comprehensive task management application built with React and TypeScript. Features drag-and-drop functionality, real-time updates, and team collaboration tools.",
      tags: ["React", "TypeScript", "Drag & Drop", "Real-time"],
      link: "https://task-flow-by-harish.base44.app/",
      repo: "https://github.com/harishraj/react-task-manager",
      image: "/react-task-manager.jpg",
    },
    {
      title: "Next.js Blog Platform",
      description:
        "Modern blog platform with server-side rendering, markdown support, and SEO optimization. Built with Next.js 14 and Tailwind CSS.",
      tags: ["Next.js", "SSR", "Markdown", "SEO", "Tailwind"],
      link: "https://blog-hub-by-harish.base44.app/",
      repo: "https://github.com/harishraj/nextjs-blog",
      image: "/nextjs-blog-platform.jpg",
    },
    {
      title: "E-Commerce Store",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with React and Node.js.",
      tags: ["React", "Node.js", "Stripe", "MongoDB", "Admin Panel"],
      repo: "https://github.com/harishraj/ecommerce-store",
      image: "/ecommerce-store.jpg",
    },
    {
      title: "Advanced Trading Platform",
      description:
        "Professional trading platform with real-time market data, advanced charting, order management, and portfolio analytics. Built with React and WebSocket integration.",
      tags: ["React", "Trading", "WebSocket", "Charts", "Finance"],
      link: "https://market-pro-by-harish.base44.app/",
      repo: "https://github.com/harishraj/trading-platform",
      image: "/advanced-trading-platform.jpg",
    },
    {
      title: "Algorithmic Trading Bot",
      description:
        "Automated trading system with customizable strategies, backtesting engine, and risk management. Built with Python backend and React dashboard.",
      tags: ["Python", "React", "Trading Bot", "Algorithm", "API"],
      repo: "https://github.com/harishraj/algo-trading-bot",
      image: "/algorithmic-trading-bot.jpg",
    },
    {
      title: "Market Analysis Dashboard",
      description:
        "Comprehensive market analysis tool with technical indicators, sentiment analysis, and automated alerts. Features real-time data visualization.",
      tags: ["React", "D3.js", "Market Analysis", "Trading", "Data Viz"],
      link: "https://market-pro-by-harish.base44.app/",
      repo: "https://github.com/harishraj/market-analysis",
      image: "/market-analysis-dashboard.jpg",
    },
    {
      title: "Web Video Editor",
      description:
        "Browser-based video editing platform with timeline editing, effects, transitions, and export functionality. Built with WebGL and React.",
      tags: ["React", "WebGL", "Video Editing", "FFmpeg", "Canvas"],
      repo: "https://github.com/harishraj/web-video-editor",
      image: "/web-video-editor.jpg",
    },
    {
      title: "Content Creation Studio",
      description:
        "All-in-one content creation platform for social media with templates, scheduling, analytics, and collaboration tools for creators.",
      tags: ["React", "Content Creation", "Social Media", "Templates", "Analytics"],
      repo: "https://github.com/harishraj/content-studio",
      image: "/content-creation-studio.jpg",
    },
    {
      title: "Reel Maker Pro",
      description:
        "Specialized tool for creating Instagram reels and short-form content with AI-powered editing suggestions and trending templates.",
      tags: ["React", "AI", "Video Editing", "Instagram", "Templates"],
      repo: "https://github.com/harishraj/reel-maker-pro",
      image: "/reel-maker-pro.jpg",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website with smooth animations, dark/light mode toggle, and contact form. Built with Next.js and Framer Motion.",
      tags: ["Next.js", "Framer Motion", "Responsive", "Animations"],
      repo: "https://github.com/harishraj/portfolio-website",
      image: "/portfolio-website.jpg",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and weather alerts. Built with React and OpenWeather API.",
      tags: ["React", "API Integration", "Geolocation", "Charts"],
      link: "https://aura-weather-by-harish.base44.app/",
      repo: "https://github.com/harishraj/weather-dashboard",
      image: "/weather-app.jpg",
    },
    {
      title: "Real-time Chat App",
      description:
        "WebSocket-based chat application with rooms, file sharing, and emoji support. Built with React, Socket.io, and Express.js.",
      tags: ["React", "Socket.io", "WebSocket", "Real-time", "Express"],
      repo: "https://github.com/harishraj/realtime-chat",
      image: "/chat-application.jpg",
    },
  ],
  roles: ["CA Student", "Web Developer"],
  heroButtons: [],
  reviews: [
    {
      name: "Priya Sharma",
      role: "Business Owner",
      content:
        "Harish created an amazing website for my business. His attention to detail and understanding of modern web design is impressive for someone so young!",
      rating: 5,
      avatar: "/generic-profile-avatar.png",
    },
    {
      name: "Rajesh Kumar",
      role: "Trading Mentor",
      content:
        "I've been mentoring Harish in trading, and his analytical skills are exceptional. He combines technical knowledge with practical application beautifully.",
      rating: 5,
      avatar: "/generic-profile-avatar.png",
    },
    {
      name: "Sneha Reddy",
      role: "Content Creator",
      content:
        "Harish helped me with video editing for my Instagram reels. His creativity and technical skills made my content stand out. Highly recommended!",
      rating: 5,
      avatar: "/generic-profile-avatar.png",
    },
    {
      name: "Arjun Patel",
      role: "Fellow CA Student",
      content:
        "Harish is incredibly organized and helps fellow students with study planning. His multi-tasking abilities while pursuing CA is truly inspiring.",
      rating: 5,
      avatar: "/generic-profile-avatar.png",
    },
    {
      name: "Meera Gupta",
      role: "Startup Founder",
      content:
        "Working with Harish was a game-changer for our startup. His full-stack development skills and business understanding helped us launch faster.",
      rating: 5,
      avatar: "/generic-profile-avatar.png",
    },
    {
      name: "Vikram Singh",
      role: "Gaming Community Lead",
      content:
        "Harish's gaming content is top-notch! His editing skills and understanding of what gamers want makes his content highly engaging.",
      rating: 5,
      avatar: "/generic-profile-avatar.png",
    },
    {
      name: "Kavya Nair",
      role: "Digital Marketing Manager",
      content:
        "Harish built our company's trading dashboard. The real-time features and user interface exceeded our expectations. Truly professional work!",
      rating: 5,
      avatar: "/generic-profile-avatar.png",
    },
    {
      name: "Rohit Agarwal",
      role: "Tech Entrepreneur",
      content:
        "Harish's ability to understand both technical and financial aspects made him perfect for our fintech project. Excellent problem-solving skills!",
      rating: 5,
      avatar: "/generic-profile-avatar.png",
    },
  ],
}
