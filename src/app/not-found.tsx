import React from 'react'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F2FE] via-[#f0f9ff] to-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto">
        {/* 404 number */}
        <div className="text-[10rem] font-extrabold leading-none text-[#00499E] mb-4">
          404
        </div>

        <h1 className="text-3xl font-bold text-[#0b1b4d] mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/"
            className="bg-gradient-to-r from-[#00499E] to-[#0075ba] text-white font-semibold px-8 py-4 rounded-xl inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <Home size={18} />
            Go Home
          </a>
        </div>
      </div>
    </div>
  )
}

