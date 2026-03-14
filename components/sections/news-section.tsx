'use client'

import { useNews } from '@/lib/hooks'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Spinner } from '@/components/ui/spinner'
import { Empty } from '@/components/ui/empty'

interface NewsSectionProps {
  limit?: number
  showViewMore?: boolean
}

export function NewsSection({ limit = 3, showViewMore = true }: NewsSectionProps) {
  const { news, loading, error } = useNews()

  const displayNews = limit ? news.slice(0, limit) : news

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Spinner className="h-8 w-8" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
      </div>
    )
  }

  if (displayNews.length === 0) {
    return <Empty description="No news available" />
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayNews.map((article) => (
          <Link key={article.id} href={`/news/${article.slug}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full cursor-pointer">
              {article.image_url && (
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              )}
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(article.published_at).toLocaleDateString('vi-VN')}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <span className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Đọc thêm →
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {showViewMore && news.length > displayNews.length && (
        <div className="text-center">
          <Link
            href="/news"
            className="inline-block px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors font-medium"
          >
            Xem thêm tin tức
          </Link>
        </div>
      )}
    </div>
  )
}
