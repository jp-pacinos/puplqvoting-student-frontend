import React from 'react'
import styles from './Container.module.css'

interface Props {
  children: React.ReactNode | null
}

const Container: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Container
