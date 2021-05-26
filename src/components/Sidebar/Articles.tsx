import React from 'react'
import Link from 'next/link'

import styles from './Sidebar.module.scss'
import { Article } from '../../redux/article/article.types'
import { useRouter } from 'next/router'

interface Props {
  articles: Article[]
  isAdmin: boolean
}

const Articles: React.FC<Props> = ({ articles, isAdmin }) => {
  const router = useRouter()
  return (
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
