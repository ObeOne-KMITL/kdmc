import type { ReactNode } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  icon: ReactNode
  url?: string
}

export default function ServiceCard({ title, icon, url }: ServiceCardProps) {
  const CardComponent = (
    <Card className="h-full transition-all hover:border-orange-500 hover:bg-orange-50 hover:shadow-md card-hover-effect group">
      <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
        <div className="mb-4 h-16 w-16 overflow-hidden rounded-full bg-orange-100 flex items-center justify-center text-orange-500 group-hover:bg-orange-200 group-hover:text-orange-600 transition-colors">
          {icon}
        </div>
        <h4 className="text-md font-medium group-hover:text-orange-600 transition-colors">{title}</h4>
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
