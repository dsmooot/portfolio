'use client'

import { CameraControls as _CameraControls } from 'three-stdlib'
import gsap, { useGSAP } from '@/core/lib/gsap'
import { useLayoutEffect, useMemo, useRef } from 'react'
import { useEvent } from '@/core/context/EventProvider'
import Button from '@/components/dom/common/Button'
import { Body, Tagline, Title } from '@/components/dom/common/Themed'
import { useDeviceType } from '@/core/hooks/useDeviceType'

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { eventData, triggerEvent } = useEvent()
  const { isMobile, isTablet } = useDeviceType()
  const tlRef = useRef(null)

  const loaded = useMemo(() => {
    if (eventData) return eventData.type === 'loaded'
  }, [eventData])

  const handleLeave = () => {
    return new Promise((resolve) => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.7,
        ease: 'power1.inOut',
        onStart: () => {
          triggerEvent({
            type: 'home-transition-out',
          })
        },
        onComplete: resolve,
      })
    })
  }

  useGSAP(() => {
    if (!containerRef.current) return
    tlRef.current = gsap.timeline()
    tlRef.current.to(containerRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
      onStart: () => {
        triggerEvent({
          type: 'home-transition-in',
        })
      },
    })

    if (!loaded) return

    gsap.set('#dustin .char:not(.char-d)', { opacity: 0, x: -50 })
    gsap.set('#smoote .char:not(.char-s)', { opacity: 0, x: -50 })
    gsap.set('#smoote', { x: isMobile ? -35 : isTablet ? -24 : 0, y: isMobile ? -40 : isTablet ? -60 : -96 })
    gsap.set('#tagline', { opacity: 0, x: 150, width: 8 })
    gsap.set('#tagline .char:not(.char-t)', { display: 'none', opacity: 0 })
    gsap.set('#about', { opacity: 0, y: 50 })
    gsap.set('#buttons', { opacity: 0 })
    gsap.set('.cta', {
      width: '64px', // Small width for the circle
      opacity: 0,
    })
    gsap.set('#fadeout', { opacity: 0 })

    tlRef.current
      .to('#smoote', { y: 0, duration: 0.1, ease: 'ease.inOut' }, 0.5)
      .to('#dustin .char:not(.char-d)', { x: 0, opacity: 1, duration: 0.1, stagger: 0.05, ease: 'ease.inOut' }, 0.7)
      .to('#smoote .char:not(.char-s)', { x: 0, opacity: 1, duration: 0.1, stagger: 0.05, ease: 'ease.inOut' }, 0.7)
      .to('#tagline', { opacity: 1, duration: 0.3, ease: 'power3.inOut' }, 0.8)
      .to('#tagline', { x: 0, duration: 0.3, ease: 'ease.inOut' }, 1)
      .to(
        '#tagline .char:not(.char-t)',
        { display: 'inline', opacity: 1, duration: 0.1, stagger: 0.01, ease: 'ease.inOut' },
        1,
      )
      .to('#fadeout', { opacity: 1, duration: 0.3, ease: 'ease.inOut' }, 1.1)
      .to('#about', { opacity: 1, y: 0, duration: 0.3, ease: 'ease.inOut' }, 1.1)
      .set('#buttons', { opacity: 1 })
      .to(
        '.cta',
        {
          width: isMobile ? '200px' : '250px',
          // borderRadius: '100px',
          opacity: 1,
          duration: 0.5,
          ease: 'power3.inOut',
          stagger: 0.1,
        },
        1.1,
      )
      .to(
        '.cta',
        {
          color: 'white',
          duration: 0.5,
          ease: 'power1.inOut',
        },
        1.2,
      )
  }, [isMobile, loaded])

  return (
    <div ref={containerRef} className='relative flex size-full flex-col opacity-0'>
      <section
        id='hero'
        className='relative flex size-full items-center justify-center gap-x-4 p-4 md:p-8 lg:gap-x-16 lg:p-16'
      >
        <div
          id='fadeout'
          className='absolute -bottom-4 left-0 z-0 h-[50%] w-full bg-gradient-to-t from-[#e3e3de] via-80% to-transparent md:h-[30vh] xl:h-[25vh] xl:via-60%'
        ></div>
        <div className='relative flex size-full max-w-screen-xl flex-col justify-between'>
          <div className='flex w-full flex-col items-start justify-start'>
            <Title id='dustin'>
              <span className='char char-d'>D</span>
              <span className='char'>U</span>
              <span className='char'>S</span>
              <span className='char'>T</span>
              <span className='char'>I</span>
              <span className='char'>N</span>
            </Title>
            <Title id='smoote' className='pl-16'>
              <span className='char char-s'>S</span>
              <span className='char'>M</span>
              <span className='char'>O</span>
              <span className='char'>O</span>
              <span className='char'>T</span>
              <span className='char'>E</span>
            </Title>
            <Tagline id='tagline' className='whitespace-nowrap pl-32 text-3xl font-medium lg:pl-80'>
              <span className='char char-t'>{'['}</span>
              <span className='char'>C</span>
              <span className='char'>R</span>
              <span className='char'>E</span>
              <span className='char'>A</span>
              <span className='char'>T</span>
              <span className='char'>I</span>
              <span className='char'>V</span>
              <span className='char'>E</span>
              <span className='char'> </span>
              <span className='char'>D</span>
              <span className='char'>E</span>
              <span className='char'>V</span>
              <span className='char'>E</span>
              <span className='char'>L</span>
              <span className='char'>O</span>
              <span className='char'>P</span>
              <span className='char'>E</span>
              <span className='char'>R</span>
              <span className='char char-t'>{']'}</span>
            </Tagline>
          </div>
          <div className='flex w-full flex-col items-start justify-start gap-y-8 xl:gap-y-16'>
            <div id='about' className='flex w-full flex-col items-start justify-start'>
              <Body className='z-10 w-full max-w-[700px]'>
                {`Digital Nomad and Web Developer dedicated to creating interactive and engaging digital experiences. Continually learning through experimentation and iteration.`}
              </Body>
              <Body className='z-10 w-full max-w-[600px]'>
                <b>{'Available for new opportunities to collaborate, create, and innovate.'}</b>
              </Body>
            </div>
            <ul
              id='buttons'
              className='z-10 flex w-full max-w-[700px] flex-col items-center gap-y-4 md:flex-row md:justify-end md:gap-x-8 md:pr-8'
            >
              <li>
                <Button
                  button={{
                    text: 'VIEW MY WORK',
                    href: '/projects',
                    onClick: async () => {
                      await handleLeave()
                    },
                  }}
                  className='cta rounded-full text-white'
                />
              </li>
              <li>
                <Button
                  button={{
                    text: 'GET IN TOUCH',
                    href: '/info',
                    onClick: async () => {
                      await handleLeave()
                    },
                  }}
                  className='cta rounded-full text-white'
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
