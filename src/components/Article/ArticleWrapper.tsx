import React from 'react'
import Article from './Article'
import Layout from '../Layout/Layout'

interface Props {
  isIndex?: boolean
}

const ArticleWrapper: React.FC<Props> = ({ isIndex = false }) => {
  return (
    <Layout>
      <Article index={isIndex} />
    </Layout>
  )
}

export default ArticleWrapper
