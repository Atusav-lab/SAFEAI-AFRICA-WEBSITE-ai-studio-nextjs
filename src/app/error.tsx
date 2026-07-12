'use client'

import React from 'react'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>An error occurred!</h2>
      <button onClick={() => reset()} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
        Try again
      </button>
    </div>
  )
}
