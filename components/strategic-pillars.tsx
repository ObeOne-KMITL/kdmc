import Image from "next/image"

export default function StrategicPillars() {
  const pillars = [
    {
      title: "นวัตกรรม",
      description: "สร้างสรรค์นวัตกรรมเพื่อการศึกษาและการพัฒนา",
      image: "/images/iINNOVATION.png",
    },
    {
      title: "ชุมชน",
      description: "สร้างความเชื่อมโยงระหว่างสถาบันและชุมชน",
      image: "/images/iCITIZEN.png",
    },
    {
      title: "การบริหารจัดการ",
      description: "พัฒนาระบบบริหารจัดการที่มีประสิทธิภาพ",
      image: "/images/iMANAGEMENT.png",
    },
    {
      title: "โครงสร้างพื้นฐาน",
      description: "พัฒนาโครงสร้างพื้นฐานดิจิทัลที่ทันสมัย",
      image: "/images/iINFRASTRUCTURE.png",
    },
    {
      title: "การเรียนรู้",
      description: "ส่งเสริมการเรียนรู้ตลอดชีวิตผ่านเทคโนโลยีดิจิทัล",
      image: "/images/iLEARNING.png",
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-orange-600 md:text-4xl">
          เสาหลักเชิงยุทธศาสตร์ของ Digital University
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 relative h-32 w-32">
                <Image src={pillar.image || "/placeholder.svg"} alt={pillar.title} fill className="object-contain" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
