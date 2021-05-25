import React from 'react'
import Link from 'next/link'

import { Category } from '../../redux/category/category.types'

import styles from './Sidebar.module.scss'

interface Props {
  categories: Category[]
}

const Categories: React.FC<Props> = ({ categories }) => {
  return (
    <>
      <h2>Категории</h2>
      <div className={styles.categories}>
        {categories.map((c) => (
          <Link href={`/articles/${c.slug}`} key={c.slug}>
            <a>{c.name}</a>
          </Link>
        ))}
      </div>
      <p className='text-center'>
        <Link href='/crud/create-category/'>
          <a className='button d-ib secondary'>Добавить категорию</a>
        </Link>
      </p>
    </>
  )
}

export default Categories
