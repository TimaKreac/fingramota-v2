import React from 'react'
import IndexArticle from './Index'
import styles from './Article.module.scss'

export interface IArticle {
  title: string
  slug: string
  body: string
  mtitle: string
  mdesc: string
}

interface Props {
  index: boolean
  article: IArticle
}

const Article: React.FC<Props> = ({ index, article }) => {
  if (index) {
    return <IndexArticle />
  }

  function createMarkup() {
    return { __html: article.body }
  }

  return (
    <div className={styles.article}>
      <h1>{article.title}</h1>
      <article dangerouslySetInnerHTML={createMarkup()}></article>
    </div>
  )
}

export default Article
