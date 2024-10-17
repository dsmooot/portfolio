'use client'
import { CameraControls as _CameraControls } from 'three-stdlib'
import gsap, { useGSAP } from '@/core/lib/gsap'
import ProjectList from '@/components/dom/pages/projects/ProjectsList'
import { useLayoutEffect, useRef, useState } from 'react'
import { useScrollbar } from '@14islands/r3f-scroll-rig'
import { TCategory } from '@/core/data/projects'
import Footer from '@/components/dom/common/Footer'
import { useTransitionRouter } from 'next-transition-router'
import { Title } from '@/components/dom/common/Themed'
import { useDeviceType } from '@/core/hooks/useDeviceType'

const Projects = () => {
  const router = useTransitionRouter()
  const { __lenis } = useScrollbar()
  const [selectedCategory, setSelectedCategory] = useState<TCategory | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const headerContainerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const [once, setOnce] = useState(false)
  const { isMobile, isTablet } = useDeviceType()

  useLayoutEffect(() => {
    if (!__lenis) return
    __lenis.resize()
    if (!headerContainerRef.current || !listRef.current) return
    const headerOffset = isMobile ? 132 : isTablet ? 148 : 100
    const headerHeight = headerContainerRef.current.getBoundingClientRect().height + headerOffset
    const listItems = listRef.current.querySelectorAll('li')

    const onScroll = () => {
      listItems.forEach((item) => {
        const itemRect = item.getBoundingClientRect()
        const opacity = itemRect.top + itemRect.height < headerHeight ? 0 : 1
        gsap.to(item, { opacity, duration: 0.3, ease: 'power1.out' })
        const parent = item.parentElement
        gsap.to(parent, { opacity, duration: 0.3, ease: 'power1.out' })
      })
    }

    __lenis.on('scroll', onScroll)

    __lenis.scrollTo(0)

    return () => {
      __lenis.off('scroll', onScroll)
    }
  }, [__lenis, isMobile, isTablet, selectedCategory])

  useGSAP(() => {
    if (!once) return
    gsap.set(['.list-item'], { opacity: 0, y: 50 })
    gsap.to(['.list-item'], {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power1.out',
    })
  }, [once, selectedCategory])

  useGSAP(() => {
    if (!containerRef.current) return
    const tl = gsap.timeline()
    gsap.set(containerRef.current, { opacity: 0 })
    gsap.set(headerContainerRef.current, { opacity: 0, backgroundColor: '#ffffff00' })
    gsap.set(headerRef.current, { opacity: 0 })
    gsap.set('#work .char', { opacity: 0, x: -50 })
    gsap.set(['.filter'], { opacity: 0, x: -50 })
    gsap.set('#divider', { opacity: 0, width: 0 })
    gsap.set(listRef.current, { opacity: 0, pointerEvents: 'none' })
    gsap.set(['.list-item'], {
      opacity: 0,
      y: 50,
    })
    gsap.set('#fadeout', { opacity: 0 })

    tl.to(
      containerRef.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out',
      },
      0,
    )
      .to(
        headerContainerRef.current,
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power1.out',
        },
        0,
      )
      .to('#work .char', { x: 0, opacity: 1, duration: 0.1, stagger: 0.05, ease: 'ease.inOut' }, 0)
      .to(headerRef.current, { opacity: 1, duration: 0.1, ease: 'power1.out' }, 0)
      .to(['.filter'], { opacity: 1, x: 0, duration: 0.1, stagger: 0.1, ease: 'ease.inOut' }, 0.3)
      .to('#divider', { opacity: 1, width: '100%', duration: 0.5, ease: 'power4.inOut' }, 0.4)
      .to('#fadeout', { opacity: 1, duration: 0.5, ease: 'power1.out' }, 0.5)

      .to(
        listRef.current,
        {
          opacity: 1,
          duration: 0.1,
          ease: 'power1.out',
        },
        0.5,
      )
      .to(
        ['.list-item'],
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power1.out',
          onStart: () => {
            gsap.set(listRef.current, { pointerEvents: 'auto' })
            setOnce(true)
          },
        },
        0.5,
      )

    if (isMobile || isTablet) {
      tl.to(
        headerContainerRef.current,
        {
          backgroundColor: '#fcfcf4',
          duration: 3,
          ease: 'ease.inOut',
        },
        0,
      )
    }
  }, [containerRef, isMobile, isTablet])

  const toggleGradient = () => {
    gsap.to('#fadeout', {
      opacity: 0,
      duration: 0.5,
      ease: 'power1.out',
    })
  }

  return (
    <section id='projects' ref={containerRef} className='relative flex h-screen w-full flex-col items-center'>
      <div className='flex w-full flex-col items-start justify-center gap-x-16 p-4 md:p-8 lg:p-16'>
        <div
          ref={headerContainerRef}
          className='fixed left-0 top-0 z-10 flex w-full flex-row justify-center bg-[#fcfcf4] px-2 pt-4 sm:pr-4 md:px-8 md:pt-16 lg:px-16 xl:bg-transparent xl:px-0 xl:pt-16'
        >
          <div className='flex w-full max-w-screen-xl flex-col gap-y-8'>
            <Title id='work'>
              <span className='char'>W</span>
              <span className='char'>O</span>
              <span className='char'>R</span>
              <span className='char'>K</span>
            </Title>
            <ProjectList.Header
              ref={headerRef}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>
        <div className='my-[9.5rem] flex w-full flex-col items-center md:my-48 lg:my-64'>
          <ProjectList.List ref={listRef} selectedCategory={selectedCategory} toggleGradient={toggleGradient} />
        </div>
      </div>
      <div
        id='fadeout'
        className='pointer-events-none fixed bottom-0 left-0 flex h-64 w-full items-end justify-start bg-gradient-to-t from-[#e3e3de] to-transparent'
      ></div>
      {/* <div className='fixed bottom-0 left-0 w-full h-[16rem] flex justify-start items-end pointer-events-none bg-gradient-to-t from-[#41413f] to-transparent'></div> */}
      <Footer
        buttons={[
          {
            text: 'HOME',
            href: '/',
            onClick: () => {
              router.push('/')
            },
          },
          {
            text: 'INFO',
            href: '/info',
            onClick: () => {
              router.push('/info')
            },
          },
        ]}
      />
    </section>
  )
}

export default Projects
