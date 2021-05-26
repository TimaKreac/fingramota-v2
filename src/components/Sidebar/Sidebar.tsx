import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import Categories from './Categories'
import Articles from './Articles'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

import styles from './Sidebar.module.scss'
import { getUser, getCookie, checkIsAdmin } from '../../utils/user'

interface Props {
  type: 'categories' | 'articles'
}

const articles = [
  {
    title: 'Нужен кредит? Читаем по-новому договор',
    slug: 'credits',
  },
  {
    title: 'Как правильно читать кредитный договор?',
    slug: 'credits',
  },
  {
    title: 'Хотите взять микрокредит? Читайте договор!',
    slug: 'credits',
  },
  {
    title: 'Все о кредите',
    slug: 'credits',
  },
  {
    title: 'Кредитная история',
    slug: 'credits',
  },
  {
    title: 'Что нужно знать перед тем, как взять кредит в банке?',
    slug: 'credits',
  },
  {
    title: 'Кредитные продукты банков',
    slug: 'credits',
  },
  {
    title: 'Как проверить свой кредитный отчёт?',
    slug: 'credits',
  },
  {
    title: 'Пять шагов грамотного заимствования',
    slug: 'credits',
  },
  {
    title: 'Хотите взять микрокредит? Читайте договор!',
    slug: 'credits',
  },
  {
    title: 'Все о кредите',
    slug: 'credits',
  },
  {
    title: 'Кредитная история',
    slug: 'credits',
  },
  {
    title: 'Что нужно знать перед тем, как взять кредит в банке?',
    slug: 'credits',
  },
  {
    title: 'Кредитные продукты банков',
    slug: 'credits',
  },
  {
    title: 'Как проверить свой кредитный отчёт?',
    slug: 'credits',
  },
  {
    title: 'Пять шагов грамотного заимствования',
    slug: 'credits',
  },
]

const Sidebar: React.FC<Props> = ({ type }) => {
  const { categories } = useTypedSelector((state) => state.category)
  const { getCategories } = useActions()
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (window !== undefined) {
      const token = getCookie('token')
      if (token) {
        checkIsAdmin(token).then((res) => setIsAdmin(res))
      }
    }

    if (type === 'categories' && !categories.length) {
      getCategories()
      return
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

        {type === 'categories' && (
          <Categories categories={categories} isAdmin={isAdmin} />
        )}

        {type === 'articles' && (
          <Articles articles={articles} isAdmin={isAdmin} />
        )}
      </aside>
    </>
  )
}

export default Sidebar
