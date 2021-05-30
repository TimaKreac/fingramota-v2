import React, { useEffect, useState } from 'react'
import IndexArticle from './Index'
import { checkIsAdmin, getCookie } from '../../utils/user'
import { useActions } from '../../hooks/useActions'
import { IArticle } from '../../types/article'

import styles from './Article.module.scss'

interface Props {
  index: boolean
  article?: IArticle
}

const Article: React.FC<Props> = ({ index, article }) => {
  if (index) {
    return <IndexArticle />
  }

  const [isAdmin, setIsAdmin] = useState(false)

  const { deleteArticle } = useActions()

  useEffect(() => {
    const token = getCookie('token')
    if (token) {
      checkIsAdmin(token).then((res) => setIsAdmin(res))
    }
  }, [])

  const removeArticleHandler =
    (_id: string, title: string) =>
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const answer = confirm(`Удалить статью: ${title}?`)
      if (answer) {
        deleteArticle(_id)
      }
    }

  function createMarkup() {
    if (article) {
      return { __html: article.body }
    }
  }

  return (
    <div className={styles.article}>
      <h1>{article?.title}</h1>
      <article dangerouslySetInnerHTML={createMarkup()}></article>
      {isAdmin && article && (
        <button
          className={`button sm ${styles.delete_btn}`}
          onClick={removeArticleHandler(article._id, article.title)}
        >
          Удалить статью
        </button>
      )}
    </div>
  )
}

export default Article
