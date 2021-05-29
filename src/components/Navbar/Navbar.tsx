import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import classNames from 'classnames'

import NeonButton from '../NeonButton/NeonButton'
import styles from './Navbar.module.scss'
import Hamburger from './Hamburger/Hamburger'
import ThemeButton from '../ThemeButton/ThemeButton'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

const Navbar: React.FC = () => {
  const router = useRouter()
  const [isOpen, setisOpen] = useState(false)

  const toggleMenu = () => {
    setisOpen(!isOpen)
  }

  const { loggedIn } = useTypedSelector((state) => state.user)
  const { userSignOut } = useActions()

  const onSignOut = async (e: React.MouseEvent) => {
    e.preventDefault()
    await userSignOut()
    router.push('/signin')
  }

  return (
    <>
      <nav
        className={classNames(styles.nav, {
          [styles.menu]: isOpen,
        })}
      >
        <ThemeButton />

        <Link href='/'>
          <a
            className={classNames(styles.nav_link, {
              [styles.active]: router.pathname === '/',
            })}
          >
            Главная
          </a>
        </Link>

        {loggedIn && (
          <>
            <Link href='/profile'>
              <a
                className={classNames(styles.nav_link, {
                  [styles.active]: router.pathname === '/profile',
                })}
              >
                Профиль
              </a>
            </Link>
            <a className={styles.nav_link} onClick={onSignOut}>
              Выйти
            </a>
          </>
        )}

        {!loggedIn && isOpen && (
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

        {!loggedIn && !isOpen && (
          <NeonButton href='/signin'>Войти / Регистрация</NeonButton>
        )}
      </nav>
      <Hamburger isOpen={isOpen} onToggleMenu={toggleMenu} />
    </>
  )
}

export default Navbar
