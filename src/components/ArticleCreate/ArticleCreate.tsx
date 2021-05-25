import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Input from '../Input/Input'
import Layout from '../Layout/Layout'

import { onChangeSetter } from '../../utils/app'
import { useActions } from '../../hooks/useActions'

import styles from './ArticleCreate.module.scss'

const ArticleCreate: React.FC = () => {
  const [title, setTitle] = useState('')

  const router = useRouter()

  const {} = useActions()

  const submitHandler = async (e: React.FormEvent) => {
    try {
      e.preventDefault()

      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <form onSubmit={submitHandler} className={styles.form}>
        <h2 className={styles.title}>Создание статьи</h2>
        <Input
          title='Название категории'
          name='name'
          onChange={onChangeSetter(setTitle)}
          value={title}
          required
          placeholder='Название статьи'
        />

        <button className='button secondary' type='submit'>
          Добавить
        </button>
      </form>
    </Layout>
  )
}
export default ArticleCreate
