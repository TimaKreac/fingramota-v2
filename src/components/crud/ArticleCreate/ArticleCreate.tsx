import React, { useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Input from '../../Input/Input'
import Layout from '../../Layout/Layout'

import { onChangeSetter } from '../../../utils/app'
import { useActions } from '../../../hooks/useActions'

import { QuillFormats, QuillModules } from '../../../utils/quill'
const ReactQuill = dynamic(import('react-quill'), {
  ssr: false,
})

import 'react-quill/dist/quill.snow.css'
import styles from './ArticleCreate.module.scss'

const ArticleCreate: React.FC = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const router = useRouter()

  const { createArticle } = useActions()

  const submitHandler = async (e: React.FormEvent) => {
    try {
      e.preventDefault()

      const { category_slug } = router.query

      if (category_slug) {
        const articleInfo = {
          title,
          body,
          category_slug: category_slug as string,
        }

        await createArticle(articleInfo)

        router.push(`/articles/${category_slug}`)
      }
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
        <p>Контент статьи</p>
        <ReactQuill
          id='myQuill'
          theme='snow'
          value={body}
          onChange={setBody}
          modules={QuillModules}
          formats={QuillFormats}
        ></ReactQuill>

        <button className='button secondary' type='submit'>
          Добавить
        </button>
      </form>
    </Layout>
  )
}
export default ArticleCreate
