import React, { useEffect } from 'react'
import Link from 'next/link'

import styles from './Sidebar.module.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

interface Props {
  type: 'categories' | 'articles'
}

const articles = [
  {
    name: 'Нужен кредит? Читаем по-новому договор',
    slug: 'credits',
  },
  {
    name: 'Как правильно читать кредитный договор?',
    slug: 'credits',
  },
  {
    name: 'Хотите взять микрокредит? Читайте договор!',
    slug: 'credits',
  },
  {
    name: 'Все о кредите',
    slug: 'credits',
  },
  {
    name: 'Кредитная история',
    slug: 'credits',
  },
  {
    name: 'Что нужно знать перед тем, как взять кредит в банке?',
    slug: 'credits',
  },
  {
    name: 'Кредитные продукты банков',
    slug: 'credits',
  },
  {
    name: 'Как проверить свой кредитный отчёт?',
    slug: 'credits',
  },
  {
    name: 'Пять шагов грамотного заимствования',
    slug: 'credits',
  },
  {
    name: 'Хотите взять микрокредит? Читайте договор!',
    slug: 'credits',
  },
  {
    name: 'Все о кредите',
    slug: 'credits',
  },
  {
    name: 'Кредитная история',
    slug: 'credits',
  },
  {
    name: 'Что нужно знать перед тем, как взять кредит в банке?',
    slug: 'credits',
  },
  {
    name: 'Кредитные продукты банков',
    slug: 'credits',
  },
  {
    name: 'Как проверить свой кредитный отчёт?',
    slug: 'credits',
  },
  {
    name: 'Пять шагов грамотного заимствования',
    slug: 'credits',
  },
]

const Sidebar: React.FC<Props> = ({ type }) => {
  const { categories } = useTypedSelector((state) => state.category)
  const { getCategories } = useActions()

  useEffect(() => {
    if (type === 'categories' && !categories.length) {
      console.log(categories)
      getCategories()
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
          <>
            <h2>Категории</h2>
            <div className={styles.categories}>
              {categories.map((c) => (
                <Link href={`/articles/${c.slug}`} key={c.slug}>
                  <a>{c.name}</a>
                </Link>
              ))}
            </div>
            <p className='text-center'>
              <Link href='/crud/create-category/'>
                <a className='button d-ib secondary'>Добавить категорию</a>
              </Link>
            </p>
          </>
        )}

        {type === 'articles' && (
          <>
            <Link href='/'>
              <a className={styles.category}>
                <h2>Кредиты</h2>
              </a>
            </Link>
            <div className={styles.articles}>
              {articles.map((article, index) => (
                <Link href={`/articles/${article.slug}/${index}`} key={index}>
                  <a className={styles.article}>
                    <span>{index + 1}</span>
                    <p>{article.name}</p>
                  </a>
                </Link>
              ))}
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default Sidebar
