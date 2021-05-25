import { NextPage } from 'next'
import Sidebar from '../../../src/components/Sidebar/Sidebar'
import ArticleCreate from '../../../src/components/ArticleCreate/ArticleCreate'

const Article: NextPage = () => {
  return (
    <div className='d-flex'>
      <Sidebar type='articles' />
      <ArticleCreate />
    </div>
  )
}

export default Article
