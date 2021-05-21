import React from 'react'
import { NextPage } from 'next'
import Sidebar from '../src/components/Sidebar/Sidebar'
import ArticleWrapper from '../src/components/ArticleWrapper/ArticleWrapper'

const HomePage: NextPage = () => {
  return (
    <div className='d-flex'>
      <Sidebar type='categories' />
      <ArticleWrapper isIndex />
    </div>
  )
}

export default HomePage
