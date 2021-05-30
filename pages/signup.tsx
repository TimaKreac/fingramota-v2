import { NextPage, NextPageContext } from 'next'
import Header from '../src/components/Header/Header'
import SignUpComponent from '../src/components/auth/SignUp'
import { parseCookies } from '../src/utils/user'

const SignUp: NextPage = () => {
  return (
    <>
      <Header />
      <SignUpComponent />
    </>
  )
}

export const getServerSideProps = async (ctx: NextPageContext) => {
  const cookies = parseCookies(ctx)
  if (cookies.token) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    }
  }
  return { props: {} }
}

export default SignUp
