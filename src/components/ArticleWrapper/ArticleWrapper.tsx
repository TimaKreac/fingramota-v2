import React from 'react'
import Article from '../Article/Article'
import Navbar from '../Navbar/Navbar'

import styles from './ArticleWrapper.module.scss'

interface Props {
  isIndex?: boolean
}

const ArticleWrapper: React.FC<Props> = ({ isIndex }) => {
  return (
    <main className={styles.main}>
      <Navbar isOpen={false} />
      <Article index={isIndex} />
    </main>
  )
}

export default ArticleWrapper
