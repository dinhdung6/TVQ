'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

interface HeroWithVideoProps {
  videoSrc: string
  tagline: string
  title: string
  subtitle: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  showScrollIndicator?: boolean
}

export function HeroWithVideo({
  videoSrc,
  tagline,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  showScrollIndicator = true,
}: HeroWithVideoProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        crossOrigin="anonymous"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Tagline */}
        {tagline && (
          <div className="mb-6 inline-block rounded-full bg-cyan-400/30 px-4 py-2 backdrop-blur-md border border-cyan-300/50">
            <p className="text-sm font-semibold tracking-widest text-cyan-200 uppercase">
              {tagline}
            </p>
          </div>
        )}

        {/* Main Title */}
        <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl text-balance drop-shadow-lg">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mb-8 max-w-2xl text-lg text-gray-100 md:text-xl text-balance drop-shadow-md">
            {subtitle}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row items-center justify-center mb-12">
          <Link href={primaryCta.href}>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-base font-semibold rounded-lg transition-colors shadow-lg">
              {primaryCta.text}
            </Button>
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href}>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/20 px-8 py-3 text-base font-semibold rounded-lg transition-colors shadow-lg backdrop-blur-sm bg-white/10"
              >
                {secondaryCta.text}
              </Button>
            </Link>
          )}
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-white/80" />
          </div>
        )}
      </div>
    </div>
  )
}
