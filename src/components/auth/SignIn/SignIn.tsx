import { useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

import Input from '../../Input/Input'

import styles from './SignIn.module.scss'
import { userSignIn } from '../../../redux/user/user.actions'

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

  const setter = (set) => (e) => {
    set(e.target.value)
  }

  const submitHandler = (e) => {
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
    <div className={classNames('container', styles.inner)}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.title}>Авторизация</div>
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

const mapDispatchToProps = (dispatch) => ({
  onSignIn: (userInfo, cb) => {
    dispatch(userSignIn(userInfo, cb))
  },
})

export default connect(null, mapDispatchToProps)(SignIn)
