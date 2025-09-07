import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Portfolio - Full Stack Developer & Financial Analyst",
  description:
    "Professional portfolio showcasing expertise in React, Next.js, TypeScript, trading platforms, and creative content. Experienced full-stack developer with financial analysis and video editing skills.",
  keywords: [
    "full stack developer",
    "react developer",
    "next.js developer",
    "typescript developer",
    "financial analyst",
    "trading platforms",
    "video editing",
    "web development",
    "portfolio",
    "javascript developer",
    "node.js developer",
    "python developer",
  ],
  authors: [{ name: "Portfolio Owner" }],
  creator: "Portfolio Owner",
  publisher: "Portfolio Owner",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://your-domain.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com", // Replace with your actual domain
    title: "Portfolio - Full Stack Developer & Financial Analyst",
    description:
      "Professional portfolio showcasing expertise in React, Next.js, TypeScript, trading platforms, and creative content.",
    siteName: "Developer Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Full Stack Developer & Financial Analyst",
    description:
      "Professional portfolio showcasing expertise in React, Next.js, TypeScript, trading platforms, and creative content.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Portfolio Owner",
              jobTitle: "Full Stack Developer & Financial Analyst",
              description:
                "Experienced developer specializing in React, Next.js, TypeScript, and financial trading platforms",
              url: "https://your-domain.com",
              sameAs: [
                "https://linkedin.com/in/yourprofile",
                "https://github.com/yourprofile",
                "https://twitter.com/yourprofile",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Python",
                "Financial Analysis",
                "Trading Platforms",
                "Video Editing",
                "Web Development",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Full Stack Developer",
                occupationLocation: {
                  "@type": "Country",
                  name: "Your Country",
                },
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
