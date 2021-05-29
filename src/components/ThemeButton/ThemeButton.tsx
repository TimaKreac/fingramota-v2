import React from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import styles from './ThemeButton.module.scss'

const ThemeButton: React.FC = () => {
  const { changeTheme } = useActions()
  const { theme } = useTypedSelector((state) => state.app)

  const changeThemeHandler = () => {
    if (theme === 'dark') {
      changeTheme('light')
      return document.body.setAttribute('data-theme', 'light')
    }
    changeTheme('dark')
    document.body.setAttribute('data-theme', 'dark')
  }

  return (
    <div className={`${styles.button} ${styles.r}`} id={styles.button_3}>
      <input
        type='checkbox'
        className={styles.checkbox}
        onChange={changeThemeHandler}
        checked={theme === 'light'}
      />
      <div className={styles.knobs} />
      <div className={styles.layer} />
    </div>
  )
}

export default ThemeButton
