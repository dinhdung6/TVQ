'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Share2 } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function NewsDetailPage() {
  const params = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [relatedArticles, setRelatedArticles] = useState([])

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch('/api/news')
        const data = await res.json()
        const foundArticle = data.find((a) => a.id === parseInt(params.id as string))
        if (foundArticle) {
          setArticle(foundArticle)
          setRelatedArticles(data.filter((a) => a.id !== foundArticle.id).slice(0, 3))
        } else {
          // Set default article if not found
          const defaultArticles = [
            {
              id: 1,
              title: 'TVQ khai giảng khóa học STEAM mùa xuân 2024',
              excerpt: 'Chương trình học mới với nhiều hoạt động thú vị, giúp trẻ khám phá thế giới khoa học',
              content: 'Chương trình học mới với nhiều hoạt động thú vị, giúp trẻ khám phá thế giới khoa học. Các lớp học được tổ chức vào các ngày cuối tuần tại trụ sở của chúng tôi. Chúng tôi cung cấp một môi trường học tập an toàn, trang thiết bị hiện đại và giáo viên được đào tạo chuyên môn cao.\n\nCác học sinh sẽ học được những kỹ năng quan trọng như lập trình, robotics, AI và tư duy thiết kế. Các chương trình này được thiết kế để phù hợp với độ tuổi và trình độ học tập của mỗi em.',
              date: '2024-03-15',
              category: 'Sự kiện',
            },
            {
              id: 2,
              title: 'Cách dạy con học lập trình từ nhỏ',
              excerpt: 'Khám phá những phương pháp hiệu quả để giới thiệu lập trình cho trẻ nhỏ',
              content: 'Lập trình là một kỹ năng quan trọng cho thế kỷ 21. Bài viết này chia sẻ những cách tốt nhất để dạy lập trình cho trẻ nhỏ.\n\nDưới đây là một số phương pháp hiệu quả:\n1. Bắt đầu với các khái niệm cơ bản\n2. Sử dụng các công cụ trực quan\n3. Khuyến khích học tập thông qua trò chơi\n4. Hỗ trợ con em khám phá các dự án thực tế',
              date: '2024-03-10',
              category: 'Hướng dẫn',
            },
          ]
          const found = defaultArticles.find((a) => a.id === parseInt(params.id as string))
          if (found) {
            setArticle(found)
            setRelatedArticles(defaultArticles.filter((a) => a.id !== found.id))
          }
        }
      } catch (error) {
        console.error('Failed to fetch article:', error)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchArticle()
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Đang tải bài viết...</p>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-500 mb-4">Không tìm thấy bài viết</p>
        <Link href="/news">
          <Button variant="outline">Quay lại tin tức</Button>
        </Link>
      </div>
    )
  }

  return (
    <main className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 border-b">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/news" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 font-medium">
            <ArrowLeft className="h-4 w-4" />
            Quay lại tin tức
          </Link>
          
          <div className="mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {article.title}
          </h1>

          <div className="flex items-center justify-between text-gray-600">
            <div className="flex items-center gap-4">
              <span>{new Date(article.date || article.created_at).toLocaleDateString('vi-VN')}</span>
              <span>•</span>
              <span>Thời gian đọc: 5 phút</span>
            </div>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Share2 className="h-5 w-5" />
              <span>Chia sẻ</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="bg-gray-100 h-96 flex items-center justify-center border-b">
        <span className="text-gray-400">Hình ảnh bài viết</span>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {(article.content || article.excerpt || '').split('\n').map((paragraph, idx) => (
              paragraph.trim() && (
                <p key={idx} className="text-gray-700 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              )
            ))}
          </div>

          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Avatar</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Tâm Việt Quang</h3>
                <p className="text-gray-600">Chuyên gia giáo dục STEAM và công nghệ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50 border-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Bài viết liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link key={relatedArticle.id} href={`/news/${relatedArticle.id}`}>
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="h-40 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                      <span className="text-gray-500">Hình ảnh</span>
                    </div>
                    <div className="p-6">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                        {relatedArticle.category}
                      </span>
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                        {relatedArticle.excerpt}
                      </p>
                      <span className="text-sm text-gray-500">
                        {new Date(relatedArticle.date || relatedArticle.created_at).toLocaleDateString('vi-VN')}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Muốn biết thêm?</h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Liên hệ với chúng tôi để tìm hiểu thêm về các khóa học và dịch vụ của Tâm Việt Quang
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
