'use client'

import MainScene from '@/components/canvas/MainScene'
import dynamic from 'next/dynamic'
// import Pages from '../page'
import { Suspense } from 'react'
// import { NavigationEventsHandler } from './NavigationEventsHandler'
import { TransitionProvider } from '@/providers'
import { EventProvider } from '@/core/context/EventProvider'
const GlobalCanvas = dynamic(() => import('@/components/canvas/GlobalCanvas'), { ssr: false })

const Providers = ({ children }) => {
  return (
    <>
      <TransitionProvider>
        <EventProvider>{children}</EventProvider>
      </TransitionProvider>
    </>
  )
}

const Layout = ({ children }) => {
  return (
    <Suspense fallback={null}>
      <Providers>
        <GlobalCanvas>
          {/* <Pages /> */}
          <MainScene />
          {children}
        </GlobalCanvas>
      </Providers>
      {/* <NavigationEventsHandler /> */}
    </Suspense>
  )
}

export { Layout }
