import { Clock } from "lucide-react"
import type { ReactNode } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ImageComingSoonCardProps {
  title: string
  description: string
  icon: ReactNode
  imageSrc: string
}

export default function ImageComingSoonCard({ title, description, icon, imageSrc }: ImageComingSoonCardProps) {
  return (
    <Card className="h-full overflow-hidden border-blue-200 bg-white transition-all hover:border-orange-500 hover:shadow-md card-hover-effect">
      <div className="relative h-48 w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex flex-col items-center">
          <div className="mb-4 h-24 w-24 overflow-hidden rounded-lg bg-gradient-to-r from-orange-500 to-blue-500 flex items-center justify-center text-white">
            {icon}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-500" />
            <CardTitle className="text-xl bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              {title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
