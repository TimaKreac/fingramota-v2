import React from 'react'
import Input from '../Input/Input'
import styles from './Profile.module.scss'

const Profile: React.FC = () => {
  return (
    <div className='container'>
      <div className={styles.profile}>
        <div className={styles.profile_image}>
          <img src='images/standart-avatar.jpg' alt='Аватар профиля' />
          <button className='button'>Редактировать</button>
        </div>
        <form className={styles.profile_form}>
          <Input title='Фамилия' name='lastName' value='Тельгарин' required />
          <Input title='Имя' name='firstName' value='Тамерлан' disabled />
          <Input
            title='Эл.почта'
            name='email'
            value='tkreac@gmail.com'
            disabled
          />
        </form>
      </div>
    </div>
  )
}

export default Profile
