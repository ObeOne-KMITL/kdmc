import { Clock } from "lucide-react"
import type { ReactNode } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ComingSoonCardProps {
  title: string
  description: string
  icon: ReactNode
  url?: string
  showProgress?: boolean
  progressPercentage?: number
  expectedCompletion?: string
  greenProgress?: boolean
}

export default function ComingSoonCard({
  title,
  description,
  icon,
  url,
  showProgress = false,
  progressPercentage = 0,
  expectedCompletion = "",
  greenProgress = false,
}: ComingSoonCardProps) {
  const CardComponent = (
    <Card className="h-full border-orange-200 bg-white transition-all hover:border-orange-500 hover:shadow-md card-hover-effect">
      <CardHeader className="pb-2">
        <div className="flex flex-col items-center">
          <div className="mb-4 h-24 w-24 overflow-hidden rounded-lg bg-orange-100 flex items-center justify-center text-orange-500">
            {icon}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange-500" />
            <CardTitle className="text-xl text-orange-600">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>

        {showProgress && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-orange-600">ความคืบหน้า</span>
              <span className="text-sm font-medium text-orange-600">{progressPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`${greenProgress ? "bg-green-500" : "bg-orange-500"} h-2.5 rounded-full`}
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            {expectedCompletion && <p className="text-xs text-gray-500 mt-1">คาดว่าแล้วเสร็จ {expectedCompletion}</p>}
          </div>
        )}
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
