import React from 'react'
import styles from './CircleLoading.module.css'
import './CircleLoading.module.css'

interface Props {}

const CircleLoading: React.FC<Props> = () => {
  return (
    <div className={styles.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default CircleLoading
