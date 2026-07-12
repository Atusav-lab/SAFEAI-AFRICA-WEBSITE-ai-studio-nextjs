'use client'

import React, { useEffect, useState, Component, ErrorInfo, ReactNode } from 'react'
import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <span className="loader" />
    </div>
  ),
})

interface ErrorBoundaryProps {
  fallback: ReactNode
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("SplineScene Error caught by boundary:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 0)
    return () => clearTimeout(timer)
  }, [])

  const fallback = (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-950 to-[#0b1b4d] overflow-hidden rounded-2xl">
      <div className="absolute w-72 h-72 rounded-full bg-[#00E5FF]/10 blur-3xl animate-pulse" />
      <div className="absolute w-48 h-48 rounded-full bg-[#0061B2]/20 blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 rounded-full border border-dashed border-[#00E5FF]/30 flex items-center justify-center animate-spin" style={{ animationDuration: '12s' }}>
          <div className="w-14 h-14 rounded-full border border-dotted border-[#00E5FF]/50 flex items-center justify-center animate-reverse-spin" style={{ animationDuration: '6s' }}>
            <div className="w-6 h-6 rounded-full bg-[#00E5FF]/10 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-ping" />
            </div>
          </div>
        </div>
        <div className="mt-4 font-bold text-white tracking-widest text-xs uppercase">SAFE AI CORE</div>
        <div className="text-[10px] text-[#00E5FF]/70 mt-1 uppercase tracking-wider">Responsible AI for Africa</div>
      </div>
    </div>
  )

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="loader" />
      </div>
    )
  }

  return (
    <ErrorBoundary fallback={fallback}>
      <Spline scene={scene} className={className} />
    </ErrorBoundary>
  )
}

