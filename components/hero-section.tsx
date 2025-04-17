import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 opacity-90"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-orange-500 opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-20 h-96 w-96 rounded-full bg-orange-400 opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-orange-300 opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold md:text-6xl">KMITL: Digital University</h1>
        <p className="mb-8 max-w-2xl text-xl">Transforming education through digital innovation and technology</p>
        <div className="flex gap-4">
          <a href="#section2"><Button className="bg-white text-orange-600 hover:bg-orange-100">
            Explore Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button></a>

        </div>
      </div>
    </section>
  )
}
