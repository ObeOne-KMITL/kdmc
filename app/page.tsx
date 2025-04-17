import { ArrowRight, CheckCircle, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import ProcessCard from "@/components/process-card"
import ComingSoonCard from "@/components/coming-soon-card"
import CurrentServiceCard from "@/components/current-service-card"
import {
  ProfileIcon,
  HRDocIcon,
  DatabaseIcon,
  KaizenIcon,
  BenefitsIcon,
  LoanIcon,
  ReceiptIcon,
  CourseIcon,
  QualityIcon,
  EvaluationIcon,
  ProjectIcon,
  ResultsIcon,
  LMSIcon,
  CurriculumIcon,
  RepairIcon,
  EVIcon,
  CCTVIcon,
  SkillsIcon,
  AIIcon,
  ERPIcon,
  MetaverseIcon,
  IoTIcon,
  URLIcon,
  CodingIcon,
  SSOIcon,
  DevHubIcon,
  OfficeIcon,
  GoogleIcon,
  SPSSIcon,
  ZoomIcon,
  AdobeIcon,
  MatlabIcon,
  WifiIcon,
  IAMIcon,
  CoLocIcon,
  DNSIcon,
  NTPIcon,
  VPNIcon,
  ComputerRepairIcon,
  EOfficeIcon,
  Account3DIcon,
} from "@/components/icons"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-orange-600 md:text-4xl">What is Digital University?</h2>
            <p className="text-lg text-gray-600">
              Digital University คือ การนำ Digital Technology มาใช้ในการปรับปรุงกระบวนการ (Process) ของการทำงาน
              เพื่อเพิ่มประสิทธิภาพและยกระดับการให้บริการทางการศึกษา
            </p>
          </div>
        </div>
      </section>

      {/* Process Improvement Section */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-orange-600 md:text-4xl">Process Improvement</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProcessCard
              title="Digitization"
              description="การแปลงข้อมูลและกระบวนการให้อยู่ในรูปแบบดิจิทัล"
              icon={<Zap className="h-10 w-10" />}
              url="#digitization"
            />
            <ProcessCard
              title="Automation"
              description="การนำเทคโนโลยีมาช่วยทำงานแทนมนุษย์ เพื่อลดข้อผิดพลาดและเพิ่มประสิทธิภาพ"
              icon={<CheckCircle className="h-10 w-10" />}
              url="#automation"
            />
            <ProcessCard
              title="Integration"
              description="การเชื่อมโยงระบบต่างๆ เข้าด้วยกันเพื่อให้ข้อมูลไหลเวียนได้อย่างราบรื่น"
              icon={<ArrowRight className="h-10 w-10" />}
              url="#integration"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-orange-600 md:text-4xl" id="section2">Digital Services</h2>

          <div className="mb-16">
            <h3 className="mb-6 text-2xl font-semibold text-orange-600">งานบริหารทรัพยากรบุคคล</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                title="ระบบ Profile บุคลากร"
                icon={<ProfileIcon className="h-8 w-8" />}
                url="https://profile.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบคำขอหนังสือ HR"
                icon={<HRDocIcon className="h-8 w-8" />}
                url="https://eform.hr.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบฐานข้อมูลบุคลากร"
                icon={<DatabaseIcon className="h-8 w-8" />}
                url="https://hris.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบ KAIZEN"
                icon={<KaizenIcon className="h-8 w-8" />}
                url="https://kaizen.kmitl.ac.th/"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="mb-6 text-2xl font-semibold text-orange-600">งานการเงิน การคลัง</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                title="ระบบเบิกสวัสดิการ ค่ารักษาพยาบาล/ทันตกรรม/ค่าเล่าเรียนบุตร"
                icon={<BenefitsIcon className="h-8 w-8" />}
                url="https://finance.kmitl.ac.th/welfare"
              />
              <ServiceCard
                title="ระบบยืมเงินทดลองจ่าย"
                icon={<LoanIcon className="h-8 w-8" />}
                url="https://advance.finance.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบออกใบเสร็จหอพัก"
                icon={<ReceiptIcon className="h-8 w-8" />}
                url="https://receipt.finance.kmitl.ac.th/"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="mb-6 text-2xl font-semibold text-orange-600">งานบริหารวิชาการ</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                title="ระบบ Course Spec/Syllabus/Report"
                icon={<CourseIcon className="h-8 w-8" />}
                url="https://syllabus.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบบริหารจัดการคุณภาพหลักสูตร"
                icon={<QualityIcon className="h-8 w-8" />}
                url="https://aqa.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบประเมินการสอน"
                icon={<EvaluationIcon className="h-8 w-8" />}
                url="https://ces.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบฐานข้อมูลวิชาโครงงาน"
                icon={<ProjectIcon className="h-8 w-8" />}
                url="https://kip.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบแสดงผลการบริหารหลักสูตร"
                icon={<ResultsIcon className="h-8 w-8" />}
                url="https://cmms.kmitl.ac.th/"
              />
              <ServiceCard title="ระบบ LMS" icon={<LMSIcon className="h-8 w-8" />} url="https://goedu.kmitl.ac.th/" />
              <ServiceCard
                title="ระบบฐานข้อมูลหลักสูตร"
                icon={<CurriculumIcon className="h-8 w-8" />}
                url="https://academic.kmitl.ac.th/"
              />
              <ServiceCard
                title="ข้อมูลหลักสูตร สำหรับนักเรียน"
                icon={<CurriculumIcon className="h-8 w-8" />}
                url="https://curriculum.kmitl.ac.th/"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="mb-6 text-2xl font-semibold text-orange-600">งาน Life Long Learning</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                title="ระบบ Klix Masterclass"
                icon={<LMSIcon className="h-8 w-8" />}
                url="https://klix.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบ Media Server"
                icon={<ZoomIcon className="h-8 w-8" />}
                url="https://streaming.kmitl.ac.th/manage/"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="mb-6 text-2xl font-semibold text-orange-600">งานกายภาพ</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                title="ระบบแจ้งซ่อม"
                icon={<RepairIcon className="h-8 w-8" />}
                url="https://tweet.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบติดตามรถ EV"
                icon={<EVIcon className="h-8 w-8" />}
                url="https://tracking.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบกล้องวงจรปิด"
                icon={<CCTVIcon className="h-8 w-8" />}
                url="http://www.buildkmitl.com/main/?page_id=5470"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="mb-6 text-2xl font-semibold text-orange-600">งานแผนงาน</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                title="ระบบรายงานผลการดำเนินงานประจำปี"
                icon={<ResultsIcon className="h-8 w-8" />}
                url="https://oprs.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบสำรวจภาวะมีงานทำ"
                icon={<EvaluationIcon className="h-8 w-8" />}
                url="https://commencement.kmitl.ac.th/api/view/faculty-summary"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="mb-6 text-2xl font-semibold text-orange-600">งานบริหารทั่วไป</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                title="ระบบจองห้องต่างๆ ในสถาบัน"
                icon={<CoLocIcon className="h-8 w-8" />}
                url="https://booking.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบจัดเก็บเอกสารงานสารบรรณ"
                icon={<HRDocIcon className="h-8 w-8" />}
                url="https://doc.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบเช็คชื่อเข้าประชุม"
                icon={<ProfileIcon className="h-8 w-8" />}
                url="https://attending.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบ E-meeting"
                icon={<ZoomIcon className="h-8 w-8" />}
                url="https://emeeting.kmitl.ac.th/"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="mb-6 text-2xl font-semibold text-orange-600">งานประชาสัมพันธ์</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                title="ระบบจัดเก็บรูปภาพ"
                icon={<AdobeIcon className="h-8 w-8" />}
                url="https://gallery.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบ E-Stamp"
                icon={<ReceiptIcon className="h-8 w-8" />}
                url="https://estamps.kmitl.ac.th/"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="mb-6 text-2xl font-semibold text-orange-600">งานกิจการนักศึกษา</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                title="ระบบจัดการกิจกรรม"
                icon={<ProjectIcon className="h-8 w-8" />}
                url="https://events.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบสำรวจนักศึกษาเข้าใหม่งานปฐมนิเทศน์"
                icon={<EvaluationIcon className="h-8 w-8" />}
                url="https://orientation.kmitl.ac.th/"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="mb-6 text-2xl font-semibold text-orange-600">งานวิจัยและนวัตกรรม</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                title="ระบบงาน KMITL Expo"
                icon={<ProjectIcon className="h-8 w-8" />}
                url="https://expo.kmitl.ac.th"
              />
              <ServiceCard
                title="Chatbot knowa"
                icon={<AIIcon className="h-8 w-8" />}
                url="https://expo.kmitl.ac.th/th/knowva"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="mb-6 text-2xl font-semibold text-orange-600">หน่วยงานวิชาการ & โรงพยาบาล</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                title="คณะศิลปะศาสตร์ : ระบบ KMITL TEP"
                icon={<CourseIcon className="h-8 w-8" />}
                url="https://language.kmitl.ac.th/"
              />
              <ServiceCard
                title="รพ. พระจอมเกล้า : ระบบคิว"
                icon={<ProfileIcon className="h-8 w-8" />}
                url="https://queue-opd.kmitl.ac.th/"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="mb-6 text-2xl font-semibold text-orange-600">งานอื่นๆ</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                title="ระบบ E-Certificate"
                icon={<CourseIcon className="h-8 w-8" />}
                url="https://ecer.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบลงทะเบียนเข้าร่วมงาน"
                icon={<ProfileIcon className="h-8 w-8" />}
                url="/https://prompt.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบ Blog"
                icon={<HRDocIcon className="h-8 w-8" />}
                url="https://medium.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบ Version Control"
                icon={<DevHubIcon className="h-8 w-8" />}
                url="https://git.kmitl.ac.th/"
              />
              <ServiceCard
                title="ระบบส่งไฟล์ send me"
                icon={<HRDocIcon className="h-8 w-8" />}
                url="https://sendme.kmitl.ac.th/"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-orange-600 md:text-4xl">Coming Soon</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ComingSoonCard
              title="Skill Transcript"
              description="รองรับการออก Skill Transcript ให้กับ นศ ทุกคน"
              icon={<SkillsIcon className="h-12 w-12" />}
              showProgress={true}
              progressPercentage={75}
              expectedCompletion="Q3 2025"
              greenProgress={true}
            />
            <ComingSoonCard
              title="Iginite"
              description="Platform AI Chatbot สำหรับทุกหน่วยงาน สร้าง Chatbot ช่วยตอบคำถามของแต่ละหน่วย"
              icon={<AIIcon className="h-12 w-12" />}
              showProgress={true}
              progressPercentage={75}
              expectedCompletion="Q3 2025"
              greenProgress={true}
            />
            <ComingSoonCard
              title="ERP"
              description="ทลายกำแพง แผน พัสดุ คลัง สู่เป้าหมายเดียวกันตาม Core Valus : Team Spirit"
              icon={<ERPIcon className="h-12 w-12" />}
              showProgress={true}
              progressPercentage={30}
              expectedCompletion="Q1 2026"
            />
            <ComingSoonCard
              title="Metaverse"
              description="สร้าง Metaverse สำหรับการเรียนรู้แบบเสมือนจริง"
              icon={<MetaverseIcon className="h-12 w-12" />}
              showProgress={true}
              progressPercentage={80}
              expectedCompletion="Q3 2025"
              greenProgress={true}
            />
            <ComingSoonCard
              title="IoT Platform"
              description="ให้บริการ IoT ด้วย Lora Technology และ Wi-Fi"
              icon={<IoTIcon className="h-12 w-12" />}
              showProgress={true}
              progressPercentage={20}
              expectedCompletion="Q3 2025"
            />
            <ComingSoonCard
              title="Shorten URL"
              description="ให้บริการ URL แบบสั้น เพื่อจดจำง่าย"
              icon={<URLIcon className="h-12 w-12" />}
              showProgress={true}
              progressPercentage={80}
              expectedCompletion="Q3 2025"
              greenProgress={true}
            />
            <ComingSoonCard
              title="Coding Platform"
              description="ให้นักศึกษาฝึกเขียน Code และออก Certificate รองรับภาษา Python และภาษา C"
              icon={<CodingIcon className="h-12 w-12" />}
              showProgress={true}
              progressPercentage={20}
              expectedCompletion="Q3 2025"
            />
            <ComingSoonCard
              title="SSO"
              description="ระบบ Single Sign On รองรับระบบต่าง ๆ ที่หลากหลาย"
              icon={<SSOIcon className="h-12 w-12" />}
              showProgress={true}
              progressPercentage={20}
              expectedCompletion="Q3 2025"
            />
            <ComingSoonCard
              title="Developer HUB"
              description="รองรับนักพัฒนาในสถาบันเพื่อช่วยกันพัฒนาระบบสารสนเทศต่างๆ ใช้งานในสถาบัน"
              icon={<DevHubIcon className="h-12 w-12" />}
              showProgress={true}
              progressPercentage={80}
              expectedCompletion="Q3 2025"
              greenProgress={true}
            />
            <ComingSoonCard
              title="API Gateway"
              description="สำหรับให้บริการ API กับระบบต่าง ๆ"
              icon={<URLIcon className="h-12 w-12" />}
              showProgress={true}
              progressPercentage={90}
              expectedCompletion="Q3 2025"
              greenProgress={true}
            />
            <ComingSoonCard
              title="Dspace"
              description="รวบรวมงานวิจัย และ ผลงานอาจารย์"
              icon={<DatabaseIcon className="h-12 w-12" />}
              showProgress={true}
              progressPercentage={20}
              expectedCompletion="Q3 2025"
            />
            <ComingSoonCard
              title="ระบบจองรถ"
              description="สำหรับใช้ในการจองรถ"
              icon={<EVIcon className="h-12 w-12" />}
              showProgress={true}
              progressPercentage={10}
              expectedCompletion="Q3 2025"
            />
            <ComingSoonCard
              title="ระบบ Profile ของหลักสูตร"
              description="สำหรับเป็นข้อมูลพื้นฐานให้กับหลักสูตร"
              icon={<CurriculumIcon className="h-12 w-12" />}
              showProgress={true}
              progressPercentage={10}
              expectedCompletion="Q3 2025"
            />
            <ComingSoonCard
              title="ระบบความเชี่ยวชาญอาจารย์"
              description="ให้ภายนอกสืบค้นความเชี่ยวชาญของอาจารย์ได้"
              icon={<ProfileIcon className="h-12 w-12" />}
              showProgress={true}
              progressPercentage={10}
              expectedCompletion="Q3 2025"
            />
            <ComingSoonCard
              title="ระบบตัดเกรด โดยใช้ CLO"
              description="เปลี่ยนวิธีการตัดเกรดโดยอิงตาม CLO"
              icon={<EvaluationIcon className="h-12 w-12" />}
              showProgress={true}
              progressPercentage={10}
              expectedCompletion="Q3 2025"
            />
            <ComingSoonCard
              title="ระบบติดตามการทำงานตามมติสภาสถาบัน"
              description="ใช้สำหรับติดตามข้อสั่งการจากสภาสถาบัน"
              icon={<ResultsIcon className="h-12 w-12" />}
              showProgress={true}
              progressPercentage={10}
              expectedCompletion="Q3 2025"
            />
            <ComingSoonCard
              title="Private Cloud Storage"
              description="พื้นที่จัดเก็บไฟล์สำหรับบุคลากร"
              icon={<DatabaseIcon className="h-12 w-12" />}
              showProgress={true}
              progressPercentage={10}
              expectedCompletion="Q3 2025"
            />
          </div>
        </div>
      </section>

      {/* Current Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-orange-600 md:text-4xl">Current Services</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-orange-600">License Software</h3>
              <div className="space-y-4">
                <CurrentServiceCard
                  title="Microsoft Office 365"
                  icon={<OfficeIcon className="h-6 w-6" />}
                  url="https://kdmc.kmitl.ac.th/services/office365/"
                />
                <CurrentServiceCard
                  title="Google for Education"
                  icon={<GoogleIcon className="h-6 w-6" />}
                  url="https://kdmc.kmitl.ac.th/services/google-for-education/"
                />
                <CurrentServiceCard
                  title="SPSS"
                  icon={<SPSSIcon className="h-6 w-6" />}
                  url="https://kdmc.kmitl.ac.th/services/spss/"
                />
                <CurrentServiceCard
                  title="Zoom"
                  icon={<ZoomIcon className="h-6 w-6" />}
                  url="https://kdmc.kmitl.ac.th/services/zoom/"
                />
                <CurrentServiceCard
                  title="Adobe Creative Cloud"
                  icon={<AdobeIcon className="h-6 w-6" />}
                  url="https://kdmc.kmitl.ac.th/services/adobe-cc/"
                />
                <CurrentServiceCard
                  title="MATLAB"
                  icon={<MatlabIcon className="h-6 w-6" />}
                  url="https://kdmc.kmitl.ac.th/services/matlab/"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-semibold text-orange-600">Network Infrastructure Services</h3>
              <div className="space-y-4">
                <CurrentServiceCard
                  title="Wireless Network"
                  icon={<WifiIcon className="h-6 w-6" />}
                  url="https://kdmc.kmitl.ac.th/services/wlan/"
                />
                <CurrentServiceCard
                  title="Account (IAM), Guest Account"
                  icon={<IAMIcon className="h-6 w-6" />}
                  url="https://kdmc.kmitl.ac.th/services/account/"
                />
                <CurrentServiceCard
                  title="Co-Location"
                  icon={<CoLocIcon className="h-6 w-6" />}
                  url="https://kdmc.kmitl.ac.th/services/data-center/"
                />
                <CurrentServiceCard
                  title="DNS"
                  icon={<DNSIcon className="h-6 w-6" />}
                  url="https://kdmc.kmitl.ac.th/services/dns/"
                />
                <CurrentServiceCard
                  title="NTP"
                  icon={<NTPIcon className="h-6 w-6" />}
                  url="https://kdmc.kmitl.ac.th/services/ntp/"
                />
                <CurrentServiceCard
                  title="VPN"
                  icon={<VPNIcon className="h-6 w-6" />}
                  url="https://kdmc.kmitl.ac.th/services/vpn/"
                />
                <CurrentServiceCard
                  title="ซ่อม บำรุงรักษา เครื่องคอมพิวเตอร์/notebook"
                  icon={<ComputerRepairIcon className="h-6 w-6" />}
                  url="https://kdmc.kmitl.ac.th/services/com/"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-6 text-2xl font-semibold text-orange-600">Information System</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CurrentServiceCard
                title="E-office"
                icon={<EOfficeIcon className="h-6 w-6" />}
                url="https://eoffice.kmitl.ac.th/"
              />
              <CurrentServiceCard title="บัญชี 3 มิติ" icon={<Account3DIcon className="h-6 w-6" />} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-orange-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">สนใจบริการ ติดต่อ</h2>
          <p className="mb-4 text-xl">Line: @kdmc หรือโทร 091-190-6000</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-orange-600 hover:bg-orange-100">
              <a href="https://forms.gle/XFDed7SSaSNBVQbg7">ข้อคิดเห็น ข้อเสนอแนะ</a>
            </Button>
            <Button className="bg-orange-800 text-white hover:bg-orange-900">
              <a href="https://kdmc.kmitl.ac.th/about-us/contact-us/">ติดต่อเรา</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-white">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} KDMC KMITL Digital University. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
