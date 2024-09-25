import { useState, useEffect } from 'react'

// Hook to detect mobile and tablet screens
export const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768) // Mobile devices typically under 768px
      setIsTablet(width >= 768 && width < 1024) // Tablets between 768px and 1024px
    }

    // Initial check on mount
    handleResize()

    // Listen for resize events
    window.addEventListener('resize', handleResize)

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { isMobile, isTablet }
}
