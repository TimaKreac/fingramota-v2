import { NextPage } from 'next'
import Sidebar from '../../../src/components/Sidebar/Sidebar'

const Article: NextPage = () => {
  return (
    <div className='d-flex'>
      <Sidebar type='articles' />
      Создать статью
    </div>
  )
}

export default Article
