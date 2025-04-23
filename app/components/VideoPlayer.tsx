'use client'

import { useEffect, useRef, useState } from 'react'

export default function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
    
    // Handle video playback
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Auto-play was prevented:', err)
      })
    }
  }, [])
  
  // Only render video on client to avoid hydration issues
  if (!isClient) {
    return <div className="w-full h-full bg-gray-100" />
  }
  
  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      className="w-full h-full object-cover pointer-events-none"
    />
  )
}