import { NextPage } from 'next'
import CategoryCreate from '../../src/components/CategoryCreate/CategoryCreate'
import Sidebar from '../../src/components/Sidebar/Sidebar'

const CreateCategory: NextPage = () => {
  return (
    <div className='d-flex'>
      <Sidebar type='categories' />
      <CategoryCreate />
    </div>
  )
}

export default CreateCategory
