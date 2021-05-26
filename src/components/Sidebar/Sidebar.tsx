import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import Categories from './Categories'
import Articles from './Articles'

import { getCookie, checkIsAdmin } from '../../utils/user'

import styles from './Sidebar.module.scss'

interface Props {
  type: 'categories' | 'articles'
}

const Sidebar: React.FC<Props> = ({ type }) => {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const token = getCookie('token')
    if (token) {
      checkIsAdmin(token).then((res) => setIsAdmin(res))
    }
  }, [])

  return (
    <>
      <div className={styles.fake_sidebar}></div>
      <aside className={styles.sidebar}>
        <div className={styles.fixedLogo}>
          <Link href='/'>
            <a>
              <img
                className={styles.logo}
                src='/logo.svg'
                alt='fingramota logo'
              />
            </a>
          </Link>
        </div>

        {type === 'categories' && <Categories isAdmin={isAdmin} />}

        {type === 'articles' && <Articles isAdmin={isAdmin} />}
      </aside>
    </>
  )
}

export default Sidebar
