import { CheckCircle } from "lucide-react"
import type { ReactNode } from "react"
import Link from "next/link"

interface CurrentServiceCardProps {
  title: string
  icon: ReactNode
  url?: string
}

export default function CurrentServiceCard({ title, icon, url }: CurrentServiceCardProps) {
  const CardComponent = (
    <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-orange-500 hover:shadow-md card-hover-effect">
      <div className="h-10 w-10 overflow-hidden rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
        {icon}
      </div>
      <CheckCircle className="h-5 w-5 flex-shrink-0 text-orange-500" />
      <span className="font-medium">{title}</span>
    </div>
  )

  if (url) {
    return (
      <Link href={url} className="block" target="_blank" rel="noopener noreferrer">
        {CardComponent}
      </Link>
    )
  }

  return CardComponent
}
