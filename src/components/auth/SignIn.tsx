import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Input from '../Input/Input'

import styles from './Auth.module.scss'

interface userInfo {
  email: string
  password: string
}

interface Props {
  onSignIn: (userInfo: userInfo, cb?: () => void) => void
}

const SignIn: React.FC<Props> = ({ onSignIn }) => {
  const router = useRouter()
  const [email, setEmail] = useState('tkreac@gmail.com')
  const [password, setPassword] = useState('tima6452')

  const setter =
    (set: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      set(e.target.value)
    }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    const userInfo: userInfo = {
      email,
      password,
    }

    onSignIn(userInfo, () => {
      router.push('/')
    })
  }

  return (
    <div className={styles.inner}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h2 className={styles.title}>Авторизация</h2>
        <Input
          title='Эл.адрес'
          name='email'
          required
          onChange={setter(setEmail)}
          placeholder={'example@example.com'}
          value={email}
        />
        <Input
          title='Пароль'
          type='password'
          name='password'
          required
          onChange={setter(setPassword)}
          value={password}
        />

        <button className='button' disabled={false} type='submit'>
          Войти
        </button>
        <p className={styles.account}>
          Нет аккаунта?&nbsp;
          <Link href='/signup'>
            <a className='primary'>Зарегистрироваться</a>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default SignIn
