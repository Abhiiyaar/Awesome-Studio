'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
          <p className="mb-4 text-gray-600">This might be caused by a browser extension interfering with the page.</p>
          <button
            onClick={() => reset()}
            className="bg-black text-white px-6 py-3 rounded-full"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}