import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import classNames from 'classnames'

import { useActions } from '../../hooks/useActions'

import styles from './Sidebar.module.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector'

interface Props {
  isAdmin: boolean
}

const Articles: React.FC<Props> = ({ isAdmin }) => {
  const router = useRouter()
  const { articles, category } = useTypedSelector((state) => state.article)
  const { getArticles, getCategory } = useActions()
  const { category_slug, article_slug } = router.query

  useEffect(() => {
    if (category_slug) {
      getArticles(category_slug as string)
      getCategory(category_slug as string)
    }
  }, [router.query])

  return (
    <>
      <Link href='/'>
        <a className={styles.category}>
          <h2>{category.name}</h2>
        </a>
      </Link>
      <div className={styles.articles}>
        {articles.map((article, index) => (
          <Link
            href={`/articles/${article.category.slug}/${article.slug}`}
            key={article._id}
          >
            <a
              className={classNames(styles.article, {
                [styles.active]: article.slug === article_slug,
              })}
            >
              <span>{index + 1}</span>
              <p>{article.title}</p>
            </a>
          </Link>
        ))}
        <Link href={`/articles/${category_slug}/test`}>
          <a
            style={{ padding: 10 }}
            className={classNames(styles.article, {
              [styles.active]:
                router.pathname === '/articles/[category_slug]/test',
            })}
          >
            <p className='text-center'>Тестирование</p>
          </a>
        </Link>
        {isAdmin && (
          <div className='d-flex jcc' style={{ marginTop: 40 }}>
            <p className='text-center'>
              <Link href={`/crud/${category.slug}/create-article`}>
                <a
                  className='button sm d-ib  secondary'
                  style={{ marginRight: 20 }}
                >
                  Добавить статью
                </a>
              </Link>
            </p>
            <p className='text-center'>
              <Link href={`/crud/${category.slug}/create-test`}>
                <a className='button sm d-ib outlined'>Создать тест</a>
              </Link>
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default Articles
