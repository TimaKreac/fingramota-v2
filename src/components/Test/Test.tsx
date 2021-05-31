import React from 'react'
import { ITest, ITestResult } from '../../types/test'
import Layout from '../Layout/Layout'
import Questions from './Questions'

import styles from './Test.module.scss'

interface Props {
  test: ITest
  testResult: ITestResult
}

const Test: React.FC<Props> = ({ test, testResult }) => {
  return (
    <Layout>
      <div className={styles.test}>
        <h1>Тестирование</h1>
        {test && test.questions && <Questions questions={test.questions} />}
        {testResult && <p>Тест пройден на {testResult.percentCorrect}%</p>}
      </div>
    </Layout>
  )
}

export default Test
