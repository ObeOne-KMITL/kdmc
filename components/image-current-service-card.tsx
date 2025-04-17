import { CheckCircle } from "lucide-react"
import type { ReactNode } from "react"
import Image from "next/image"

interface ImageCurrentServiceCardProps {
  title: string
  icon: ReactNode
  imageSrc: string
}

export default function ImageCurrentServiceCard({ title, icon, imageSrc }: ImageCurrentServiceCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-orange-500 hover:shadow-md card-hover-effect">
      <div className="relative h-10 w-10 overflow-hidden rounded-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      </div>
      <div className="h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-blue-500 flex items-center justify-center text-white">
        {icon}
      </div>
      <CheckCircle className="h-5 w-5 flex-shrink-0 text-blue-500" />
      <span className="font-medium">{title}</span>
    </div>
  )
}
