import React from 'react'
import './button.css'

type color = 'primary' | 'none'
type sizes = 'sm' | 'md' | 'lg'
type shadow = 'none' | sizes

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  color?: color
  size?: sizes
  shadow?: shadow
}

const Button: React.FC<Props> = ({
  color = 'none',
  size = 'md',
  shadow = 'md',
  className = '',
  children,
  ...rest
}) => {
  let btnClass = 'btn'

  switch (color) {
    case 'primary':
      btnClass += ' btn-primary'
      break
  }

  switch (size) {
    case 'sm':
      btnClass += ' btn-sm'
      break
    case 'md':
      btnClass += ' btn-md'
      break
    case 'lg':
      btnClass += ' btn-lg'
      break
  }

  switch (shadow) {
    case 'sm':
      break
    case 'md':
      break
    case 'lg':
      className += ' btn-shadow-lg'
      break
  }

  return (
    <button className={`${className ? `${btnClass} ${className}` : btnClass}`} {...rest}>
      {children}
    </button>
  )
}

export default Button
