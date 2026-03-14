import { HeroWithVideo } from '@/components/sections/hero-with-video'
import { EuverseTabs } from '@/components/sections/eduverse-tabs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { GraduationCap, Monitor, Users, Lightbulb, BookOpen, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Eduverse - STEAM Education Platform',
  description: 'Interactive STEAM learning platform for children',
}

export default function EduversePage() {
  const features = [
    {
      icon: GraduationCap,
      title: 'Môn học STEAM',
      description: 'Học liên môn tích hợp: Khoa học, Công nghệ, Kỹ thuật, Nghệ thuật và Toán học qua hoạt động thực tế',
    },
    {
      icon: Monitor,
      title: 'Lập trình cơ bản',
      description: 'Làm quen với tư duy logic, thuật toán thông qua lập trình tùy theo độ tuổi của trẻ.',
    },
    {
      icon: Users,
      title: 'Robotics & AI sơ cấp',
      description: 'Tương tác với robot, cảm biến, và hiểu các AI vận hành trong đời sống.',
    },
    {
      icon: Lightbulb,
      title: 'Tư duy phân biện và sáng tạo',
      description: 'Khuyến khích học sinh đặt câu hỏi, thử nghiệm, nhiều cách giải quyết vấn đề khác nhau.',
    },
    {
      icon: BookOpen,
      title: 'Kỹ năng làm việc nhóm',
      description: 'Học sinh làm việc theo nhóm nhỏ, học cách phân công, hợp tác và giải quyết xung đột.',
    },
  ]

  return (
    <main>
      {/* Hero Section with Video */}
      <HeroWithVideo
        videoSrc="/videos/hero-eduverse.mp4"
        tagline="EDUVERSE PLATFORM"
        title="Vũ trụ học tập STEAM cho thế hệ trẻ"
        subtitle="Nơi trẻ em được tiếp cận với lập trình, robotics, AI và tư duy thiết kế từ sớm"
        primaryCta={{
          text: 'Đăng ký học thử',
          href: '#register',
        }}
        secondaryCta={{
          text: 'Tìm hiểu thêm',
          href: '#features',
        }}
      />

      {/* Programs Navigation - Prominent Tabs */}
      <EuverseTabs />

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nội dung chương trình học
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Eduverse được thiết kế để phát triển toàn diện kỹ năng, sáng tạo và tư duy của trẻ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <Icon className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Các lớp học của chúng tôi
            </h2>
            <p className="text-lg text-gray-600">
              Chương trình được thiết kế cho các độ tuổi khác nhau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Lớp Khám phá (4-6 tuổi)',
                desc: 'Giới thiệu cơ bản về công nghệ, robotics và lập trình',
              },
              {
                name: 'Lớp Sáng tạo (7-9 tuổi)',
                desc: 'Xây dựng dự án, giải quyết vấn đề với robotics và lập trình',
              },
              {
                name: 'Lớp Chuyên sâu (10-12 tuổi)',
                desc: 'AI, machine learning, thiết kế ứng dụng và development nâng cao',
              },
            ].map((cls, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cls.name}</h3>
                <p className="text-gray-600 mb-4">{cls.desc}</p>
                <Link href="#register" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Đăng ký <ArrowRight className="inline ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1000+', label: 'Học sinh' },
              { number: '50+', label: 'Khóa học' },
              { number: '95%', label: 'Độ hài lòng' },
              { number: '15+', label: 'Thành phố' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="register" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sẵn sàng bắt đầu hành trình học tập?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Đăng ký để nhận buổi học thử miễn phí
          </p>
          <Link href="/contact">
            <Button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold">
              Đăng ký ngay
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
