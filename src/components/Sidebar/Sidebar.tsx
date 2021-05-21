import React from 'react'
import Link from 'next/link'

import styles from './Sidebar.module.scss'

interface Props {
  type: 'categories' | 'articles'
}

const catergories = [
  {
    name: 'Кредиты',
    slug: 'credits',
  },
  {
    name: 'Национальная валюта',
    slug: 'national-currency',
  },
  {
    name: 'Семейный бюджет',
    slug: 'family-budget',
  },
  {
    name: 'Платежи и переводы',
    slug: 'payments-transfers',
  },
  {
    name: 'Страхование',
    slug: 'policy',
  },
  {
    name: 'Свой бизнес',
    slug: 'own-bussiness',
  },
]

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
            <h1>Категории</h1>
            <div className={styles.categories}>
              {catergories.map((c) => (
                <p key={c.slug}>
                  <Link href={`articles/${c.slug}`}>
                    <a>{c.name}</a>
                  </Link>
                </p>
              ))}
            </div>
          </>
        )}

        {type === 'articles' && (
          <>
            <h1>Кредиты</h1>
            <div className={styles.articles}>
              {articles.map((article, index) => (
                <p key={index} className={styles.article}>
                  <span>{index + 1}</span>
                  <Link href={`articles/${article.slug}/${index}`}>
                    <a>{article.name}</a>
                  </Link>
                </p>
              ))}
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default Sidebar
