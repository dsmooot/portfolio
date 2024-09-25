'use client'

import { MutableRefObject, ReactNode, useRef } from 'react'
import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'
import { useDeviceType } from '@/core/hooks/useDeviceType'
interface SceneProps {
  children: ReactNode
}
export default function Scene({ children, ...props }: SceneProps) {
  const eventSource = useRef(null)
  const { isMobile } = useDeviceType()

  return (
    <div className='relative size-full' ref={eventSource}>
      <GlobalCanvas
        // globalRender={false}
        // scaleMultiplier is a scroll-rig setting to scale the entire scene
        scaleMultiplier={0.001}
        camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 8] }}
        gl={{ antialias: true }}
        // All other props on the R3F Canvas is supported:
        eventSource={eventSource as MutableRefObject<HTMLElement>}
        eventPrefix='client'
        style={{ pointerEvents: 'none', zIndex: -1, backgroundColor: '#fcfcf4' }}
        // style={{ pointerEvents: 'none', zIndex: -1, backgroundColor: '#292926' }}
      >
        {(globalChildren) => <>{globalChildren}</>}
      </GlobalCanvas>
      <SmoothScrollbar>{() => <>{children}</>}</SmoothScrollbar>
    </div>
  )
}
