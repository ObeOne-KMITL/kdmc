import type { ReactNode } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ImageProcessCardProps {
  title: string
  description: string
  icon: ReactNode
  imageSrc: string
}

export default function ImageProcessCard({ title, description, icon, imageSrc }: ImageProcessCardProps) {
  return (
    <Card className="h-full overflow-hidden transition-all hover:border-orange-500 hover:shadow-md card-hover-effect">
      <div className="relative h-40 w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      </div>
      <CardHeader className="flex items-center justify-center pb-2">
        <div className="mb-4 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 p-4 text-white">{icon}</div>
        <CardTitle className="text-xl bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
