import classNames from 'classnames'
import Link from 'next/link'

import Navbar from '../Navbar/Navbar'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.inner)}>
        <Link href='/'>
          <img className={styles.logo} src='/logo.svg' alt='fingramota logo' />
        </Link>

        <Navbar />
      </div>
    </header>
  )
}

export default Header
