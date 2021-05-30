import { NextPage } from 'next'
import Sidebar from '../../../src/components/Sidebar/Sidebar'
import TestCreate from '../../../src/components/crud/TestCreate/TestCreate'

const CreateArticle: NextPage = () => {
  return (
    <div className='d-flex'>
      <Sidebar type='articles' />
      <TestCreate />
    </div>
  )
}

export default CreateArticle
