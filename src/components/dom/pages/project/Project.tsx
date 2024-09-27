'use client'
import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from '@/core/lib/gsap'
import { projects } from '@/core/data/projects'
import Carousel from '@/components/dom/common/Carousel/Carousel'
import Footer from '@/components/dom/common/Footer'
import Button from '@/components/dom/common/Button'
import { Body, Subtitle, Tagline, Title } from '@/components/dom/common/Themed'
import useStore from '@/core/store'
import { useScrollbar } from '@14islands/r3f-scroll-rig'

const Project = ({ params }: { params: { project: string } }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const _currentProject = projects[params.project]
  const { currentProject, setCurrentProject } = useStore((state) => ({
    currentProject: state.currentProject,
    setCurrentProject: state.setCurrentProject,
  }))

  const { __lenis } = useScrollbar()

  useLayoutEffect(() => {
    if (!__lenis) return
    __lenis.resize()
    __lenis.scrollTo(0)
  }, [__lenis])

  useLayoutEffect(() => {
    if (!currentProject) {
      setCurrentProject(_currentProject)
    }
  }, [currentProject, setCurrentProject, _currentProject])

  useEffect(() => {
    if (!containerRef.current) return
    const tl = gsap.timeline()
    gsap.set(containerRef.current, { opacity: 0 })
    gsap.set(['.char', '.stack-item'], { opacity: 0, x: -50 })
    gsap.set('#carousel', { opacity: 0, scale: 0.8 })
    gsap.set(['#tagline', '#summary', '#contributions-header', '#contributions-text'], { opacity: 0, y: 50 })

    tl.to(
      containerRef.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out',
      },
      0.5,
    )
      .to('#carousel', { opacity: 1, scale: 1, duration: 0.3, ease: 'power1.inOut' }, 0.5)
      .to('.char', { x: 0, opacity: 1, duration: 0.1, stagger: 0.05, ease: 'ease.inOut' }, 0.7)
      .to('.stack-item', { x: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: 'power1.inOut' }, 0.8)
      .to(
        ['#tagline', '#summary', '#contributions-header', '#contributions-text'],
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, ease: 'power1.inOut' },
        1.2,
      )
  }, [containerRef])

  if (!_currentProject) {
    return null
  }

  return (
    <div ref={containerRef} className='relative flex w-full flex-col p-8 lg:gap-y-8 lg:p-16 xl:items-center'>
      {_currentProject.href && (
        <div className='fixed right-0 top-0 z-50 flex w-full justify-end pr-8 pt-8 lg:pr-16'>
          <Button
            button={{
              text: 'Visit Site →',
              onClick: () => {
                window.open(_currentProject.href, '_blank')
              },
            }}
            className='min-w-[120px] border border-black bg-white text-black transition-all duration-300 ease-in-out xl:bg-transparent xl:hover:bg-white xl:hover:shadow-lg'
          />
        </div>
      )}
      <div className={`mb-8 flex w-full max-w-screen-xl flex-col gap-y-4 md:mb-12 lg:mt-auto lg:gap-y-8 xl:mb-16`}>
        <div className='flex flex-col gap-y-4'>
          <Title>
            {_currentProject.title.split('').map((char, index) => (
              <span key={index} className='char'>
                {char}
              </span>
            ))}
          </Title>
          <div className='flex flex-col gap-x-2 text-2xl xl:flex-row xl:items-center xl:gap-x-4'>
            <span className='stack-item mb-1 font-semibold'>{'Stack: '}</span>
            <div className='flex flex-row flex-wrap gap-x-2'>
              {_currentProject.stack.map((stack, index) => (
                <Tagline className={'stack-item'} key={index}>
                  {stack}
                  {index !== _currentProject.stack.length - 1 && <span>{', '}</span>}
                </Tagline>
              ))}
            </div>
          </div>
        </div>
        <div id='carousel' className='mb-4 xl:mb-8'>
          <Carousel />
        </div>
        <Subtitle id='tagline' className='font-exo_2 text-2xl font-bold'>
          {_currentProject.tagline}
        </Subtitle>
        <Body id='summary' className={`w-full whitespace-pre-line text-xl font-medium`}>
          {_currentProject.summary}
        </Body>
        <Subtitle id='contributions-header' className='font-exo_2 text-2xl font-bold'>
          MY CONTRIBUTIONS:
        </Subtitle>
        <Body id='contributions-text' className={`mb-24 w-full whitespace-pre-line text-xl font-medium`}>
          {_currentProject.contributions}
        </Body>
      </div>
      <Footer
        buttons={[
          {
            text: 'WORK',
            href: '/projects',
          },
          {
            text: 'INFO',
            href: '/info',
          },
        ]}
      />
    </div>
  )
}

export default Project
