// components/Video.tsx
import React from 'react'

type VideoProps = {
  src: string
  poster?: string
  autoplay?: boolean
  controls?: boolean
  loop?: boolean
}

const Video: React.FC<VideoProps> = ({ src, poster, autoplay = false, controls = true, loop = false }) => {
  return (
    <div className='flex size-full flex-row items-center justify-center bg-black/30'>
      <video
        className='size-full'
        src={src}
        poster={poster}
        autoPlay={autoplay}
        controls={controls}
        loop={loop}
        muted={autoplay}
      />
    </div>
  )
}

export default Video
