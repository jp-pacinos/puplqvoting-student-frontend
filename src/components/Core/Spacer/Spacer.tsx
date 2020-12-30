import React from 'react'
import styles from './Spacer.module.css'

interface Props {
  level?: number
  component?: React.ElementType
}

const Spacer: React.FC<Props> = ({ level = 1, component: Component = 'div' }) => {
  if (level > 3) {
    return <Component style={{ margin: `${level}em auto` }} />
  }

  return <Component className={styles[`level_${level}`]} />
}

export default Spacer
