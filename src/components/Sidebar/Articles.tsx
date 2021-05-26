import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

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
  const { category_slug } = router.query

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
            key={article.slug}
          >
            <a className={styles.article}>
              <span>{index + 1}</span>
              <p>{article.title}</p>
            </a>
          </Link>
        ))}
        {isAdmin && (
          <p className='text-center' style={{ marginTop: 20 }}>
            <Link href={`/crud/${router.query.slug}/create-article`}>
              <a className='button d-ib secondary'>Добавить статью</a>
            </Link>
          </p>
        )}
      </div>
    </>
  )
}

export default Articles
