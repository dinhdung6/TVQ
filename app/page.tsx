import { HeroWithVideo } from '@/components/sections/hero-with-video'
import { NewsletterForm } from '@/components/forms/newsletter-form'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Tâm Việt Quang - Education & Technology Solutions',
  description: 'Comprehensive platform connecting education, technology, and innovation for enterprises',
}

export default function Home() {
  return (
    <main>
      {/* Hero Section with Video */}
      <HeroWithVideo
        videoSrc="/videos/hero-landing.mp4"
        tagline="TÂM VIỆT QUANG"
        title="Giải pháp giáo dục và công nghệ toàn diện"
        subtitle="Kết nối giáo dục STEAM, dịch vụ công nghệ và đổi mới sáng tạo để thúc đẩy sự phát triển của doanh nghiệp bạn"
        primaryCta={{
          text: 'Khám phá dịch vụ',
          href: '/technology',
        }}
        secondaryCta={{
          text: 'Tìm hiểu thêm',
          href: '/about',
        }}
      />

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Chúng tôi cung cấp giải pháp toàn diện
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Từ giáo dục STEAM đến các giải pháp công nghệ tiên tiến, chúng tôi giúp doanh nghiệp phát triển
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Eduverse Card */}
            <Link href="/eduverse" className="group">
              <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                  <span className="text-white text-xl">📚</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Eduverse</h3>
                <p className="text-gray-700 mb-4">
                  Nền tảng giáo dục STEAM cho thế hệ trẻ, nơi trẻ em được tiếp cận với lập trình, robotics, AI và tư duy thiết kế từ sớm.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Khám phá <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Technology Card */}
            <Link href="/technology" className="group">
              <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-700 transition-colors">
                  <span className="text-white text-xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Dịch vụ Công nghệ</h3>
                <p className="text-gray-700 mb-4">
                  Giải pháp ERP, CMS, thiết kế website, AR, AI và marketing công nghệ cho doanh nghiệp hiện đại.
                </p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Khám phá <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* About Card */}
            <Link href="/about" className="group">
              <div className="h-full bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Về chúng tôi</h3>
                <p className="text-gray-700 mb-4">
                  Tìm hiểu về đội ngũ, tầm nhìn, sứ mệnh và những dự án nổi bật của Tâm Việt Quang.
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Khám phá <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Đăng ký nhận bản tin mới nhất
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Cập nhật thông tin về các khóa học, dịch vụ và tin tức công nghệ từ Tâm Việt Quang
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sẵn sàng bắt đầu?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Liên hệ với chúng tôi hôm nay để tìm hiểu cách chúng tôi có thể giúp bạn
          </p>
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
              Liên hệ ngay
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
