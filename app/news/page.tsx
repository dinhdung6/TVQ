'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function NewsPage() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Tất cả')

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('/api/news')
        const data = await res.json()
        setArticles(data)
      } catch (error) {
        console.error('Failed to fetch articles:', error)
        // Set default articles if fetch fails
        setArticles([
          {
            id: 1,
            title: 'TVQ khai giảng khóa học STEAM mùa xuân 2024',
            excerpt: 'Chương trình học mới với nhiều hoạt động thú vị, giúp trẻ khám phá thế giới khoa học',
            content: 'Chương trình học mới với nhiều hoạt động thú vị, giúp trẻ khám phá thế giới khoa học. Các lớp học được tổ chức vào các ngày cuối tuần tại trụ sở của chúng tôi.',
            date: '2024-03-15',
            category: 'Sự kiện',
          },
          {
            id: 2,
            title: 'Cách dạy con học lập trình từ nhỏ',
            excerpt: 'Khám phá những phương pháp hiệu quả để giới thiệu lập trình cho trẻ nhỏ',
            content: 'Lập trình là một kỹ năng quan trọng cho thế kỷ 21. Bài viết này chia sẻ những cách tốt nhất để dạy lập trình cho trẻ nhỏ.',
            date: '2024-03-10',
            category: 'Hướng dẫn',
          },
          {
            id: 3,
            title: 'Tầm quan trọng của STEAM trong giáo dục hiện đại',
            excerpt: 'Tìm hiểu tại sao STEAM là chìa khóa cho thành công trong tương lai',
            content: 'STEAM không chỉ là một từ tắt, mà là một phương pháp giáo dục toàn diện giúp học sinh phát triển kỹ năng cần thiết.',
            date: '2024-03-05',
            category: 'Giáo dục',
          },
          {
            id: 4,
            title: 'Robotics là gì và tại sao trẻ nên học?',
            excerpt: 'Giới thiệu về robotics và lợi ích của nó đối với sự phát triển của trẻ',
            content: 'Robotics giúp trẻ phát triển tư duy giải quyết vấn đề, sáng tạo và kỹ năng làm việc nhóm.',
            date: '2024-02-28',
            category: 'Robotics',
          },
          {
            id: 5,
            title: 'Giới thiệu VyIQ - Nền tảng học tập thông minh',
            excerpt: 'Cách AI giúp cá nhân hóa quá trình học tập của mỗi học sinh',
            content: 'VyIQ sử dụng công nghệ AI tiên tiến để tạo ra một trải nghiệm học tập được cá nhân hóa cho mỗi học sinh.',
            date: '2024-02-20',
            category: 'Công nghệ',
          },
          {
            id: 6,
            title: 'Những dự án STEAM thú vị cho con em',
            excerpt: 'Tìm hiểu về các dự án STEAM mà bạn có thể làm tại nhà cùng con em',
            content: 'Đây là những dự án vui nhộn và giáo dục mà bạn có thể làm với con em để khuyến khích sự sáng tạo.',
            date: '2024-02-15',
            category: 'Dự án',
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  const categories = ['Tất cả', 'Sự kiện', 'Hướng dẫn', 'Giáo dục', 'Robotics', 'Công nghệ', 'Dự án']

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'Tất cả' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tin tức & Bài viết
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            Cập nhật các tin tức mới nhất, bài viết hữu ích và chia sẻ kinh nghiệm từ Tâm Việt Quang
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Tìm kiếm bài viết..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Đang tải bài viết...</p>
            </div>
          ) : filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link key={article.id} href={`/news/${article.id}`}>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                      <span className="text-gray-500">Hình ảnh tin tức</span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-3">
                        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex-1">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-sm text-gray-500">
                          {new Date(article.date || article.created_at).toLocaleDateString('vi-VN')}
                        </span>
                        <ArrowRight className="h-4 w-4 text-blue-600" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Không tìm thấy bài viết</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Đăng ký nhận bản tin</h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Nhận những bài viết mới nhất trực tiếp vào hộp thư của bạn
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input
              type="email"
              placeholder="Nhập email của bạn"
              className="rounded-lg"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 font-semibold whitespace-nowrap">
              Đăng ký
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
