import { NextPage, NextPageContext } from 'next'
import axios from 'axios'
import TestComponent from '../../../src/components/Test/Test'
import Sidebar from '../../../src/components/Sidebar/Sidebar'
import { API } from '../../../config'
import { parseCookies } from '../../../src/utils/user'
import { ITest } from '../../../src/types/test'

interface Props {
  test: ITest
}

const Test: NextPage<Props> = ({ test }) => {
  return (
    <div className='d-flex'>
      <Sidebar type='articles' />
      <TestComponent
        questions={test.questions}
        category_slug={test.category_slug}
      />
    </div>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const cookies = parseCookies(ctx)
  const res = await axios.get(`${API}/${ctx.query.category_slug}/test`, {
    headers: {
      Authorization: `Bearer ${cookies.token}`,
    },
  })
  if (!res.data) {
    return {
      notFound: true,
    }
  }

  console.log(res.data)

  return {
    props: {
      test: res.data,
    },
  }
}

export default Test
