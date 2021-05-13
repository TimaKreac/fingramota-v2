import { useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import axios from 'axios'

import Input from '../../Input/Input'

import styles from './SignUp.module.scss'

const SignUpComponent: React.FC = () => {
  const [userForm, setUserForm] = useState({
    firstName: 'Тамерлан',
    lastName: 'Тельгарин',
    email: 'tkreac@gmail.com',
    password: 'tima6452',
    repeatPassword: 'tima6452',
    error: '',
    loading: false,
    message: '',
  })

  const { firstName, lastName, email, password, repeatPassword } = userForm

  const comparePasswords = (password, repeat_password) => {
    if (password === repeat_password) {
      return true
    } else {
      return false
    }
  }

  const onChangeHandler = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value })
  }

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault()

      const isMatchPasswords = comparePasswords(password, repeatPassword)

      if (!isMatchPasswords) {
        throw new Error('Пароли не совпадают')
      }

      const userInfo = {
        firstName,
        lastName,
        email,
        password,
      }

      const res = await axios.post('http://localhost:8000/api/signup', userInfo)
      console.log(res.data)
    } catch (error) {
      setUserForm({ ...userForm, error: error.message })
    }
  }

  return (
    <div className={classNames('container', styles.inner)}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <div className={styles.title}>Регистрация</div>
        <Input
          title='Фамилия'
          name='lastName'
          required
          onChange={onChangeHandler}
          value={lastName}
        />
        <Input
          title='Имя'
          name='firstName'
          required
          onChange={onChangeHandler}
          value={firstName}
        />
        <Input
          title='Эл.адрес'
          name='email'
          required
          onChange={onChangeHandler}
          placeholder={'example@example.com'}
          value={email}
        />
        <Input
          title='Пароль'
          type='password'
          name='password'
          required
          onChange={onChangeHandler}
          value={password}
        />
        <Input
          type='password'
          title='Повторите пароль'
          name='repeatPassword'
          required
          onChange={onChangeHandler}
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
