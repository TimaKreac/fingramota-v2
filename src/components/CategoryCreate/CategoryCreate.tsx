import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../Layout/Layout'
import Input from '../Input/Input'

import { onChangeSetter } from '../../utils/app'
import { useActions } from '../../hooks/useActions'

import styles from './CategoryCreate.module.scss'

const CategoryCreate: React.FC = () => {
  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')

  const router = useRouter()

  const { createCategory } = useActions()

  const submitHandler = async (e: React.FormEvent) => {
    try {
      e.preventDefault()

      const categoryInfo = {
        name,
        slug,
      }

      await createCategory(categoryInfo)

      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <form onSubmit={submitHandler} className={styles.form}>
        <h2 className={styles.title}>Создание категории</h2>
        <Input
          title='Название категории'
          name='name'
          onChange={onChangeSetter(setName)}
          value={name}
          required
          placeholder='Кредиты'
        />
        <Input
          title='Slug категории'
          name='slug'
          onChange={onChangeSetter(setSlug)}
          value={slug}
          required
          placeholder='credits'
        />
        <button className='button secondary' type='submit'>
          Добавить
        </button>
      </form>
    </Layout>
  )
}
export default CategoryCreate
