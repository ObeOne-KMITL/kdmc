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
    <Card className="h-full transition-all hover:border-orange-500 hover:shadow-md card-hover-effect">
      <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
        <div className="mb-4 h-16 w-16 overflow-hidden rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
          {icon}
        </div>
        <h4 className="text-md font-medium">{title}</h4>
      </CardContent>
    </Card>
  )

  if (url) {
    return (
      <Link href={url} className="block h-full">
        {CardComponent}
      </Link>
    )
  }

  return CardComponent
}
