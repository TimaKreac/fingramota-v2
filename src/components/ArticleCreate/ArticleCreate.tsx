import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Input from '../Input/Input'
import Layout from '../Layout/Layout'
import dynamic from 'next/dynamic'

import { onChangeSetter } from '../../utils/app'
import { useActions } from '../../hooks/useActions'

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false,
})

import 'react-quill/dist/quill.snow.css'
import styles from './ArticleCreate.module.scss'

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
}

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
]

const ArticleCreate: React.FC = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

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
        <label>
          <p>Контент статьи</p>
          <ReactQuill
            theme='snow'
            value={body}
            onChange={setBody}
            modules={modules}
            formats={formats}
          />
        </label>

        <button className='button secondary' type='submit'>
          Добавить
        </button>
      </form>
    </Layout>
  )
}
export default ArticleCreate
