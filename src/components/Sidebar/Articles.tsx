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
  const { getArticles, getCategory, deleteArticle } = useActions()
  const { category_slug, article_slug } = router.query

  useEffect(() => {
    if (category_slug) {
      getArticles(category_slug as string)
      getCategory(category_slug as string)
    }
  }, [router.query])

  const removeArticleHandler =
    (_id: string, title: string) =>
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const answer = confirm(`Удалить статью: ${title}?`)
      if (answer) {
        deleteArticle(_id)
      }
    }

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
              {isAdmin && (
                <button
                  className={styles.delete_btn}
                  onClick={removeArticleHandler(article._id, article.title)}
                >
                  <img src='/images/remove (2).svg' alt='delete button' />
                </button>
              )}
            </a>
          </Link>
        ))}
        {isAdmin && (
          <p className='text-center' style={{ marginTop: 20 }}>
            <Link href={`/crud/${category.slug}/create-article`}>
              <a className='button d-ib secondary'>Добавить статью</a>
            </Link>
          </p>
        )}
      </div>
    </>
  )
}

export default Articles
