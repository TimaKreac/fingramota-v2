import axios from 'axios'
import { NextPage, NextPageContext } from 'next'
import { API } from '../../../config'
import ArticleWrapper from '../../../src/components/Article/ArticleWrapper'
import Sidebar from '../../../src/components/Sidebar/Sidebar'

import { IArticle } from '../../../src/components/Article/Article'

interface Props {
  article: IArticle
}

export async function getServerSideProps(ctx: NextPageContext) {
  const res = await axios.get(
    `${API}/article/${ctx.query.category_slug}/${ctx.query.article_slug}`
  )

  return {
    props: {
      article: res.data,
    },
  }
}

const Article: NextPage<Props> = ({ article }) => {
  return (
    <div className='d-flex'>
      <Sidebar type='articles' />
      <ArticleWrapper article={article} />
    </div>
  )
}

export default Article
