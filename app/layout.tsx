import type React from "react"
import type { Metadata } from "next"
import { Bai_Jamjuree } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin", "thai"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-bai-jamjuree",
})

export const metadata: Metadata = {
  title: "KMITL Digital University",
  description: "Transforming education through digital innovation and technology",
  openGraph: {
    title: "KDMC KMITL",
    type: "article",
    url: "https://v0-modern-orange-website.vercel.app/",
    images: [
      {
        url: "https://www.kmitl.ac.th/sites/default/files/2021-11/k1.1.jpg",
        width: 1200,
        height: 630,
        alt: "KMITL",
      },
    ],
    description: "Transforming education through digital innovation and technology.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${baiJamjuree.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'