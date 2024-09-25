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
  [key: string]: any
}
const Button = ({ button, className = '', ...props }: IButtonProps) => {
  const router = useTransitionRouter()
  return (
    <button
      className={cx(
        'h-[48px] w-[100px] overflow-hidden whitespace-nowrap rounded-full bg-black text-2xl font-semibold transition-all duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-2 hover:shadow-lg md:h-[64px] md:w-[200px]',
        className,
      )}
      onClick={async () => {
        if (button?.onClick) {
          button.onClick()
        }
        if (button.href) {
          router.push(button.href)
        }
      }}
      {...props}
    >
      <ButtonText>{button.text}</ButtonText>
    </button>
  )
}

export default Button
