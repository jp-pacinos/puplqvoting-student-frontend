import React, { createRef, CSSProperties } from 'react'
import { Transition } from 'react-transition-group'
import styles from './Snackbar.module.css'

const defaultStyle = {
  transition: `opacity 350ms ease-in-out, bottom 150ms ease-in-out`,
  opacity: 0,
  bottom: '-100px',
}

const transitionStyles: { [state: string]: CSSProperties } = {
  entering: { opacity: 1, bottom: '30px' },
  entered: { opacity: 1, bottom: '30px' },
  exiting: { opacity: 0, bottom: '-100px' },
  exited: { opacity: 0, bottom: '-100px' },
}

export interface SnackbarProps {
  text: string
  open: boolean
  duration?: number
  onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Snackbar: React.FC<SnackbarProps> = ({ text, open, duration = 0, onClose }) => {
  const button = createRef<HTMLButtonElement>()
  const div = createRef<HTMLDivElement>()

  if (duration > 0) {
    setTimeout(() => {
      button.current?.click()
    }, duration)
  }

  return (
    <Transition in={open} timeout={350} nodeRef={div}>
      {(state) => (
        <div
          className={`${styles.snackbar}`}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <p className={styles.content}>{text}</p>
          <button ref={button} className={styles.button} onClick={onClose}>
            Close
          </button>
        </div>
      )}
    </Transition>
  )
}

export default Snackbar
