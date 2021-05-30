import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import Input from '../Input/Input'

import { UserSignUpInfo } from '../../redux/user/user.types'
import { useActions } from '../../hooks/useActions'
import { onChangeSetter } from '../../utils/app'
import { getCookie } from '../../utils/user'

import styles from './Auth.module.scss'

const SignUpComponent: React.FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState('tkreac@gmail.com')
  const [password, setPassword] = useState('tima6452')
  const [repeatPassword, setRepeatPassword] = useState('tima6452')
  const [firstName, setFirstName] = useState('Тамерлан')
  const [lastName, setLastName] = useState('Тельгарин')
  const [error, setError] = useState('')

  const { userSignUp } = useActions()

  const compare = (password: string, repeat_password: string) => {
    return password === repeat_password
  }

  const submitHandler = async (e: React.FormEvent) => {
    try {
      e.preventDefault()

      const isMatchPasswords = compare(password, repeatPassword)

      if (!isMatchPasswords) {
        throw new Error('Пароли не совпадают')
      }

      const userInfo: UserSignUpInfo = {
        firstName,
        lastName,
        email,
        password,
      }

      await userSignUp(userInfo)

      const token = getCookie('token')
      if (token) router.push('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className={classNames('container', styles.inner)}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h2 className={styles.title}>Регистрация</h2>
        {error}
        <Input
          title='Фамилия'
          name='lastName'
          required
          onChange={onChangeSetter(setLastName)}
          value={lastName}
        />
        <Input
          title='Имя'
          name='firstName'
          required
          onChange={onChangeSetter(setFirstName)}
          value={firstName}
        />
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
        <Input
          type='password'
          title='Повторите пароль'
          name='repeatPassword'
          required
          onChange={onChangeSetter(setRepeatPassword)}
          value={repeatPassword}
        />

        <button className='button' disabled={false} type='submit'>
          Зарегистрироваться
        </button>
        <p className={styles.account}>
          Уже есть аккаунт?&nbsp;
          <Link href='/signin'>
            <a className='primary'>Войти</a>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default SignUpComponent
