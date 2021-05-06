import { useState, useEffect } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import axios from 'axios'

import Input from '../../Input/Input'

import styles from './SignUp.module.scss'

const SignUpComponent = () => {
  const [state, setState] = useState({
    firstName: 'Тамерлан',
    lastName: 'Тельгарин',
    email: 'tkreac@gmail.com',
    password: 'tima6452',
    repeat_password: 'tima6452',
    error: '',
    loading: false,
    message: '',
  })

  const { firstName, lastName, email, password, repeat_password, error } = state

  const comparePasswords = (password, repeat_password) => {
    if (password === repeat_password) {
      return true
    } else {
      return false
    }
  }

  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault()
      const isMatchPasswords = comparePasswords(password, repeat_password)
      if (!isMatchPasswords) {
        throw new Error('Пароли не совпадают')
      }
      const res = await axios.post('http://localhost:8000/api/signup', {
        firstName,
        lastName,
        email,
        password,
      })
      console.log(res.data)
    } catch (error) {
      setState({ ...state, error: error.message })
    }
  }

  return (
    <div className={classNames('container', styles.inner)}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <p>{error}</p>
        <div className={styles.title}>Регистрация</div>
        <Input
          title='Фамилия'
          name='lastName'
          required
          onChange={onChangeHandler}
          value={state.lastName}
        />
        <Input
          title='Имя'
          name='firstName'
          required
          onChange={onChangeHandler}
          value={state.firstName}
        />
        <Input
          title='Эл.адрес'
          name='email'
          required
          onChange={onChangeHandler}
          placeholder={'example@example.com'}
          value={state.email}
        />
        <Input
          title='Пароль'
          type='password'
          name='password'
          required
          onChange={onChangeHandler}
          value={state.password}
        />
        <Input
          type='password'
          title='Повторите пароль'
          name='repeat_password'
          required
          onChange={onChangeHandler}
          value={state.repeat_password}
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
