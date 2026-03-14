'use client'

import { useState } from 'react'
import { useProjects } from '@/lib/hooks'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Spinner } from '@/components/ui/spinner'
import { Empty } from '@/components/ui/empty'
import { Button } from '@/components/ui/button'

interface ProjectsSectionProps {
  category?: string
  showFilter?: boolean
}

export function ProjectsSection({ category, showFilter = true }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(category)
  const { projects, loading, error } = useProjects(selectedCategory)

  const categories = [
    { value: 'erp', label: 'ERP' },
    { value: 'cms', label: 'CMS' },
    { value: 'web', label: 'Website' },
    { value: 'ar', label: 'AR/VR' },
    { value: 'ai', label: 'AI' },
    { value: 'marketing', label: 'Marketing' },
  ]

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
      </div>
    )
  }

  return (
    <div>
      {showFilter && (
        <div className="mb-8 flex flex-wrap gap-2">
          <Button
            variant={selectedCategory ? 'outline' : 'default'}
            onClick={() => setSelectedCategory(undefined)}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Tất cả
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={selectedCategory === cat.value ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(cat.value)}
              className={selectedCategory === cat.value ? 'bg-blue-600 text-white' : ''}
            >
              {cat.label}
            </Button>
          ))}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <Spinner className="h-8 w-8" />
        </div>
      ) : projects.length === 0 ? (
        <Empty description={`No projects found${selectedCategory ? ` in ${selectedCategory}` : ''}`} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full cursor-pointer">
                {project.image_url && (
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-3">
                    {project.category.toUpperCase()}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                    Chi tiết →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
