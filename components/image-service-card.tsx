import type { ReactNode } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ImageServiceCardProps {
  title: string
  icon: ReactNode
  imageSrc: string
}

export default function ImageServiceCard({ title, icon, imageSrc }: ImageServiceCardProps) {
  return (
    <Card className="h-full overflow-hidden transition-all hover:border-orange-500 hover:shadow-md card-hover-effect">
      <div className="relative h-40 w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      </div>
      <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
        <div className="mb-4 h-16 w-16 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-blue-500 flex items-center justify-center text-white">
          {icon}
        </div>
        <h4 className="text-md font-medium">{title}</h4>
      </CardContent>
    </Card>
  )
}
