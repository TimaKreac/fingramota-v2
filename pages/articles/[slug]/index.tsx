import { NextPage } from 'next'
import ArticleWrapper from '../../../src/components/Article/ArticleWrapper'
import Sidebar from '../../../src/components/Sidebar/Sidebar'

const Articles: NextPage = () => {
  return (
    <div className='d-flex'>
      <Sidebar type='articles' />
      <ArticleWrapper isIndex />
    </div>
  )
}

export default Articles
