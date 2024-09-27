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
        'h-[48px] w-[100px] overflow-hidden whitespace-nowrap rounded-full bg-black text-2xl font-semibold transition-all duration-300 ease-in-out md:h-[64px] md:w-[200px] xl:hover:-translate-y-1 xl:hover:translate-x-2 xl:hover:shadow-lg',
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
