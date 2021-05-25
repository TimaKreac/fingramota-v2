import React from 'react'
import Navbar from '../Navbar/Navbar'

import styles from './Layout.module.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <main className={styles.main}>
      <Navbar />
      {children}
    </main>
  )
}

export default Layout
