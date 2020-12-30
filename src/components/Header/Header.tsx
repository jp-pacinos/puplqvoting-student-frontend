import React, { memo } from 'react'
import Container from 'components/Core/Container'
import styles from './Header.module.css'
import Logo from 'assets/img/puplogo.png'

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_container}>
          <div className={styles.brand}>
            <a href="/">
              <img
                src={Logo}
                alt="pup logo"
                height={48}
                width={48}
                className={styles.logo}
              />
            </a>
            <h1>CENTRAL STUDENT COUNCIL</h1>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default memo(Header)
