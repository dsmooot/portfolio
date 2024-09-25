'use client'
import { useRef, useEffect } from 'react'
import gsap, { useGSAP } from '@/core/lib/gsap'
import { useProgress } from '@react-three/drei'
import { Tagline } from './Themed'
import Button from './Button'
import { useEvent } from '@/core/context/EventProvider'

const LoadingScreen = () => {
  const { progress } = useProgress()
  const ballRef = useRef<HTMLDivElement>(null)
  const shadowRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { triggerEvent } = useEvent()

  useGSAP(() => {
    if (ballRef.current) {
      gsap.to(ballRef.current, {
        y: -20,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }
  }, [])

  useGSAP(() => {
    if (progress === 100) {
      gsap.to(containerRef.current, {
        backgroundColor: '#000',
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          containerRef.current.style.display = 'none'
          triggerEvent({ type: 'loaded' })
        },
      })
      return
    }
    const tl = gsap.timeline()
    if (progress === 100) {
      gsap.set('.start', { opacity: 0, y: 50 })
      tl.to(['.loading'], {
        opacity: 0,
        y: -50,
        stagger: 0.01,
        duration: 0.3,
        ease: 'power1.inOut',
      })
        .to(
          ballRef.current,
          {
            scale: 0,
            duration: 0.5,
            ease: 'power4.out',
            onComplete: () => {
              ballRef.current.style.display = 'none'
            },
          },
          0.5,
        )
        .to(
          shadowRef.current,
          {
            opacity: 0,
            y: -50,
            duration: 0.4,
            ease: 'power4.out',
            onComplete: () => {
              shadowRef.current.style.display = 'none'
            },
          },
          0.5,
        )
      // .to('.start', {
      //   opacity: 1,
      //   y: 0,
      //   duration: 0.3,
      //   ease: 'power1.inOut',
      // })
    }
  }, [progress])

  return (
    <div
      ref={containerRef}
      className={
        'pointer-events-none fixed z-10 flex size-full flex-col items-center justify-center overflow-hidden bg-[#082b23]'
      }
    >
      <div
        ref={ballRef}
        className='mb-16 rounded-full'
        style={{
          width: '100px',
          height: '100px',
          backgroundImage: "url('/img/waves-dark.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '0% 0%',
        }}
      />
      <div
        ref={shadowRef}
        className='bg-black'
        style={{
          width: '100px',
          height: '20px',
          bottom: '110px',
          filter: 'blur(8px)',
          opacity: 0.6,
        }}
      />
      <div className='mb-16 flex flex-col items-center justify-center gap-y-4'>
        <Tagline className='loading font-exo_2 text-white'>
          {'Loading: '} {progress.toFixed(0)}
        </Tagline>
        <div
          className='loading h-px w-full bg-white transition-all duration-75 ease-in-out'
          style={{
            width: `${progress}%`,
          }}
        ></div>
        {/* <div className='start flex flex-col items-center gap-y-4 opacity-0'>
          <Button button={{ text: 'Welcome', onClick: setStart }} className='bg-[#115a49] text-white shadow-lg' />
        </div> */}
      </div>
    </div>
  )
}

LoadingScreen.displayName = 'LoadingScreen'

export default LoadingScreen
