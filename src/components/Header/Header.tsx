import Link from 'next/link'
import classNames from 'classnames'

import NeonButton from '../NeonButton/NeonButton'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.inner)}>
        <Link href='/'>
          <img className={styles.logo} src='/logo.svg' alt='logo' />
        </Link>
        <nav className={styles.nav}>
          <Link href='/'>
            <a className={styles.nav_link}>Главная</a>
          </Link>
          <Link href='/profile'>
            <a className={styles.nav_link}>Профиль</a>
          </Link>
          <NeonButton href='/signup'>Войти / Регистрация</NeonButton>
        </nav>
      </div>
    </header>
  )
}

export default Header
