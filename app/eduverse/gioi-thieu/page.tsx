import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { EuverseTabs } from '@/components/sections/eduverse-tabs'

export default function EduverseIntroPage() {
  return (
    <main>
      {/* Programs Navigation */}
      <EuverseTabs />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Giới thiệu về Eduverse
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Eduverse là nền tảng giáo dục STEAM tiên tiến, được thiết kế để giúp thế hệ trẻ phát triển toàn diện về tư duy, sáng tạo và kỹ năng công nghệ. Chúng tôi kết hợp khoa học, công nghệ, kỹ thuật, nghệ thuật và toán học trong các chương trình học tương tác.
            </p>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
                Đăng ký học thử <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tại sao chọn Eduverse?</h2>
              <ul className="space-y-4">
                {[
                  'Chương trình học tiêu chuẩn quốc tế STEAM',
                  'Giáo viên được đào tạo chuyên môn cao',
                  'Lớp học nhỏ, chú ý từng học sinh',
                  'Môi trường an toàn, trang thiết bị hiện đại',
                  'Khuyến khích sáng tạo và tư duy phê phán',
                  'Hỗ trợ phát triển kỹ năng xã hội',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-lg">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500">Hình ảnh minh họa</span>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Những giá trị của chúng tôi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Sáng tạo',
                  description: 'Khuyến khích học sinh tư duy độc lập và tìm ra những giải pháp mới',
                },
                {
                  title: 'Kỹ năng thực tế',
                  description: 'Tập trung vào các kỹ năng cần thiết cho thế kỷ 21',
                },
                {
                  title: 'Phát triển toàn diện',
                  description: 'Phát triển cả kỹ năng học tập lẫn kỹ năng sống',
                },
              ].map((value, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
