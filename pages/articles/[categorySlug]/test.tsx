import { NextPage, NextPageContext } from 'next'
import axios from 'axios'
import TestComponent from '../../../src/components/Test/Test'
import Sidebar from '../../../src/components/Sidebar/Sidebar'
import { API } from '../../../config'
import { getUser, parseCookies } from '../../../src/utils/user'
import { ITest, ITestResult } from '../../../src/types/test'

interface Props {
  test: ITest
  testResult: ITestResult
}

const Test: NextPage<Props> = ({ test, testResult }) => {
  return (
    <div className='d-flex'>
      <Sidebar type='articles' />
      <TestComponent test={test} testResult={testResult} />
    </div>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const cookies = parseCookies(ctx)
  const token = cookies.token

  const user = await getUser(token)

  const testResult = user.completedTests.find(
    (t: { categorySlug: string }) => t.categorySlug === ctx.query.categorySlug
  )

  if (testResult) {
    return {
      props: {
        test: [],
        testResult,
      },
    }
  }

  const res = await axios.get(`${API}/${ctx.query.categorySlug}/test`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!res.data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      test: res.data,
    },
  }
}

export default Test
