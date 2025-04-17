import type { ReactNode } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProcessCardProps {
  title: string
  description: string
  icon: ReactNode
  url?: string
}

export default function ProcessCard({ title, description, icon, url }: ProcessCardProps) {
  const CardComponent = (
    <Card className="h-full transition-all hover:border-orange-500 hover:bg-orange-50 hover:shadow-md card-hover-effect group">
      <CardHeader className="flex items-center justify-center pb-2">
        <div className="mb-4 rounded-full bg-orange-100 p-4 text-orange-500 group-hover:bg-orange-200 group-hover:text-orange-600 transition-colors">
          {icon}
        </div>
        <CardTitle className="text-xl text-orange-600 group-hover:text-orange-700 transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{description}</p>
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
