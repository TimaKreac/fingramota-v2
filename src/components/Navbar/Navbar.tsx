import { useRouter } from 'next/router'
import Link from 'next/link'
import classNames from 'classnames'
import NeonButton from '../NeonButton/NeonButton'

import styles from './Navbar.module.scss'

interface Props {
  isOpen: boolean
}

const Navbar: React.FC<Props> = ({ isOpen }) => {
  const router = useRouter()

  return (
    <nav
      className={classNames(styles.nav, {
        [styles.menu]: isOpen,
      })}
    >
      <Link href='/'>
        <a
          className={classNames(styles.nav_link, {
            [styles.active]: router.pathname === '/',
          })}
        >
          Главная
        </a>
      </Link>
      <Link href='/profile'>
        <a
          className={classNames(styles.nav_link, {
            [styles.active]: router.pathname === '/profile',
          })}
        >
          Профиль
        </a>
      </Link>
      {isOpen && (
        <>
          <Link href='/signin'>
            <a
              className={classNames(styles.nav_link, {
                [styles.active]: router.pathname === '/signin',
              })}
            >
              Войти в аккаунт
            </a>
          </Link>
          <Link href='/signup'>
            <a
              className={classNames(styles.nav_link, {
                [styles.active]: router.pathname === '/signup',
              })}
            >
              Зарегистрироваться
            </a>
          </Link>
        </>
      )}

      {!isOpen && <NeonButton href='/signin'>Войти / Регистрация</NeonButton>}
    </nav>
  )
}

export default Navbar
