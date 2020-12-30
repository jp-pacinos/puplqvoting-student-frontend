import React from 'react'
import styles from './ImageBox.module.css'

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  name: string
  isHighlighted: boolean
  imageSrc: string | null | undefined
}

const ImageBox: React.FC<Props> = ({
  name,
  isHighlighted,
  imageSrc,
  onClick,
  ...rest
}) => {
  let hasImage = imageSrc ? true : false

  let containerClass = hasImage
    ? styles.container
    : `${styles.container} ${styles.container_image}`

  containerClass +=
    isHighlighted && !hasImage ? `${containerClass} ${styles.highlight}` : ''

  return (
    <div className={containerClass} onClick={onClick} {...rest}>
      {hasImage ? (
        <img
          src={imageSrc as string}
          alt={name}
          className={`${styles.image} ${isHighlighted ? styles.highlight : ''}`}
        />
      ) : null}
    </div>
  )
}

export default ImageBox
