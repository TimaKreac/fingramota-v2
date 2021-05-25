import React from 'react'
import { NextPage } from 'next'
import Sidebar from '../src/components/Sidebar/Sidebar'
import ArticleWrapper from '../src/components/Article/ArticleWrapper'

const HomePage: NextPage = () => {
  return (
    <div className='d-flex'>
      <Sidebar type='categories' />
      <ArticleWrapper isIndex />
    </div>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ store }) => {
//     const dispatch = store.dispatch as NextThunkDispatch
//     await dispatch(await getCategories())
//   }
// )

export default HomePage
