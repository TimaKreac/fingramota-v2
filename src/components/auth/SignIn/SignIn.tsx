import { useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import Input from '../../Input/Input'

import styles from './SignIn.module.scss'

interface Props {}

const SignIn: React.FC<Props> = () => {
  const [state, setState] = useState({
    email: 'tkreac@gmail.com',
    password: 'tima6452',
  })

  const { email, password } = state

  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const onSubmitHandler = () => {}

  return (
    <div className={classNames('container', styles.inner)}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <div className={styles.title}>Авторизация</div>
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
