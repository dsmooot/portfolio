import { useTransitionRouter } from 'next-transition-router'
import Button, { TButton } from './Button'
import useStore from '@/core/store'
import { usePathname } from 'next/navigation'

interface FooterProps {
  buttons: TButton[]
}

const Footer = ({ buttons = [] }: FooterProps) => {
  const { currentProject } = useStore((state) => ({
    currentProject: state.currentProject,
  }))
  const pathname = usePathname()
  return (
    <div className='fixed bottom-0 left-0 flex w-full flex-row items-center justify-center gap-x-8 pb-8 lg:justify-end lg:pr-24'>
      <div
        id='fadeout'
        className={`pointer-events-none absolute bottom-0 left-0 flex h-56 w-full items-end justify-start bg-gradient-to-t ${pathname.includes('/projects/') ? currentProject?.twFade : 'from-white'} via-30% to-transparent`}
      ></div>
      {buttons.map((button, index) => (
        <Button key={index} button={button} className='z-10 min-w-[150px] text-white' />
      ))}
    </div>
  )
}

export default Footer
