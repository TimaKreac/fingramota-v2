import classNames from 'classnames'
import Link from 'next/link'
import Navbar from '../Navbar/Navbar'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import styles from './Header.module.scss'

const Header = () => {
  const { theme } = useTypedSelector((state) => state.app)

  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.inner)}>
        <Link href='/'>
          <img
            className={styles.logo}
            src={theme === 'dark' ? '/logo.svg' : '/logo-light.svg'}
            alt='fingramota logo'
          />
        </Link>

        <Navbar />
      </div>
    </header>
  )
}

export default Header
