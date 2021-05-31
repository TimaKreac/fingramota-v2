import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import classNames from 'classnames'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import styles from './Sidebar.module.scss'

interface Props {
  isAdmin: boolean
}

const Articles: React.FC<Props> = ({ isAdmin }) => {
  const router = useRouter()
  const { articles, category } = useTypedSelector((state) => state.article)
  const { getArticles, getCategory } = useActions()
  const { categorySlug, articleSlug } = router.query

  useEffect(() => {
    if (categorySlug) {
      getArticles(categorySlug as string)
      getCategory(categorySlug as string)
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
                [styles.active]: article.slug === articleSlug,
              })}
            >
              <span>{index + 1}</span>
              <p>{article.title}</p>
            </a>
          </Link>
        ))}
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
