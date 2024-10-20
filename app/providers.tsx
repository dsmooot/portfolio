'use client'

import { useRef } from 'react'
import gsap from '@/core/lib/gsap'
import { TransitionRouter } from 'next-transition-router'
import { useEvent } from '@/core/context/EventProvider'

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const overlay = useRef<HTMLDivElement | null>(null)
  const { triggerEvent } = useEvent()

  return (
    <TransitionRouter
      // auto={true}
      leave={(next, from, to) => {
        // console.log({ from, to })

        const tl = gsap.timeline({
          onComplete: next,
        })

        tl.fromTo(
          overlay.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: 'power1.inOut',
            onComplete: () => {
              if (to === '/') {
                triggerEvent({ type: 'loaded' })
              }
            },
          },
        )

        return () => {
          tl.kill()
        }
        // next()
      }}
      enter={(next) => {
        const tl = gsap.timeline()

        tl.fromTo(
          overlay.current,
          { opacity: 1 },
          {
            opacity: 0,
            duration: 0.5,
            ease: 'power1.inOut',
            onComplete: next,
          },
        )

        return () => {
          tl.kill()
        }
        // next()
      }}
    >
      <main className='relative size-full'>{children}</main>

      <div ref={overlay} className='pointer-events-none fixed inset-0 z-50 bg-black' style={{ opacity: 0 }} />
    </TransitionRouter>
  )
}
