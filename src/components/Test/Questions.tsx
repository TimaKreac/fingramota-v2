import React from 'react'
import { IQuestion } from '../../types/test'

import styles from './Test.module.scss'

interface Props {
  questions: IQuestion[]
}

const Questions: React.FC<Props> = ({ questions }) => {
  return (
    <React.Fragment>
      {questions.map((q, i) => (
        <div className={styles.questionItem} key={q._id}>
          <h3 className={styles.question}>
            {i + 1}. {q.question}
          </h3>
          <p className={styles.option}>
            <input
              id={`q${i}o1`}
              type='radio'
              className={styles.custom_checkbox}
              name={`q${i}`}
            />
            <label htmlFor={`q${i}o1`}>{q.option_1}</label>
          </p>
          <p className={styles.option}>
            <input
              id={`q${i}o2`}
              type='radio'
              className={styles.custom_checkbox}
              name={`q${i}`}
            />
            <label htmlFor={`q${i}o2`}>{q.option_2}</label>
          </p>
          <p className={styles.option}>
            <input
              id={`q${i}o3`}
              type='radio'
              className={styles.custom_checkbox}
              name={`q${i}`}
            />
            <label htmlFor={`q${i}o3`}>{q.option_3}</label>
          </p>
          <p className={styles.option}>
            <input
              id={`q${i}o4`}
              type='radio'
              className={styles.custom_checkbox}
              name={`q${i}`}
            />
            <label htmlFor={`q${i}o4`}>{q.option_4}</label>
          </p>
          <p className={styles.option}>
            <input
              id={`q${i}o5`}
              type='radio'
              className={styles.custom_checkbox}
              name={`q${i}`}
            />
            <label htmlFor={`q${i}o5`}>{q.option_5}</label>
          </p>
        </div>
      ))}
    </React.Fragment>
  )
}

export default Questions
