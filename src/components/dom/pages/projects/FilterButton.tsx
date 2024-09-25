import cx from 'classnames'

interface IButtonProps {
  children: React.ReactNode
  isActive?: boolean
  onClick?: () => void
  className?: string
}

export default function FilterButton({
  children,
  isActive,
  onClick = () => {},
  className = '',
  ...props
}: IButtonProps) {
  return (
    <button
      className={`w-[100px] rounded-full px-4 py-1 uppercase hover:bg-black hover:text-white ${isActive ? 'bg-black text-white' : 'border border-black bg-white text-black'} ${className}`}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
