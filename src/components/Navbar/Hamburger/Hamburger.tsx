import React from 'react'
import classNames from 'classnames'
import styles from './Hamburger.module.scss'

interface Props {
  isOpen: boolean
  onToggleMenu: () => void
}

const Hamburger: React.FC<Props> = ({ isOpen, onToggleMenu }) => {
  return (
    <button className={styles.hamburger} onClick={onToggleMenu}>
      <span
        className={classNames(styles.hamburger_line, styles.hamburger_line_1, {
          [styles.active]: isOpen,
        })}
      />
      <span
        className={classNames(styles.hamburger_line, styles.hamburger_line_2, {
          [styles.active]: isOpen,
        })}
      />
      <span
        className={classNames(styles.hamburger_line, styles.hamburger_line_3, {
          [styles.active]: isOpen,
        })}
      />
    </button>
  )
}

export default Hamburger
