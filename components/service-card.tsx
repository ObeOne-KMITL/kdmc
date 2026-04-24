import type { ReactNode } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  icon: ReactNode
  url?: string
  colorVariant?: "default" | "light-blue" | "light-pink" | "light-green" | "light-yellow" | "light-maroon"
}

export default function ServiceCard({ title, icon, url, colorVariant = "default" }: ServiceCardProps) {
  const getColorClasses = () => {
    switch (colorVariant) {
      case "light-blue":
        return "bg-blue-100 text-blue-500 group-hover:bg-blue-200 group-hover:text-blue-600"
      case "light-pink":
        return "bg-pink-100 text-pink-500 group-hover:bg-pink-200 group-hover:text-pink-600"
      case "light-green":
        return "bg-green-100 text-green-500 group-hover:bg-green-200 group-hover:text-green-600"
      case "light-yellow":
        return "bg-yellow-100 text-yellow-600 group-hover:bg-yellow-200 group-hover:text-yellow-700"
      case "light-maroon":
        return "bg-red-100 text-red-600 group-hover:bg-red-200 group-hover:text-red-700"
      default:
        return "bg-blue-100 text-blue-500 group-hover:bg-blue-200 group-hover:text-blue-600"
    }
  }

  const CardComponent = (
    <Card className="h-full transition-all hover:border-cyan-500 hover:shadow-md card-hover-effect group">
      <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
        <div
          className={`mb-4 h-16 w-16 overflow-hidden rounded-full flex items-center justify-center transition-colors ${getColorClasses()}`}
        >
          {icon}
        </div>
        <h4 className="text-md font-medium group-hover:text-cyan-600 transition-colors">{title}</h4>
      </CardContent>
    </Card>
  )

  if (url) {
    return (
      <Link href={url} className="block h-full" target="_blank" rel="noopener noreferrer">
        {CardComponent}
      </Link>
    )
  }

  return CardComponent
}
