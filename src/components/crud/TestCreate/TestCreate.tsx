import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Layout from '../../Layout/Layout'
import Input from '../../Input/Input'
import Select from './Select'

import { onChangeSetter } from '../../../utils/app'
import { IQuestion } from '../../../types/test'
import { getCookie } from '../../../utils/user'
import { API } from '../../../../config'

import styles from './TestCreate.module.scss'

const TestCreate: React.FC = () => {
  const [question, setQuestion] = useState('')
  const [option_1, setOption_1] = useState('')
  const [option_2, setOption_2] = useState('')
  const [option_3, setOption_3] = useState('')
  const [option_4, setOption_4] = useState('')
  const [option_5, setOption_5] = useState('')
  const [answer, setAnswer] = useState('option_1')

  const [counter, setCounter] = useState(0)
  const [testInfo, setTestInfo] = useState<IQuestion[]>([])

  const router = useRouter()

  const addQuestionHandler = (e: React.FormEvent) => {
    e.preventDefault()

    setCounter((prev) => prev + 1)
    setTestInfo([
      ...testInfo,
      {
        _id: '',
        question,
        option_1,
        option_2,
        option_3,
        option_4,
        option_5,
        answer,
      },
    ])
  }

  const addTestHandler = async (e: React.FormEvent) => {
    try {
      e.preventDefault()

      const token = getCookie('token')

      const { categorySlug } = router.query

      await axios.post(
        `${API}/${categorySlug}/test`,
        {
          questions: testInfo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      router.push(`/articles/${categorySlug}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <form onSubmit={addQuestionHandler} className={styles.form}>
        <h2 className={styles.title}>Создание теста</h2>
        <Input
          title='Вопрос'
          name='name'
          onChange={onChangeSetter(setQuestion)}
          value={question}
          required
          placeholder='Что? Где? Когда?'
        />
        <Input
          title='Вариант: a'
          name='option_1'
          onChange={onChangeSetter(setOption_1)}
          value={option_1}
          required
        />
        <Input
          title='Вариант: b'
          name='option_2'
          onChange={onChangeSetter(setOption_2)}
          value={option_2}
          required
        />
        <Input
          title='Вариант: c'
          name='option_3'
          onChange={onChangeSetter(setOption_3)}
          value={option_3}
          required
        />
        <Input
          title='Вариант: d'
          name='option_4'
          onChange={onChangeSetter(setOption_4)}
          value={option_4}
          required
        />
        <Input
          title='Вариант: e'
          name='option_5'
          onChange={onChangeSetter(setOption_5)}
          value={option_5}
          required
        />
        <Select onChange={onChangeSetter(setAnswer)} value={answer} />
        <p className='gray testContructor-form_counter'>
          Текущее количество вопросов: <span>{counter}</span>
        </p>

        <button className='button line' type='submit'>
          Добавить вопрос
        </button>
        <button className='button' onClick={addTestHandler}>
          Создать тест
        </button>
      </form>
    </Layout>
  )
}
export default TestCreate
