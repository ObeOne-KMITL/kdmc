import Image from "next/image"
import { Card } from "@/components/ui/card"

interface ImageProcessCardProps {
  title: string
  imageSrc: string
  url?: string
}

export default function ImageProcessCard({ title, imageSrc, url }: ImageProcessCardProps) {
  const CardComponent = (
    <Card className="h-full overflow-hidden transition-all hover:border-cyan-500 hover:shadow-lg card-hover-effect group">
      <div className="relative w-full aspect-[4/3]">
        <Image 
          src={imageSrc || "/placeholder.svg"} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-300 group-hover:scale-105" 
          priority 
        />
      </div>
    </Card>
  )

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardComponent}
      </a>
    )
  }

  return CardComponent
}
