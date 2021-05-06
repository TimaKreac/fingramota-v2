import Link from 'next/link'
import classNames from 'classnames'

import NeonButton from '../NeonButton/NeonButton'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.inner)}>
        <Link href='/'>
          <img className={styles.logo} src='/logo.svg' alt='logo' />
        </Link>
        <nav className={styles.nav}>
          <Link href='/profile'>
            <a className={styles.nav_link}>Профиль</a>
          </Link>
          {/* <Link href='/logout'>
            <a className={styles.nav_link}>Выйти</a>
          </Link> */}
          <Link href='/logout'>
            <NeonButton className={styles.nav_link}>
              Войти / Регистрация
            </NeonButton>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
