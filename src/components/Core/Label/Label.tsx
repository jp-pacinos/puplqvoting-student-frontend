import React from 'react'
import styles from './Label.module.css'

interface Props extends React.ComponentPropsWithoutRef<'label'> {}

const Label: React.FC<Props> = (props) => {
  return <label className={styles.label} {...props} />
}

export default Label
