'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react'
import { useState, useEffect } from 'react'
import { EuverseTabs } from '@/components/sections/eduverse-tabs'

export default function KnowledgeSharingPage() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('/api/news')
        const data = await res.json()
        setArticles(data.slice(0, 6))
      } catch (error) {
        console.error('Failed to fetch articles:', error)
        setArticles([
          {
            id: 1,
            title: 'Cách dạy con học lập trình từ nhỏ',
            excerpt: 'Khám phá những phương pháp hiệu quả để giới thiệu lập trình cho trẻ nhỏ',
            date: '2024-03-15',
            category: 'Lập trình',
          },
          {
            id: 2,
            title: 'Tầm quan trọng của STEAM trong giáo dục hiện đại',
            excerpt: 'Tìm hiểu tại sao STEAM là chìa khóa cho thành công trong tương lai',
            date: '2024-03-10',
            category: 'Giáo dục',
          },
          {
            id: 3,
            title: 'Robotics là gì và tại sao trẻ nên học?',
            excerpt: 'Giới thiệu về robotics và lợi ích của nó đối với sự phát triển của trẻ',
            date: '2024-03-05',
            category: 'Robotics',
          },
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchArticles()
  }, [])

  return (
    <main>
      {/* Programs Navigation */}
      <EuverseTabs />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Chia sẻ Kiến thức
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Khám phá những bài viết, hướng dẫn và kinh nghiệm từ các chuyên gia giáo dục
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: BookOpen,
                title: 'Bài viết chi tiết',
                description: 'Hàng trăm bài viết về giáo dục, công nghệ và phát triển kỹ năng',
              },
              {
                icon: Users,
                title: 'Cộng đồng học tập',
                description: 'Kết nối với các phụ huynh và giáo viên khác để chia sẻ kinh nghiệm',
              },
              {
                icon: Award,
                title: 'Hướng dẫn thực hành',
                description: 'Các dự án và bài tập thực hành mà bạn có thể làm tại nhà',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="bg-gray-50 rounded-lg p-8 text-center">
                  <Icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              )
            })}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Bài viết gần đây</h2>
          
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Đang tải bài viết...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {articles.map((article) => (
                <Link key={article.id} href={`/news/${article.id}`}>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Hình ảnh</span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-3">
                        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {article.category || 'Giáo dục'}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex-1">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {article.excerpt || article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {new Date(article.date || article.created_at).toLocaleDateString('vi-VN')}
                        </span>
                        <ArrowRight className="h-4 w-4 text-green-600" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center">
            <Link href="/news">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg">
                Xem tất cả bài viết <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Muốn đóng góp kiến thức?</h2>
          <p className="text-green-100 mb-8 text-lg">
            Nếu bạn là giáo viên hoặc chuyên gia, hãy liên hệ để chia sẻ bài viết với cộng đồng
          </p>
          <Link href="/contact">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Liên hệ với chúng tôi
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
