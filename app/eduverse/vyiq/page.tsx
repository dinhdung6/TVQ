import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Lightbulb, Zap, Brain } from 'lucide-react'
import { EuverseTabs } from '@/components/sections/eduverse-tabs'

export default function VyIQPage() {
  return (
    <main>
      {/* Programs Navigation */}
      <EuverseTabs />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              VyIQ - Nền tảng Học tập Thông minh
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              VyIQ là một nền tảng học tập trực tuyến sử dụng AI để cá nhân hóa hành trình học tập của mỗi học sinh
            </p>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
                Tìm hiểu thêm <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Tính năng chính của VyIQ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Brain,
                title: 'Học tập thông minh',
                description: 'AI phân tích cách học của bạn và điều chỉnh nội dung để tối ưu hóa kết quả',
              },
              {
                icon: Zap,
                title: 'Tiến độ theo thời gian thực',
                description: 'Theo dõi tiến độ học tập của bạn với báo cáo chi tiết và gợi ý cải thiện',
              },
              {
                icon: Lightbulb,
                title: 'Nội dung tương tác',
                description: 'Bài học được thiết kế interactively để tăng sự tham gia của học sinh',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="bg-gray-50 rounded-lg p-8 text-center">
                  <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-blue-50 rounded-lg p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Làm thế nào VyIQ hoạt động?</h2>
            <div className="space-y-4">
              {[
                'Học sinh bắt đầu với một bài kiểm tra đánh giá để xác định trình độ hiện tại',
                'AI phân tích kết quả và tạo một kế hoạch học tập được cá nhân hóa',
                'Nội dung được điều chỉnh động dựa trên hiệu suất của học sinh',
                'Giáo viên và phụ huynh có thể theo dõi tiến độ thông qua một bảng điều khiển',
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="text-gray-700">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Sẵn sàng khám phá VyIQ?</h2>
          <p className="text-indigo-100 mb-8 text-lg max-w-2xl mx-auto">
            Tham gia hàng nghìn học sinh đang sử dụng VyIQ để nâng cao kết quả học tập của họ
          </p>
          <Link href="/contact">
            <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Bắt đầu ngay <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
