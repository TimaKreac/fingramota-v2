import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Protected from '../../layouts/Protected'
import Input from '../Input/Input'
import styles from './Profile.module.scss'

const Profile: React.FC = () => {
  const {
    userInfo: { email, firstName, lastName },
  } = useTypedSelector((state) => state.user)

  return (
    <Protected wea='s'>
      <div className='container'>
        <div className={styles.profile}>
          <div className={styles.profile_image}>
            <img src='images/standart-avatar.jpg' alt='Аватар профиля' />
            <button className='button'>Редактировать</button>
          </div>
          <form className={styles.profile_form}>
            <Input title='Фамилия' name='lastName' value={lastName} disabled />
            <Input title='Имя' name='firstName' value={firstName} disabled />
            <Input title='Эл.почта' name='email' value={email} disabled />
          </form>
        </div>
      </div>
    </Protected>
  )
}

export default Profile
