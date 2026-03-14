import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Users, Clock, Target } from 'lucide-react'
import { EuverseTabs } from '@/components/sections/eduverse-tabs'

const classes = [
  {
    name: 'STEAM Starter (6-8 tuổi)',
    description: 'Khám phá những khái niệm cơ bản về khoa học và công nghệ thông qua các hoạt động vui nhộn',
    schedule: 'Thứ Bảy & Chủ Nhật',
    students: '8-12 học sinh/lớp',
    duration: '90 phút/buổi',
  },
  {
    name: 'STEAM Explorer (8-10 tuổi)',
    description: 'Lập trình cơ bản, robotics và giải quyết vấn đề thực tế',
    schedule: 'Thứ Bảy & Chủ Nhật',
    students: '8-12 học sinh/lớp',
    duration: '120 phút/buổi',
  },
  {
    name: 'STEAM Advanced (10-12 tuổi)',
    description: 'AI, IoT và các dự án công nghệ nâng cao',
    schedule: 'Thứ Bảy & Chủ Nhật',
    students: '8-10 học sinh/lớp',
    duration: '150 phút/buổi',
  },
  {
    name: 'STEAM Master (12+ tuổi)',
    description: 'Lập trình chuyên sâu, phát triển ứng dụng và khởi động công nghệ',
    schedule: 'Các ngày trong tuần + Cuối tuần',
    students: '8-10 học sinh/lớp',
    duration: '180 phút/buổi',
  },
]

export default function EduverseClassesPage() {
  return (
    <main>
      {/* Programs Navigation */}
      <EuverseTabs />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-3xl">
            Các lớp học Eduverse
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            Chúng tôi cung cấp các lớp học được tùy chỉnh theo độ tuổi và trình độ của học sinh
          </p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {classes.map((cls, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{cls.name}</h3>
                <p className="text-gray-700 mb-6">{cls.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>{cls.schedule}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span>{cls.students}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Target className="h-5 w-5 text-blue-600" />
                    <span>{cls.duration}</span>
                  </div>
                </div>

                <Link href="/contact">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Đăng ký <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Có câu hỏi về các lớp học?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Liên hệ với chúng tôi để được tư vấn về chương trình học phù hợp nhất cho con em
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Liên hệ ngay
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
