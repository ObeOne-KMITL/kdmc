import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full">
        <Image
          src="/images/hero-background.png"
          alt="KDMC Digital Services Platform - Smart Services Better Together"
          width={1920}
          height={800}
          className="w-full h-auto object-cover"
          priority
        />
        {/* Clickable overlay for Explore Services area */}
        <a 
          href="#section2" 
          className="absolute bottom-[15%] left-[3%] w-[200px] h-[50px] cursor-pointer hover:opacity-80 transition-opacity md:bottom-[18%] md:left-[4%] md:w-[220px] md:h-[55px]"
          aria-label="Explore Services"
        />
      </div>
    </section>
  )
}
