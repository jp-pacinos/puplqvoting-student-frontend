import React from 'react'
import styles from './Input.module.css'

interface Props extends React.ComponentPropsWithRef<'input'> {
  //
}

const Input: React.FC<Props> = ({ type = 'text', className = '', ...rest }) => {
  return (
    <input
      type={type}
      className={`${className ? `${styles.input} ${className}` : styles.input}`}
      {...rest}
    />
  )
}

export default Input
