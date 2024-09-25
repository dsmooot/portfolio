'use client'
import { Body, Title } from '@/components/dom/common/Themed'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { CameraControls as _CameraControls } from 'three-stdlib'
import gsap from '@/core/lib/gsap'
import Footer from '@/components/dom/common/Footer'
import { useTransitionRouter } from 'next-transition-router'
import Button from '@/components/dom/common/Button'
import GitIcon from '@/components/dom/icons/GitIcon'
import EmailIcon from '@/components/dom/icons/EmailIcon'
import LinkedInIcon from '@/components/dom/icons/LinkedInIcon'
import { useDeviceType } from '@/core/hooks/useDeviceType'

const Contact = () => {
  const router = useTransitionRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const headerContainerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return
    const tl = gsap.timeline()
    gsap.set(containerRef.current, { opacity: 0 })
    gsap.set(headerContainerRef.current, { opacity: 0 })
    gsap.set('#info .char', { opacity: 0, x: -50 })
    gsap.set('#blurb', { opacity: 0, y: 50 })
    gsap.set('#resume', { opacity: 0, y: 50 })
    gsap.set(['#socials a'], { opacity: 0 })

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
      .to('#info .char', { x: 0, opacity: 1, duration: 0.1, stagger: 0.05, ease: 'ease.inOut' }, 0)
      .to('#blurb', { opacity: 1, y: 0, duration: 0.5, ease: 'power1.out' }, 0.5)
      .to('#resume', { opacity: 1, y: 0, duration: 0.5, ease: 'power1.out' }, 1)
      .to(['#socials a'], { opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power1.out' }, 1.5)
  }, [containerRef])
  return (
    <section ref={containerRef} className='relative flex h-screen w-full flex-col items-center'>
      <div className='flex w-full max-w-screen-xl flex-col items-start justify-center gap-y-4 p-4 md:gap-y-16 md:p-8 lg:p-16'>
        <div ref={headerContainerRef} className='relative flex w-full flex-row justify-center'>
          <div className='flex w-full flex-col gap-y-8'>
            <Title id='info'>
              <span className='char'>I</span>
              <span className='char'>N</span>
              <span className='char'>F</span>
              <span className='char'>O</span>
            </Title>
          </div>
        </div>
        <div className='flex w-full flex-row items-center justify-start'>
          <div>
            <Body id='blurb' style={{ lineHeight: 1.75 }}>
              {<b>{'Thanks for taking the time to view my portfolio.'}</b>}
              {
                '\nI’ve carefully curated these projects to showcase my skills and capabilities.\nI hope they give you a clear understanding of both my experience and potential. \nIf you’d like to learn more about my background or how I can contribute to your ideas,\n'
              }
              {<b>{'feel free to reach out!'}</b>}
              {
                '\nMy resume provides a comprehensive overview of my technical expertise and professional experience. \n'
              }
              <b>{'Actively seeking new opportunities'} </b>
              {' and would be '}
              <b>{'excited to connect.'}</b>
            </Body>
          </div>
        </div>
        <div className='flex w-full flex-col items-center justify-center gap-y-8 lg:flex-row lg:justify-between'>
          <a
            id={'resume'}
            href={'/'}
            //</div>href='/resume.pdf' download
          >
            <Button
              button={{ text: 'DOWNLOAD MY RESUME' }}
              className='min-w-[350px] border border-black bg-green-900/70 px-8'
            />
          </a>
          <div id='socials' className='flex w-full flex-row items-center justify-center gap-x-8 xl:w-1/2'>
            <a
              href='mailto:dustinsmoote@gmail.com'
              target='_blank'
              className='flex size-10 items-end justify-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-2 xl:size-16'
            >
              <EmailIcon />
            </a>
            <a
              className='flex size-10 items-center justify-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-2 xl:size-16'
              href='https://github.com/dsmooot'
              target='_blank'
            >
              <GitIcon />
            </a>
            <a
              href='https://www.linkedin.com/in/dustin-smoote/'
              target='_blank'
              className='flex size-10 items-center justify-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-2 xl:size-16'
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
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
            text: 'WORK',
            href: '/projects',
            onClick: () => {
              router.push('/projects')
            },
          },
        ]}
      />
    </section>
  )
}

export default Contact
