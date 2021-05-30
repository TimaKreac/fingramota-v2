import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Input from '../Input/Input'

import { useActions } from '../../hooks/useActions'
import { UserSignInInfo } from '../../redux/user/user.types'
import { onChangeSetter } from '../../utils/app'
import { getCookie } from '../../utils/user'

import styles from './Auth.module.scss'

const SignIn: React.FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState('tkreac@gmail.com')
  const [password, setPassword] = useState('tima6452')

  const { userSignIn } = useActions()

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    const userInfo: UserSignInInfo = {
      email,
      password,
    }

    await userSignIn(userInfo)

    const token = getCookie('token')
    if (token) router.push('/')
  }

  return (
    <div className={styles.inner}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h2 className={styles.title}>Авторизация</h2>
        <Input
          title='Эл.адрес'
          name='email'
          required
          onChange={onChangeSetter(setEmail)}
          placeholder={'example@example.com'}
          value={email}
        />
        <Input
          title='Пароль'
          type='password'
          name='password'
          required
          onChange={onChangeSetter(setPassword)}
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
