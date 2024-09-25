import cx from 'classnames'
import { forwardRef } from 'react'

type TBaseTextElement = HTMLSpanElement | HTMLHeadingElement | HTMLParagraphElement | HTMLAnchorElement
type TBaseTextAs = 'span' | 'h1' | 'h2' | 'p' | 'a'
export type TTextProps = React.HTMLAttributes<TBaseTextElement> & {
  as?: TBaseTextAs
}

const BaseText = forwardRef<TBaseTextElement, TTextProps>(({ children, as = 'span', className, ...rest }, ref) => {
  const Component = as
  return (
    <Component ref={ref as any} className={`font-exo_2 ${className}`} {...rest}>
      {children}
    </Component>
  )
})

BaseText.displayName = 'BaseText'

const Title = forwardRef<TBaseTextElement, TTextProps>(({ className, ...rest }, ref) => (
  <BaseText
    className={cx('text-4xl font-bold uppercase text-black md:text-6xl lg:text-8xl', className)}
    as='h1'
    {...rest}
    ref={ref}
  />
))
Title.displayName = 'Title'
export { Title }

const Subtitle = forwardRef<TBaseTextElement, TTextProps>(({ className, ...rest }, ref) => (
  <BaseText
    className={cx('text-2xl font-bold uppercase text-black md:text-4xl xl:text-6xl', className)}
    as='h2'
    {...rest}
    ref={ref}
  />
))
Subtitle.displayName = 'Subtitle'
export { Subtitle }

const Body = forwardRef<TBaseTextElement, TTextProps>(({ className, ...rest }, ref) => (
  <BaseText
    className={cx(
      'text-md whitespace-pre-line text-gray-900 md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl',
      className,
    )}
    as='p'
    style={{ lineHeight: 1.5 }}
    {...rest}
    ref={ref}
  />
))
Body.displayName = 'Body'
export { Body }

const Tagline = forwardRef<TBaseTextElement, TTextProps>(({ className, ...rest }, ref) => (
  <BaseText
    className={cx('text-base uppercase tracking-wider md:text-xl lg:text-2xl', className)}
    as='p'
    {...rest}
    ref={ref}
  />
))
Tagline.displayName = 'Tagline'
export { Tagline }

const ButtonText = forwardRef<TBaseTextElement, TTextProps>(({ className, ...rest }, ref) => (
  <BaseText className={cx('text-lg font-medium lg:text-2xl', className)} as='span' {...rest} ref={ref} />
))
ButtonText.displayName = 'ButtonText'
export { ButtonText }

const ListItemDescription = forwardRef<TBaseTextElement, TTextProps>(({ className, ...rest }, ref) => (
  <BaseText
    className={cx('whitespace-pre-line text-lg font-medium xl:text-2xl', className)}
    as='p'
    {...rest}
    ref={ref}
  />
))
ListItemDescription.displayName = 'ListItemDescription'
export { ListItemDescription }

const ListItemStack = forwardRef<TBaseTextElement, TTextProps>(({ className, ...rest }, ref) => (
  <BaseText
    className={cx('whitespace-pre-line text-lg font-semibold lg:text-xl', className)}
    as='p'
    {...rest}
    ref={ref}
  />
))
ListItemStack.displayName = 'ListItemStack'
export { ListItemStack }
