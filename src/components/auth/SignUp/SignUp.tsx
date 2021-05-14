import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import axios from 'axios'
import { connect } from 'react-redux'

import Input from '../../Input/Input'

import styles from './SignUp.module.scss'
import { userSignUp } from '../../../redux/user/user.actions'

interface userInfo {
  firstName: string
  lastName: string
  email: string
  password: string
}

interface Props {
  onSignUp: (userInfo: userInfo, cb?: () => void) => void
}

const SignUpComponent: React.FC<Props> = ({ onSignUp }) => {
  const router = useRouter()
  const [email, setEmail] = useState('tkreac@gmail.com')
  const [password, setPassword] = useState('tima6452')
  const [repeatPassword, setRepeatPassword] = useState('tima6452')
  const [firstName, setFirstName] = useState('Тамерлан')
  const [lastName, setLastName] = useState('Тельгарин')
  const [error, setError] = useState('')

  const setter = (set) => (e) => {
    set(e.target.value)
  }

  const compare = (password, repeat_password) => {
    return password === repeat_password
  }

  const submitHandler = async (e) => {
    try {
      e.preventDefault()

      const isMatchPasswords = compare(password, repeatPassword)

      if (!isMatchPasswords) {
        throw new Error('Пароли не совпадают')
      }

      const userInfo: userInfo = {
        firstName,
        lastName,
        email,
        password,
      }

      onSignUp(userInfo, () => {
        router.push('/')
      })
    } catch (error) {
      setter(setError)
    }
  }

  return (
    <div className={classNames('container', styles.inner)}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.title}>Регистрация</div>
        {error}
        <Input
          title='Фамилия'
          name='lastName'
          required
          onChange={setter(setLastName)}
          value={lastName}
        />
        <Input
          title='Имя'
          name='firstName'
          required
          onChange={setter(setFirstName)}
          value={firstName}
        />
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
        <Input
          type='password'
          title='Повторите пароль'
          name='repeatPassword'
          required
          onChange={setter(setRepeatPassword)}
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

const mapDispatchToProps = (dispatch) => ({
  onSignUp: (userInfo, cb) => {
    dispatch(userSignUp(userInfo, cb))
  },
})

export default connect(null, mapDispatchToProps)(SignUpComponent)
