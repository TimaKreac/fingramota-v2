import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { API } from '../../../config'
import { IQuestion } from '../../types/test'

import styles from './Test.module.scss'
import { getCookie } from '../../utils/user'

interface Props {
  questions: IQuestion[]
}

const Questions: React.FC<Props> = ({ questions }) => {
  const [answeredQuestions, setAnsweredQuestions] = useState({})
  const [error, setError] = useState('')

  const router = useRouter()
  const { category_slug } = router.query

  const finishTest = async () => {
    let answeredCounter = 0
    let correctCounter = 0

    for (let key in answeredQuestions) {
      answeredCounter += 1
      // @ts-ignore
      if (answeredQuestions[key]) {
        correctCounter += 1
      }
    }

    if (answeredCounter === questions.length) {
      setError('')
      const percentCorrect = Math.floor(
        (correctCounter / questions.length) * 100
      )
      try {
        const token = getCookie('token')
        await axios.post(
          `${API}/test/finish`,
          { percentCorrect, category_slug },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
      } catch (error) {
        setError(error.message)
      }
    } else {
      setError('Ответьте на все вопросы!')
    }
  }

  const chooseAnswer =
    (q: any, userAnswer: string) => (e: React.MouseEvent) => {
      const corectAnswer = q.answer
      const isCorrect = userAnswer === q[corectAnswer]
      setAnsweredQuestions({ ...answeredQuestions, [q._id]: isCorrect })
    }

  return (
    <React.Fragment>
      {questions.map((q, i) => (
        <div className={styles.questionItem} key={q._id}>
          {q.answer}
          <h3 className={styles.question}>
            {i + 1}. {q.question}
          </h3>
          <p className={styles.option} data-option={q.option_1}>
            <input
              id={`q${i}o1`}
              type='radio'
              className={styles.custom_checkbox}
              name={`q${i}`}
            />
            <label htmlFor={`q${i}o1`} onClick={chooseAnswer(q, q.option_1)}>
              {q.option_1}
            </label>
          </p>
          <p className={styles.option}>
            <input
              id={`q${i}o2`}
              type='radio'
              className={styles.custom_checkbox}
              name={`q${i}`}
            />
            <label htmlFor={`q${i}o2`} onClick={chooseAnswer(q, q.option_2)}>
              {q.option_2}
            </label>
          </p>
          <p className={styles.option}>
            <input
              id={`q${i}o3`}
              type='radio'
              className={styles.custom_checkbox}
              name={`q${i}`}
            />
            <label htmlFor={`q${i}o3`} onClick={chooseAnswer(q, q.option_3)}>
              {q.option_3}
            </label>
          </p>
          <p className={styles.option}>
            <input
              id={`q${i}o4`}
              type='radio'
              className={styles.custom_checkbox}
              name={`q${i}`}
            />
            <label htmlFor={`q${i}o4`} onClick={chooseAnswer(q, q.option_4)}>
              {q.option_4}
            </label>
          </p>
          <p className={styles.option}>
            <input
              id={`q${i}o5`}
              type='radio'
              className={styles.custom_checkbox}
              name={`q${i}`}
            />
            <label htmlFor={`q${i}o5`} onClick={chooseAnswer(q, q.option_5)}>
              {q.option_5}
            </label>
          </p>
        </div>
      ))}
      <p className='primary'>{error}</p>
      <button className='button secondary' onClick={finishTest}>
        Завершить
      </button>
    </React.Fragment>
  )
}

export default Questions
