import { Layout } from '@/components/dom/common/Layout'
import '@/global.css'
import '@/components/dom/common/Carousel/embla.css'
import Head from './head'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: 'DUSTIN SMOOTE',
  description: 'Dustin Smoote',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
      </body>
      <GoogleAnalytics gaId={'G-H0BM7VB4LE'} />
    </html>
  )
}
