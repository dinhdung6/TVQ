'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface EdiverseTabsProps {
  tabs?: Array<{
    label: string
    href: string
  }>
}

export function EuverseTabs({ tabs }: EdiverseTabsProps) {
  const pathname = usePathname()

  const defaultTabs = [
    { label: 'Giới thiệu', href: '/eduverse/gioi-thieu' },
    { label: 'Lớp học', href: '/eduverse/lop-hoc' },
    { label: 'VyIQ', href: '/eduverse/vyiq' },
    { label: 'Chia sẻ kiến thức', href: '/eduverse/chia-se' },
  ]

  const tabsToUse = tabs || defaultTabs

  const isActive = (href: string) => {
    return pathname === href || pathname?.startsWith(href)
  }

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-8 gap-4">
          <div className="flex flex-wrap gap-6 justify-center">
            {tabsToUse.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  'text-lg font-semibold transition-colors px-4 py-2 rounded-lg',
                  isActive(tab.href)
                    ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                )}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
