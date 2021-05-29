import React from 'react'
import { IQuestion } from '../../types/test'
import Layout from '../Layout/Layout'
import Questions from './Questions'

import styles from './Test.module.scss'

interface Props {
  questions: IQuestion[]
  category_slug: string
}

const Test: React.FC<Props> = ({ questions }) => {
  return (
    <Layout>
      <div className={styles.test}>
        <h1>Тестирование</h1>
        <Questions questions={questions} />
      </div>
    </Layout>
  )
}

export default Test
