import React from 'react'
import styles from './Content.module.css'

interface Props {
  children: React.ReactNode | null
  Component?: HTMLElement | any
}

const Content: React.FC<Props> = ({ children, Component = 'div', ...rest }) => {
  return (
    <Component className={styles.content} {...rest}>
      {children}
    </Component>
  )
}

export default Content
