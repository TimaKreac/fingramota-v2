import React, { useEffect } from 'react'
import Link from 'next/link'

import styles from './Sidebar.module.scss'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

interface Props {
  isAdmin: boolean
}

const Categories: React.FC<Props> = ({ isAdmin }) => {
  const { categories } = useTypedSelector((state) => state.category)
  const { getCategories } = useActions()

  useEffect(() => {
    if (!categories.length) {
      getCategories()
    }
  }, [])

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
      {isAdmin && (
        <p className='text-center'>
          <Link href='/crud/create-category/'>
            <a className='button d-ib secondary'>Добавить категорию</a>
          </Link>
        </p>
      )}
    </>
  )
}

export default Categories
