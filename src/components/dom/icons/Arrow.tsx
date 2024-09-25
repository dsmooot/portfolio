import React from 'react'

interface ArrowProps {
  direction?: 'up' | 'down' | 'left' | 'right'
  size?: number
  color?: string
}

const Arrow = ({ direction = 'right', size = 64, color = 'black' }: ArrowProps) => {
  const getRotation = () => {
    switch (direction) {
      case 'up':
        return 'rotate(-90 12 12)'
      case 'down':
        return 'rotate(90 12 12)'
      case 'left':
        return 'rotate(180 12 12)'
      case 'right':
      default:
        return 'rotate(0 12 12)'
    }
  }

  return (
    <svg width={size} height={size} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
      <path
        fill={color}
        transform={getRotation()}
        d='M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z'
      />
    </svg>
  )
}

export default Arrow
