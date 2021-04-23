import React from 'react'
import styles from './LinktoAdmin.module.css'

const adminUrl = process.env.REACT_APP_ADMIN_BASE_URL

interface LinkToAdminProps {}

const LinkToAdmin: React.FC<LinkToAdminProps> = () => {
  return (
    <div className={styles.root}>
      <p>
        Tip: Admin Dashboard{' '}
        <a href={adminUrl} rel="noreferrer external">
          click here
        </a>
        .
      </p>
    </div>
  )
}

export default LinkToAdmin
