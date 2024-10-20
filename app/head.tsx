const title = `Dustin Smoote`
const url = 'https://www.dustinsmoote.com'
const description = `Dustin Smoote's Dev Portfolio`
const author = 'Dustin Smoote'

export default function Head() {
  return (
    <>
      {/* Meta Tags */}
      <meta charSet='utf-8' />
      <meta name='language' content='english' />
      <meta httpEquiv='content-type' content='text/html' />
      <meta name='author' content={author} />
      <meta name='designer' content={author} />
      <meta name='publisher' content={author} />

      <title>{title}</title>
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content='Dustin Smoote, Dustin, Smoote, Front-End Developer, Web Developer, R3F, React-Three-Fiber, Threejs, Nextjs, Typescript, JavaScript, React, HTML, CSS, Tailwind CSS, Interactive Experiences, Portfolio, Creative Developer, Responsive Design, UI/UX, Digital Nomad, Remote Developer, Web Design, GSAP, Web Animation, Frontend Engineer'
      />
      <meta name='robots' content='index,follow' />
      <meta name='distribution' content='web' />

      {/* Open Graph Meta Tags */}
      <meta property='og:title' content={title} />
      <meta property='og:type' content='site' />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={title} />
      <meta property='og:description' content={description} />

      {/* Twitter Meta Tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@DustinSmoote' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={`${url}/icons/waves-dark-twitter.png`} />

      {/* Favicon Links */}
      <link rel='icon' sizes='16x16' href='/icons/favicon-16x16.png' />
      <link rel='icon' sizes='32x32' href='/icons/favicon-32x32.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
      <link rel='shortcut icon' href='/icons/favicon.ico' />

      {/* Manifest */}
      <link rel='manifest' href='/manifest.json' />

      <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
      <meta name='theme-color' content='#000000' />
    </>
  )
}
