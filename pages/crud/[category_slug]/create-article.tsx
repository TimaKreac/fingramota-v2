import { NextPage } from 'next'
import Sidebar from '../../../src/components/Sidebar/Sidebar'
import ArticleCreate from '../../../src/components/crud/ArticleCreate/ArticleCreate'

const CreateArticle: NextPage = () => {
  return (
    <div className='d-flex'>
      <Sidebar type='articles' />
      <ArticleCreate />
    </div>
  )
}

export default CreateArticle
