import { useTransitionRouter } from 'next-transition-router'
import cx from 'classnames'
import { ButtonText } from './Themed'

export type TButton = {
  text: string
  href?: string
  onClick?: () => void
}

interface IButtonProps {
  button: TButton
  className?: string
  as?: 'button' | 'link'
  download?: boolean
  [key: string]: any
}

const Button = ({ button, className = '', as = 'button', download = false, ...props }: IButtonProps) => {
  const router = useTransitionRouter()

  const handleClick = async () => {
    if (button?.onClick) {
      button.onClick()
    }
    if (button.href) {
      router.push(button.href)
    }
  }

  const commonClasses = cx(
    'h-[48px] w-[100px] flex items-center justify-center overflow-hidden whitespace-nowrap rounded-full bg-black text-2xl font-semibold transition-all duration-300 ease-in-out md:h-[64px] md:w-[200px] xl:hover:-translate-y-1 xl:hover:translate-x-2 xl:hover:shadow-lg',
    className,
  )

  if (as === 'link' && button.href) {
    return (
      <a href={button.href} className={commonClasses} download={download ? true : undefined} {...props}>
        <ButtonText>{button.text}</ButtonText>
      </a>
    )
  }

  return (
    <button className={commonClasses} onClick={handleClick} {...props}>
      <ButtonText>{button.text}</ButtonText>
    </button>
  )
}

export default Button
