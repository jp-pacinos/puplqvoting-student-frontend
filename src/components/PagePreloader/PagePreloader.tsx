import React from 'react'
import styles from './Pageloader.module.css'
import CircleLoading from 'components/Core/CircleLoading'

interface Props {}

const PagePreloader: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <CircleLoading />
    </div>
  )
}

export default PagePreloader
