'use client'

import { HeroWithVideo } from '@/components/sections/hero-with-video'
import { ConsultationForm } from '@/components/forms/consultation-form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'

export default function TechnologyPage() {
  const [projects, setProjects] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const services = [
    {
      icon: '📊',
      title: 'Giải pháp ERP',
      description: 'Hệ thống quản lý doanh nghiệp toàn diện',
      link: '#demo-erp',
    },
    {
      icon: '🗂️',
      title: 'Giải pháp CMS',
      description: 'Quản lý nội dung dễ dàng và hiệu quả',
      link: '#demo-cms',
    },
    {
      icon: '🌐',
      title: 'Thiết kế Website',
      description: 'Website chuyên nghiệp, tối ưu SEO',
      link: '#demo-web',
    },
    {
      icon: '📱',
      title: 'Ứng dụng Công nghệ',
      description: 'Marketing automation và AI-powered solutions',
      link: '#demo-app',
    },
    {
      icon: '🎨',
      title: 'Giải pháp AR',
      description: 'Trải nghiệm thực tế ảo tương tác',
      link: '#demo-ar',
    },
    {
      icon: '🤖',
      title: 'Giải pháp AI',
      description: 'AI kèm văn hóa cho doanh nghiệp',
      link: '#demo-ai',
    },
  ]

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async (newOffset = 0) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/projects?limit=6&offset=${newOffset}`)
      if (!response.ok) throw new Error('Failed to fetch projects')
      const data = await response.json()

      if (newOffset === 0) {
        setProjects(data)
      } else {
        setProjects((prev) => [...prev, ...data])
      }

      setHasMore(data.length === 6)
      setOffset(newOffset + 6)
    } catch (error) {
      console.error('[v0] Error loading projects:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLoadMore = () => {
    loadProjects(offset)
  }

  return (
    <main>
      {/* Hero Section with Video */}
      <HeroWithVideo
        videoSrc="/videos/hero-technology.mp4"
        tagline="TECHNOLOGY SOLUTIONS"
        title="Dịch vụ Công nghệ Đồng hành cùng doanh nghiệp Việt"
        subtitle="Cung cấp các giải pháp công nghệ linh hoạt, dễ ứng dụng giúp doanh nghiệp tiếp cận chuyển đổi số"
        primaryCta={{
          text: 'Khám phá giải pháp',
          href: '#services',
        }}
        secondaryCta={{
          text: 'Liên hệ tư vấn',
          href: '#consultation',
        }}
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Về công nghệ của chúng tôi
            </h2>
            <p className="text-lg text-gray-600">
              Chúng tôi sử dụng các công nghệ mới nhất và tiên tiến nhất để cung cấp các giải pháp tốt nhất cho doanh nghiệp. Từ ERP, CMS cho đến AR, AI - tất cả đều được tối ưu hóa cho bạn.
            </p>
          </div>

          {/* Trusted By Section */}
          <div className="border-t border-b py-12">
            <h3 className="text-center text-gray-600 font-semibold mb-8">Được tin tưởng bởi</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-500 font-medium">Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Giải pháp công nghệ của chúng tôi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow border border-gray-200">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a href={service.link} className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                  Xem demo <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Infinite Scroll */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Các dự án tiêu biểu
            </h2>
            <p className="text-lg text-gray-600">
              Những công việc mà chúng tôi đã thực hiện cho khách hàng
            </p>
          </div>

          {projects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-center p-4">
                      <span className="font-semibold">{project.title}</span>
                    </div>
                    <div className="p-6">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      {project.demo_url && (
                        <a
                          href={project.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                        >
                          Xem demo <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {hasMore && (
                <div className="text-center">
                  <Button
                    onClick={handleLoadMore}
                    disabled={isLoading}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 font-semibold"
                  >
                    {isLoading ? 'Đang tải...' : 'Xem thêm'}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 text-gray-600">
              <p>Không có dự án nào. Hãy thêm dự án vào Supabase.</p>
            </div>
          )}
        </div>
      </section>

      {/* Consultation CTA */}
      <section id="consultation" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Yêu cầu tư vấn miễn phí
            </h2>
            <p className="text-lg text-gray-600">
              Hãy cho chúng tôi biết nhu cầu của bạn
            </p>
          </div>
          <ConsultationForm serviceType="technology" />
        </div>
      </section>
    </main>
  )
}
