import { useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

import Navbar from '../Navbar/Navbar'
import Hamburger from './Hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = () => {
  const [isOpen, setisOpen] = useState(false)

  const toggleMenu = () => {
    setisOpen(!isOpen)
  }

  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.inner)}>
        <Link href='/'>
          <img className={styles.logo} src='/logo.svg' alt='fingramota logo' />
        </Link>

        <Navbar isOpen={isOpen} />

        <Hamburger isOpen={isOpen} onToggleMenu={toggleMenu} />
      </div>
    </header>
  )
}

export default Header
