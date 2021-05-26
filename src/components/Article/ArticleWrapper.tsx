import React from 'react'
import Article from './Article'
import Layout from '../Layout/Layout'

import { IArticle } from './Article'

interface Props {
  isIndex?: boolean
  article: IArticle
}

const ArticleWrapper: React.FC<Props> = ({ isIndex = false, article }) => {
  return (
    <Layout>
      <Article index={isIndex} article={article} />
    </Layout>
  )
}

export default ArticleWrapper
