'use client'

import MainScene from '@/components/canvas/MainScene'
import dynamic from 'next/dynamic'
import { Suspense, useEffect, useLayoutEffect } from 'react'
import { TransitionProvider } from '@/providers'
import { EventProvider, useEvent } from '@/core/context/EventProvider'
import LoadingScreen from './LoadingScreen'
const GlobalCanvas = dynamic(() => import('@/components/canvas/GlobalCanvas'), { ssr: false })

const Providers = ({ children }) => {
  return (
    <>
      <EventProvider>
        <TransitionProvider>{children}</TransitionProvider>
      </EventProvider>
    </>
  )
}

const NavigationEventHandler = () => {
  const { triggerEvent } = useEvent()
  const handlePopState = () => {
    triggerEvent({ type: 'loaded' })
  }

  useLayoutEffect(() => {
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])
  return <></>
}

const Layout = ({ children }) => {
  useEffect(() => {
    console.log('TEST -> GTAG:', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID)
  }, [])
  return (
    <Suspense fallback={null}>
      <Providers>
        <NavigationEventHandler />
        <LoadingScreen />
        <GlobalCanvas>
          <MainScene />
          {children}
        </GlobalCanvas>
      </Providers>
    </Suspense>
  )
}

export { Layout }
