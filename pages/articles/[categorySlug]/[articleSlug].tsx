import axios from 'axios'
import { NextPage, NextPageContext } from 'next'
import { API } from '../../../config'
import ArticleWrapper from '../../../src/components/Article/ArticleWrapper'
import Sidebar from '../../../src/components/Sidebar/Sidebar'

import { IArticle } from '../../../src/types/article'

interface Props {
  article: IArticle
}

const Article: NextPage<Props> = ({ article }) => {
  return (
    <div className='d-flex'>
      <Sidebar type='articles' />
      <ArticleWrapper article={article} />
    </div>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const res = await axios.get(
    `${API}/article/${ctx.query.categorySlug}/${ctx.query.articleSlug}`
  )

  if (!res.data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      article: res.data,
    },
  }
}

export default Article
