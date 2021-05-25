import React from 'react'
import IndexArticle from './Index'
import styles from './Article.module.scss'

interface Props {
  index: boolean
}

const Article: React.FC<Props> = ({ index }) => {
  if (index) {
    return <IndexArticle />
  }

  return (
    <div className={styles.article}>
      <h1>Нужен кредит? Читаем по-новому договор</h1>
      <article>Статья</article>
    </div>
  )
}

export default Article
